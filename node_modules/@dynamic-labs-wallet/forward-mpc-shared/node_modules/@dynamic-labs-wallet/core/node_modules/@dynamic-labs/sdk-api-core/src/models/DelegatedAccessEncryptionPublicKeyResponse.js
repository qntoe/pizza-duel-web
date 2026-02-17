import { DelegatedAccessEncryptionPublicKeyFromJSON, DelegatedAccessEncryptionPublicKeyToJSON } from './DelegatedAccessEncryptionPublicKey.js';

/* tslint:disable */
function DelegatedAccessEncryptionPublicKeyResponseFromJSON(json) {
    return DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped(json);
}
function DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': DelegatedAccessEncryptionPublicKeyFromJSON(json['key']),
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
        'key': DelegatedAccessEncryptionPublicKeyToJSON(value.key),
    };
}

export { DelegatedAccessEncryptionPublicKeyResponseFromJSON, DelegatedAccessEncryptionPublicKeyResponseFromJSONTyped, DelegatedAccessEncryptionPublicKeyResponseToJSON };
