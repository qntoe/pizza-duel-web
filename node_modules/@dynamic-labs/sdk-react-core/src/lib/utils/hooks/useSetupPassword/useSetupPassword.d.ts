export declare const PASSWORD_SETUP_CANCELLED_ERROR = "Password setup cancelled";
/**
 * Hook to handle password setup flow before wallet creation.
 *
 * This hook checks if passcodeRequired is enabled in project settings,
 * and if so, prompts the user to set up a password before creating wallets.
 *
 * If a custom setupWalletPassword handler is provided via DynamicContextProvider settings,
 * it will be used instead of the default UI modal.
 *
 * @returns An object containing:
 * - isPasscodeRequired: boolean indicating if password is required
 * - setupPassword: function that shows the password setup flow and returns the password
 */
export declare const useSetupPassword: () => {
    isPasscodeRequired: boolean;
    setupPassword: () => Promise<string | undefined>;
};
