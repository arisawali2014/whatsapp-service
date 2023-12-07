import makeWASocket, {
    AnyMessageContent,
    AuthenticationState,
    ConnectionState,
    Contact,
    DisconnectReason,
    MessageUpsertType,
    MiscMessageGenerationOptions,
    delay,
    fetchLatestBaileysVersion,
    promiseTimeout,
} from '@whiskeysockets/baileys'
import { pino } from 'pino'
import QRCodeTerminal from 'qrcode-terminal'
import { QR_TERMINAL } from 'src/config/config'
import { SendContactDto, SendFileDto, SendLocationDto, SendTextDto } from '../dto/message.dto'
import { AuthState, StatusWhatsappService, WhatsappError, WhatsappMessage, WhatsappSocket } from '../interface'
import { MediaMessage } from './media'

export abstract class WhatsappBaseService {
    protected contactConnected: Contact
    protected socket: WhatsappSocket
    protected qrcode: string

    constructor(protected serviceName = 'Whatsapp Service', protected serviceVersion = '0.0.1') {}

    async initialize() {
        if (this.socket) {
            return
        }
        this.socket = await this.createNewSocket()
        console.log(`Whatsapp service "${this.serviceName}" v${this.serviceVersion} ready`)
    }

    async reInitialize() {
        this.socket.ev.removeAllListeners('connection.update')
        this.socket.ev.removeAllListeners('creds.update')
        this.socket.ev.removeAllListeners('messages.upsert')

        this.socket = await this.createNewSocket()

        console.log(`Reinitialize Whatsapp service "${this.serviceName}" v${this.serviceVersion}`)
    }

    async sendText(dto: SendTextDto) {
        return this.sendMessage(dto.sendTo, { text: dto.message })
    }

    async sendContact(dto: SendContactDto) {
        const waid = this.formatToWhatsappJid(dto.phoneNumber).replace('@s.whatsapp.net', '')

        const vcard =
            'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            `FN:${dto.name}\n` +
            `TEL;type=CELL;type=VOICE;waid=${waid}:${dto.phoneNumber}\n` +
            'END:VCARD'

        return this.sendMessage(dto.sendTo, {
            contacts: {
                displayName: dto.name,
                contacts: [{ vcard }],
            },
        })
    }

    async sendLocation(dto: SendLocationDto) {
        return this.sendMessage(dto.sendTo, {
            location: { degreesLatitude: dto.lat, degreesLongitude: dto.long },
        })
    }

    async sendFile(dto: SendFileDto) {
        return this.sendMessage(dto.sendTo, {
            document: dto.file,
            caption: dto.caption,
            fileName: dto.fileName,
            mimetype: dto.mimetype,
        })
    }

    async convertAndSendSticker(message: WhatsappMessage) {
        const media = new MediaMessage(message)

        const sticker = await media.extractStickerMedia(`${this.serviceName} X ${message.pushName}`, this.serviceName)
        if (!sticker) {
            return false
        }

        console.log(`Sending sticker to ${sticker.targetJid}`)
        return this.sendMessage(sticker.targetJid, { sticker: sticker.media }, { quoted: message })
    }

    protected abstract removeSession(): Promise<void>

    async logout() {
        this.checkIsConnected()

        await this.socket.logout()

        await this.removeSession()

        delete this.contactConnected
        await this.reInitialize()

        return true
    }

    getStatus(): StatusWhatsappService {
        return {
            isConnected: !this.qrcode && !!this.contactConnected?.id,
            contactConnected: this.contactConnected,
            qrcode: this.qrcode,
        }
    }

