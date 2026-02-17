import type { CreateMfaToken } from '@dynamic-labs/sdk-api-core';
import type { AuthenticationResponseJSON } from '@simplewebauthn/browser';
import type { DynamicClient } from '../../../../client/types';
type ServerAuthenticatePasskeyParams = {
    authentication: AuthenticationResponseJSON;
    createMfaToken?: CreateMfaToken;
};
export declare const serverAuthenticatePasskey: ({ authentication, createMfaToken }: ServerAuthenticatePasskeyParams, client: DynamicClient) => Promise<import("@dynamic-labs/sdk-api-core").VerifyResponse>;
export {};
//# sourceMappingURL=serverAuthenticatePasskey.d.ts.map