import type { DynamicClient } from '../../../../../client/types/DynamicClient';
import type { WalletProvider } from '../../walletProvider.types';
type GetActiveNetworkIdFromLastKnownRegistry = (args: {
    client: DynamicClient;
    walletProviderKey: string;
}) => ReturnType<WalletProvider['getActiveNetworkId']>;
export declare const getActiveNetworkIdFromLastKnownRegistry: GetActiveNetworkIdFromLastKnownRegistry;
export {};
//# sourceMappingURL=getActiveNetworkIdFromLastKnownRegistry.d.ts.map