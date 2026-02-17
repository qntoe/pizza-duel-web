'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SecurityNotificationsFromJSON(json) {
    return SecurityNotificationsFromJSONTyped(json);
}
function SecurityNotificationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verifiedCredentialLinked': !runtime.exists(json, 'verifiedCredentialLinked') ? undefined : json['verifiedCredentialLinked'],
        'verifiedCredentialUnlinked': !runtime.exists(json, 'verifiedCredentialUnlinked') ? undefined : json['verifiedCredentialUnlinked'],
        'waasPrivateKeyExport': !runtime.exists(json, 'waasPrivateKeyExport') ? undefined : json['waasPrivateKeyExport'],
        'waasSignedTransaction': !runtime.exists(json, 'waasSignedTransaction') ? undefined : json['waasSignedTransaction'],
    };
}
function SecurityNotificationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verifiedCredentialLinked': value.verifiedCredentialLinked,
        'verifiedCredentialUnlinked': value.verifiedCredentialUnlinked,
        'waasPrivateKeyExport': value.waasPrivateKeyExport,
        'waasSignedTransaction': value.waasSignedTransaction,
    };
}

exports.SecurityNotificationsFromJSON = SecurityNotificationsFromJSON;
exports.SecurityNotificationsFromJSONTyped = SecurityNotificationsFromJSONTyped;
exports.SecurityNotificationsToJSON = SecurityNotificationsToJSON;
