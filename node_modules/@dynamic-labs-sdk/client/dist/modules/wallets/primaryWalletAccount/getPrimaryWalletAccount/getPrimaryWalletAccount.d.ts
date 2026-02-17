import type { WalletAccount } from '../../walletAccount';
/**
 * Get the primary wallet account.
 * The primary wallet account is the one that was last selected by the user.
 * This information is stored in both unverified and verified wallet accounts.
 * This function consolidates this information to determine which wallet was most recently selected.
 */
export declare const getPrimaryWalletAccount: (client?: import("../../../../exports").DynamicClient) => WalletAccount | null;
//# sourceMappingURL=getPrimaryWalletAccount.d.ts.map