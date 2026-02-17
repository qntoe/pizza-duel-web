'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');
var SmsCountryCode = require('./SmsCountryCode.cjs');
var UserIdentifierTypeEnum = require('./UserIdentifierTypeEnum.cjs');
var WaasChainEnum = require('./WaasChainEnum.cjs');

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
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumFromJSON(json['type']),
        'chains': (json['chains'].map(WaasChainEnum.WaasChainEnumFromJSON)),
        'smsCountryCode': !runtime.exists(json, 'smsCountryCode') ? undefined : SmsCountryCode.SmsCountryCodeFromJSON(json['smsCountryCode']),
        'socialProvider': !runtime.exists(json, 'socialProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['socialProvider']),
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
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumToJSON(value.type),
        'chains': (value.chains.map(WaasChainEnum.WaasChainEnumToJSON)),
        'smsCountryCode': SmsCountryCode.SmsCountryCodeToJSON(value.smsCountryCode),
        'socialProvider': ProviderEnum.ProviderEnumToJSON(value.socialProvider),
    };
}

exports.CreateUserWaasWalletsRequestFromJSON = CreateUserWaasWalletsRequestFromJSON;
exports.CreateUserWaasWalletsRequestFromJSONTyped = CreateUserWaasWalletsRequestFromJSONTyped;
exports.CreateUserWaasWalletsRequestToJSON = CreateUserWaasWalletsRequestToJSON;
