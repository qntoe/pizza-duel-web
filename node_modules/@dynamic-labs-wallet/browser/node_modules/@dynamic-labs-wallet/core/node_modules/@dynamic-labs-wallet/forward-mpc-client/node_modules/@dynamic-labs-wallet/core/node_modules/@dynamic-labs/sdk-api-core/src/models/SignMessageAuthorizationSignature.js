import { exists } from '../runtime.js';

/* tslint:disable */
function SignMessageAuthorizationSignatureFromJSON(json) {
    return SignMessageAuthorizationSignatureFromJSONTyped(json);
}
function SignMessageAuthorizationSignatureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : json['address'],
        'chainId': !exists(json, 'chainId') ? undefined : json['chainId'],
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'r': !exists(json, 'r') ? undefined : json['r'],
        's': !exists(json, 's') ? undefined : json['s'],
        'v': !exists(json, 'v') ? undefined : json['v'],
        'yParity': !exists(json, 'yParity') ? undefined : json['yParity'],
    };
}
function SignMessageAuthorizationSignatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chainId': value.chainId,
        'nonce': value.nonce,
        'r': value.r,
        's': value.s,
        'v': value.v,
        'yParity': value.yParity,
    };
}

export { SignMessageAuthorizationSignatureFromJSON, SignMessageAuthorizationSignatureFromJSONTyped, SignMessageAuthorizationSignatureToJSON };
