import { exists } from '../runtime.js';
import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';

/* tslint:disable */
function WaasWalletSettingsFromJSON(json) {
    return WaasWalletSettingsFromJSONTyped(json);
}
function WaasWalletSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasDeniedDelegatedAccess': !exists(json, 'hasDeniedDelegatedAccess') ? undefined : json['hasDeniedDelegatedAccess'],
        'shouldRefreshOnNextSignOn': !exists(json, 'shouldRefreshOnNextSignOn') ? undefined : json['shouldRefreshOnNextSignOn'],
        'reshareOnNextSignOn': !exists(json, 'reshareOnNextSignOn') ? undefined : ThresholdSignatureSchemeFromJSON(json['reshareOnNextSignOn']),
        'revokeOnNextSignOn': !exists(json, 'revokeOnNextSignOn') ? undefined : json['revokeOnNextSignOn'],
    };
}
function WaasWalletSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hasDeniedDelegatedAccess': value.hasDeniedDelegatedAccess,
        'shouldRefreshOnNextSignOn': value.shouldRefreshOnNextSignOn,
        'reshareOnNextSignOn': ThresholdSignatureSchemeToJSON(value.reshareOnNextSignOn),
        'revokeOnNextSignOn': value.revokeOnNextSignOn,
    };
}

export { WaasWalletSettingsFromJSON, WaasWalletSettingsFromJSONTyped, WaasWalletSettingsToJSON };
