import { ChainEnum } from '@dynamic-labs/sdk-api-core';
import { WalletCreationRequirement } from './useDynamicWaas';
/**
 * Normalizes wallet creation input from either legacy ChainEnum[] format
 * or new WalletCreationRequirement[] format to WalletCreationRequirement[]
 *
 * @param input - Either an array of ChainEnum strings or WalletCreationRequirement objects
 * @param bitcoinConfig - Optional bitcoin config to attach to BTC chains when converting from legacy format
 * @returns Array of WalletCreationRequirement objects
 */
export declare const normalizeWalletRequirements: (input: WalletCreationRequirement[] | ChainEnum[], bitcoinConfig?: {
    addressType?: string;
    network?: string;
}) => WalletCreationRequirement[];
