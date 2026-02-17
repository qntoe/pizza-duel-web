'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function Eip712DomainFromJSON(json) {
    return Eip712DomainFromJSONTyped(json);
}
function Eip712DomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'version': !runtime.exists(json, 'version') ? undefined : json['version'],
        'chainId': !runtime.exists(json, 'chainId') ? undefined : json['chainId'],
        'verifyingContract': !runtime.exists(json, 'verifyingContract') ? undefined : json['verifyingContract'],
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

exports.Eip712DomainFromJSON = Eip712DomainFromJSON;
exports.Eip712DomainFromJSONTyped = Eip712DomainFromJSONTyped;
exports.Eip712DomainToJSON = Eip712DomainToJSON;
