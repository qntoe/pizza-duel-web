import { Wallet } from '../../../../../../shared/types/wallets';
import { FundingTokenData } from '../../types';
type UseTokensForFundingProps = {
    wallet?: Wallet;
    networkId?: string | number;
};
export declare const useTokensForFunding: ({ wallet, networkId, }: UseTokensForFundingProps) => {
    isLoading: boolean;
    tokens: FundingTokenData[];
};
export {};
