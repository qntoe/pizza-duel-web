'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@dynamic-labs-sdk/client/core');
var client = require('@dynamic-labs-sdk/client');

const setUnverifiedWalletAccounts = (value) => {
    const unverifiedWalletAccounts = value.map((wallet) => {
        const chain = wallet.walletChain;
        return {
            address: wallet.id.split('-')[1] || '',
            chain,
            id: wallet.id,
            lastSelectedAt: null,
            walletProviderKey: core.formatWalletProviderKey({
                chain,
                displayName: wallet.walletConnectorKey,
                walletProviderType: wallet.provider,
            }),
        };
    });
    const core$1 = core.getCore(client.getDefaultClient());
    core$1.state.set({
        unverifiedWalletAccounts,
    });
};

exports.setUnverifiedWalletAccounts = setUnverifiedWalletAccounts;
