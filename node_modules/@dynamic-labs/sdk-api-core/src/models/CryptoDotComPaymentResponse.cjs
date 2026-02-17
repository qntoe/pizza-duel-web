'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function CryptoDotComPaymentResponseFromJSON(json) {
    return CryptoDotComPaymentResponseFromJSONTyped(json);
}
function CryptoDotComPaymentResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'amount': json['amount'],
        'currency': json['currency'],
        'amountRefunded': !runtime.exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'created': !runtime.exists(json, 'created') ? undefined : json['created'],
        'cryptoCurrency': !runtime.exists(json, 'cryptoCurrency') ? undefined : json['cryptoCurrency'],
        'cryptoAmount': !runtime.exists(json, 'cryptoAmount') ? undefined : json['cryptoAmount'],
        'customerId': !runtime.exists(json, 'customerId') ? undefined : json['customerId'],
        'paymentUrl': json['paymentUrl'],
        'qrCode': json['qrCode'],
        'returnUrl': !runtime.exists(json, 'returnUrl') ? undefined : json['returnUrl'],
        'cancelUrl': !runtime.exists(json, 'cancelUrl') ? undefined : json['cancelUrl'],
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'liveMode': !runtime.exists(json, 'liveMode') ? undefined : json['liveMode'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : json['metadata'],
        'orderId': !runtime.exists(json, 'orderId') ? undefined : json['orderId'],
        'recipient': !runtime.exists(json, 'recipient') ? undefined : json['recipient'],
        'refunded': !runtime.exists(json, 'refunded') ? undefined : json['refunded'],
        'status': json['status'],
        'expiredAt': !runtime.exists(json, 'expiredAt') ? undefined : json['expiredAt'],
    };
}
function CryptoDotComPaymentResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'amount': value.amount,
        'currency': value.currency,
        'amountRefunded': value.amountRefunded,
        'created': value.created,
        'cryptoCurrency': value.cryptoCurrency,
        'cryptoAmount': value.cryptoAmount,
        'customerId': value.customerId,
        'paymentUrl': value.paymentUrl,
        'qrCode': value.qrCode,
        'returnUrl': value.returnUrl,
        'cancelUrl': value.cancelUrl,
        'description': value.description,
        'liveMode': value.liveMode,
        'metadata': value.metadata,
        'orderId': value.orderId,
        'recipient': value.recipient,
        'refunded': value.refunded,
        'status': value.status,
        'expiredAt': value.expiredAt,
    };
}

exports.CryptoDotComPaymentResponseFromJSON = CryptoDotComPaymentResponseFromJSON;
exports.CryptoDotComPaymentResponseFromJSONTyped = CryptoDotComPaymentResponseFromJSONTyped;
exports.CryptoDotComPaymentResponseToJSON = CryptoDotComPaymentResponseToJSON;
