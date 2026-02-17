import { UserProfile } from '@dynamic-labs/types';
import { Wallet } from './wallets';
export type HandleConnectedWallet = (wallet: Partial<Wallet>) => Promise<boolean>;
export type UserOnboardingFieldRequest = {
    key: string;
    required: boolean;
    isCustom: boolean;
    label?: string;
};
export type UserOnboardingFieldResponse = {
    key: string;
    value: string;
    isCustom: boolean;
};
/**
 * Custom password provider for WAAS embedded wallets.
 *
 * This function is called when operations require access to the encrypted user share.
 * The password is used to decrypt the user's keyshare, which is needed for:
 * - Signing transactions/messages
 * - Exporting private keys
 * - Wallet delegation
 * - Re-sharing keyshares
 * - Any operation requiring the decrypted user share
 *
 * If not provided, the default UI unlock wallet modal will be shown.
 *
 * @param accountAddress - The wallet address that needs unlocking
 * @param chainName - The chain name (e.g., 'EVM', 'SOL', 'BTC')
 * @returns The password string to decrypt the user share, or undefined to fail the operation
 *
 * Note: Only called when wallet is locked. If already unlocked, this handler is not invoked.
 * Runtime calls to walletConnector.setGetWalletPasswordFunction() will override this handler.
 */
export type GetWalletPasswordFn = (props: {
    accountAddress: string;
    chainName: string;
}) => Promise<string | undefined>;
/**
 * Custom password setup function for WAAS embedded wallet creation.
 *
 * This function is called during wallet creation when passcodeRequired is enabled.
 * The password provided will be used to encrypt the user's keyshare before backup.
 * This is typically called during the auto-create process if "create on sign up" is enabled.
 *
 * If not provided, the default UI password setup modal will be shown.
 *
 * @returns The new password string to encrypt the user share, or undefined to create without password
 *
 * Note: Only called when passcodeRequired is true in project settings.
 */
export type SetupWalletPasswordFn = () => Promise<string | undefined>;
/**
 * Handlers supported by dynamic. They always return a promise
 */
export type DynamicHandlers = {
    handleAuthenticatedUser?: (params: {
        user: UserProfile;
    }) => Promise<void>;
    handleConnectedWallet?: HandleConnectedWallet;
    /**
     * Custom password provider for WAAS embedded wallets.
     *
     * Called when operations require decrypting the user's keyshare for:
     * - Signing transactions/messages
     * - Exporting private keys
     * - Wallet delegation
     * - Re-sharing keyshares
     *
     * The password is used to decrypt the encrypted user share stored in backup.
     *
     * @param accountAddress - The wallet address that needs unlocking
     * @param chainName - The chain name (e.g., 'EVM', 'SOL', 'BTC')
     * @returns The password string, or undefined to fail the operation
     */
    getWalletPassword?: GetWalletPasswordFn;
    /**
     * Custom password setup function for WAAS embedded wallet creation.
     *
     * Called during wallet creation when passcodeRequired is enabled to encrypt
     * the user's keyshare before backup. Typically invoked during auto-create
     * process if "create on sign up" is enabled.
     *
     * @returns The new password string to encrypt the user share, or undefined to create without password
     */
    setupWalletPassword?: SetupWalletPasswordFn;
};
