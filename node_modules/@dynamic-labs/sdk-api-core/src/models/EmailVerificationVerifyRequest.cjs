'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var TokenScope = require('./TokenScope.cjs');

/* tslint:disable */
function EmailVerificationVerifyRequestFromJSON(json) {
    return EmailVerificationVerifyRequestFromJSONTyped(json);
}
function EmailVerificationVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
        'requestedScopes': !runtime.exists(json, 'requestedScopes') ? undefined : (json['requestedScopes'].map(TokenScope.TokenScopeFromJSON)),
    };
}
function EmailVerificationVerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'verificationToken': value.verificationToken,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
        'requestedScopes': value.requestedScopes === undefined ? undefined : (value.requestedScopes.map(TokenScope.TokenScopeToJSON)),
    };
}

exports.EmailVerificationVerifyRequestFromJSON = EmailVerificationVerifyRequestFromJSON;
exports.EmailVerificationVerifyRequestFromJSONTyped = EmailVerificationVerifyRequestFromJSONTyped;
exports.EmailVerificationVerifyRequestToJSON = EmailVerificationVerifyRequestToJSON;
