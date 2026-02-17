import { signInWithPasskey } from '@dynamic-labs-sdk/client';
export type UseSignInWithPasskeyParams = {
    relatedOriginRpId?: string;
};
/**
 * Sign in with passkey
 *
 * @returns Function to sign in with a passkey, returns a VerifyResponse
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const signInWithPasskey = useSignInWithPasskey();
 *
 *   return (
 *     <button
 *       onClick={() => signInWithPasskey()}
 *     >
 *       Sign in with passkey
 *     </button>
 *  );
 * }
 */
export declare const useSignInWithPasskey: ({ relatedOriginRpId, }?: UseSignInWithPasskeyParams) => (() => ReturnType<typeof signInWithPasskey>);
