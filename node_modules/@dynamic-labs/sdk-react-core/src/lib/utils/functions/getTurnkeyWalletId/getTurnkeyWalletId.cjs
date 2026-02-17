'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * returns the id of the turnkey wallet
 * if the wallet is a turnkey wallet, it returns the id of the wallet
 * if the wallet is a zerodev wallet, it returns corresponding turnkey wallet id
 */
const getTurnkeyWalletId = (turnkeyWalletId, verifiedCredentials) => {
    var _a;
    const turnkeyWallet = verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ id }) => id === turnkeyWalletId);
    if (!turnkeyWallet) {
        throw new Error('Dynamic v2 wallet not found');
    }
    let walletId = undefined;
    if ((_a = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey')) {
        walletId = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.id;
    }
    else if (turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.signerRefId) {
        walletId = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.signerRefId;
    }
    if (!walletId) {
        throw new Error("Invalid wallet type: expecting 'turnkey' wallet, or a wallet with a 'signerRefId'");
    }
    return walletId;
};

exports.getTurnkeyWalletId = getTurnkeyWalletId;
