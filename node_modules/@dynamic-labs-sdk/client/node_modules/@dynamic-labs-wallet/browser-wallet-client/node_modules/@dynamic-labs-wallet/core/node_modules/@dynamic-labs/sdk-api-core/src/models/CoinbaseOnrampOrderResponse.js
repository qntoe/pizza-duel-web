import { exists } from '../runtime.js';
import { CoinbaseOnrampOrderFromJSON, CoinbaseOnrampOrderToJSON } from './CoinbaseOnrampOrder.js';
import { CoinbaseOnrampOrderResponsePaymentLinkFromJSON, CoinbaseOnrampOrderResponsePaymentLinkToJSON } from './CoinbaseOnrampOrderResponsePaymentLink.js';

/* tslint:disable */
function CoinbaseOnrampOrderResponseFromJSON(json) {
    return CoinbaseOnrampOrderResponseFromJSONTyped(json);
}
function CoinbaseOnrampOrderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'order': CoinbaseOnrampOrderFromJSON(json['order']),
        'paymentLink': !exists(json, 'paymentLink') ? undefined : CoinbaseOnrampOrderResponsePaymentLinkFromJSON(json['paymentLink']),
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
        'order': CoinbaseOnrampOrderToJSON(value.order),
        'paymentLink': CoinbaseOnrampOrderResponsePaymentLinkToJSON(value.paymentLink),
    };
}

export { CoinbaseOnrampOrderResponseFromJSON, CoinbaseOnrampOrderResponseFromJSONTyped, CoinbaseOnrampOrderResponseToJSON };
