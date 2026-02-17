'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CoinbaseOnrampBuyUrlExperience = require('./CoinbaseOnrampBuyUrlExperience.cjs');

/* tslint:disable */
function CoinbaseOnrampGetBuyUrlRequestFromJSON(json) {
    return CoinbaseOnrampGetBuyUrlRequestFromJSONTyped(json);
}
function CoinbaseOnrampGetBuyUrlRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assets': !runtime.exists(json, 'assets') ? undefined : json['assets'],
        'defaultNetwork': !runtime.exists(json, 'defaultNetwork') ? undefined : json['defaultNetwork'],
        'defaultAsset': !runtime.exists(json, 'defaultAsset') ? undefined : json['defaultAsset'],
        'defaultExperience': !runtime.exists(json, 'defaultExperience') ? undefined : CoinbaseOnrampBuyUrlExperience.CoinbaseOnrampBuyUrlExperienceFromJSON(json['defaultExperience']),
        'defaultPaymentMethod': !runtime.exists(json, 'defaultPaymentMethod') ? undefined : json['defaultPaymentMethod'],
        'destinationAddress': json['destinationAddress'],
        'fiatCurrency': !runtime.exists(json, 'fiatCurrency') ? undefined : json['fiatCurrency'],
        'handlingRequestedUrls': !runtime.exists(json, 'handlingRequestedUrls') ? undefined : json['handlingRequestedUrls'],
        'networks': json['networks'],
        'partnerUserRef': !runtime.exists(json, 'partnerUserRef') ? undefined : json['partnerUserRef'],
        'presetCryptoAmount': !runtime.exists(json, 'presetCryptoAmount') ? undefined : json['presetCryptoAmount'],
        'presetFiatAmount': !runtime.exists(json, 'presetFiatAmount') ? undefined : json['presetFiatAmount'],
        'redirectUrl': !runtime.exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
    };
}
function CoinbaseOnrampGetBuyUrlRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assets': value.assets,
        'defaultNetwork': value.defaultNetwork,
        'defaultAsset': value.defaultAsset,
        'defaultExperience': CoinbaseOnrampBuyUrlExperience.CoinbaseOnrampBuyUrlExperienceToJSON(value.defaultExperience),
        'defaultPaymentMethod': value.defaultPaymentMethod,
        'destinationAddress': value.destinationAddress,
        'fiatCurrency': value.fiatCurrency,
        'handlingRequestedUrls': value.handlingRequestedUrls,
        'networks': value.networks,
        'partnerUserRef': value.partnerUserRef,
        'presetCryptoAmount': value.presetCryptoAmount,
        'presetFiatAmount': value.presetFiatAmount,
        'redirectUrl': value.redirectUrl,
    };
}

exports.CoinbaseOnrampGetBuyUrlRequestFromJSON = CoinbaseOnrampGetBuyUrlRequestFromJSON;
exports.CoinbaseOnrampGetBuyUrlRequestFromJSONTyped = CoinbaseOnrampGetBuyUrlRequestFromJSONTyped;
exports.CoinbaseOnrampGetBuyUrlRequestToJSON = CoinbaseOnrampGetBuyUrlRequestToJSON;
