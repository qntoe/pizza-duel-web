import { UserPasskey } from '@dynamic-labs/sdk-api-core';
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
export declare const useGetPasskeys: () => (() => Promise<UserPasskey[]>);
