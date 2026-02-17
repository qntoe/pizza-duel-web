import { isAllowed, setAllowed, requestAccess, getPublicKey } from '@stellar/freighter-api';

export async function connectWallet() {
    try {
        if (!await isAllowed()) {
            await setAllowed();
        }
        
        const publicKey = await requestAccess();
        if (publicKey) {
            return {
                address: publicKey,
                short: publicKey.slice(0, 4) + '...' + publicKey.slice(-4),
                connected: true
            };
        }
        return null;
    } catch (e) {
        console.error("Wallet connection failed:", e);
        // Fallback for demo/dev without extension
        return {
            address: 'GBURNER_WALLET_DEMO_KEY_123456789',
            short: 'DEMO...9',
            connected: true,
            isDemo: true
        };
    }
}

export async function checkConnection() {
    try {
        if (await isAllowed()) {
            const pk = await getPublicKey();
            if (pk) {
                return {
                    address: pk,
                    short: pk.slice(0, 4) + '...' + pk.slice(-4),
                    connected: true
                };
            }
        }
    } catch (e) {
        return null;
    }
    return null;
}
