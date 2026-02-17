'use client'
import { findWalletBookWallet } from '@dynamic-labs/wallet-book';

/**
 * Checks if a wallet connector supports multi-account connection.
 *
 * This function looks up the wallet entry in the wallet book and checks
 * if the `requiresDisconnectBeforeNewConnection` flag is set to true.
 *
 * @param connector - The wallet connector to check
 * @returns true if the connector supports multi-account connection, false otherwise
 *
 * @example
 * ```typescript
 * const connector = getSomeWalletConnector();
 * if (connectorRequiresDisconnectionForNewConnection(connector)) {
 *   // Handle multi-account connection
 * }
 * ```
 */
const connectorRequiresDisconnectionForNewConnection = (connector) => {
    if (!connector || !connector.key) {
        return false;
    }
    try {
        const { walletBook } = connector;
        if (!walletBook || !walletBook.wallets) {
            return false;
        }
        const walletBookRecord = findWalletBookWallet(walletBook, connector.key);
        if (!walletBookRecord) {
            return false;
        }
        return Boolean('requiresDisconnectBeforeNewConnection' in walletBookRecord &&
            walletBookRecord.requiresDisconnectBeforeNewConnection);
    }
    catch (error) {
        // If anything goes wrong, default to false
        return false;
    }
};

export { connectorRequiresDisconnectionForNewConnection };
