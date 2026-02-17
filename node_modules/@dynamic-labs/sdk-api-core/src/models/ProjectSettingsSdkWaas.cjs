'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProjectSettingsSdkWaasDelegatedAccess = require('./ProjectSettingsSdkWaasDelegatedAccess.cjs');
var ProjectSettingsSdkWaasICloud = require('./ProjectSettingsSdkWaasICloud.cjs');
var ProjectSettingsSdkWaasOnSignUp = require('./ProjectSettingsSdkWaasOnSignUp.cjs');
var WaasBackupOptionsEnum = require('./WaasBackupOptionsEnum.cjs');

/* tslint:disable */
function ProjectSettingsSdkWaasFromJSON(json) {
    return ProjectSettingsSdkWaasFromJSONTyped(json);
}
function ProjectSettingsSdkWaasFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowMultipleWaasWalletsPerChain': !runtime.exists(json, 'allowMultipleWaasWalletsPerChain') ? undefined : json['allowMultipleWaasWalletsPerChain'],
        'passcodeRequired': json['passcodeRequired'],
        'onSignUp': ProjectSettingsSdkWaasOnSignUp.ProjectSettingsSdkWaasOnSignUpFromJSON(json['onSignUp']),
        'backupOptions': (json['backupOptions'].map(WaasBackupOptionsEnum.WaasBackupOptionsEnumFromJSON)),
        'iCloud': !runtime.exists(json, 'iCloud') ? undefined : ProjectSettingsSdkWaasICloud.ProjectSettingsSdkWaasICloudFromJSON(json['iCloud']),
        'relayUrl': !runtime.exists(json, 'relayUrl') ? undefined : json['relayUrl'],
        'delegatedAccessEndpoint': !runtime.exists(json, 'delegatedAccessEndpoint') ? undefined : json['delegatedAccessEndpoint'],
        'delegatedAccess': !runtime.exists(json, 'delegatedAccess') ? undefined : ProjectSettingsSdkWaasDelegatedAccess.ProjectSettingsSdkWaasDelegatedAccessFromJSON(json['delegatedAccess']),
        'enableForwardMPCClient': !runtime.exists(json, 'enableForwardMPCClient') ? undefined : json['enableForwardMPCClient'],
        'customKeyshareRelayBaseUrl': !runtime.exists(json, 'customKeyshareRelayBaseUrl') ? undefined : json['customKeyshareRelayBaseUrl'],
        'exportDisabled': !runtime.exists(json, 'exportDisabled') ? undefined : json['exportDisabled'],
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
        'onSignUp': ProjectSettingsSdkWaasOnSignUp.ProjectSettingsSdkWaasOnSignUpToJSON(value.onSignUp),
        'backupOptions': (value.backupOptions.map(WaasBackupOptionsEnum.WaasBackupOptionsEnumToJSON)),
        'iCloud': ProjectSettingsSdkWaasICloud.ProjectSettingsSdkWaasICloudToJSON(value.iCloud),
        'relayUrl': value.relayUrl,
        'delegatedAccessEndpoint': value.delegatedAccessEndpoint,
        'delegatedAccess': ProjectSettingsSdkWaasDelegatedAccess.ProjectSettingsSdkWaasDelegatedAccessToJSON(value.delegatedAccess),
        'enableForwardMPCClient': value.enableForwardMPCClient,
        'customKeyshareRelayBaseUrl': value.customKeyshareRelayBaseUrl,
        'exportDisabled': value.exportDisabled,
    };
}

exports.ProjectSettingsSdkWaasFromJSON = ProjectSettingsSdkWaasFromJSON;
exports.ProjectSettingsSdkWaasFromJSONTyped = ProjectSettingsSdkWaasFromJSONTyped;
exports.ProjectSettingsSdkWaasToJSON = ProjectSettingsSdkWaasToJSON;
