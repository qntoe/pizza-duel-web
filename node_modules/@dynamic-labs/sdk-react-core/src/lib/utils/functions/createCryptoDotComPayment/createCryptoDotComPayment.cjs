'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var client = require('@dynamic-labs-sdk/client');

const createCryptoDotComPayment = (paymentParams) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return client.createCryptoDotComPayment(Object.assign(Object.assign({}, paymentParams), { chain: paymentParams.chain }));
});

exports.createCryptoDotComPayment = createCryptoDotComPayment;
