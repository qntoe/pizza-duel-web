'use client'
import { ChainEnum } from '@dynamic-labs/sdk-api-core';

/**
 * Type guard to check if an item is a WalletCreationRequirement object
 * ChainEnum values are strings, so we can distinguish by checking if it's an object with a 'chain' property
 */
const isWalletCreationRequirement = (item) => typeof item === 'object' && item !== null && 'chain' in item;
/**
 * Normalizes wallet creation input from either legacy ChainEnum[] format
 * or new WalletCreationRequirement[] format to WalletCreationRequirement[]
 *
 * @param input - Either an array of ChainEnum strings or WalletCreationRequirement objects
 * @param bitcoinConfig - Optional bitcoin config to attach to BTC chains when converting from legacy format
 * @returns Array of WalletCreationRequirement objects
 */
const normalizeWalletRequirements = (input, bitcoinConfig) => {
    // Handle empty array
    if (input.length === 0) {
        return [];
    }
    // Check if input is already in WalletCreationRequirement format
    // by examining the first element
    const [firstItem] = input;
    if (isWalletCreationRequirement(firstItem)) {
        return input;
    }
    // Convert from legacy ChainEnum[] format
    return input.map((chain) => {
        const requirement = { chain };
        // Only attach bitcoinConfig to BTC chains
        if (chain === ChainEnum.Btc && bitcoinConfig) {
            requirement.bitcoinConfig = bitcoinConfig;
        }
        return requirement;
    });
};

export { normalizeWalletRequirements };
