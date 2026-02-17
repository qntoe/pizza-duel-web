'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { createCryptoDotComPayment as createCryptoDotComPayment$1 } from '@dynamic-labs-sdk/client';

const createCryptoDotComPayment = (paymentParams) => __awaiter(void 0, void 0, void 0, function* () {
    return createCryptoDotComPayment$1(Object.assign(Object.assign({}, paymentParams), { chain: paymentParams.chain }));
});

export { createCryptoDotComPayment };
