'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { getMfaMethods } from '@dynamic-labs-sdk/client';

/**
 * Get user MFA methods
 *
 * @returns Function to get user MFA methods
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getUserMfaMethods = useGetUserMfaMethods();
 *
 *   const getMfaMethods = async () => {
 *     const methods = await getUserMfaMethods();
 *     console.log(methods);
 *   }
 *
 *   return (
 *     <button onClick={getMfaMethods}>Get user MFA methods</button>
 *   );
 * }
 */
const useGetUserMfaMethods = () => useCallback(() => __awaiter(void 0, void 0, void 0, function* () { return getMfaMethods(); }), []);

export { useGetUserMfaMethods };
