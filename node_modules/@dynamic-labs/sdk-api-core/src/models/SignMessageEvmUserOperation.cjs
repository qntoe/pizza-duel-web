'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SignMessageUserOperationData = require('./SignMessageUserOperationData.cjs');

/* tslint:disable */
function SignMessageEvmUserOperationFromJSON(json) {
    return SignMessageEvmUserOperationFromJSONTyped(json);
}
function SignMessageEvmUserOperationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainId': !runtime.exists(json, 'chainId') ? undefined : json['chainId'],
        'entryPoint': !runtime.exists(json, 'entryPoint') ? undefined : json['entryPoint'],
        'operation': !runtime.exists(json, 'operation') ? undefined : SignMessageUserOperationData.SignMessageUserOperationDataFromJSON(json['operation']),
    };
}
function SignMessageEvmUserOperationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainId': value.chainId,
        'entryPoint': value.entryPoint,
        'operation': SignMessageUserOperationData.SignMessageUserOperationDataToJSON(value.operation),
    };
}

exports.SignMessageEvmUserOperationFromJSON = SignMessageEvmUserOperationFromJSON;
exports.SignMessageEvmUserOperationFromJSONTyped = SignMessageEvmUserOperationFromJSONTyped;
exports.SignMessageEvmUserOperationToJSON = SignMessageEvmUserOperationToJSON;
