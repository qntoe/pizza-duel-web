import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';
import { SmsCountryCodeFromJSON, SmsCountryCodeToJSON } from './SmsCountryCode.js';
import { UserIdentifierTypeEnumFromJSON, UserIdentifierTypeEnumToJSON } from './UserIdentifierTypeEnum.js';
import { WaasChainEnumFromJSON, WaasChainEnumToJSON } from './WaasChainEnum.js';

/* tslint:disable */
function CreateUserWaasWalletsRequestFromJSON(json) {
    return CreateUserWaasWalletsRequestFromJSONTyped(json);
}
function CreateUserWaasWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identifier': json['identifier'],
        'type': UserIdentifierTypeEnumFromJSON(json['type']),
        'chains': (json['chains'].map(WaasChainEnumFromJSON)),
        'smsCountryCode': !exists(json, 'smsCountryCode') ? undefined : SmsCountryCodeFromJSON(json['smsCountryCode']),
        'socialProvider': !exists(json, 'socialProvider') ? undefined : ProviderEnumFromJSON(json['socialProvider']),
    };
}
function CreateUserWaasWalletsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identifier': value.identifier,
        'type': UserIdentifierTypeEnumToJSON(value.type),
        'chains': (value.chains.map(WaasChainEnumToJSON)),
        'smsCountryCode': SmsCountryCodeToJSON(value.smsCountryCode),
        'socialProvider': ProviderEnumToJSON(value.socialProvider),
    };
}

export { CreateUserWaasWalletsRequestFromJSON, CreateUserWaasWalletsRequestFromJSONTyped, CreateUserWaasWalletsRequestToJSON };
