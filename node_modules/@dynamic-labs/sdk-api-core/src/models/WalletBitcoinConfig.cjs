'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function WalletBitcoinConfigFromJSON(json) {
    return WalletBitcoinConfigFromJSONTyped(json);
}
function WalletBitcoinConfigFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressType': !runtime.exists(json, 'addressType') ? undefined : json['addressType'],
        'network': !runtime.exists(json, 'network') ? undefined : json['network'],
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

exports.WalletBitcoinConfigFromJSON = WalletBitcoinConfigFromJSON;
exports.WalletBitcoinConfigFromJSONTyped = WalletBitcoinConfigFromJSONTyped;
exports.WalletBitcoinConfigToJSON = WalletBitcoinConfigToJSON;
