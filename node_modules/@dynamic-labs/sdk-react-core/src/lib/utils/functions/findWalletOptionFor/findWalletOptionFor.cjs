'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var values = require('../../constants/values.cjs');
var compareChains = require('../compareChains/compareChains.cjs');

const findWalletOptionFor = (account, walletOptions) => {
    const { walletName, chain } = account;
    if (walletName === 'turnkeyhd' || walletName === 'dynamicwaas') {
        const chain = account.chain
            ? values.VerifiedCredentialNameToChainEnum[account.chain]
            : undefined;
        return walletOptions.find((wallet) => walletName === wallet.key &&
            wallet.walletConnector.connectedChain === chain);
    }
    // Wallets with name "unknown" are legacy wallets that were created when wallet name was still
    // set to "unknown" if not found in wallet book. We need to use fallback connector for these wallets.
    // The "unknown" wallet connector is also legacy and should never be used.
    if (walletName !== 'unknown') {
        // The verified credential chain follows a different format than the wallet connector chain
        // so we need first convert
        const walletChain = chain
            ? values.VerifiedCredentialNameToChainEnum[chain]
            : undefined;
        const wallet = walletOptions.find((wallet) => wallet.key === walletName &&
            (!walletChain || wallet.walletConnector.connectedChain === walletChain));
        if (wallet)
            return wallet;
    }
    // If we cannot find the correct connector for the wallet, we default to the fallback
    // this way the wallet will appear in user wallets, but will not be able to be interacted with
    const fallbackOptions = walletOptions.filter((wallet) => wallet.key === 'fallbackconnector');
    if (chain) {
        const unknownWallet = fallbackOptions.find(({ walletConnector }) => compareChains.compareChains(walletConnector.connectedChain, chain));
        if (unknownWallet)
            return unknownWallet;
    }
    return fallbackOptions[0];
};

exports.findWalletOptionFor = findWalletOptionFor;
