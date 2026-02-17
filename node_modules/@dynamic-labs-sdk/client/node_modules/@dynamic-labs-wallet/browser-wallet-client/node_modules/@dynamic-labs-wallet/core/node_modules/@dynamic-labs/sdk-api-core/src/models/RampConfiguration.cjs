'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function RampConfigurationFromJSON(json) {
    return RampConfigurationFromJSONTyped(json);
}
function RampConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'name': json['name'],
        'iconUrl': json['iconUrl'],
        'url': json['url'],
        'qrCode': !runtime.exists(json, 'qrCode') ? undefined : json['qrCode'],
    };
}
function RampConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'name': value.name,
        'iconUrl': value.iconUrl,
        'url': value.url,
        'qrCode': value.qrCode,
    };
}

exports.RampConfigurationFromJSON = RampConfigurationFromJSON;
exports.RampConfigurationFromJSONTyped = RampConfigurationFromJSONTyped;
exports.RampConfigurationToJSON = RampConfigurationToJSON;