    protected async sendMessage(
        phoneNumber: string,
        content: AnyMessageContent,
        options?: MiscMessageGenerationOptions,
        recursive?: number
    ): Promise<boolean> {
        try {
            this.checkIsConnected()

            // create 1 minute timeout for whatsapp send message
            await promiseTimeout(1000 * 15, async (resolve, reject) => {
                try {
                    const jid = this.formatToWhatsappJid(phoneNumber)
                    await this.socket.presenceSubscribe(jid)
                    await delay(3)
                    await this.socket.sendPresenceUpdate('composing', jid)
                    await delay(3)
                    await this.socket.sendPresenceUpdate('paused', jid)
                    await delay(3)
                    await this.socket.sendMessage(jid, content, options)
                    resolve(true)
                } catch (error) {
                    reject(error)
                }
            })

            return true
        } catch (error) {
            // check if can reload and the recursive not at maximum
            if (this.isShouldResend(error) && (recursive || 0) < 20) {
                await delay(500)
                return await this.sendMessage(phoneNumber, content, options, (recursive || 0) + 1)
            }

            throw error
        }
    }

    protected abstract makeAuthState(): Promise<AuthState>

    protected async createNewSocket(): Promise<WhatsappSocket> {
        const { state, saveCreds } = await this.makeAuthState()
        const { version } = await fetchLatestBaileysVersion()

        const socket = makeWASocket({
            version: version,
            auth: state,
            logger: pino({ enabled: false }) as any,
            defaultQueryTimeoutMs: undefined,
            qrTimeout: 1000 * 60 * 60 * 24,
            browser: [this.serviceName, 'Desktop', this.serviceVersion],
            markOnlineOnConnect: false,
        })

        socket.ev.on('connection.update', update => this.onConnectionUpdate(socket, state, update))
        socket.ev.on('creds.update', saveCreds)

        return socket
    }

    protected formatToIndonesian(number: string) {
        if (typeof number == 'undefined' || number == '') {
            return ''
        }

        number = number.split(':')[0]
        number = number.replace(/\D/g, '')
        if (number.startsWith('+')) {
            number = number.substring(1)
        }
        if (number.startsWith('62')) {
            number = '0' + number.substring(2)
        }
        return number
    }

    protected formatToWhatsappJid(number: string) {
        if (typeof number == 'undefined' || number == '') {
            return ''
        }

        number = number.replace(/\D/g, '')
        if (number.startsWith('+')) {
            number = number.substring(1)
        }
        if (number.startsWith('08')) {
            number = '62' + number.substring(1)
        }
        if (!number.endsWith('@s.whatsapp.net')) {
            number = number + '@s.whatsapp.net'
        }
        return number
    }

    protected async onNewMessage(chats: { messages: WhatsappMessage[]; type: MessageUpsertType }) {
        try {
            return await Promise.all(chats?.messages?.map(message => this.convertAndSendSticker(message)))
        } catch (error) {
            console.error(error)
        }
    }

    protected async onConnectionUpdate(
        socket: WhatsappSocket,
        state: AuthenticationState,
        update: Partial<ConnectionState>
    ): Promise<void> {
        const { connection, lastDisconnect } = update

        this.qrcode = update.qr
        if (update.qr && QR_TERMINAL) {
            console.log('\n')
            QRCodeTerminal.generate(update.qr, { small: true })
            console.log('Scan QRCode to connect your whatsapp\n')
        }

        if (connection === 'close') {
            const statusCode = (lastDisconnect?.error as any)?.output?.statusCode

            if (statusCode === DisconnectReason.loggedOut) {
                await this.removeSession()
                delete this.contactConnected

                console.log('Whatsapp logged out')
            }

            await this.reInitialize()
            return
        }

        if (connection === 'open') {
            const user = { ...state.creds.me }
            user.id = this.formatToIndonesian(user?.id)

            this.contactConnected = user
            await socket.sendPresenceUpdate('unavailable')
            delete this.qrcode

            socket.ev.removeAllListeners('messages.upsert')
            socket.ev.on('messages.upsert', chats => this.onNewMessage(chats))

            console.log(`Whatsapp connected to ${user.id}`)
            return
        }
    }

    protected checkIsConnected() {
        const status = this.getStatus()

        if (!status.isConnected) throw new WhatsappError('Whatsapp not connected yet')
    }

    protected isShouldResend(error: any): boolean {
        if (error === 1006) return true

        const payload = error?.output?.payload

        if (!payload) return false

        return (
            payload.statusCode === 428 &&
            payload.error === 'Precondition Required' &&
            payload.message === 'Connection Closed'
        )
    }
}