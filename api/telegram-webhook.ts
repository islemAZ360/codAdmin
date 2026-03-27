import { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';

// Initialize Firebase Admin safely
let db: any = null;
try {
    if (!admin.apps.length) {
        const serviceAccount64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
        if (serviceAccount64) {
            const serviceAccount = JSON.parse(Buffer.from(serviceAccount64, 'base64').toString());
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            db = admin.firestore();
            console.log('Firebase Admin initialized successfully.');
        } else {
            console.warn('FIREBASE_SERVICE_ACCOUNT_BASE64 missing. Webhook will run in LIMITED mode.');
        }
    } else {
        db = admin.firestore();
    }
} catch (error) {
    console.error('Firebase Admin init error:', error);
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8764951043:AAH2e6mXv0XqhlIcw6D2Lc--0THeBKL35Gs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Diagnostic Endpoint
    if (req.method === 'GET') {
        const status = {
            active: true,
            firebase: !!db,
            botToken: !!BOT_TOKEN,
            time: new Date().toISOString()
        };
        return res.status(200).json(status);
    }

    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const update = req.body;
    console.log('Update Received:', JSON.stringify(update));

    if (update.callback_query) {
        const callbackQuery = update.callback_query;
        const data = callbackQuery.data;
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const originalText = callbackQuery.message.text || '';

        // Emergency Ping Check
        if (data === 'ping') {
            await answerCallback(callbackQuery.id, 'Pong! Webhook is receiving signals.');
            return res.status(200).send('OK');
        }

        const [action, docId] = data.split('_');

        try {
            if (!db) {
                await answerCallback(callbackQuery.id, 'Error: Database connection failed. Check Vercel Logs.');
                await editMessage(chatId, messageId, originalText + '\n\n⚠️ <b>SYSTEM ERROR:</b> Database not connected.');
                return res.status(200).send('OK');
            }

            if (action === 'approve') {
                const requestRef = db.collection('payment_requests').doc(docId);
                const requestDoc = await requestRef.get();

                if (!requestDoc.exists) {
                    await answerCallback(callbackQuery.id, 'Error: Request not found.');
                    return res.status(200).send('OK');
                }
                
                const requestData = requestDoc.data()!;
                if (requestData.status !== 'pending') {
                    await answerCallback(callbackQuery.id, 'Already processed.');
                    return res.status(200).send('OK');
                }

                // Logic for finding/generating key
                let requiredType = 'monthly';
                if (requestData.planKey === 'lifetime') requiredType = 'eternal';
                if (requestData.planKey === 'sixMonths') requiredType = 'custom';

                const keysRef = db.collection('license_keys');
                const availableKeys = await keysRef.where('isUsed', '==', false).where('keyType', '==', requiredType).limit(1).get();

                let keyString = '';
                if (availableKeys.empty) {
                    keyString = Math.random().toString(36).substring(2, 12).toUpperCase();
                    await keysRef.doc(keyString).set({
                        key: keyString,
                        keyType: requiredType,
                        durationDays: requiredType === 'eternal' ? null : (requestData.planKey === 'monthly' ? 30 : 180),
                        isUsed: true,
                        usedByUid: requestData.userId || null,
                        usedByEmail: requestData.userEmail || 'unknown',
                        activatedAt: new Date().toISOString(),
                        createdAt: new Date().toISOString()
                    });
                } else {
                    const keyDoc = availableKeys.docs[0];
                    keyString = keyDoc.data().key;
                    await keyDoc.ref.update({
                        isUsed: true,
                        usedByUid: requestData.userId || null,
                        usedByEmail: requestData.userEmail || 'unknown',
                        activatedAt: new Date().toISOString()
                    });
                }

                await requestRef.update({ status: 'approved', approvedAt: new Date().toISOString(), assignedKey: keyString });
                if (requestData.userId) {
                    await db.collection('users').doc(requestData.userId).update({ status: 'approved', licenseKey: keyString });
                }

                await editMessage(chatId, messageId, originalText + `\n\n✅ <b>STATUS: APPROVED</b>\n🔑 <b>KEY:</b> <code>${keyString}</code>`);
                await answerCallback(callbackQuery.id, 'Authorized!');

            } else if (action === 'reject') {
                await db.collection('payment_requests').doc(docId).update({ status: 'rejected', rejectedAt: new Date().toISOString() });
                await editMessage(chatId, messageId, originalText + `\n\n❌ <b>STATUS: REJECTED</b>`);
                await answerCallback(callbackQuery.id, 'Rejected.');
            }

        } catch (error: any) {
            console.error('Webhook Error:', error);
            await answerCallback(callbackQuery.id, 'System Error: ' + error.message);
        }
    }

    res.status(200).send('OK');
}

async function answerCallback(id: string, text: string) {
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ callback_query_id: id, text })
        });
    } catch (e) { console.error('Callback Answer Error:', e); }
}

async function editMessage(chatId: string | number, messageId: number, text: string) {
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, message_id: messageId, text, parse_mode: 'HTML' })
        });
    } catch (e) { console.error('Message Edit Error:', e); }
}
