import type { DynamicClient } from '../../../client/types/DynamicClient';
import type { Chain } from '../../chain';
import type { WaasProvider } from '../waas.types';
type CreateWaasProviderParams = {
    chain: Chain;
    sdkClient: DynamicClient;
};
export declare const createWaasProvider: ({ sdkClient, chain, }: CreateWaasProviderParams) => WaasProvider;
export {};
//# sourceMappingURL=createWaasProvider.d.ts.map