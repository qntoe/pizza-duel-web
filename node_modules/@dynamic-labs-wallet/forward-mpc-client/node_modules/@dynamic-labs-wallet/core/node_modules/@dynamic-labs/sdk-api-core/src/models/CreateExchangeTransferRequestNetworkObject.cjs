'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainEnum = require('./ChainEnum.cjs');

/* tslint:disable */
function CreateExchangeTransferRequestNetworkObjectFromJSON(json) {
    return CreateExchangeTransferRequestNetworkObjectFromJSONTyped(json);
}
function CreateExchangeTransferRequestNetworkObjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'networkId': json['networkId'],
        'chainName': ChainEnum.ChainEnumFromJSON(json['chainName']),
    };
}
function CreateExchangeTransferRequestNetworkObjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'networkId': value.networkId,
        'chainName': ChainEnum.ChainEnumToJSON(value.chainName),
    };
}

exports.CreateExchangeTransferRequestNetworkObjectFromJSON = CreateExchangeTransferRequestNetworkObjectFromJSON;
exports.CreateExchangeTransferRequestNetworkObjectFromJSONTyped = CreateExchangeTransferRequestNetworkObjectFromJSONTyped;
exports.CreateExchangeTransferRequestNetworkObjectToJSON = CreateExchangeTransferRequestNetworkObjectToJSON;
