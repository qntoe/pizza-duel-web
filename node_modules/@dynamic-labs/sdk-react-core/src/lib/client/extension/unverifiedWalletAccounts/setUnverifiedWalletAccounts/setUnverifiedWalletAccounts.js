'use client'
import { formatWalletProviderKey, getCore } from '@dynamic-labs-sdk/client/core';
import { getDefaultClient } from '@dynamic-labs-sdk/client';

const setUnverifiedWalletAccounts = (value) => {
    const unverifiedWalletAccounts = value.map((wallet) => {
        const chain = wallet.walletChain;
        return {
            address: wallet.id.split('-')[1] || '',
            chain,
            id: wallet.id,
            lastSelectedAt: null,
            walletProviderKey: formatWalletProviderKey({
                chain,
                displayName: wallet.walletConnectorKey,
                walletProviderType: wallet.provider,
            }),
        };
    });
    const core = getCore(getDefaultClient());
    core.state.set({
        unverifiedWalletAccounts,
    });
};

export { setUnverifiedWalletAccounts };
