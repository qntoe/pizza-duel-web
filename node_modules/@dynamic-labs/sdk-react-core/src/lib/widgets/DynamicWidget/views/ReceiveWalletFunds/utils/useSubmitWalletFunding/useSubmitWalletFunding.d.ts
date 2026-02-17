import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { FundingTokenData } from '../../types';
export type SubmitWalletFundingProps = {
    tokenAmount: string | undefined;
    wallet: Wallet;
    tokenSymbol: string;
    tokenBalances: FundingTokenData[];
    toWallet?: {
        address: string;
        network: string | number;
    };
};
export declare const useSubmitWalletFunding: () => ({ tokenAmount, wallet, tokenSymbol, tokenBalances, toWallet, }: SubmitWalletFundingProps) => Promise<void>;
