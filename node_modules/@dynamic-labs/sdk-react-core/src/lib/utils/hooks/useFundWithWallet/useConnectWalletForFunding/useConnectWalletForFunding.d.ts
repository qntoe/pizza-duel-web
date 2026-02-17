import { Wallet } from '@dynamic-labs/wallet-connector-core';
type ConnectWalletForFundingProps = {
    initiatedByWidget: boolean;
};
export declare const useConnectWalletForFunding: () => ({ initiatedByWidget, }: ConnectWalletForFundingProps) => Promise<Wallet>;
export {};
