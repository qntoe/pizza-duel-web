import { MFAAction } from '@dynamic-labs/sdk-api-core';
type UseGetMfaTokenProps = {
    mfaAction?: MFAAction;
};
type UseGetMfaToken = (props?: UseGetMfaTokenProps) => Promise<string | undefined>;
/**
 * Get MFA token
 *
 * @returns Function to get MFA token
 *
 * @example
 * ```tsx
 * const App = () => {
 *   const getMfaToken = useGetMfaToken();
 *
 *   return (
 *     <button
 *       onClick={() => getMfaToken({ mfaAction: MFAAction.UpdateUser })}
 *     >
 *       Get MFA token
 *     </button>
 *  );
 * }
 */
export declare const useGetMfaToken: () => UseGetMfaToken;
export {};
