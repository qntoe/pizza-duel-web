import { ChainEnum } from '@dynamic-labs/sdk-api-core';
/**
 * Determines the address type label for WaaS wallets based on the chain and address format.
 *
 * @param chain - The chain identifier (e.g., ChainEnum.Btc, 'BTC', 'bip122')
 * @param isWaasWallet - Whether the wallet is a WaaS wallet
 * @param address - The wallet address to check
 * @returns The address type label for the given chain or undefined
 */
export declare const getWaasAddressTypeLabel: (chain: string | ChainEnum | undefined, isWaasWallet: boolean, address?: string) => string | undefined;
