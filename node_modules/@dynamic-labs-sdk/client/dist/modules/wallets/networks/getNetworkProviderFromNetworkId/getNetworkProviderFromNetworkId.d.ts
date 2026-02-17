import type { DynamicClient } from '../../../../client/types';
import type { Chain } from '../../../chain';
import type { NetworkProvider } from '../networkProvider/networkProvider.types';
type GetNetworkProviderFromNetworkIdProps = {
    chain: Chain;
    networkId: string;
};
export declare const getNetworkProviderFromNetworkId: ({ networkId, chain }: GetNetworkProviderFromNetworkIdProps, client: DynamicClient) => NetworkProvider;
export {};
//# sourceMappingURL=getNetworkProviderFromNetworkId.d.ts.map