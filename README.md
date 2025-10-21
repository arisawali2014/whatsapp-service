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
Tue Apr  1 00:27:43 UTC 2025 <3 from Aetheriszk
Wed Apr  2 00:24:25 UTC 2025 <3 from Aetheriszk
Thu Apr  3 00:23:42 UTC 2025 <3 from Aetheriszk
Fri Apr  4 00:23:51 UTC 2025 <3 from Aetheriszk
Mon Apr  7 00:25:00 UTC 2025 <3 from Aetheriszk
Tue Apr  8 00:23:47 UTC 2025 <3 from Aetheriszk
Wed Apr  9 00:24:12 UTC 2025 <3 from Aetheriszk
Thu Apr 10 00:23:58 UTC 2025 <3 from Aetheriszk
Fri Apr 11 00:24:31 UTC 2025 <3 from Aetheriszk
Mon Apr 14 00:26:03 UTC 2025 <3 from Aetheriszk
Tue Apr 15 00:25:00 UTC 2025 <3 from Aetheriszk
Wed Apr 16 00:24:49 UTC 2025 <3 from Aetheriszk
Thu Apr 17 00:24:20 UTC 2025 <3 from Aetheriszk
Fri Apr 18 00:24:14 UTC 2025 <3 from Aetheriszk
Mon Apr 21 00:26:21 UTC 2025 <3 from Aetheriszk
Tue Apr 22 00:24:47 UTC 2025 <3 from Aetheriszk
Wed Apr 23 00:24:44 UTC 2025 <3 from Aetheriszk
Thu Apr 24 00:24:41 UTC 2025 <3 from Aetheriszk
Fri Apr 25 00:24:59 UTC 2025 <3 from Aetheriszk
Mon Apr 28 00:26:06 UTC 2025 <3 from Aetheriszk
Tue Apr 29 00:24:57 UTC 2025 <3 from Aetheriszk
Wed Apr 30 00:24:56 UTC 2025 <3 from Aetheriszk
Thu May  1 00:28:07 UTC 2025 <3 from Aetheriszk
Fri May  2 00:24:57 UTC 2025 <3 from Aetheriszk
Mon May  5 00:27:07 UTC 2025 <3 from Aetheriszk
Tue May  6 00:25:08 UTC 2025 <3 from Aetheriszk
Wed May  7 00:25:20 UTC 2025 <3 from Aetheriszk
Thu May  8 00:25:20 UTC 2025 <3 from Aetheriszk
Fri May  9 00:25:37 UTC 2025 <3 from Aetheriszk
Mon May 12 00:27:30 UTC 2025 <3 from Aetheriszk
Tue May 13 00:25:44 UTC 2025 <3 from Aetheriszk
Wed May 14 00:25:35 UTC 2025 <3 from Aetheriszk
Thu May 15 00:24:26 UTC 2025 <3 from Aetheriszk
Fri May 16 00:25:37 UTC 2025 <3 from Aetheriszk
Mon May 19 00:27:16 UTC 2025 <3 from Aetheriszk
Tue May 20 00:26:24 UTC 2025 <3 from Aetheriszk
Wed May 21 00:26:04 UTC 2025 <3 from Aetheriszk
Thu May 22 00:25:23 UTC 2025 <3 from Aetheriszk
Fri May 23 00:25:54 UTC 2025 <3 from Aetheriszk
Mon May 26 00:26:37 UTC 2025 <3 from Aetheriszk
Tue May 27 00:25:15 UTC 2025 <3 from Aetheriszk
Wed May 28 00:25:42 UTC 2025 <3 from Aetheriszk
Thu May 29 00:25:46 UTC 2025 <3 from Aetheriszk
Fri May 30 00:25:44 UTC 2025 <3 from Aetheriszk
Mon Jun  2 00:27:29 UTC 2025 <3 from Aetheriszk
Tue Jun  3 00:26:38 UTC 2025 <3 from Aetheriszk
Wed Jun  4 00:26:13 UTC 2025 <3 from Aetheriszk
Thu Jun  5 00:25:50 UTC 2025 <3 from Aetheriszk
Fri Jun  6 00:25:43 UTC 2025 <3 from Aetheriszk
Mon Jun  9 00:27:57 UTC 2025 <3 from Aetheriszk
Tue Jun 10 00:26:09 UTC 2025 <3 from Aetheriszk
Wed Jun 11 00:26:13 UTC 2025 <3 from Aetheriszk
Thu Jun 12 00:25:49 UTC 2025 <3 from Aetheriszk
Fri Jun 13 00:26:14 UTC 2025 <3 from Aetheriszk
Mon Jun 16 00:27:35 UTC 2025 <3 from Aetheriszk
Tue Jun 17 00:26:19 UTC 2025 <3 from Aetheriszk
Wed Jun 18 00:26:11 UTC 2025 <3 from Aetheriszk
Thu Jun 19 00:26:36 UTC 2025 <3 from Aetheriszk
Fri Jun 20 00:26:04 UTC 2025 <3 from Aetheriszk
Mon Jun 23 00:28:25 UTC 2025 <3 from Aetheriszk
Tue Jun 24 00:26:21 UTC 2025 <3 from Aetheriszk
Wed Jun 25 00:26:39 UTC 2025 <3 from Aetheriszk
Thu Jun 26 00:26:17 UTC 2025 <3 from Aetheriszk
Fri Jun 27 00:26:44 UTC 2025 <3 from Aetheriszk
Mon Jun 30 00:28:19 UTC 2025 <3 from Aetheriszk
Tue Jul  1 00:30:37 UTC 2025 <3 from Aetheriszk
Wed Jul  2 00:26:18 UTC 2025 <3 from Aetheriszk
Thu Jul  3 00:26:45 UTC 2025 <3 from Aetheriszk
Fri Jul  4 00:26:10 UTC 2025 <3 from Aetheriszk
Mon Jul  7 00:28:55 UTC 2025 <3 from Aetheriszk
Tue Jul  8 00:26:21 UTC 2025 <3 from Aetheriszk
Wed Jul  9 00:27:22 UTC 2025 <3 from Aetheriszk
Thu Jul 10 00:26:48 UTC 2025 <3 from Aetheriszk
Fri Jul 11 00:27:09 UTC 2025 <3 from Aetheriszk
Mon Jul 14 00:29:09 UTC 2025 <3 from Aetheriszk
Tue Jul 15 00:27:53 UTC 2025 <3 from Aetheriszk
Wed Jul 16 00:27:28 UTC 2025 <3 from Aetheriszk
Thu Jul 17 00:28:06 UTC 2025 <3 from Aetheriszk
Fri Jul 18 00:27:19 UTC 2025 <3 from Aetheriszk
Mon Jul 21 00:29:52 UTC 2025 <3 from Aetheriszk
Tue Jul 22 00:28:05 UTC 2025 <3 from Aetheriszk
Wed Jul 23 00:28:03 UTC 2025 <3 from Aetheriszk
Thu Jul 24 00:28:06 UTC 2025 <3 from Aetheriszk
Fri Jul 25 00:27:58 UTC 2025 <3 from Aetheriszk
Mon Jul 28 00:30:15 UTC 2025 <3 from Aetheriszk
Tue Jul 29 00:30:43 UTC 2025 <3 from Aetheriszk
Wed Jul 30 00:28:19 UTC 2025 <3 from Aetheriszk
Thu Jul 31 00:28:14 UTC 2025 <3 from Aetheriszk
Fri Aug  1 00:32:12 UTC 2025 <3 from Aetheriszk
Mon Aug  4 00:30:58 UTC 2025 <3 from Aetheriszk
Tue Aug  5 00:28:53 UTC 2025 <3 from Aetheriszk
Wed Aug  6 00:28:45 UTC 2025 <3 from Aetheriszk
Thu Aug  7 00:28:44 UTC 2025 <3 from Aetheriszk
Fri Aug  8 00:28:24 UTC 2025 <3 from Aetheriszk
Mon Aug 11 00:29:33 UTC 2025 <3 from Aetheriszk
Tue Aug 12 00:26:12 UTC 2025 <3 from Aetheriszk
Wed Aug 13 00:26:46 UTC 2025 <3 from Aetheriszk
Thu Aug 14 00:26:32 UTC 2025 <3 from Aetheriszk
Fri Aug 15 00:27:22 UTC 2025 <3 from Aetheriszk
Mon Aug 18 00:29:03 UTC 2025 <3 from Aetheriszk
Tue Aug 19 00:26:04 UTC 2025 <3 from Aetheriszk
Wed Aug 20 00:24:49 UTC 2025 <3 from Aetheriszk
Thu Aug 21 00:24:15 UTC 2025 <3 from Aetheriszk
Fri Aug 22 00:25:02 UTC 2025 <3 from Aetheriszk
Mon Aug 25 00:26:34 UTC 2025 <3 from Aetheriszk
Tue Aug 26 00:25:07 UTC 2025 <3 from Aetheriszk
Wed Aug 27 00:24:59 UTC 2025 <3 from Aetheriszk
Thu Aug 28 00:24:38 UTC 2025 <3 from Aetheriszk
Fri Aug 29 00:25:17 UTC 2025 <3 from Aetheriszk
Mon Sep  1 00:30:51 UTC 2025 <3 from Aetheriszk
Tue Sep  2 00:24:54 UTC 2025 <3 from Aetheriszk
Wed Sep  3 00:23:23 UTC 2025 <3 from Aetheriszk
Thu Sep  4 00:23:19 UTC 2025 <3 from Aetheriszk
Fri Sep  5 00:24:33 UTC 2025 <3 from Aetheriszk
Mon Sep  8 00:25:59 UTC 2025 <3 from Aetheriszk
Tue Sep  9 00:24:46 UTC 2025 <3 from Aetheriszk
Wed Sep 10 00:23:33 UTC 2025 <3 from Aetheriszk
Thu Sep 11 00:24:13 UTC 2025 <3 from Aetheriszk
Fri Sep 12 00:23:42 UTC 2025 <3 from Aetheriszk
Mon Sep 15 00:26:21 UTC 2025 <3 from Aetheriszk
Tue Sep 16 00:23:43 UTC 2025 <3 from Aetheriszk
Wed Sep 17 00:24:36 UTC 2025 <3 from Aetheriszk
Thu Sep 18 00:23:18 UTC 2025 <3 from Aetheriszk
Fri Sep 19 00:24:36 UTC 2025 <3 from Aetheriszk
Mon Sep 22 00:26:54 UTC 2025 <3 from Aetheriszk
Tue Sep 23 00:24:21 UTC 2025 <3 from Aetheriszk
Wed Sep 24 00:24:41 UTC 2025 <3 from Aetheriszk
Thu Sep 25 00:24:47 UTC 2025 <3 from Aetheriszk
Fri Sep 26 00:24:05 UTC 2025 <3 from Aetheriszk
Mon Sep 29 00:25:35 UTC 2025 <3 from Aetheriszk
Tue Sep 30 00:24:43 UTC 2025 <3 from Aetheriszk
Wed Oct  1 00:27:58 UTC 2025 <3 from Aetheriszk
Thu Oct  2 00:23:45 UTC 2025 <3 from Aetheriszk
Fri Oct  3 00:23:38 UTC 2025 <3 from Aetheriszk
Mon Oct  6 00:25:09 UTC 2025 <3 from Aetheriszk
Tue Oct  7 00:24:21 UTC 2025 <3 from Aetheriszk
Wed Oct  8 00:24:08 UTC 2025 <3 from Aetheriszk
Thu Oct  9 00:24:06 UTC 2025 <3 from Aetheriszk
Fri Oct 10 00:24:29 UTC 2025 <3 from Aetheriszk
Mon Oct 13 00:26:30 UTC 2025 <3 from Aetheriszk
Tue Oct 14 00:23:56 UTC 2025 <3 from Aetheriszk
Wed Oct 15 00:25:07 UTC 2025 <3 from Aetheriszk
Thu Oct 16 00:25:20 UTC 2025 <3 from Aetheriszk
Fri Oct 17 00:24:58 UTC 2025 <3 from Aetheriszk
Mon Oct 20 00:27:17 UTC 2025 <3 from Aetheriszk
Tue Oct 21 00:25:18 UTC 2025 <3 from Aetheriszk
