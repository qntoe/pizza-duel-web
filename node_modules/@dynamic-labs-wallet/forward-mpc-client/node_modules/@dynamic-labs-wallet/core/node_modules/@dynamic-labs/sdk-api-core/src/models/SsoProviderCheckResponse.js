import { exists } from '../runtime.js';

/* tslint:disable */
/**
* @export
* @enum {string}
*/
var SsoProviderCheckResponseTypeEnum;
(function (SsoProviderCheckResponseTypeEnum) {
    SsoProviderCheckResponseTypeEnum["Otp"] = "otp";
    SsoProviderCheckResponseTypeEnum["Sso"] = "sso";
})(SsoProviderCheckResponseTypeEnum || (SsoProviderCheckResponseTypeEnum = {}));
function SsoProviderCheckResponseFromJSON(json) {
    return SsoProviderCheckResponseFromJSONTyped(json);
}
function SsoProviderCheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'ssoAuthUrl': !exists(json, 'ssoAuthUrl') ? undefined : json['ssoAuthUrl'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}
function SsoProviderCheckResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'provider': value.provider,
        'ssoAuthUrl': value.ssoAuthUrl,
        'id': value.id,
    };
}

export { SsoProviderCheckResponseFromJSON, SsoProviderCheckResponseFromJSONTyped, SsoProviderCheckResponseToJSON, SsoProviderCheckResponseTypeEnum };
