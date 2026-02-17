'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');

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
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : json['metadata'],
        'orderId': !runtime.exists(json, 'orderId') ? undefined : json['orderId'],
        'subMerchantId': !runtime.exists(json, 'subMerchantId') ? undefined : json['subMerchantId'],
        'walletAddress': json['walletAddress'],
        'networkId': !runtime.exists(json, 'networkId') ? undefined : json['networkId'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'merchantName': !runtime.exists(json, 'merchantName') ? undefined : json['merchantName'],
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
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'merchantName': value.merchantName,
    };
}

exports.CryptoDotComPaymentCreateRequestFromJSON = CryptoDotComPaymentCreateRequestFromJSON;
exports.CryptoDotComPaymentCreateRequestFromJSONTyped = CryptoDotComPaymentCreateRequestFromJSONTyped;
exports.CryptoDotComPaymentCreateRequestToJSON = CryptoDotComPaymentCreateRequestToJSON;
