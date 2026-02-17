import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';

/* tslint:disable */
function CryptoDotComPaymentCreateRequestFromJSON(json) {
    return CryptoDotComPaymentCreateRequestFromJSONTyped(json);
}
function CryptoDotComPaymentCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'currency': json['currency'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'subMerchantId': !exists(json, 'subMerchantId') ? undefined : json['subMerchantId'],
        'walletAddress': json['walletAddress'],
        'networkId': !exists(json, 'networkId') ? undefined : json['networkId'],
        'chain': ChainEnumFromJSON(json['chain']),
        'merchantName': !exists(json, 'merchantName') ? undefined : json['merchantName'],
    };
}
function CryptoDotComPaymentCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currency': value.currency,
        'description': value.description,
        'metadata': value.metadata,
        'orderId': value.orderId,
        'subMerchantId': value.subMerchantId,
        'walletAddress': value.walletAddress,
        'networkId': value.networkId,
        'chain': ChainEnumToJSON(value.chain),
        'merchantName': value.merchantName,
    };
}

export { CryptoDotComPaymentCreateRequestFromJSON, CryptoDotComPaymentCreateRequestFromJSONTyped, CryptoDotComPaymentCreateRequestToJSON };
