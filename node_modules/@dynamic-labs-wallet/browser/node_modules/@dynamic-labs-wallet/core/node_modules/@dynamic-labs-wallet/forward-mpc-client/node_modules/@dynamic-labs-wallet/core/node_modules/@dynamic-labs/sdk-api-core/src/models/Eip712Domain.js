import { exists } from '../runtime.js';

/* tslint:disable */
function Eip712DomainFromJSON(json) {
    return Eip712DomainFromJSONTyped(json);
}
function Eip712DomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'chainId': !exists(json, 'chainId') ? undefined : json['chainId'],
        'verifyingContract': !exists(json, 'verifyingContract') ? undefined : json['verifyingContract'],
    };
}
function Eip712DomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'version': value.version,
        'chainId': value.chainId,
        'verifyingContract': value.verifyingContract,
    };
}

export { Eip712DomainFromJSON, Eip712DomainFromJSONTyped, Eip712DomainToJSON };
