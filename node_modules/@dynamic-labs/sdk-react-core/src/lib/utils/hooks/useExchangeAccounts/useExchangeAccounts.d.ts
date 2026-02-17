import { Account, ChainEnum, CreateExchangeTransferRequest, ExchangeKeyEnum, ExchangeTransaction, ExchangeTransferResponse, TransferDestinationResponse } from '@dynamic-labs/sdk-api-core';
type Props = {
    exchange: ExchangeKeyEnum;
};
type GetAccountsProps = {
    exchange: ExchangeKeyEnum;
    networkId?: number;
    chainName?: ChainEnum;
    includeChainName?: boolean;
};
type TransferProps = {
    exchange: ExchangeKeyEnum;
    transferRequest: CreateExchangeTransferRequest;
};
export declare const useExchangeAccounts: () => {
    exchangeTransfer: ({ exchange, transferRequest, }: TransferProps) => Promise<ExchangeTransferResponse>;
    getExchangeTransactions: ({ exchange, accountId, }: Props & {
        accountId?: string;
    }) => Promise<ExchangeTransaction[]>;
    getExchangeUserAccounts: ({ exchange, networkId, chainName, includeChainName, }: GetAccountsProps) => Promise<Account[]>;
    getExchangeWhitelistedDestinations: ({ exchange }: Props) => Promise<TransferDestinationResponse>;
};
export {};
