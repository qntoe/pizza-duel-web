import { exists } from '../runtime.js';

/* tslint:disable */
function WalletBitcoinConfigFromJSON(json) {
    return WalletBitcoinConfigFromJSONTyped(json);
}
function WalletBitcoinConfigFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressType': !exists(json, 'addressType') ? undefined : json['addressType'],
        'network': !exists(json, 'network') ? undefined : json['network'],
    };
}
function WalletBitcoinConfigToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressType': value.addressType,
        'network': value.network,
    };
}

export { WalletBitcoinConfigFromJSON, WalletBitcoinConfigFromJSONTyped, WalletBitcoinConfigToJSON };
