'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { getPasskeys } from '@dynamic-labs-sdk/client';

/**
 * Get passkeys
 *
 * @returns Function to get passkeys for the current user
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getPasskeys = useGetPasskeys();
 *   const [passkeys, setPasskeys] = useState<UserPasskey[]>([]);
 *
 *   return (
 *     <button
 *       onClick={async () => {
 *         const passkeys = await getPasskeys();
 *         setPasskeys(passkeys);
 *       }}
 *     >
 *       Get passkeys
 *     </button>
 *  );
 * }
 */
const useGetPasskeys = () => useCallback(() => __awaiter(void 0, void 0, void 0, function* () { return getPasskeys(); }), []);

export { useGetPasskeys };
