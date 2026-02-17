'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function WalletTransactionAssetTransferMetadataFromJSON(json) {
    return WalletTransactionAssetTransferMetadataFromJSONTyped(json);
}
function WalletTransactionAssetTransferMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'symbol': !runtime.exists(json, 'symbol') ? undefined : json['symbol'],
        'decimals': !runtime.exists(json, 'decimals') ? undefined : json['decimals'],
        'imageUri': !runtime.exists(json, 'imageUri') ? undefined : json['imageUri'],
    };
}
function WalletTransactionAssetTransferMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'symbol': value.symbol,
        'decimals': value.decimals,
        'imageUri': value.imageUri,
    };
}

exports.WalletTransactionAssetTransferMetadataFromJSON = WalletTransactionAssetTransferMetadataFromJSON;
exports.WalletTransactionAssetTransferMetadataFromJSONTyped = WalletTransactionAssetTransferMetadataFromJSONTyped;
exports.WalletTransactionAssetTransferMetadataToJSON = WalletTransactionAssetTransferMetadataToJSON;
