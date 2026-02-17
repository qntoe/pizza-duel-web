'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSendBalanceWalletConnector = (walletConnector) => {
    var _a;
    return 'createUiTransaction' in walletConnector &&
        typeof walletConnector.createUiTransaction === 'function' &&
        walletConnector.isAvailable &&
        !((_a = walletConnector.isSendBalanceUnsupported) === null || _a === void 0 ? void 0 : _a.call(walletConnector));
};

exports.isSendBalanceWalletConnector = isSendBalanceWalletConnector;
