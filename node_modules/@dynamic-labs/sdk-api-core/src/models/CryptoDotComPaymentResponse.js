import { exists } from '../runtime.js';

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
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'cryptoCurrency': !exists(json, 'cryptoCurrency') ? undefined : json['cryptoCurrency'],
        'cryptoAmount': !exists(json, 'cryptoAmount') ? undefined : json['cryptoAmount'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'paymentUrl': json['paymentUrl'],
        'qrCode': json['qrCode'],
        'returnUrl': !exists(json, 'returnUrl') ? undefined : json['returnUrl'],
        'cancelUrl': !exists(json, 'cancelUrl') ? undefined : json['cancelUrl'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'liveMode': !exists(json, 'liveMode') ? undefined : json['liveMode'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'refunded': !exists(json, 'refunded') ? undefined : json['refunded'],
        'status': json['status'],
        'expiredAt': !exists(json, 'expiredAt') ? undefined : json['expiredAt'],
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

export { CryptoDotComPaymentResponseFromJSON, CryptoDotComPaymentResponseFromJSONTyped, CryptoDotComPaymentResponseToJSON };
