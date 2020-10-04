require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    DISCORD_TOKEN: process.env.DISCORD_TOKEN || null,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID || null,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET || null,
    BOT_PREFIX: "!",
    INVITE_URL: `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&scope=bot`
}

export default config;