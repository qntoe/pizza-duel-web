'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { isMfaRequiredForAction } from '@dynamic-labs-sdk/client';

/**
 * Check if MFA is required for an action
 *
 * @returns Function to check if MFA is required for an action
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const isMfaRequiredForAction = useIsMfaRequiredForAction();
 *
 *   return (
 *     <button
 *       onClick={() => isMfaRequiredForAction({ mfaAction: MFAAction.UpdateUser })}
 *     >
 *       Check if MFA is required for an action
 *     </button>
 *  );
 * }
 */
const useIsMfaRequiredForAction = () => useCallback((_a) => __awaiter(void 0, [_a], void 0, function* ({ mfaAction }) { return isMfaRequiredForAction({ mfaAction }); }), []);

export { useIsMfaRequiredForAction };
