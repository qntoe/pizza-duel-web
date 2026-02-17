import type { Chain } from '../../../chain';
import type { NetworkProvider } from '../networkProvider';
import type { NetworkData } from '../networkProvider/networkProvider.types';
export type NetworkProviderBuilder = {
    builder: (networkData: NetworkData) => NetworkProvider;
    chain: Chain;
};
export type NetworkProviderBuilderRegistry = {
    get: () => Map<Chain, NetworkProviderBuilder>;
    register: (args: NetworkProviderBuilder) => void;
};
//# sourceMappingURL=networkProviderBuilderRegistry.types.d.ts.map