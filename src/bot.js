require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')

const bot = new Client({ intents: [GatewayIntentBits.Guilds] })

bot.login(process.env.DISCORD_BOT_TOKEN)