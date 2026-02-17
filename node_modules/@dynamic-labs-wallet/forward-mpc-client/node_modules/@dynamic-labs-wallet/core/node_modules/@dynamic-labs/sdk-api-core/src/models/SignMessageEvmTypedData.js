import { Eip712DomainFromJSON, Eip712DomainToJSON } from './Eip712Domain.js';

/* tslint:disable */
function SignMessageEvmTypedDataFromJSON(json) {
    return SignMessageEvmTypedDataFromJSONTyped(json);
}
function SignMessageEvmTypedDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domain': Eip712DomainFromJSON(json['domain']),
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
        'domain': Eip712DomainToJSON(value.domain),
        'message': value.message,
        'primaryType': value.primaryType,
        'types': value.types,
    };
}

export { SignMessageEvmTypedDataFromJSON, SignMessageEvmTypedDataFromJSONTyped, SignMessageEvmTypedDataToJSON };
