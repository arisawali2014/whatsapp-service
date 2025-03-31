# Whatsapp Service

Unlock the power of seamless communication with our WhatsApp service! 🚀 Send messages effortlessly using our
user-friendly REST API. Plus, meet our Sticker Converter Bot, adding a touch of fun to your chats! 🌟 Connect, converse,
and convert with ease – all in one place!

This service use <a href="https://github.com/WhiskeySockets/Baileys" target="_blank">Baileys</a> as core package

## Core Features

1. REST APIs send messages, including text, images, locations, etc
2. Sticker Bot

    > Bot for converting images to stickers.

3. View once downloader Bot

    > Bot for downloading view once messages.

4. View once forwarder Bot

    > Bot for forwarding view once messages to connected users.

5. Deleted message forwarder Bot
    > Bot for forwarding all deleted messages to connected users.

### Bot Triggers

1. Sticker Bot
    - Every WhatsApp image message appears with the caption `#sticker` or `#convert_sticker`. The bot then immediately
      converts and sends it to the sender.
    - Every WhatsApp image message replied with the caption `#sticker` or `#convert_sticker`. The bot then immediately
      converts and sends it to the sender.
2. View once downloader Bot
    - Every WhatsApp view once message appears with the caption `#download_view_once`. The bot then immediately converts
      and sends it to the
    - Every WhatsApp view once message replied with the caption `#download_view_once`. The bot then immediately converts
      and sends it to the sender.
3. View once forwarder Bot
    - Every view once message that appears is immediately converted and sent to the authenticated user.
    - NB. This is not the default bot, you should update the code to run it.
4. Deleted message forwarder
    - Every deleted messages will be automatically forwarded to the authenticated user along with the original content.
    - NB. This feature is exclusively supported with the database authentication method.

## Auth Method

1. File method
2. Database method (postgresql)

## How to use

1. Clone the repository.
2. Install dependencies.
3. Copy `example.env` to `.env` and replace the values with the required configurations.
4. Run the application.
5. Link WhatsApp to the application via the QR code displayed in the terminal (set the environment variable QR_TERMINAL
   to true).
6. The application is connected.
7. The application is ready, and the bot is listening for new messages.
Fri Feb 14 00:22:12 UTC 2025 <3 from Aetheriszk
Mon Feb 17 00:23:56 UTC 2025 <3 from Aetheriszk
Tue Feb 18 00:22:13 UTC 2025 <3 from Aetheriszk
Wed Feb 19 00:22:32 UTC 2025 <3 from Aetheriszk
Thu Feb 20 00:22:24 UTC 2025 <3 from Aetheriszk
Fri Feb 21 00:22:39 UTC 2025 <3 from Aetheriszk
Mon Feb 24 00:23:44 UTC 2025 <3 from Aetheriszk
Tue Feb 25 00:23:03 UTC 2025 <3 from Aetheriszk
Wed Feb 26 00:22:53 UTC 2025 <3 from Aetheriszk
Thu Feb 27 00:23:00 UTC 2025 <3 from Aetheriszk
Fri Feb 28 00:22:54 UTC 2025 <3 from Aetheriszk
Mon Mar  3 00:24:10 UTC 2025 <3 from Aetheriszk
Tue Mar  4 00:23:05 UTC 2025 <3 from Aetheriszk
Wed Mar  5 00:23:10 UTC 2025 <3 from Aetheriszk
Thu Mar  6 00:23:22 UTC 2025 <3 from Aetheriszk
Fri Mar  7 00:23:13 UTC 2025 <3 from Aetheriszk
Mon Mar 10 00:20:09 UTC 2025 <3 from Aetheriszk
Tue Mar 11 00:23:19 UTC 2025 <3 from Aetheriszk
Wed Mar 12 00:23:05 UTC 2025 <3 from Aetheriszk
Thu Mar 13 00:23:38 UTC 2025 <3 from Aetheriszk
Fri Mar 14 00:22:54 UTC 2025 <3 from Aetheriszk
Mon Mar 17 00:24:43 UTC 2025 <3 from Aetheriszk
Tue Mar 18 00:23:30 UTC 2025 <3 from Aetheriszk
Wed Mar 19 00:23:39 UTC 2025 <3 from Aetheriszk
Thu Mar 20 00:23:13 UTC 2025 <3 from Aetheriszk
Fri Mar 21 00:23:42 UTC 2025 <3 from Aetheriszk
Mon Mar 24 00:24:55 UTC 2025 <3 from Aetheriszk
Tue Mar 25 00:24:14 UTC 2025 <3 from Aetheriszk
Wed Mar 26 00:23:50 UTC 2025 <3 from Aetheriszk
Thu Mar 27 00:23:46 UTC 2025 <3 from Aetheriszk
Fri Mar 28 00:23:45 UTC 2025 <3 from Aetheriszk
Mon Mar 31 00:25:42 UTC 2025 <3 from Aetheriszk
