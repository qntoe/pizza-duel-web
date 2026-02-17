'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');
var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

/* tslint:disable */
function BackupKeySharesToLocationsRequestLocationsFromJSON(json) {
    return BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json);
}
function BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON(json['location']),
        'keygenId': !runtime.exists(json, 'keygenId') ? undefined : json['keygenId'],
        'thresholdSignatureScheme': !runtime.exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'externalKeyShareId': !runtime.exists(json, 'externalKeyShareId') ? undefined : json['externalKeyShareId'],
    };
}
function BackupKeySharesToLocationsRequestLocationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'location': WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON(value.location),
        'keygenId': value.keygenId,
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'externalKeyShareId': value.externalKeyShareId,
    };
}

exports.BackupKeySharesToLocationsRequestLocationsFromJSON = BackupKeySharesToLocationsRequestLocationsFromJSON;
exports.BackupKeySharesToLocationsRequestLocationsFromJSONTyped = BackupKeySharesToLocationsRequestLocationsFromJSONTyped;
exports.BackupKeySharesToLocationsRequestLocationsToJSON = BackupKeySharesToLocationsRequestLocationsToJSON;
