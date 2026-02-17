import { CryptoDotComPaymentCreateRequest, CryptoDotComPaymentResponse } from '@dynamic-labs-sdk/client';
type CreateCryptoDotComPaymentParams = Omit<CryptoDotComPaymentCreateRequest, 'chain'> & {
    chain: string;
};
export declare const createCryptoDotComPayment: (paymentParams: CreateCryptoDotComPaymentParams) => Promise<CryptoDotComPaymentResponse>;
export {};
