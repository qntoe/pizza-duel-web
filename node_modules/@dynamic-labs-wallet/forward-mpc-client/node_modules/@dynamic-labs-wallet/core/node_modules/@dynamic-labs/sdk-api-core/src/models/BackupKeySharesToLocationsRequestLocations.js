import { exists } from '../runtime.js';
import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';
import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function BackupKeySharesToLocationsRequestLocationsFromJSON(json) {
    return BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json);
}
function BackupKeySharesToLocationsRequestLocationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'location': WaasBackupOptionsEnumFromJSON(json['location']),
        'keygenId': !exists(json, 'keygenId') ? undefined : json['keygenId'],
        'thresholdSignatureScheme': !exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'externalKeyShareId': !exists(json, 'externalKeyShareId') ? undefined : json['externalKeyShareId'],
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
        'location': WaasBackupOptionsEnumToJSON(value.location),
        'keygenId': value.keygenId,
        'thresholdSignatureScheme': ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'externalKeyShareId': value.externalKeyShareId,
    };
}

export { BackupKeySharesToLocationsRequestLocationsFromJSON, BackupKeySharesToLocationsRequestLocationsFromJSONTyped, BackupKeySharesToLocationsRequestLocationsToJSON };
