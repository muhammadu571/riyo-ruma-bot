const { Telegraf } = require('telegraf');
const bot = new Telegraf('PASTE_YOUR_TOKEN_HERE');

bot.start((ctx) => ctx.reply('Welcome! Riyo Ruma AI Bot is now active.'));
bot.on('text', (ctx) => ctx.reply('You said: ' + ctx.message.text));

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body, res);
    res.status(200).send('OK');
  } else {
    res.status(200).send('Bot is running!');
  }
};
