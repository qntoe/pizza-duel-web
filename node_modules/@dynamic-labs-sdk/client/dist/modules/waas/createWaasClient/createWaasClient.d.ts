import { DynamicWalletClient } from '@dynamic-labs-wallet/browser-wallet-client';
import type { DynamicClient } from '../../../client/types/DynamicClient';
type CreateWaasClientParams = {
    chainName: string;
};
export declare const createWaasClient: ({ chainName }: CreateWaasClientParams, client: DynamicClient) => DynamicWalletClient;
export {};
//# sourceMappingURL=createWaasClient.d.ts.map