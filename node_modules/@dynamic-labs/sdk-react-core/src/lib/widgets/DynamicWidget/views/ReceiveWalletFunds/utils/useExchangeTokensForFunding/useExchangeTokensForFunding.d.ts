import { Account } from '@dynamic-labs/sdk-api-core';
import { FundingTokenData } from '../../types';
type UseExchangeTokensForFundingProps = {
    accounts: Account[];
};
export declare const useExchangeTokensForFunding: ({ accounts, }: UseExchangeTokensForFundingProps) => {
    tokens: FundingTokenData[];
};
export {};
