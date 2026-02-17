import { Wallet } from '@dynamic-labs/wallet-connector-core';
export type FundWithWalletParams = {
    amount: number;
    fromWallet: Wallet;
    token?: {
        address: string;
        decimals?: number;
    };
    toWallet?: {
        address: string;
        network: string | number;
    };
};
export declare const useFund: () => ({ amount, fromWallet, token, toWallet }: FundWithWalletParams) => Promise<string | undefined>;
