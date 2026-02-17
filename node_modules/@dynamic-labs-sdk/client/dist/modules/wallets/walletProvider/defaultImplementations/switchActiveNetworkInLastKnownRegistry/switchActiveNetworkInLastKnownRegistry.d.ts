import type { DynamicClient } from '../../../../../client/types/DynamicClient';
import type { WalletProvider } from '../../walletProvider.types';
type SwitchActiveNetworkInLastKnownRegistry = (args: {
    client: DynamicClient;
    networkId: string;
    walletProviderKey: string;
}) => ReturnType<NonNullable<WalletProvider['switchActiveNetwork']>>;
export declare const switchActiveNetworkInLastKnownRegistry: SwitchActiveNetworkInLastKnownRegistry;
export {};
//# sourceMappingURL=switchActiveNetworkInLastKnownRegistry.d.ts.map