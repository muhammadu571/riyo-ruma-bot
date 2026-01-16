const { Telegraf } = require('telegraf');

// This tells the bot to use the 'BOT_TOKEN' you saved in the Vercel settings
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome! Riyo Ruma AI Bot is now active. ❤️'));
bot.on('text', (ctx) => ctx.reply('You said: ' + ctx.message.text));

// This part is the "bridge" that lets Vercel talk to Telegram
module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body, res);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot is running and waiting for messages!');
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Something went wrong');
  }
};
