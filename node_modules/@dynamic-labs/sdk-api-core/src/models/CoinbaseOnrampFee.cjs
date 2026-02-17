'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CoinbaseOnrampFeeType = require('./CoinbaseOnrampFeeType.cjs');

/* tslint:disable */
function CoinbaseOnrampFeeFromJSON(json) {
    return CoinbaseOnrampFeeFromJSONTyped(json);
}
function CoinbaseOnrampFeeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': CoinbaseOnrampFeeType.CoinbaseOnrampFeeTypeFromJSON(json['type']),
        'amount': json['amount'],
        'currency': json['currency'],
    };
}
function CoinbaseOnrampFeeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': CoinbaseOnrampFeeType.CoinbaseOnrampFeeTypeToJSON(value.type),
        'amount': value.amount,
        'currency': value.currency,
    };
}

exports.CoinbaseOnrampFeeFromJSON = CoinbaseOnrampFeeFromJSON;
exports.CoinbaseOnrampFeeFromJSONTyped = CoinbaseOnrampFeeFromJSONTyped;
exports.CoinbaseOnrampFeeToJSON = CoinbaseOnrampFeeToJSON;
