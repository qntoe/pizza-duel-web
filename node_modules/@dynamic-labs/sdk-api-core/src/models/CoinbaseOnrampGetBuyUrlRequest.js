import { exists } from '../runtime.js';
import { CoinbaseOnrampBuyUrlExperienceFromJSON, CoinbaseOnrampBuyUrlExperienceToJSON } from './CoinbaseOnrampBuyUrlExperience.js';

/* tslint:disable */
function CoinbaseOnrampGetBuyUrlRequestFromJSON(json) {
    return CoinbaseOnrampGetBuyUrlRequestFromJSONTyped(json);
}
function CoinbaseOnrampGetBuyUrlRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assets': !exists(json, 'assets') ? undefined : json['assets'],
        'defaultNetwork': !exists(json, 'defaultNetwork') ? undefined : json['defaultNetwork'],
        'defaultAsset': !exists(json, 'defaultAsset') ? undefined : json['defaultAsset'],
        'defaultExperience': !exists(json, 'defaultExperience') ? undefined : CoinbaseOnrampBuyUrlExperienceFromJSON(json['defaultExperience']),
        'defaultPaymentMethod': !exists(json, 'defaultPaymentMethod') ? undefined : json['defaultPaymentMethod'],
        'destinationAddress': json['destinationAddress'],
        'fiatCurrency': !exists(json, 'fiatCurrency') ? undefined : json['fiatCurrency'],
        'handlingRequestedUrls': !exists(json, 'handlingRequestedUrls') ? undefined : json['handlingRequestedUrls'],
        'networks': json['networks'],
        'partnerUserRef': !exists(json, 'partnerUserRef') ? undefined : json['partnerUserRef'],
        'presetCryptoAmount': !exists(json, 'presetCryptoAmount') ? undefined : json['presetCryptoAmount'],
        'presetFiatAmount': !exists(json, 'presetFiatAmount') ? undefined : json['presetFiatAmount'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
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
        'defaultExperience': CoinbaseOnrampBuyUrlExperienceToJSON(value.defaultExperience),
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

export { CoinbaseOnrampGetBuyUrlRequestFromJSON, CoinbaseOnrampGetBuyUrlRequestFromJSONTyped, CoinbaseOnrampGetBuyUrlRequestToJSON };
