'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WaasDelegatedAccessEncryptionPublicKeyType = require('./WaasDelegatedAccessEncryptionPublicKeyType.cjs');

/* tslint:disable */
/**
* @export
* @enum {string}
*/
exports.DelegatedAccessEncryptionPublicKeyAlgEnum = void 0;
(function (DelegatedAccessEncryptionPublicKeyAlgEnum) {
    DelegatedAccessEncryptionPublicKeyAlgEnum["RsaOaep256"] = "RSA-OAEP-256";
    DelegatedAccessEncryptionPublicKeyAlgEnum["HybridRsaAes256"] = "HYBRID-RSA-AES-256";
})(exports.DelegatedAccessEncryptionPublicKeyAlgEnum || (exports.DelegatedAccessEncryptionPublicKeyAlgEnum = {})); /**
* @export
* @enum {string}
*/
exports.DelegatedAccessEncryptionPublicKeyStatusEnum = void 0;
(function (DelegatedAccessEncryptionPublicKeyStatusEnum) {
    DelegatedAccessEncryptionPublicKeyStatusEnum["Pending"] = "pending";
    DelegatedAccessEncryptionPublicKeyStatusEnum["Active"] = "active";
    DelegatedAccessEncryptionPublicKeyStatusEnum["Revoked"] = "revoked";
})(exports.DelegatedAccessEncryptionPublicKeyStatusEnum || (exports.DelegatedAccessEncryptionPublicKeyStatusEnum = {}));
function DelegatedAccessEncryptionPublicKeyFromJSON(json) {
    return DelegatedAccessEncryptionPublicKeyFromJSONTyped(json);
}
function DelegatedAccessEncryptionPublicKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'kid': json['kid'],
        'alg': json['alg'],
        'publicKeyPemB64': json['publicKeyPemB64'],
        'status': json['status'],
        'type': WaasDelegatedAccessEncryptionPublicKeyType.WaasDelegatedAccessEncryptionPublicKeyTypeFromJSON(json['type']),
        'expiresAt': !runtime.exists(json, 'expiresAt') ? undefined : (json['expiresAt'] === null ? null : new Date(json['expiresAt'])),
        'revokedAt': !runtime.exists(json, 'revokedAt') ? undefined : (json['revokedAt'] === null ? null : new Date(json['revokedAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function DelegatedAccessEncryptionPublicKeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'projectEnvironmentId': value.projectEnvironmentId,
        'kid': value.kid,
        'alg': value.alg,
        'publicKeyPemB64': value.publicKeyPemB64,
        'status': value.status,
        'type': WaasDelegatedAccessEncryptionPublicKeyType.WaasDelegatedAccessEncryptionPublicKeyTypeToJSON(value.type),
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt === null ? null : value.expiresAt.toISOString()),
        'revokedAt': value.revokedAt === undefined ? undefined : (value.revokedAt === null ? null : value.revokedAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

exports.DelegatedAccessEncryptionPublicKeyFromJSON = DelegatedAccessEncryptionPublicKeyFromJSON;
exports.DelegatedAccessEncryptionPublicKeyFromJSONTyped = DelegatedAccessEncryptionPublicKeyFromJSONTyped;
exports.DelegatedAccessEncryptionPublicKeyToJSON = DelegatedAccessEncryptionPublicKeyToJSON;
