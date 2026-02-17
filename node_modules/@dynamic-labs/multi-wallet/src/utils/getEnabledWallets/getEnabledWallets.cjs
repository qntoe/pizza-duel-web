'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getSupportedWallets = require('../getSupportedWallets/getSupportedWallets.cjs');
var getSupportedChainsForWalletConnector = require('../getSupportedChainsForWalletConnector/getSupportedChainsForWalletConnector.cjs');

// this function will return a list of connectors that are enabled based on the chains that are enabled
const getEnabledWallets = (props) => {
    const supportedWallets = getSupportedWallets.getSupportedWallets(props.getSupportedWalletOpts);
    const allEnabledWallets = supportedWallets.filter((wallet) => {
        const supportedChains = getSupportedChainsForWalletConnector.getSupportedChainsForWalletConnector(props.getSupportedWalletOpts.walletBook, wallet);
        const isEnabled = props.enabledChains.some((chain) => supportedChains.includes(chain)) ||
            wallet.key === 'magiclink'; // magic is evm, but disabling evm shouldn't disable magic if we enable sign in with magic email
        return isEnabled;
    });
    return allEnabledWallets;
};

exports.getEnabledWallets = getEnabledWallets;
