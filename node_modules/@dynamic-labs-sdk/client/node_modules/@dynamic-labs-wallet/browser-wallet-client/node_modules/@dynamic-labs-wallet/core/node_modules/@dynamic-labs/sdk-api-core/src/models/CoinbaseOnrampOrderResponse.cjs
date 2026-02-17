'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CoinbaseOnrampOrder = require('./CoinbaseOnrampOrder.cjs');
var CoinbaseOnrampOrderResponsePaymentLink = require('./CoinbaseOnrampOrderResponsePaymentLink.cjs');

/* tslint:disable */
function CoinbaseOnrampOrderResponseFromJSON(json) {
    return CoinbaseOnrampOrderResponseFromJSONTyped(json);
}
function CoinbaseOnrampOrderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'order': CoinbaseOnrampOrder.CoinbaseOnrampOrderFromJSON(json['order']),
        'paymentLink': !runtime.exists(json, 'paymentLink') ? undefined : CoinbaseOnrampOrderResponsePaymentLink.CoinbaseOnrampOrderResponsePaymentLinkFromJSON(json['paymentLink']),
    };
}
function CoinbaseOnrampOrderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'order': CoinbaseOnrampOrder.CoinbaseOnrampOrderToJSON(value.order),
        'paymentLink': CoinbaseOnrampOrderResponsePaymentLink.CoinbaseOnrampOrderResponsePaymentLinkToJSON(value.paymentLink),
    };
}

exports.CoinbaseOnrampOrderResponseFromJSON = CoinbaseOnrampOrderResponseFromJSON;
exports.CoinbaseOnrampOrderResponseFromJSONTyped = CoinbaseOnrampOrderResponseFromJSONTyped;
exports.CoinbaseOnrampOrderResponseToJSON = CoinbaseOnrampOrderResponseToJSON;
