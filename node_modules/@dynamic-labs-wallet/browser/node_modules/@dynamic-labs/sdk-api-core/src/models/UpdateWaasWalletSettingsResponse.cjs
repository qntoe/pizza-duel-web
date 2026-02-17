'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WaasWalletSettings = require('./WaasWalletSettings.cjs');

/* tslint:disable */
function UpdateWaasWalletSettingsResponseFromJSON(json) {
    return UpdateWaasWalletSettingsResponseFromJSONTyped(json);
}
function UpdateWaasWalletSettingsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'settings': WaasWalletSettings.WaasWalletSettingsFromJSON(json['settings']),
    };
}
function UpdateWaasWalletSettingsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'settings': WaasWalletSettings.WaasWalletSettingsToJSON(value.settings),
    };
}

exports.UpdateWaasWalletSettingsResponseFromJSON = UpdateWaasWalletSettingsResponseFromJSON;
exports.UpdateWaasWalletSettingsResponseFromJSONTyped = UpdateWaasWalletSettingsResponseFromJSONTyped;
exports.UpdateWaasWalletSettingsResponseToJSON = UpdateWaasWalletSettingsResponseToJSON;
