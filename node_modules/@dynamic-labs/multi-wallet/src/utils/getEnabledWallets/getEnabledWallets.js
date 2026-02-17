'use client'
import { getSupportedWallets } from '../getSupportedWallets/getSupportedWallets.js';
import { getSupportedChainsForWalletConnector } from '../getSupportedChainsForWalletConnector/getSupportedChainsForWalletConnector.js';

// this function will return a list of connectors that are enabled based on the chains that are enabled
const getEnabledWallets = (props) => {
    const supportedWallets = getSupportedWallets(props.getSupportedWalletOpts);
    const allEnabledWallets = supportedWallets.filter((wallet) => {
        const supportedChains = getSupportedChainsForWalletConnector(props.getSupportedWalletOpts.walletBook, wallet);
        const isEnabled = props.enabledChains.some((chain) => supportedChains.includes(chain)) ||
            wallet.key === 'magiclink'; // magic is evm, but disabling evm shouldn't disable magic if we enable sign in with magic email
        return isEnabled;
    });
    return allEnabledWallets;
};

export { getEnabledWallets };
