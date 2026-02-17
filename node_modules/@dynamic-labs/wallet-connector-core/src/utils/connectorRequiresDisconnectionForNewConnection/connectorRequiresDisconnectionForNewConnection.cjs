'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

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
        const { walletBook: walletBook$1 } = connector;
        if (!walletBook$1 || !walletBook$1.wallets) {
            return false;
        }
        const walletBookRecord = walletBook.findWalletBookWallet(walletBook$1, connector.key);
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

exports.connectorRequiresDisconnectionForNewConnection = connectorRequiresDisconnectionForNewConnection;
