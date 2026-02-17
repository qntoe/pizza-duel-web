import { CoinbaseOnrampOrderPaymentLinkTypeFromJSON, CoinbaseOnrampOrderPaymentLinkTypeToJSON } from './CoinbaseOnrampOrderPaymentLinkType.js';

/* tslint:disable */
function CoinbaseOnrampOrderResponsePaymentLinkFromJSON(json) {
    return CoinbaseOnrampOrderResponsePaymentLinkFromJSONTyped(json);
}
function CoinbaseOnrampOrderResponsePaymentLinkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'url': json['url'],
        'paymentLinkType': CoinbaseOnrampOrderPaymentLinkTypeFromJSON(json['paymentLinkType']),
    };
}
function CoinbaseOnrampOrderResponsePaymentLinkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'url': value.url,
        'paymentLinkType': CoinbaseOnrampOrderPaymentLinkTypeToJSON(value.paymentLinkType),
    };
}

export { CoinbaseOnrampOrderResponsePaymentLinkFromJSON, CoinbaseOnrampOrderResponsePaymentLinkFromJSONTyped, CoinbaseOnrampOrderResponsePaymentLinkToJSON };
