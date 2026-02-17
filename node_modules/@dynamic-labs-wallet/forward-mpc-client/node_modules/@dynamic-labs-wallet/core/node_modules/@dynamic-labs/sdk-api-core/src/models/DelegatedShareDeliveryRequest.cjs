'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DelegatedShareDeliveryRequestEncryptedDelegatedShare = require('./DelegatedShareDeliveryRequestEncryptedDelegatedShare.cjs');

/* tslint:disable */
function DelegatedShareDeliveryRequestFromJSON(json) {
    return DelegatedShareDeliveryRequestFromJSONTyped(json);
}
function DelegatedShareDeliveryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'encryptedDelegatedShare': DelegatedShareDeliveryRequestEncryptedDelegatedShare.DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSON(json['encryptedDelegatedShare']),
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
        'encryptedDelegatedShare': DelegatedShareDeliveryRequestEncryptedDelegatedShare.DelegatedShareDeliveryRequestEncryptedDelegatedShareToJSON(value.encryptedDelegatedShare),
    };
}

exports.DelegatedShareDeliveryRequestFromJSON = DelegatedShareDeliveryRequestFromJSON;
exports.DelegatedShareDeliveryRequestFromJSONTyped = DelegatedShareDeliveryRequestFromJSONTyped;
exports.DelegatedShareDeliveryRequestToJSON = DelegatedShareDeliveryRequestToJSON;
