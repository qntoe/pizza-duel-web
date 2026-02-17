import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';

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
        'chainName': ChainEnumFromJSON(json['chainName']),
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
        'chainName': ChainEnumToJSON(value.chainName),
    };
}

export { CreateExchangeTransferRequestNetworkObjectFromJSON, CreateExchangeTransferRequestNetworkObjectFromJSONTyped, CreateExchangeTransferRequestNetworkObjectToJSON };
