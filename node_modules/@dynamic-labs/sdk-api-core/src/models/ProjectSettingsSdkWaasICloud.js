import { exists } from '../runtime.js';

/* tslint:disable */
/**
* @export
* @enum {string}
*/
var ProjectSettingsSdkWaasICloudEnvironmentEnum;
(function (ProjectSettingsSdkWaasICloudEnvironmentEnum) {
    ProjectSettingsSdkWaasICloudEnvironmentEnum["Development"] = "development";
    ProjectSettingsSdkWaasICloudEnvironmentEnum["Production"] = "production";
})(ProjectSettingsSdkWaasICloudEnvironmentEnum || (ProjectSettingsSdkWaasICloudEnvironmentEnum = {}));
function ProjectSettingsSdkWaasICloudFromJSON(json) {
    return ProjectSettingsSdkWaasICloudFromJSONTyped(json);
}
function ProjectSettingsSdkWaasICloudFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'containerIdentifier': !exists(json, 'containerIdentifier') ? undefined : json['containerIdentifier'],
        'apiToken': !exists(json, 'apiToken') ? undefined : json['apiToken'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
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

export { ProjectSettingsSdkWaasICloudEnvironmentEnum, ProjectSettingsSdkWaasICloudFromJSON, ProjectSettingsSdkWaasICloudFromJSONTyped, ProjectSettingsSdkWaasICloudToJSON };
