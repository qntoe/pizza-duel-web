import type { DynamicClient } from '../../../../client/types';
import type { WalletAccount } from '../../walletAccount';
type GetWalletProviderFromWalletAccountParams = {
    walletAccount: WalletAccount;
};
export declare const getWalletProviderFromWalletAccount: ({ walletAccount }: GetWalletProviderFromWalletAccountParams, client: DynamicClient) => import("../../walletProvider").WalletProvider;
export {};
//# sourceMappingURL=getWalletProviderFromWalletAccount.d.ts.map