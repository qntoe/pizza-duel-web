import { exists } from '../runtime.js';

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
        'data': !exists(json, 'data') ? undefined : json['data'],
        'gas': !exists(json, 'gas') ? undefined : json['gas'],
        'gasPrice': !exists(json, 'gasPrice') ? undefined : json['gasPrice'],
        'maxFeePerGas': !exists(json, 'maxFeePerGas') ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': !exists(json, 'maxPriorityFeePerGas') ? undefined : json['maxPriorityFeePerGas'],
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'value': !exists(json, 'value') ? undefined : json['value'],
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

export { SignMessageEvmTransactionFromJSON, SignMessageEvmTransactionFromJSONTyped, SignMessageEvmTransactionToJSON };
