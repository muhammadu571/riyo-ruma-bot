const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 1. The Welcome Command
bot.start((ctx) => {
    ctx.reply('💎 Welcome to Riyo Ruma AI! \n\nI am your assistant for Italian Silver (925) Jewelry. \n\nType /list to see our products.');
});

// 2. The "Demands" List (Product List)
bot.command('list', (ctx) => {
    ctx.reply('✨ *Our Current 925 Silver Collection:* \n\n1. Italian Silver Chains\n2. Gemstone Rings\n3. Custom Bracelets\n\nReply with the item name for prices!', { parse_mode: 'Markdown' });
});

// 3. Simple Echo (To test if it hears you)
bot.on('text', (ctx) => {
    ctx.reply(`I heard you say: ${ctx.message.text}. How can I help with your jewelry inquiry?`);
});

// Vercel Bridge
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        await bot.handleUpdate(req.body, res);
        res.status(200).send('OK');
    } else {
        res.status(200).send('Bot is Alive!');
    }
};
