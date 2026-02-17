import { ChainEnum } from '@dynamic-labs/sdk-api-core';
type UseMultichainTokenBalancesProps = {
    requests: {
        chain: ChainEnum;
        address: string;
        networkIds: number[];
        whitelistedContracts?: string[];
    }[];
    forceRefresh?: boolean;
    filterSpamTokens?: boolean;
};
export declare const useMultichainTokenBalances: (props: UseMultichainTokenBalancesProps) => {
    error: string | undefined;
    fetchMultichainBalances: (shouldForceRefresh?: boolean) => Promise<void>;
    isError: boolean;
    isLoading: boolean;
    multichainTokenBalances: import("@dynamic-labs/sdk-api-core").MultichainAccountBalanceResponseChainBalances[] | undefined;
};
export {};
