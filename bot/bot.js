import { Telegraf } from "telegraf"
const BOT_TOKEN='7143635794:AAF44LZt0XlS3fNZjCkbU_Tj0oSs2qIE0SI';
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.launch()