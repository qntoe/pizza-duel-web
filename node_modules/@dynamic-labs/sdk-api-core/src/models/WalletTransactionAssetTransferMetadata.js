import { exists } from '../runtime.js';

/* tslint:disable */
function WalletTransactionAssetTransferMetadataFromJSON(json) {
    return WalletTransactionAssetTransferMetadataFromJSONTyped(json);
}
function WalletTransactionAssetTransferMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'decimals': !exists(json, 'decimals') ? undefined : json['decimals'],
        'imageUri': !exists(json, 'imageUri') ? undefined : json['imageUri'],
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

export { WalletTransactionAssetTransferMetadataFromJSON, WalletTransactionAssetTransferMetadataFromJSONTyped, WalletTransactionAssetTransferMetadataToJSON };
