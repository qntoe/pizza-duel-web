'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SignMessageEvmTransactionFromJSON(json) {
    return SignMessageEvmTransactionFromJSONTyped(json);
}
function SignMessageEvmTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'to': json['to'],
        'chainId': json['chainId'],
        'data': !runtime.exists(json, 'data') ? undefined : json['data'],
        'gas': !runtime.exists(json, 'gas') ? undefined : json['gas'],
        'gasPrice': !runtime.exists(json, 'gasPrice') ? undefined : json['gasPrice'],
        'maxFeePerGas': !runtime.exists(json, 'maxFeePerGas') ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': !runtime.exists(json, 'maxPriorityFeePerGas') ? undefined : json['maxPriorityFeePerGas'],
        'nonce': !runtime.exists(json, 'nonce') ? undefined : json['nonce'],
        'value': !runtime.exists(json, 'value') ? undefined : json['value'],
    };
}
function SignMessageEvmTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'to': value.to,
        'chainId': value.chainId,
        'data': value.data,
        'gas': value.gas,
        'gasPrice': value.gasPrice,
        'maxFeePerGas': value.maxFeePerGas,
        'maxPriorityFeePerGas': value.maxPriorityFeePerGas,
        'nonce': value.nonce,
        'value': value.value,
    };
}

exports.SignMessageEvmTransactionFromJSON = SignMessageEvmTransactionFromJSON;
exports.SignMessageEvmTransactionFromJSONTyped = SignMessageEvmTransactionFromJSONTyped;
exports.SignMessageEvmTransactionToJSON = SignMessageEvmTransactionToJSON;
