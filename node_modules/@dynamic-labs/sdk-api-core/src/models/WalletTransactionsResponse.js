import { exists } from '../runtime.js';
import { WalletTransactionFromJSON, WalletTransactionToJSON } from './WalletTransaction.js';

/* tslint:disable */
function WalletTransactionsResponseFromJSON(json) {
    return WalletTransactionsResponseFromJSONTyped(json);
}
function WalletTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(WalletTransactionFromJSON)),
        'nextOffset': !exists(json, 'nextOffset') ? undefined : json['nextOffset'],
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
        'transactions': (value.transactions.map(WalletTransactionToJSON)),
        'nextOffset': value.nextOffset,
    };
}

export { WalletTransactionsResponseFromJSON, WalletTransactionsResponseFromJSONTyped, WalletTransactionsResponseToJSON };
