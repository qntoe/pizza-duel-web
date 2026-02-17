import { exists } from '../runtime.js';
import { TokenScopeFromJSON, TokenScopeToJSON } from './TokenScope.js';

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
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
        'requestedScopes': !exists(json, 'requestedScopes') ? undefined : (json['requestedScopes'].map(TokenScopeFromJSON)),
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
        'requestedScopes': value.requestedScopes === undefined ? undefined : (value.requestedScopes.map(TokenScopeToJSON)),
    };
}

export { EmailVerificationVerifyRequestFromJSON, EmailVerificationVerifyRequestFromJSONTyped, EmailVerificationVerifyRequestToJSON };
