'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SignMessageAuthorizationSignatureFromJSON(json) {
    return SignMessageAuthorizationSignatureFromJSONTyped(json);
}
function SignMessageAuthorizationSignatureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !runtime.exists(json, 'address') ? undefined : json['address'],
        'chainId': !runtime.exists(json, 'chainId') ? undefined : json['chainId'],
        'nonce': !runtime.exists(json, 'nonce') ? undefined : json['nonce'],
        'r': !runtime.exists(json, 'r') ? undefined : json['r'],
        's': !runtime.exists(json, 's') ? undefined : json['s'],
        'v': !runtime.exists(json, 'v') ? undefined : json['v'],
        'yParity': !runtime.exists(json, 'yParity') ? undefined : json['yParity'],
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

exports.SignMessageAuthorizationSignatureFromJSON = SignMessageAuthorizationSignatureFromJSON;
exports.SignMessageAuthorizationSignatureFromJSONTyped = SignMessageAuthorizationSignatureFromJSONTyped;
exports.SignMessageAuthorizationSignatureToJSON = SignMessageAuthorizationSignatureToJSON;
