import type { DynamicClient } from '../../../../../client/types';
import type { LastKnownNetworkRegistry } from '../LastKnownNetworkRegistry.types';
/**
 * Creates the registry that keeps tabs on which wallet provider is
 * connected to which network.
 *
 * Reminder that this will not be used for chains that have an internal way to
 * switch networks (ex EVM).
 */
export declare const createLastKnownNetworkRegistry: (client: DynamicClient) => LastKnownNetworkRegistry;
//# sourceMappingURL=createLastKnownNetworkRegistry.d.ts.map