'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DelegatedAccessEncryptionPublicKey = require('./DelegatedAccessEncryptionPublicKey.cjs');

/* tslint:disable */
function DelegatedAccessEncryptionPublicKeyResponseFromJSON(json) {
    return DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped(json);
}
function DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': DelegatedAccessEncryptionPublicKey.DelegatedAccessEncryptionPublicKeyFromJSON(json['key']),
    };
}
function DelegatedAccessEncryptionPublicKeyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': DelegatedAccessEncryptionPublicKey.DelegatedAccessEncryptionPublicKeyToJSON(value.key),
    };
}

exports.DelegatedAccessEncryptionPublicKeyResponseFromJSON = DelegatedAccessEncryptionPublicKeyResponseFromJSON;
exports.DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped = DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped;
exports.DelegatedAccessEncryptionPublicKeyResponseToJSON = DelegatedAccessEncryptionPublicKeyResponseToJSON;
