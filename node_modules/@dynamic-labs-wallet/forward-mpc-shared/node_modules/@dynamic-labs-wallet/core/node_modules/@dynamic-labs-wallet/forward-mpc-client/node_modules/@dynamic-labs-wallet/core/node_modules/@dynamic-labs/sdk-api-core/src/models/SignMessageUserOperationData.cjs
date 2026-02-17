'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SignMessageAuthorizationSignature = require('./SignMessageAuthorizationSignature.cjs');

/* tslint:disable */
function SignMessageUserOperationDataFromJSON(json) {
    return SignMessageUserOperationDataFromJSONTyped(json);
}
function SignMessageUserOperationDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorization': !runtime.exists(json, 'authorization') ? undefined : SignMessageAuthorizationSignature.SignMessageAuthorizationSignatureFromJSON(json['authorization']),
        'callData': !runtime.exists(json, 'callData') ? undefined : json['callData'],
        'callGasLimit': !runtime.exists(json, 'callGasLimit') ? undefined : json['callGasLimit'],
        'factory': !runtime.exists(json, 'factory') ? undefined : json['factory'],
        'factoryData': !runtime.exists(json, 'factoryData') ? undefined : json['factoryData'],
        'maxFeePerGas': !runtime.exists(json, 'maxFeePerGas') ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': !runtime.exists(json, 'maxPriorityFeePerGas') ? undefined : json['maxPriorityFeePerGas'],
        'nonce': !runtime.exists(json, 'nonce') ? undefined : json['nonce'],
        'paymaster': !runtime.exists(json, 'paymaster') ? undefined : json['paymaster'],
        'paymasterData': !runtime.exists(json, 'paymasterData') ? undefined : json['paymasterData'],
        'paymasterPostOpGasLimit': !runtime.exists(json, 'paymasterPostOpGasLimit') ? undefined : json['paymasterPostOpGasLimit'],
        'paymasterVerificationGasLimit': !runtime.exists(json, 'paymasterVerificationGasLimit') ? undefined : json['paymasterVerificationGasLimit'],
        'preVerificationGas': !runtime.exists(json, 'preVerificationGas') ? undefined : json['preVerificationGas'],
        'sender': !runtime.exists(json, 'sender') ? undefined : json['sender'],
        'signature': !runtime.exists(json, 'signature') ? undefined : json['signature'],
        'verificationGasLimit': !runtime.exists(json, 'verificationGasLimit') ? undefined : json['verificationGasLimit'],
    };
}
function SignMessageUserOperationDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorization': SignMessageAuthorizationSignature.SignMessageAuthorizationSignatureToJSON(value.authorization),
        'callData': value.callData,
        'callGasLimit': value.callGasLimit,
        'factory': value.factory,
        'factoryData': value.factoryData,
        'maxFeePerGas': value.maxFeePerGas,
        'maxPriorityFeePerGas': value.maxPriorityFeePerGas,
        'nonce': value.nonce,
        'paymaster': value.paymaster,
        'paymasterData': value.paymasterData,
        'paymasterPostOpGasLimit': value.paymasterPostOpGasLimit,
        'paymasterVerificationGasLimit': value.paymasterVerificationGasLimit,
        'preVerificationGas': value.preVerificationGas,
        'sender': value.sender,
        'signature': value.signature,
        'verificationGasLimit': value.verificationGasLimit,
    };
}

exports.SignMessageUserOperationDataFromJSON = SignMessageUserOperationDataFromJSON;
exports.SignMessageUserOperationDataFromJSONTyped = SignMessageUserOperationDataFromJSONTyped;
exports.SignMessageUserOperationDataToJSON = SignMessageUserOperationDataToJSON;
