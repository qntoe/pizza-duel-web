'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WalletTransactionAssetTransferMetadata = require('./WalletTransactionAssetTransferMetadata.cjs');

/* tslint:disable */
function WalletTransactionAssetTransferFromJSON(json) {
    return WalletTransactionAssetTransferFromJSONTyped(json);
}
function WalletTransactionAssetTransferFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenAddress': !runtime.exists(json, 'tokenAddress') ? undefined : json['tokenAddress'],
        'fromAddress': json['fromAddress'],
        'toAddress': json['toAddress'],
        'amount': json['amount'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : WalletTransactionAssetTransferMetadata.WalletTransactionAssetTransferMetadataFromJSON(json['metadata']),
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
        'metadata': WalletTransactionAssetTransferMetadata.WalletTransactionAssetTransferMetadataToJSON(value.metadata),
    };
}

exports.WalletTransactionAssetTransferFromJSON = WalletTransactionAssetTransferFromJSON;
exports.WalletTransactionAssetTransferFromJSONTyped = WalletTransactionAssetTransferFromJSONTyped;
exports.WalletTransactionAssetTransferToJSON = WalletTransactionAssetTransferToJSON;
