import { exists } from '../runtime.js';
import { SignMessageUserOperationDataFromJSON, SignMessageUserOperationDataToJSON } from './SignMessageUserOperationData.js';

/* tslint:disable */
function SignMessageEvmUserOperationFromJSON(json) {
    return SignMessageEvmUserOperationFromJSONTyped(json);
}
function SignMessageEvmUserOperationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainId': !exists(json, 'chainId') ? undefined : json['chainId'],
        'entryPoint': !exists(json, 'entryPoint') ? undefined : json['entryPoint'],
        'operation': !exists(json, 'operation') ? undefined : SignMessageUserOperationDataFromJSON(json['operation']),
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
        'operation': SignMessageUserOperationDataToJSON(value.operation),
    };
}

export { SignMessageEvmUserOperationFromJSON, SignMessageEvmUserOperationFromJSONTyped, SignMessageEvmUserOperationToJSON };
