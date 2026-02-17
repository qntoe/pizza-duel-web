import { exists } from '../runtime.js';
import { SignMessageEip7702AuthFromJSON, SignMessageEip7702AuthToJSON } from './SignMessageEip7702Auth.js';
import { SignMessageEvmMessageFromJSON, SignMessageEvmMessageToJSON } from './SignMessageEvmMessage.js';
import { SignMessageEvmTransactionFromJSON, SignMessageEvmTransactionToJSON } from './SignMessageEvmTransaction.js';
import { SignMessageEvmTypedDataFromJSON, SignMessageEvmTypedDataToJSON } from './SignMessageEvmTypedData.js';
import { SignMessageEvmUserOperationFromJSON, SignMessageEvmUserOperationToJSON } from './SignMessageEvmUserOperation.js';
import { SignMessageSuiTransactionFromJSON, SignMessageSuiTransactionToJSON } from './SignMessageSuiTransaction.js';
import { SignMessageSvmTransactionFromJSON, SignMessageSvmTransactionToJSON } from './SignMessageSvmTransaction.js';

/* tslint:disable */
function SignMessageContextFromJSON(json) {
    return SignMessageContextFromJSONTyped(json);
}
function SignMessageContextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'evmTransaction': !exists(json, 'evmTransaction') ? undefined : SignMessageEvmTransactionFromJSON(json['evmTransaction']),
        'evmUserOperation': !exists(json, 'evmUserOperation') ? undefined : SignMessageEvmUserOperationFromJSON(json['evmUserOperation']),
        'svmTransaction': !exists(json, 'svmTransaction') ? undefined : SignMessageSvmTransactionFromJSON(json['svmTransaction']),
        'suiTransaction': !exists(json, 'suiTransaction') ? undefined : SignMessageSuiTransactionFromJSON(json['suiTransaction']),
        'eip7702Auth': !exists(json, 'eip7702Auth') ? undefined : SignMessageEip7702AuthFromJSON(json['eip7702Auth']),
        'evmMessage': !exists(json, 'evmMessage') ? undefined : SignMessageEvmMessageFromJSON(json['evmMessage']),
        'svmMessage': !exists(json, 'svmMessage') ? undefined : json['svmMessage'],
        'suiMessage': !exists(json, 'suiMessage') ? undefined : json['suiMessage'],
        'evmTypedData': !exists(json, 'evmTypedData') ? undefined : SignMessageEvmTypedDataFromJSON(json['evmTypedData']),
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
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
        'evmTransaction': SignMessageEvmTransactionToJSON(value.evmTransaction),
        'evmUserOperation': SignMessageEvmUserOperationToJSON(value.evmUserOperation),
        'svmTransaction': SignMessageSvmTransactionToJSON(value.svmTransaction),
        'suiTransaction': SignMessageSuiTransactionToJSON(value.suiTransaction),
        'eip7702Auth': SignMessageEip7702AuthToJSON(value.eip7702Auth),
        'evmMessage': SignMessageEvmMessageToJSON(value.evmMessage),
        'svmMessage': value.svmMessage,
        'suiMessage': value.suiMessage,
        'evmTypedData': SignMessageEvmTypedDataToJSON(value.evmTypedData),
        'domain': value.domain,
    };
}

export { SignMessageContextFromJSON, SignMessageContextFromJSONTyped, SignMessageContextToJSON };
