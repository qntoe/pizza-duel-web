'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CoinbaseOnrampOrderPaymentMethod = require('./CoinbaseOnrampOrderPaymentMethod.cjs');

/* tslint:disable */
function CoinbaseOnrampOrderCreateRequestFromJSON(json) {
    return CoinbaseOnrampOrderCreateRequestFromJSONTyped(json);
}
function CoinbaseOnrampOrderCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'agreementAcceptedAt': (new Date(json['agreementAcceptedAt'])),
        'destinationAddress': json['destinationAddress'],
        'destinationNetwork': json['destinationNetwork'],
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
        'isQuote': !runtime.exists(json, 'isQuote') ? undefined : json['isQuote'],
        'partnerUserRef': json['partnerUserRef'],
        'paymentAmount': !runtime.exists(json, 'paymentAmount') ? undefined : json['paymentAmount'],
        'paymentCurrency': json['paymentCurrency'],
        'paymentMethod': CoinbaseOnrampOrderPaymentMethod.CoinbaseOnrampOrderPaymentMethodFromJSON(json['paymentMethod']),
        'purchaseAmount': !runtime.exists(json, 'purchaseAmount') ? undefined : json['purchaseAmount'],
        'purchaseCurrency': json['purchaseCurrency'],
    };
}
function CoinbaseOnrampOrderCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'agreementAcceptedAt': (value.agreementAcceptedAt.toISOString()),
        'destinationAddress': value.destinationAddress,
        'destinationNetwork': value.destinationNetwork,
        'domain': value.domain,
        'isQuote': value.isQuote,
        'partnerUserRef': value.partnerUserRef,
        'paymentAmount': value.paymentAmount,
        'paymentCurrency': value.paymentCurrency,
        'paymentMethod': CoinbaseOnrampOrderPaymentMethod.CoinbaseOnrampOrderPaymentMethodToJSON(value.paymentMethod),
        'purchaseAmount': value.purchaseAmount,
        'purchaseCurrency': value.purchaseCurrency,
    };
}

exports.CoinbaseOnrampOrderCreateRequestFromJSON = CoinbaseOnrampOrderCreateRequestFromJSON;
exports.CoinbaseOnrampOrderCreateRequestFromJSONTyped = CoinbaseOnrampOrderCreateRequestFromJSONTyped;
exports.CoinbaseOnrampOrderCreateRequestToJSON = CoinbaseOnrampOrderCreateRequestToJSON;
