'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SsoProviderEnum = require('./SsoProviderEnum.cjs');

/* tslint:disable */
function SsoProviderFromJSON(json) {
    return SsoProviderFromJSONTyped(json);
}
function SsoProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'clientId': json['clientId'],
        'maskedClientSecret': json['maskedClientSecret'],
        'organizationId': json['organizationId'],
        'ssoDomain': json['ssoDomain'],
        'emailDomain': json['emailDomain'],
        'provider': SsoProviderEnum.SsoProviderEnumFromJSON(json['provider']),
        'redirectUrl': !runtime.exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'enforceOnlySSO': json['enforceOnlySSO'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'ssoDomainVerifiedAt': !runtime.exists(json, 'ssoDomainVerifiedAt') ? undefined : (new Date(json['ssoDomainVerifiedAt'])),
        'ssoDomainVerificationChallenge': !runtime.exists(json, 'ssoDomainVerificationChallenge') ? undefined : json['ssoDomainVerificationChallenge'],
    };
}
function SsoProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'clientId': value.clientId,
        'maskedClientSecret': value.maskedClientSecret,
        'organizationId': value.organizationId,
        'ssoDomain': value.ssoDomain,
        'emailDomain': value.emailDomain,
        'provider': SsoProviderEnum.SsoProviderEnumToJSON(value.provider),
        'redirectUrl': value.redirectUrl,
        'enforceOnlySSO': value.enforceOnlySSO,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'ssoDomainVerifiedAt': value.ssoDomainVerifiedAt === undefined ? undefined : (value.ssoDomainVerifiedAt.toISOString()),
        'ssoDomainVerificationChallenge': value.ssoDomainVerificationChallenge,
    };
}

exports.SsoProviderFromJSON = SsoProviderFromJSON;
exports.SsoProviderFromJSONTyped = SsoProviderFromJSONTyped;
exports.SsoProviderToJSON = SsoProviderToJSON;
