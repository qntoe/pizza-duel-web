import { SDKApi } from '@dynamic-labs/sdk-api-core';
import type { DynamicClient } from '../../client/types';
import type { CreateApiClientOptions } from './apiClient.types';
/**
 * Returns a new instance of the SDK API client.
 *
 * This is not meant for storing, as it is very light we can create it whenever needed.
 */
export declare const createApiClient: (options: CreateApiClientOptions | undefined, client: DynamicClient) => SDKApi;
//# sourceMappingURL=createApiClient.d.ts.map