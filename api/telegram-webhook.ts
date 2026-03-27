import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp } from 'firebase/app';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    updateDoc, 
    setDoc, 
    query, 
    collection, 
    where, 
    limit, 
    getDocs 
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAx3_N8gZYSmBhzEPUIfnIgwZMzPLQGK0",
    authDomain: "interview-coder-f895b.firebaseapp.com",
    projectId: "interview-coder-f895b",
    storageBucket: "interview-coder-f895b.firebasestorage.app",
    messagingSenderId: "119848230297",
    appId: "1:119848230297:web:cc4672eee21179317b8708"
};

// Initialize Firebase Client
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8764951043:AAH2e6mXv0XqhlIcw6D2Lc--0THeBKL35Gs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'active', mode: 'client-sdk', time: new Date().toISOString() });
    }

    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const update = req.body;
    if (update.callback_query) {
        const callbackQuery = update.callback_query;
        const data = callbackQuery.data;
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;
        const originalText = callbackQuery.message.text || '';

        const [action, docId] = data.split('_');

        try {
            if (action === 'approve') {
                const requestRef = doc(db, 'payment_requests', docId);
                const requestSnap = await getDoc(requestRef);

                if (!requestSnap.exists()) {
                    await answerCallback(callbackQuery.id, 'Error: Request not found.');
                    return res.status(200).send('OK');
                }

                const requestData = requestSnap.data()!;
                if (requestData.status !== 'pending') {
                    await answerCallback(callbackQuery.id, 'Already processed.');
                    return res.status(200).send('OK');
                }

                // Determine Key Type
                let requiredType = 'monthly';
                if (requestData.planKey === 'lifetime') requiredType = 'eternal';
                if (requestData.planKey === 'sixMonths') requiredType = 'custom';

                // Find or Generate Key
                const keysRef = collection(db, 'license_keys');
                const q = query(keysRef, where('isUsed', '==', false), where('keyType', '==', requiredType), limit(1));
                const keySnap = await getDocs(q);

                let keyString = '';
                if (keySnap.empty) {
                    keyString = Math.random().toString(36).substring(2, 12).toUpperCase();
                    await setDoc(doc(db, 'license_keys', keyString), {
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
                    const keyDoc = keySnap.docs[0];
                    keyString = keyDoc.data().key;
                    await updateDoc(keyDoc.ref, {
                        isUsed: true,
                        usedByUid: requestData.userId || null,
                        usedByEmail: requestData.userEmail || 'unknown',
                        activatedAt: new Date().toISOString()
                    });
                }

                // Update Request & User
                await updateDoc(requestRef, { 
                    status: 'approved', 
                    approvedAt: new Date().toISOString(), 
                    assignedKey: keyString 
                });
                
                if (requestData.userId) {
                    await updateDoc(doc(db, 'users', requestData.userId), { 
                        status: 'approved', 
                        licenseKey: keyString 
                    });
                }

                await editMessage(chatId, messageId, originalText + `\n\n✅ <b>STATUS: APPROVED</b>\n🔑 <b>KEY:</b> <code>${keyString}</code>`);
                await answerCallback(callbackQuery.id, 'Authorized!');

            } else if (action === 'reject') {
                const requestRef = doc(db, 'payment_requests', docId);
                await updateDoc(requestRef, { status: 'rejected', rejectedAt: new Date().toISOString() });
                await editMessage(chatId, messageId, originalText + `\n\n❌ <b>STATUS: REJECTED</b>`);
                await answerCallback(callbackQuery.id, 'Rejected.');
            }
        } catch (error: any) {
            console.error('Webhook Error:', error);
            // Send the error message back to the user in a Telegram Toast
            const errorMessage = error.message || 'Unknown Error';
            await answerCallback(callbackQuery.id, '❌ ERROR: ' + errorMessage);
            
            // Optionally update the message to show the error
            await editMessage(chatId, messageId, originalText + `\n\n⚠️ <b>DATABASE ERROR:</b>\n<code>${errorMessage}</code>`);
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
    } catch (e) { console.error('Callback Error:', e); }
}

async function editMessage(chatId: string | number, messageId: number, text: string) {
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, message_id: messageId, text, parse_mode: 'HTML' })
        });
    } catch (e) { console.error('Edit Error:', e); }
}
