'use client'
import { DynamicError } from '@dynamic-labs/utils';

class HandleConnectWalletRejectionError extends DynamicError {
    constructor(walletConnector) {
        super(`Connection was not established because handleConnectedWallet returned false for wallet connector ${walletConnector.key}`);
        this.walletConnector = walletConnector;
    }
}

export { HandleConnectWalletRejectionError };
