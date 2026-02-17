'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Eip712Domain = require('./Eip712Domain.cjs');

/* tslint:disable */
function SignMessageEvmTypedDataFromJSON(json) {
    return SignMessageEvmTypedDataFromJSONTyped(json);
}
function SignMessageEvmTypedDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domain': Eip712Domain.Eip712DomainFromJSON(json['domain']),
        'message': json['message'],
        'primaryType': json['primaryType'],
        'types': json['types'],
    };
}
function SignMessageEvmTypedDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'domain': Eip712Domain.Eip712DomainToJSON(value.domain),
        'message': value.message,
        'primaryType': value.primaryType,
        'types': value.types,
    };
}

exports.SignMessageEvmTypedDataFromJSON = SignMessageEvmTypedDataFromJSON;
exports.SignMessageEvmTypedDataFromJSONTyped = SignMessageEvmTypedDataFromJSONTyped;
exports.SignMessageEvmTypedDataToJSON = SignMessageEvmTypedDataToJSON;
