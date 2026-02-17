import { Account, ChainEnum, CreateExchangeTransferRequest, ExchangeKeyEnum, ExchangeTransaction, ExchangeTransferResponse, GetExchangeTransactionsRequest, GetExchangeTransferDestinationsRequest, TransferDestinationResponse } from '@dynamic-labs/sdk-api-core';
/**
 * Retrieve the list of exchange accounts linked to a user for a given exchange provider.
 *
 * @param environmentId – Dynamic environment ID
 * @param exchangeKey – The key identifying the exchange provider (e.g., 'coinbase')
 * @returns An array of `Account` objects representing the user's linked exchange accounts
 */
export declare const getUserExchangeAccounts: ({ environmentId, exchangeKey, networkId, chainName, }: {
    environmentId: string;
    exchangeKey: ExchangeKeyEnum;
    networkId?: number;
    chainName?: ChainEnum;
}) => Promise<Account[]>;
/**
 * Transfer funds from a user-linked exchange account to an external address
 * or another Coinbase account.
 *
 * @param environmentId – Dynamic environment ID
 * @param exchangeKey   – The key identifying the exchange provider (e.g., `'coinbase'`)
 * @param accountId     – The exchange-account ID to transfer funds **from**
 * @param transfer      – JSON body matching `CreateExchangeTransferRequest`
 * @returns Details of the created transfer (`ExchangeTransferResponse`)
 *
 * @example
 * ```ts
 * await createExchangeAccountTransfer({
 *   environmentId: 'env_123',
 *   exchangeKey: ExchangeKeyEnum.COINBASE,
 *   accountId: 'acc_456',
 *   transfer: {
 *     to: '0xRecipientAddress',
 *     amount: 0.25,
 *     currency: 'ETH',
 *     network: 'ethereum',
 *     description: 'Withdrawal to cold wallet',
 *     mfaCode: '123456',
 *   },
 * });
 * ```
 */
export declare const createExchangeAccountTransfer: ({ environmentId, exchangeKey, accountId, transfer, }: {
    environmentId: string;
    exchangeKey: ExchangeKeyEnum;
    accountId: string;
    transfer: CreateExchangeTransferRequest;
}) => Promise<ExchangeTransferResponse>;
/**
 * Retrieves transactions associated with a specific exchange account.
 *
 * @param environmentId – Dynamic environment ID
 * @param exchangeKey – The key identifying the exchange provider (e.g., `'coinbase'`)
 * @param accountId – (Optional) Specific account ID to fetch transactions for
 * @returns Array of ExchangeTransaction entries
 *
 * @example
 * ```ts
 * const txs = await getExchangeAccountTransactions({
 *   environmentId: 'env_abc123',
 *   exchangeKey: ExchangeKeyEnum.Coinbase,
 *   accountId: 'acc_xyz789',
 * });
 * ```
 */
export declare const getExchangeAccountTransactions: ({ environmentId, exchangeKey, accountId, }: GetExchangeTransactionsRequest) => Promise<ExchangeTransaction[]>;
/**
 * Retrieves whitelisted addresses associated with a specific exchange account.
 *
 * @param environmentId – Dynamic environment ID
 * @param exchangeKey – The key identifying the exchange provider (e.g., `'coinbase'`)
 * @returns TransferDestinationResponse
 *
 * @example
 * ```ts
 * const txs = await getExchangeTransferDestinations({
 *   environmentId: 'env_abc123',
 *   exchangeKey: ExchangeKeyEnum.Coinbase,
 * });
 * ```
 */
export declare const getExchangeTransferDestinations: ({ environmentId, exchangeKey, }: GetExchangeTransferDestinationsRequest) => Promise<TransferDestinationResponse>;
