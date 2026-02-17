import { ChainEnum, TokenBalance } from '@dynamic-labs/sdk-api-core';
export declare const getAccountTokenBalances: ({ environmentId, chainName, networkId, accountAddress, includeNative, includePrices, forceRefresh, filterSpamTokens, whitelistedContracts, }: {
    environmentId: string;
    chainName: ChainEnum;
    networkId: number;
    accountAddress: string;
    includeNative?: boolean;
    includePrices?: boolean;
    forceRefresh?: boolean;
    filterSpamTokens?: boolean;
    whitelistedContracts?: string[];
}) => Promise<TokenBalance[] | undefined>;
