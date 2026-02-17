import { exists } from '../runtime.js';
import { WalletTransactionAssetTransferMetadataFromJSON, WalletTransactionAssetTransferMetadataToJSON } from './WalletTransactionAssetTransferMetadata.js';

/* tslint:disable */
function WalletTransactionAssetTransferFromJSON(json) {
    return WalletTransactionAssetTransferFromJSONTyped(json);
}
function WalletTransactionAssetTransferFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenAddress': !exists(json, 'tokenAddress') ? undefined : json['tokenAddress'],
        'fromAddress': json['fromAddress'],
        'toAddress': json['toAddress'],
        'amount': json['amount'],
        'metadata': !exists(json, 'metadata') ? undefined : WalletTransactionAssetTransferMetadataFromJSON(json['metadata']),
    };
}
function WalletTransactionAssetTransferToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tokenAddress': value.tokenAddress,
        'fromAddress': value.fromAddress,
        'toAddress': value.toAddress,
        'amount': value.amount,
        'metadata': WalletTransactionAssetTransferMetadataToJSON(value.metadata),
    };
}

export { WalletTransactionAssetTransferFromJSON, WalletTransactionAssetTransferFromJSONTyped, WalletTransactionAssetTransferToJSON };
