import { exists } from '../runtime.js';
import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';
import { WaasWalletSettingsFromJSON, WaasWalletSettingsToJSON } from './WaasWalletSettings.js';
import { WalletKeyShareInfoFromJSON, WalletKeyShareInfoToJSON } from './WalletKeyShareInfo.js';

/* tslint:disable */
function WaasWalletPropertiesFromJSON(json) {
    return WaasWalletPropertiesFromJSONTyped(json);
}
function WaasWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': !exists(json, 'keyShares') ? undefined : (json['keyShares'].map(WalletKeyShareInfoFromJSON)),
        'thresholdSignatureScheme': !exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'derivationPath': !exists(json, 'derivationPath') ? undefined : json['derivationPath'],
        'settings': !exists(json, 'settings') ? undefined : WaasWalletSettingsFromJSON(json['settings']),
    };
}
function WaasWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': value.keyShares === undefined ? undefined : (value.keyShares.map(WalletKeyShareInfoToJSON)),
        'thresholdSignatureScheme': ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'derivationPath': value.derivationPath,
        'settings': WaasWalletSettingsToJSON(value.settings),
    };
}

export { WaasWalletPropertiesFromJSON, WaasWalletPropertiesFromJSONTyped, WaasWalletPropertiesToJSON };
