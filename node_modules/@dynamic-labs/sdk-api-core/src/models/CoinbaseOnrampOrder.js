import { exists } from '../runtime.js';
import { CoinbaseOnrampFeeFromJSON, CoinbaseOnrampFeeToJSON } from './CoinbaseOnrampFee.js';
import { CoinbaseOnrampOrderPaymentMethodFromJSON, CoinbaseOnrampOrderPaymentMethodToJSON } from './CoinbaseOnrampOrderPaymentMethod.js';
import { CoinbaseOnrampOrderStatusFromJSON, CoinbaseOnrampOrderStatusToJSON } from './CoinbaseOnrampOrderStatus.js';

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
        'paymentMethod': CoinbaseOnrampOrderPaymentMethodFromJSON(json['paymentMethod']),
        'purchaseAmount': json['purchaseAmount'],
        'purchaseCurrency': json['purchaseCurrency'],
        'fees': (json['fees'].map(CoinbaseOnrampFeeFromJSON)),
        'exchangeRate': json['exchangeRate'],
        'destinationAddress': json['destinationAddress'],
        'destinationNetwork': json['destinationNetwork'],
        'status': CoinbaseOnrampOrderStatusFromJSON(json['status']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'txHash': !exists(json, 'txHash') ? undefined : json['txHash'],
        'partnerUserRef': !exists(json, 'partnerUserRef') ? undefined : json['partnerUserRef'],
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
        'paymentMethod': CoinbaseOnrampOrderPaymentMethodToJSON(value.paymentMethod),
        'purchaseAmount': value.purchaseAmount,
        'purchaseCurrency': value.purchaseCurrency,
        'fees': (value.fees.map(CoinbaseOnrampFeeToJSON)),
        'exchangeRate': value.exchangeRate,
        'destinationAddress': value.destinationAddress,
        'destinationNetwork': value.destinationNetwork,
        'status': CoinbaseOnrampOrderStatusToJSON(value.status),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'txHash': value.txHash,
        'partnerUserRef': value.partnerUserRef,
    };
}

export { CoinbaseOnrampOrderFromJSON, CoinbaseOnrampOrderFromJSONTyped, CoinbaseOnrampOrderToJSON };
