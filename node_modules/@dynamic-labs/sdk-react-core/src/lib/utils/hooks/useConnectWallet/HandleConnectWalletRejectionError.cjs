'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

class HandleConnectWalletRejectionError extends utils.DynamicError {
    constructor(walletConnector) {
        super(`Connection was not established because handleConnectedWallet returned false for wallet connector ${walletConnector.key}`);
        this.walletConnector = walletConnector;
    }
}

exports.HandleConnectWalletRejectionError = HandleConnectWalletRejectionError;
