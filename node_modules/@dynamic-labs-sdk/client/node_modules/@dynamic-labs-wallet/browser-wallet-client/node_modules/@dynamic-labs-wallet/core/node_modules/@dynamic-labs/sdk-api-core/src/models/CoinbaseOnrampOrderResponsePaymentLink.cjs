'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CoinbaseOnrampOrderPaymentLinkType = require('./CoinbaseOnrampOrderPaymentLinkType.cjs');

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
        'paymentLinkType': CoinbaseOnrampOrderPaymentLinkType.CoinbaseOnrampOrderPaymentLinkTypeFromJSON(json['paymentLinkType']),
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
        'paymentLinkType': CoinbaseOnrampOrderPaymentLinkType.CoinbaseOnrampOrderPaymentLinkTypeToJSON(value.paymentLinkType),
    };
}

exports.CoinbaseOnrampOrderResponsePaymentLinkFromJSON = CoinbaseOnrampOrderResponsePaymentLinkFromJSON;
exports.CoinbaseOnrampOrderResponsePaymentLinkFromJSONTyped = CoinbaseOnrampOrderResponsePaymentLinkFromJSONTyped;
exports.CoinbaseOnrampOrderResponsePaymentLinkToJSON = CoinbaseOnrampOrderResponsePaymentLinkToJSON;
