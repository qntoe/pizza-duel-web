import { WalletWithFeatures, SuiWalletFeatures, IdentifierRecord, IdentifierArray, WalletAccount } from '@mysten/wallet-standard';
import { ExecuteTransactionRequestType, SuiTransactionBlockResponseOptions } from '@mysten/sui/client';
import { IChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { NetworkConfiguration } from '@dynamic-labs/sdk-api-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { WalletMetadata } from '@dynamic-labs/wallet-connector-core';
export type SuiWalletConnectorProps = {
    chainRpcProviders: IChainRpcProviders;
    suiNetworks: NetworkConfiguration[];
    walletBook: WalletBookSchema;
    metadata?: WalletMetadata;
    wallet: WalletWithFeatures<SuiWalletFeatures>;
    overrideKey?: string;
};
export type SuiChangeEvent = {
    accounts: WalletAccount[];
    chains: IdentifierArray;
    features: IdentifierRecord<unknown>;
};
export type SuiWalletStandardEventHandler = (event: SuiChangeEvent) => Promise<void>;
export type SuiSendBalanceProps = {
    amount: string;
    toAddress: string;
    token?: {
        address: string;
        decimals?: number;
    };
};
export type SuiSignAndExecuteTransactionBlockOptions = {
    options?: SuiTransactionBlockResponseOptions;
    requestType?: ExecuteTransactionRequestType;
};
