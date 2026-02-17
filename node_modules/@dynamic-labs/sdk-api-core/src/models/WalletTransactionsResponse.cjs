'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WalletTransaction = require('./WalletTransaction.cjs');

/* tslint:disable */
function WalletTransactionsResponseFromJSON(json) {
    return WalletTransactionsResponseFromJSONTyped(json);
}
function WalletTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(WalletTransaction.WalletTransactionFromJSON)),
        'nextOffset': !runtime.exists(json, 'nextOffset') ? undefined : json['nextOffset'],
    };
}
function WalletTransactionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(WalletTransaction.WalletTransactionToJSON)),
        'nextOffset': value.nextOffset,
    };
}

exports.WalletTransactionsResponseFromJSON = WalletTransactionsResponseFromJSON;
exports.WalletTransactionsResponseFromJSONTyped = WalletTransactionsResponseFromJSONTyped;
exports.WalletTransactionsResponseToJSON = WalletTransactionsResponseToJSON;
