# Hypixel Guild Chat Bot

[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](http://gitmoji.dev/) [![Commit Activity](https://img.shields.io/github/commit-activity/w/xMdb/hypixel-guild-chat-bot)](https://github.com/xMdb/hypixel-guild-chat-bot/commits/main/)

Welcome! This is a Discord bot used to connect Minecraft chat to Discord and vice versa. Open source, with love from xMdb ❤

> This application will login to Hypixel using Mineflayer which is not a normal Minecraft client, this could result in your Minecraft account getting banned from Hypixel, so use this application at your own risk. I am not liable for any damages and no warranty is provided as outlined in GPL-3.0 License.

This application is mainly for the [Hypixel Knights Discord server](https://discord.gg/hk), but you can also easily adapt the code to work in your own server, or use it in your own project.

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup Guide](#setup-guide)
- [Acknowledgements](#acknowledgements)
- [License](#license)

<hr>

## Installation

### Prerequisites

- Git
- NodeJS 16.6 or later
- NPM latest version
- A full access premium Minecraft account

### Setup Guide

1. Fork and star this repo
2. Clone it into your own directory using 
```
git clone https://github.com/xMdb/hypixel-guild-chat-bot.git
```
3. Install the required packages using 
```
cd hypixel-guild-chat-bot
npm install
```
4. Make a new Discord bot account on the [Discord Developer Portal](https://discord.com/developers/applications)
5. Make a .env file in the directory and include the following values:
```
BOT_TOKEN=Bot token from Discord Developer Portal
MC_USER=Minecraft Account Email
MC_PASS=Minecraft Account Password
ERROR_WEBHOOK=A webhook URL for error logging
GUILD_WEBHOOK=A webhook URL for guild join/leave 
LOG_WEBHOOK=A webhook URL for logging actions by users (for moderators)
ENVIRONMENT=Set this to "dev" to disable the Minecraft bot, and set this to "prod" for full functionality.
```
6. Edit the [config.js](https://github.com/xMdb/hypixel-knights-gchat-bot/blob/main/config.js) file to fit your own needs
7. (REQUIRED) Install PM2 by using `npm install pm2 -g`
8. Start the bot by using `npm start`
> :warning: **If you do not install and use PM2, the shutdown and restart commands will not function as intended, and the Minecraft bot will shutdown every time it encounters an error without restarting.**

> :information_source: **To start *only* the Discord bot, use `npm run dev`.**

## Acknowledgements
Parts of this project are forked from:

[mew/discord-hypixel-bridge](https://github.com/mew/discord-hypixel-bridge) under GPL-3.0 License.

[Myzumi/Guild-Bot](https://github.com/Myzumi/Guild-Bot) under Apache-2.0 License.

## License

Hypixel Guild Chat Bot is open-sourced software licensed under the [GPL-3.0 License](https://github.com/xMdb/hypixel-knights-gchat-bot/blob/main/LICENSE).