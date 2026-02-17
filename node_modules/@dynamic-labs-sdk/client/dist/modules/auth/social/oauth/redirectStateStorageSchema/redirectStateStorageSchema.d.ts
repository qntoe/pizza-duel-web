import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
/** The schema to track the state of the OAuth flow. */
export declare const redirectStateStorageKeySchema: import("../../../../../services/storage").StorageKeySchema<{
    provider: ProviderEnum;
    state: string;
    codeVerifier?: string | undefined;
}>;
//# sourceMappingURL=redirectStateStorageSchema.d.ts.map