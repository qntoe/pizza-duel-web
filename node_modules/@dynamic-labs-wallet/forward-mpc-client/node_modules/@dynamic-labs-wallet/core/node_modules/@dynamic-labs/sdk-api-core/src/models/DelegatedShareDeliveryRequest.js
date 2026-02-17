import { DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSON, DelegatedShareDeliveryRequestEncryptedDelegatedShareToJSON } from './DelegatedShareDeliveryRequestEncryptedDelegatedShare.js';

/* tslint:disable */
function DelegatedShareDeliveryRequestFromJSON(json) {
    return DelegatedShareDeliveryRequestFromJSONTyped(json);
}
function DelegatedShareDeliveryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'encryptedDelegatedShare': DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSON(json['encryptedDelegatedShare']),
    };
}
function DelegatedShareDeliveryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'encryptedDelegatedShare': DelegatedShareDeliveryRequestEncryptedDelegatedShareToJSON(value.encryptedDelegatedShare),
    };
}

export { DelegatedShareDeliveryRequestFromJSON, DelegatedShareDeliveryRequestFromJSONTyped, DelegatedShareDeliveryRequestToJSON };
