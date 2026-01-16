const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// The "Mind" - Simple responses
bot.start((ctx) => ctx.reply('Hello! Riyo Ruma Bot is online and ready. How can I help you today?'));
bot.help((ctx) => ctx.reply('I can help you with Sales and Marketing info.'));
bot.on('text', (ctx) => ctx.reply('Received: ' + ctx.message.text));

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body, res);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot is running!');
    }
  } catch (err) {
    res.status(500).send('Internal Error');
  }
};
