import { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
    try {
        const serviceAccount = JSON.parse(
            Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64 || '', 'base64').toString()
        );
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch (error) {
        console.error('Firebase Admin init error:', error);
    }
}

const db = admin.firestore();
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const update = req.body;

    // Handle Callback Queries (Buttons)
    if (update.callback_query) {
        const callbackQuery = update.callback_query;
        const data = callbackQuery.data;
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const originalText = callbackQuery.message.text;

        const [action, docId] = data.split('_');

        try {
            if (action === 'approve') {
                // 1. Get Payment Request
                const requestRef = db.collection('payment_requests').doc(docId);
                const requestDoc = await requestRef.get();

                if (!requestDoc.exists) throw new Error('Request not found');
                const requestData = requestDoc.data()!;

                if (requestData.status !== 'pending') {
                    await answerCallback(callbackQuery.id, 'This request has already been processed.');
                    return res.status(200).send('OK');
                }

                // 2. Determine Key Type
                let requiredType = 'monthly';
                if (requestData.planKey === 'lifetime') requiredType = 'eternal';
                if (requestData.planKey === 'sixMonths') requiredType = 'custom';

                // 3. Find or Generate Key
                const keysRef = db.collection('license_keys');
                const availableKeys = await keysRef
                    .where('isUsed', '==', false)
                    .where('keyType', '==', requiredType)
                    .limit(1)
                    .get();

                let keyString = '';
                let keyId = '';

                if (availableKeys.empty) {
                    keyString = Math.random().toString(36).substring(2, 12).toUpperCase();
                    keyId = keyString;
                    await keysRef.doc(keyId).set({
                        key: keyString,
                        keyType: requiredType,
                        durationDays: requiredType === 'eternal' ? null : (requestData.planKey === 'monthly' ? 30 : 180),
                        expiresAt: null,
                        createdAt: new Date().toISOString(),
                        usedByUid: requestData.userId || null,
                        usedByEmail: requestData.userEmail,
                        transfersUsed: 0,
                        maxTransfers: 3,
                        transferHistory: [],
                        isUsed: true,
                        activatedAt: new Date().toISOString()
                    });
                } else {
                    const keyDoc = availableKeys.docs[0];
                    keyString = keyDoc.data().key;
                    keyId = keyDoc.id;
                    await keyDoc.ref.update({
                        isUsed: true,
                        usedByUid: requestData.userId,
                        usedByEmail: requestData.userEmail,
                        activatedAt: new Date().toISOString()
                    });
                }

                // 4. Update Payment Request
                await requestRef.update({
                    status: 'approved',
                    approvedAt: new Date().toISOString(),
                    assignedKey: keyString,
                    processedVia: 'Telegram'
                });

                // 5. Update User
                if (requestData.userId) {
                    await db.collection('users').doc(requestData.userId).update({
                        status: 'approved',
                        licenseKey: keyString
                    });
                }

                // 6. Update Message in Telegram
                await editMessage(chatId, messageId, originalText + `\n\n✅ <b>STATUS: APPROVED</b>\n🔑 <b>KEY:</b> <code>${keyString}</code>\n👤 <b>BY:</b> Admin (Telegram)`);
                await answerCallback(callbackQuery.id, 'Payment Authorized Successfully!');

            } else if (action === 'reject') {
                const requestRef = db.collection('payment_requests').doc(docId);
                await requestRef.update({
                    status: 'rejected',
                    rejectedAt: new Date().toISOString(),
                    processedVia: 'Telegram'
                });

                await editMessage(chatId, messageId, originalText + `\n\n❌ <b>STATUS: REJECTED</b>\n👤 <b>BY:</b> Admin (Telegram)`);
                await answerCallback(callbackQuery.id, 'Payment Rejected.');
            }

        } catch (error: any) {
            console.error('Webhook error:', error);
            await answerCallback(callbackQuery.id, 'Error: ' + error.message);
        }
    }

    res.status(200).send('OK');
}

async function answerCallback(callbackQueryId: string, text: string) {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            callback_query_id: callbackQueryId,
            text: text
        })
    });
}

async function editMessage(chatId: string, messageId: number, text: string) {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            message_id: messageId,
            text: text,
            parse_mode: 'HTML'
        })
    });
}
