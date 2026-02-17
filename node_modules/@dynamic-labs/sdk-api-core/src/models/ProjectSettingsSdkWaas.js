import { exists } from '../runtime.js';
import { ProjectSettingsSdkWaasDelegatedAccessFromJSON, ProjectSettingsSdkWaasDelegatedAccessToJSON } from './ProjectSettingsSdkWaasDelegatedAccess.js';
import { ProjectSettingsSdkWaasICloudFromJSON, ProjectSettingsSdkWaasICloudToJSON } from './ProjectSettingsSdkWaasICloud.js';
import { ProjectSettingsSdkWaasOnSignUpFromJSON, ProjectSettingsSdkWaasOnSignUpToJSON } from './ProjectSettingsSdkWaasOnSignUp.js';
import { WaasBackupOptionsEnumFromJSON, WaasBackupOptionsEnumToJSON } from './WaasBackupOptionsEnum.js';

/* tslint:disable */
function ProjectSettingsSdkWaasFromJSON(json) {
    return ProjectSettingsSdkWaasFromJSONTyped(json);
}
function ProjectSettingsSdkWaasFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowMultipleWaasWalletsPerChain': !exists(json, 'allowMultipleWaasWalletsPerChain') ? undefined : json['allowMultipleWaasWalletsPerChain'],
        'passcodeRequired': json['passcodeRequired'],
        'onSignUp': ProjectSettingsSdkWaasOnSignUpFromJSON(json['onSignUp']),
        'backupOptions': (json['backupOptions'].map(WaasBackupOptionsEnumFromJSON)),
        'iCloud': !exists(json, 'iCloud') ? undefined : ProjectSettingsSdkWaasICloudFromJSON(json['iCloud']),
        'relayUrl': !exists(json, 'relayUrl') ? undefined : json['relayUrl'],
        'delegatedAccessEndpoint': !exists(json, 'delegatedAccessEndpoint') ? undefined : json['delegatedAccessEndpoint'],
        'delegatedAccess': !exists(json, 'delegatedAccess') ? undefined : ProjectSettingsSdkWaasDelegatedAccessFromJSON(json['delegatedAccess']),
        'enableForwardMPCClient': !exists(json, 'enableForwardMPCClient') ? undefined : json['enableForwardMPCClient'],
        'customKeyshareRelayBaseUrl': !exists(json, 'customKeyshareRelayBaseUrl') ? undefined : json['customKeyshareRelayBaseUrl'],
        'exportDisabled': !exists(json, 'exportDisabled') ? undefined : json['exportDisabled'],
    };
}
function ProjectSettingsSdkWaasToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowMultipleWaasWalletsPerChain': value.allowMultipleWaasWalletsPerChain,
        'passcodeRequired': value.passcodeRequired,
        'onSignUp': ProjectSettingsSdkWaasOnSignUpToJSON(value.onSignUp),
        'backupOptions': (value.backupOptions.map(WaasBackupOptionsEnumToJSON)),
        'iCloud': ProjectSettingsSdkWaasICloudToJSON(value.iCloud),
        'relayUrl': value.relayUrl,
        'delegatedAccessEndpoint': value.delegatedAccessEndpoint,
        'delegatedAccess': ProjectSettingsSdkWaasDelegatedAccessToJSON(value.delegatedAccess),
        'enableForwardMPCClient': value.enableForwardMPCClient,
        'customKeyshareRelayBaseUrl': value.customKeyshareRelayBaseUrl,
        'exportDisabled': value.exportDisabled,
    };
}

export { ProjectSettingsSdkWaasFromJSON, ProjectSettingsSdkWaasFromJSONTyped, ProjectSettingsSdkWaasToJSON };
