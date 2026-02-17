'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
/**
* @export
* @enum {string}
*/
exports.SsoProviderCheckResponseTypeEnum = void 0;
(function (SsoProviderCheckResponseTypeEnum) {
    SsoProviderCheckResponseTypeEnum["Otp"] = "otp";
    SsoProviderCheckResponseTypeEnum["Sso"] = "sso";
})(exports.SsoProviderCheckResponseTypeEnum || (exports.SsoProviderCheckResponseTypeEnum = {}));
function SsoProviderCheckResponseFromJSON(json) {
    return SsoProviderCheckResponseFromJSONTyped(json);
}
function SsoProviderCheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'provider': !runtime.exists(json, 'provider') ? undefined : json['provider'],
        'ssoAuthUrl': !runtime.exists(json, 'ssoAuthUrl') ? undefined : json['ssoAuthUrl'],
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
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

exports.SsoProviderCheckResponseFromJSON = SsoProviderCheckResponseFromJSON;
exports.SsoProviderCheckResponseFromJSONTyped = SsoProviderCheckResponseFromJSONTyped;
exports.SsoProviderCheckResponseToJSON = SsoProviderCheckResponseToJSON;
