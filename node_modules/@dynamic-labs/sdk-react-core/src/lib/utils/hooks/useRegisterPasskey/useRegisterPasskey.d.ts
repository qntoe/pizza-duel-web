import { VerifyResponse } from '@dynamic-labs/sdk-api-core';
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
export declare const useRegisterPasskey: () => (() => Promise<VerifyResponse>);
