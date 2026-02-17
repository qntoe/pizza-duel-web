'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SignMessageEip7702Auth = require('./SignMessageEip7702Auth.cjs');
var SignMessageEvmMessage = require('./SignMessageEvmMessage.cjs');
var SignMessageEvmTransaction = require('./SignMessageEvmTransaction.cjs');
var SignMessageEvmTypedData = require('./SignMessageEvmTypedData.cjs');
var SignMessageEvmUserOperation = require('./SignMessageEvmUserOperation.cjs');
var SignMessageSuiTransaction = require('./SignMessageSuiTransaction.cjs');
var SignMessageSvmTransaction = require('./SignMessageSvmTransaction.cjs');

/* tslint:disable */
function SignMessageContextFromJSON(json) {
    return SignMessageContextFromJSONTyped(json);
}
function SignMessageContextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'evmTransaction': !runtime.exists(json, 'evmTransaction') ? undefined : SignMessageEvmTransaction.SignMessageEvmTransactionFromJSON(json['evmTransaction']),
        'evmUserOperation': !runtime.exists(json, 'evmUserOperation') ? undefined : SignMessageEvmUserOperation.SignMessageEvmUserOperationFromJSON(json['evmUserOperation']),
        'svmTransaction': !runtime.exists(json, 'svmTransaction') ? undefined : SignMessageSvmTransaction.SignMessageSvmTransactionFromJSON(json['svmTransaction']),
        'suiTransaction': !runtime.exists(json, 'suiTransaction') ? undefined : SignMessageSuiTransaction.SignMessageSuiTransactionFromJSON(json['suiTransaction']),
        'eip7702Auth': !runtime.exists(json, 'eip7702Auth') ? undefined : SignMessageEip7702Auth.SignMessageEip7702AuthFromJSON(json['eip7702Auth']),
        'evmMessage': !runtime.exists(json, 'evmMessage') ? undefined : SignMessageEvmMessage.SignMessageEvmMessageFromJSON(json['evmMessage']),
        'svmMessage': !runtime.exists(json, 'svmMessage') ? undefined : json['svmMessage'],
        'suiMessage': !runtime.exists(json, 'suiMessage') ? undefined : json['suiMessage'],
        'evmTypedData': !runtime.exists(json, 'evmTypedData') ? undefined : SignMessageEvmTypedData.SignMessageEvmTypedDataFromJSON(json['evmTypedData']),
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
    };
}
function SignMessageContextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'evmTransaction': SignMessageEvmTransaction.SignMessageEvmTransactionToJSON(value.evmTransaction),
        'evmUserOperation': SignMessageEvmUserOperation.SignMessageEvmUserOperationToJSON(value.evmUserOperation),
        'svmTransaction': SignMessageSvmTransaction.SignMessageSvmTransactionToJSON(value.svmTransaction),
        'suiTransaction': SignMessageSuiTransaction.SignMessageSuiTransactionToJSON(value.suiTransaction),
        'eip7702Auth': SignMessageEip7702Auth.SignMessageEip7702AuthToJSON(value.eip7702Auth),
        'evmMessage': SignMessageEvmMessage.SignMessageEvmMessageToJSON(value.evmMessage),
        'svmMessage': value.svmMessage,
        'suiMessage': value.suiMessage,
        'evmTypedData': SignMessageEvmTypedData.SignMessageEvmTypedDataToJSON(value.evmTypedData),
        'domain': value.domain,
    };
}

exports.SignMessageContextFromJSON = SignMessageContextFromJSON;
exports.SignMessageContextFromJSONTyped = SignMessageContextFromJSONTyped;
exports.SignMessageContextToJSON = SignMessageContextToJSON;
