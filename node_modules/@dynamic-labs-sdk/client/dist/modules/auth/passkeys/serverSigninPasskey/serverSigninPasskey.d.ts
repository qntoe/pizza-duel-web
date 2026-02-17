import type { CreateMfaToken } from '@dynamic-labs/sdk-api-core';
import type { AuthenticationResponseJSON } from '@simplewebauthn/browser';
import type { DynamicClient } from '../../../../client/types';
type ServerSigninPasskeyParams = {
    authentication: AuthenticationResponseJSON;
    createMfaToken?: CreateMfaToken;
};
export declare const serverSigninPasskey: ({ authentication, createMfaToken }: ServerSigninPasskeyParams, client: DynamicClient) => Promise<import("@dynamic-labs/sdk-api-core").VerifyResponse>;
export {};
//# sourceMappingURL=serverSigninPasskey.d.ts.map