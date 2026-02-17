'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var utils$1 = require('@dynamic-labs/utils');
var api = require('../api.cjs');
var utils = require('../utils.cjs');

/**
 * Retrieve the list of exchange accounts linked to a user for a given exchange provider.
 *
 * @param environmentId – Dynamic environment ID
 * @param exchangeKey – The key identifying the exchange provider (e.g., 'coinbase')
 * @returns An array of `Account` objects representing the user's linked exchange accounts
 */
const getUserExchangeAccounts = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ environmentId, exchangeKey, networkId, chainName, }) {
    try {
        const accounts = yield api.sdkApi().getUserAccounts({
            chainName,
            environmentId,
            exchangeKey,
            networkId,
        });
        return accounts;
    }
    catch (e) {
        const data = yield utils.logResponseError(e, 'Error retrieving accounts');
        throw new utils$1.DynamicError(data.error);
    }
});
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
const createExchangeAccountTransfer = (_b) => _tslib.__awaiter(void 0, [_b], void 0, function* ({ environmentId, exchangeKey, accountId, transfer, }) {
    try {
        const response = yield api.sdkApi().postExchangeAccountTransfer({
            accountId,
            createExchangeTransferRequest: transfer,
            environmentId,
            exchangeKey,
        });
        return response;
    }
    catch (e) {
        const data = yield utils.logResponseError(e, 'Error creating exchange-account transfer');
        throw new utils$1.DynamicError(data.error, data.code);
    }
});
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
const getExchangeAccountTransactions = (_c) => _tslib.__awaiter(void 0, [_c], void 0, function* ({ environmentId, exchangeKey, accountId, }) {
    try {
        const transactions = yield api.sdkApi().getExchangeTransactions({
            accountId,
            environmentId,
            exchangeKey,
        });
        return transactions;
    }
    catch (e) {
        const data = yield utils.logResponseError(e, 'Error retrieving transactions');
        throw new utils$1.DynamicError(data.error);
    }
});
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
const getExchangeTransferDestinations = (_d) => _tslib.__awaiter(void 0, [_d], void 0, function* ({ environmentId, exchangeKey, }) {
    try {
        const transferDestinations = yield api.sdkApi().getExchangeTransferDestinations({
            environmentId,
            exchangeKey,
        });
        return transferDestinations;
    }
    catch (e) {
        const data = yield utils.logResponseError(e, 'Error retrieving transfer destinations');
        throw new utils$1.DynamicError(data.error);
    }
});

exports.createExchangeAccountTransfer = createExchangeAccountTransfer;
exports.getExchangeAccountTransactions = getExchangeAccountTransactions;
exports.getExchangeTransferDestinations = getExchangeTransferDestinations;
exports.getUserExchangeAccounts = getUserExchangeAccounts;
