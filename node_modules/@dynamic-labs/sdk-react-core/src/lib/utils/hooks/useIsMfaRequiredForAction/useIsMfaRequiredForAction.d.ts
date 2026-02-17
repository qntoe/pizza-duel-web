import { MFAAction } from '@dynamic-labs/sdk-api-core';
type UseIsMfaRequiredForActionProps = {
    mfaAction: MFAAction;
};
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
export declare const useIsMfaRequiredForAction: () => (({ mfaAction, }: UseIsMfaRequiredForActionProps) => Promise<boolean>);
export {};
