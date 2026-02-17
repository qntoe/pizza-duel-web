import { exists } from '../runtime.js';

/* tslint:disable */
function SecurityNotificationsFromJSON(json) {
    return SecurityNotificationsFromJSONTyped(json);
}
function SecurityNotificationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verifiedCredentialLinked': !exists(json, 'verifiedCredentialLinked') ? undefined : json['verifiedCredentialLinked'],
        'verifiedCredentialUnlinked': !exists(json, 'verifiedCredentialUnlinked') ? undefined : json['verifiedCredentialUnlinked'],
        'waasPrivateKeyExport': !exists(json, 'waasPrivateKeyExport') ? undefined : json['waasPrivateKeyExport'],
        'waasSignedTransaction': !exists(json, 'waasSignedTransaction') ? undefined : json['waasSignedTransaction'],
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

export { SecurityNotificationsFromJSON, SecurityNotificationsFromJSONTyped, SecurityNotificationsToJSON };
