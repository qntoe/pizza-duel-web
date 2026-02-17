'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var client = require('@dynamic-labs-sdk/client');
var dynamicEvents = require('../../../events/dynamicEvents.cjs');
var useUserAuth = require('../useUserAuth/useUserAuth.cjs');

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
    const { completeAuth } = useUserAuth.useUserAuth({});
    return React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        let response;
        yield completeAuth({
            updateJwtFunction: () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                response = yield client.registerPasskey();
                dynamicEvents.dynamicEvents.emit('mfaCompletionSuccess', {
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

exports.useRegisterPasskey = useRegisterPasskey;
