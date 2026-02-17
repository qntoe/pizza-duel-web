import { WaasWalletSettingsFromJSON, WaasWalletSettingsToJSON } from './WaasWalletSettings.js';

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
        'settings': WaasWalletSettingsFromJSON(json['settings']),
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
        'settings': WaasWalletSettingsToJSON(value.settings),
    };
}

export { UpdateWaasWalletSettingsResponseFromJSON, UpdateWaasWalletSettingsResponseFromJSONTyped, UpdateWaasWalletSettingsResponseToJSON };
