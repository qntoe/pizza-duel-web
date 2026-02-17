import type { CryptoDotComPaymentCreateRequest as ApiCryptoDotComPaymentCreateRequest } from '@dynamic-labs/sdk-api-core';
import type { Chain } from '../../chain';
export type { CryptoDotComPaymentResponse } from '@dynamic-labs/sdk-api-core';
export type CryptoDotComPaymentCreateRequest = Omit<ApiCryptoDotComPaymentCreateRequest, 'chain' | 'networkId'> & {
    chain: Chain;
    networkId: string;
};
//# sourceMappingURL=cryptoDotCom.types.d.ts.map