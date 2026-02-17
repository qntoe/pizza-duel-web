'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { registerPasskey } from '@dynamic-labs-sdk/client';
import { dynamicEvents } from '../../../events/dynamicEvents.js';
import { useUserAuth } from '../useUserAuth/useUserAuth.js';

/**
 * Register passkey
 *
 * @returns Function to register passkey
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const registerPasskey = useRegisterPasskey();
 *
 *   return (
 *     <button
 *       onClick={() => registerPasskey()}
 *     >
 *       Register passkey
 *     </button>
 *  );
 * }
 */
const useRegisterPasskey = () => {
    const { completeAuth } = useUserAuth({});
    return useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        let response;
        yield completeAuth({
            updateJwtFunction: () => __awaiter(void 0, void 0, void 0, function* () {
                response = yield registerPasskey();
                dynamicEvents.emit('mfaCompletionSuccess', {
                    mfaToken: response.mfaToken,
                });
                return {
                    isEmailVerificationRequired: false,
                    isSmsVerificationRequired: false,
                    missingFields: [],
                    // VerifyResponse is compatible with UpdateSelfResponse for MFA flows
                    // Both types have: expiresAt, jwt, minifiedJwt, user (used in useUserAuth.ts:329-332)
                    updateUserProfileResponse: response,
                };
            }),
        });
        // @ts-expect-error - response is being set in the completeAuth function
        return response;
    }), [completeAuth]);
};

export { useRegisterPasskey };
