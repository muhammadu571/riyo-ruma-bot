const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 1. /start - The first thing customers see
bot.start((ctx) => {
    ctx.reply('💎 Welcome to Riyo Ruma AI Bot!\n\nWe specialize in high-quality Italian Silver (925) Jewelry. How can I assist you today?\n\nUse the menu or type:\n/list - View our products\n/contact - Talk to our sales team\n/about - Learn about our quality', 
    Markup.keyboard([
        ['/list', '/contact'],
        ['/about', '/help']
    ]).resize());
});

// 2. /list - Your product catalog
bot.command('list', (ctx) => {
    ctx.reply('✨ *Our 925 Italian Silver Collection* ✨\n\n- ⛓️ Italian Silver Chains\n- 💍 Gemstone Rings\n- 📿 Custom Bracelets\n\nReply with an item name to get more details and photos!', { parse_mode: 'Markdown' });
});

// 3. /contact - How customers can reach you
bot.command('contact', (ctx) => {
    ctx.reply('📞 *Contact Our Sales Team*\n\nWhatsApp: +[Your Number Here]\nInstagram: @riyo_ruma_jewelry\n\nWe are available 24/7 to help you with your order.', { parse_mode: 'Markdown' });
});

// 4. /about - Quality information
bot.command('about', (ctx) => {
    ctx.reply('🇮🇹 *About Our Quality*\n\nAll our jewelry is authentic **925 Sterling Silver** imported from Italy. Each piece is stamped for authenticity and features high-grade gemstones.', { parse_mode: 'Markdown' });
});

// 5. /help - General support
bot.help((ctx) => ctx.reply('I can show you our jewelry catalog (/list) or help you contact our team (/contact). What do you need help with?'));

// Vercel Connection
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        await bot.handleUpdate(req.body, res);
        res.status(200).send('OK');
    } else {
        res.status(200).send('Bot is online!');
    }
};
