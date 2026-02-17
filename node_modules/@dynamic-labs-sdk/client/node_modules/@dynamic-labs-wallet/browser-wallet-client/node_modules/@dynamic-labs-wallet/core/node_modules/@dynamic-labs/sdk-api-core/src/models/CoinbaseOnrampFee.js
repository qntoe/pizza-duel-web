import { CoinbaseOnrampFeeTypeFromJSON, CoinbaseOnrampFeeTypeToJSON } from './CoinbaseOnrampFeeType.js';

/* tslint:disable */
function CoinbaseOnrampFeeFromJSON(json) {
    return CoinbaseOnrampFeeFromJSONTyped(json);
}
function CoinbaseOnrampFeeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': CoinbaseOnrampFeeTypeFromJSON(json['type']),
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
        'type': CoinbaseOnrampFeeTypeToJSON(value.type),
        'amount': value.amount,
        'currency': value.currency,
    };
}

export { CoinbaseOnrampFeeFromJSON, CoinbaseOnrampFeeFromJSONTyped, CoinbaseOnrampFeeToJSON };
