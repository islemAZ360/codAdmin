import fetch from 'node-fetch';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
    console.error('Error: TELEGRAM_BOT_TOKEN environment variable is not set.');
    console.error('Usage: TELEGRAM_BOT_TOKEN=your_token node set-webhook.js https://your-admin.vercel.app');
    process.exit(1);
}
const WEBHOOK_URL = process.argv[2];

if (!WEBHOOK_URL) {
    console.error('Please provide your Vercel URL. Usage: node set-webhook.js https://your-admin.vercel.app');
    process.exit(1);
}

const fullUrl = `${WEBHOOK_URL.replace(/\/$/, '')}/api/telegram-webhook`;

async function setWebhook() {
    console.log(`Setting webhook to: ${fullUrl}...`);
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${fullUrl}`);
        const data = await response.json();
        console.log('Telegram Response:', data);
        if (data.ok) {
            console.log('✅ Webhook set successfully!');
        } else {
            console.error('❌ Failed to set webhook:', data.description);
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

setWebhook();
