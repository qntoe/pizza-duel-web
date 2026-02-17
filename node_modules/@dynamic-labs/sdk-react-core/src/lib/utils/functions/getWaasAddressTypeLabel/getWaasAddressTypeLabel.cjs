'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const chainHandlers = {
    [sdkApiCore.ChainEnum.Btc]: (address) => {
        // taproot
        if (address.startsWith('bc1p') || address.startsWith('tb1p')) {
            return 'Ordinals & Runes';
        }
        // native_segwit
        if (address.startsWith('bc1q') || address.startsWith('tb1q')) {
            return 'Payment address';
        }
        return undefined;
    },
};
/**
 * Determines the address type label for WaaS wallets based on the chain and address format.
 *
 * @param chain - The chain identifier (e.g., ChainEnum.Btc, 'BTC', 'bip122')
 * @param isWaasWallet - Whether the wallet is a WaaS wallet
 * @param address - The wallet address to check
 * @returns The address type label for the given chain or undefined
 */
const getWaasAddressTypeLabel = (chain, isWaasWallet, address) => {
    if (!chain || !isWaasWallet || !address) {
        return undefined;
    }
    const normalizedChain = chain === sdkApiCore.ChainEnum.Btc || chain === 'BTC' || chain === 'bip122'
        ? sdkApiCore.ChainEnum.Btc
        : chain;
    const handler = chainHandlers[normalizedChain];
    if (!handler) {
        return undefined;
    }
    return handler(address);
};

exports.getWaasAddressTypeLabel = getWaasAddressTypeLabel;
