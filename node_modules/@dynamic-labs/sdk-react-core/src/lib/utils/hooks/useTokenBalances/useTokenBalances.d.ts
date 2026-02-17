import { ChainEnum, TokenBalance } from '@dynamic-labs/sdk-api-core';
export declare const useTokenBalances: ({ accountAddress, networkId, chainName, tokenAddresses, includeFiat, includeNativeBalance, filterSpamTokens, forceRefresh, whitelistedContracts, }?: {
    accountAddress?: string;
    networkId?: number;
    chainName?: ChainEnum;
    tokenAddresses?: string[];
    includeFiat?: boolean;
    includeNativeBalance?: boolean;
    filterSpamTokens?: boolean;
    forceRefresh?: boolean;
    whitelistedContracts?: string[];
}) => {
    error: string | undefined;
    fetchAccountBalances: (forceRefresh?: boolean) => Promise<void>;
    isError: boolean;
    isLoading: boolean;
    tokenBalances: TokenBalance[];
};
