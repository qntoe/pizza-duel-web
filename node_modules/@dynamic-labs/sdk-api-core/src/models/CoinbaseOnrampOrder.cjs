'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CoinbaseOnrampFee = require('./CoinbaseOnrampFee.cjs');
var CoinbaseOnrampOrderPaymentMethod = require('./CoinbaseOnrampOrderPaymentMethod.cjs');
var CoinbaseOnrampOrderStatus = require('./CoinbaseOnrampOrderStatus.cjs');

/* tslint:disable */
function CoinbaseOnrampOrderFromJSON(json) {
    return CoinbaseOnrampOrderFromJSONTyped(json);
}
function CoinbaseOnrampOrderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'orderId': json['orderId'],
        'paymentTotal': json['paymentTotal'],
        'paymentSubtotal': json['paymentSubtotal'],
        'paymentCurrency': json['paymentCurrency'],
        'paymentMethod': CoinbaseOnrampOrderPaymentMethod.CoinbaseOnrampOrderPaymentMethodFromJSON(json['paymentMethod']),
        'purchaseAmount': json['purchaseAmount'],
        'purchaseCurrency': json['purchaseCurrency'],
        'fees': (json['fees'].map(CoinbaseOnrampFee.CoinbaseOnrampFeeFromJSON)),
        'exchangeRate': json['exchangeRate'],
        'destinationAddress': json['destinationAddress'],
        'destinationNetwork': json['destinationNetwork'],
        'status': CoinbaseOnrampOrderStatus.CoinbaseOnrampOrderStatusFromJSON(json['status']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'txHash': !runtime.exists(json, 'txHash') ? undefined : json['txHash'],
        'partnerUserRef': !runtime.exists(json, 'partnerUserRef') ? undefined : json['partnerUserRef'],
    };
}
function CoinbaseOnrampOrderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'orderId': value.orderId,
        'paymentTotal': value.paymentTotal,
        'paymentSubtotal': value.paymentSubtotal,
        'paymentCurrency': value.paymentCurrency,
        'paymentMethod': CoinbaseOnrampOrderPaymentMethod.CoinbaseOnrampOrderPaymentMethodToJSON(value.paymentMethod),
        'purchaseAmount': value.purchaseAmount,
        'purchaseCurrency': value.purchaseCurrency,
        'fees': (value.fees.map(CoinbaseOnrampFee.CoinbaseOnrampFeeToJSON)),
        'exchangeRate': value.exchangeRate,
        'destinationAddress': value.destinationAddress,
        'destinationNetwork': value.destinationNetwork,
        'status': CoinbaseOnrampOrderStatus.CoinbaseOnrampOrderStatusToJSON(value.status),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'txHash': value.txHash,
        'partnerUserRef': value.partnerUserRef,
    };
}

exports.CoinbaseOnrampOrderFromJSON = CoinbaseOnrampOrderFromJSON;
exports.CoinbaseOnrampOrderFromJSONTyped = CoinbaseOnrampOrderFromJSONTyped;
exports.CoinbaseOnrampOrderToJSON = CoinbaseOnrampOrderToJSON;
