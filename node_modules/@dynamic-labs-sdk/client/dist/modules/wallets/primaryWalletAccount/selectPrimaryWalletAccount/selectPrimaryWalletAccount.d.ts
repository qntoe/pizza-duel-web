import type { WalletAccount } from '../../walletAccount';
type SelectPrimaryWalletAccountParams = {
    walletAccount: WalletAccount;
};
/**
 * Make the wallet account provided as the primary wallet account.
 */
export declare const selectPrimaryWalletAccount: ({ walletAccount }: SelectPrimaryWalletAccountParams, client?: import("../../../../exports").DynamicClient) => Promise<void>;
export {};
//# sourceMappingURL=selectPrimaryWalletAccount.d.ts.map