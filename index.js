const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 1. /start - The Professional Welcome
bot.start((ctx) => {
    ctx.reply('💎 *Welcome to Riyo Ruma AI Bot!* 💎\n\nYour premium destination for high-quality **Italian Silver (925) Jewelry**.\n\nUse the buttons below to browse our collection or contact our team directly.', 
    {
        parse_mode: 'Markdown',
        ...Markup.keyboard([
            ['🛍️ View Catalog', '📱 Social Media'],
            ['📞 WhatsApp Sales', 'ℹ️ About Our Silver']
        ]).resize()
    });
});

// 2. Catalog Command
bot.hears('🛍️ View Catalog', (ctx) => {
    ctx.reply('✨ *Our 925 Italian Silver Collection* ✨\n\n- ⛓️ Italian Silver Chains\n- 💍 Gemstone Rings\n- 📿 Custom Bracelets\n\n*Reply with an item name to get more details and photos!*', { parse_mode: 'Markdown' });
});

// 3. Social Media Command (TikTok Included!)
bot.hears('📱 Social Media', (ctx) => {
    ctx.reply('📱 *Follow us for Jewelry Showcases:*\n\n🎵 **TikTok:** [Click to View TikTok](https://www.tiktok.com/@riyorumaonlineservices)\n📸 **Instagram:** Coming Soon', { parse_mode: 'Markdown', disable_web_page_preview: false });
});

// 4. Direct WhatsApp Sales
bot.hears('📞 WhatsApp Sales', (ctx) => {
    ctx.reply('✅ *Direct Sales Support*\n\nClick the link below to chat with us on WhatsApp Business for orders and inquiries:\n\n👉 [Chat on WhatsApp](https://wa.me/971505737268)', { parse_mode: 'Markdown' });
});

// 5. About Silver
bot.hears('ℹ️ About Our Silver', (ctx) => {
    ctx.reply('🇮🇹 *Quality Guarantee*\n\nAll our jewelry is authentic **925 Sterling Silver** imported from Italy. Each piece is hallmarked for authenticity and quality.', { parse_mode: 'Markdown' });
});

// Vercel Connection
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body, res);
            res.status(200).send('OK');
        } else {
            res.status(200).send('Bot is online and running!');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
};
