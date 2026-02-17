'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
/**
* @export
* @enum {string}
*/
exports.ProjectSettingsSdkWaasICloudEnvironmentEnum = void 0;
(function (ProjectSettingsSdkWaasICloudEnvironmentEnum) {
    ProjectSettingsSdkWaasICloudEnvironmentEnum["Development"] = "development";
    ProjectSettingsSdkWaasICloudEnvironmentEnum["Production"] = "production";
})(exports.ProjectSettingsSdkWaasICloudEnvironmentEnum || (exports.ProjectSettingsSdkWaasICloudEnvironmentEnum = {}));
function ProjectSettingsSdkWaasICloudFromJSON(json) {
    return ProjectSettingsSdkWaasICloudFromJSONTyped(json);
}
function ProjectSettingsSdkWaasICloudFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'containerIdentifier': !runtime.exists(json, 'containerIdentifier') ? undefined : json['containerIdentifier'],
        'apiToken': !runtime.exists(json, 'apiToken') ? undefined : json['apiToken'],
        'environment': !runtime.exists(json, 'environment') ? undefined : json['environment'],
    };
}
function ProjectSettingsSdkWaasICloudToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'containerIdentifier': value.containerIdentifier,
        'apiToken': value.apiToken,
        'environment': value.environment,
    };
}

exports.ProjectSettingsSdkWaasICloudFromJSON = ProjectSettingsSdkWaasICloudFromJSON;
exports.ProjectSettingsSdkWaasICloudFromJSONTyped = ProjectSettingsSdkWaasICloudFromJSONTyped;
exports.ProjectSettingsSdkWaasICloudToJSON = ProjectSettingsSdkWaasICloudToJSON;
