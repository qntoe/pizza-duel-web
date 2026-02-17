'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');

/* tslint:disable */
function WaasWalletSettingsFromJSON(json) {
    return WaasWalletSettingsFromJSONTyped(json);
}
function WaasWalletSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasDeniedDelegatedAccess': !runtime.exists(json, 'hasDeniedDelegatedAccess') ? undefined : json['hasDeniedDelegatedAccess'],
        'shouldRefreshOnNextSignOn': !runtime.exists(json, 'shouldRefreshOnNextSignOn') ? undefined : json['shouldRefreshOnNextSignOn'],
        'reshareOnNextSignOn': !runtime.exists(json, 'reshareOnNextSignOn') ? undefined : ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['reshareOnNextSignOn']),
        'revokeOnNextSignOn': !runtime.exists(json, 'revokeOnNextSignOn') ? undefined : json['revokeOnNextSignOn'],
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
        'reshareOnNextSignOn': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.reshareOnNextSignOn),
        'revokeOnNextSignOn': value.revokeOnNextSignOn,
    };
}

exports.WaasWalletSettingsFromJSON = WaasWalletSettingsFromJSON;
exports.WaasWalletSettingsFromJSONTyped = WaasWalletSettingsFromJSONTyped;
exports.WaasWalletSettingsToJSON = WaasWalletSettingsToJSON;
