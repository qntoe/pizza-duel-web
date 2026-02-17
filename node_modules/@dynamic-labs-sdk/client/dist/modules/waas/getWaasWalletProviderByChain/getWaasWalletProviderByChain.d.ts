import type { DynamicClient } from '../../../client/types/DynamicClient';
import type { Chain } from '../../chain';
import type { WaasWalletProvider } from '../waas.types';
type GetWaasWalletProviderByChainParams = {
    chain: Chain;
};
export declare const getWaasWalletProviderByChain: ({ chain }: GetWaasWalletProviderByChainParams, client: DynamicClient) => WaasWalletProvider;
export {};
//# sourceMappingURL=getWaasWalletProviderByChain.d.ts.map