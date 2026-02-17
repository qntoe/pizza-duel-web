'use client'
import { findWalletBookWallet } from '@dynamic-labs/wallet-book';

const chainStringToChains = {
    'eip155:1': ['ETH', 'EVM'],
    'flow:mainnet': ['FLOW'],
    'ton:mainnet': ['TON'],
};
const getSupportedChainsForWalletConnector = (walletBook, walletConnector) => {
    var _a;
    const walletBookWallet = findWalletBookWallet(walletBook, walletConnector.key);
    // If mergeWalletBookChains is false, return only connector-specific chains.
    // This is used for Solana WalletConnect connectors to ensure they are
    // correctly filtered out when Solana is disabled, even if the wallet book
    // indicates the wallet brand supports both ETH and SOL globally.
    if (!walletConnector.mergeWalletBookChains || !walletBookWallet) {
        return walletConnector.supportedChains;
    }
    /**
     * chains could contain multiple eth networks eg
     *  "eip155:1",
     *  "eip155:10",
     *  "eip155:56",
     *  "eip155:100",
     *
     * so we will use a set to ensure uniqueness
     */
    const chainSet = new Set();
    const chainStringList = (_a = walletBookWallet.chains) !== null && _a !== void 0 ? _a : [];
    chainStringList.forEach((chainString) => {
        const chains = chainStringToChains[chainString];
        chains === null || chains === void 0 ? void 0 : chains.forEach((chain) => {
            chainSet.add(chain);
        });
    });
    walletConnector.supportedChains.forEach((chain) => {
        chainSet.add(chain);
    });
    return [...chainSet];
};

export { getSupportedChainsForWalletConnector };
