import { Telegraf } from "telegraf"

const web_link = 'https://teletests.netlify.app/';

const BOT_TOKEN='7143635794:AAF44LZt0XlS3fNZjCkbU_Tj0oSs2qIE0SI';
const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply('Welcome to my web app', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Open Web App",
                        web_app: { url: web_link }
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.launch()