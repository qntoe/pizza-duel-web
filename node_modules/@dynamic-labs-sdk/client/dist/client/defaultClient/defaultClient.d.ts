import type { DynamicClient } from '../types';
/**
 * Returns the DynamicClient instance that was initialized with createDynamicClient.
 *
 * If more than one instance of DynamicClient was initialized, you should not use this function.
 * Instead, you should pass the client instance you stored to the function that needs it.
 */
export declare const getDefaultClient: () => DynamicClient;
export declare const setDefaultClient: (client: DynamicClient) => void;
//# sourceMappingURL=defaultClient.d.ts.map