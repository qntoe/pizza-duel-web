import type { DynamicClient } from '../../../client/types/DynamicClient';
import type { WalletAccount } from '../../wallets/walletAccount';
import type { WaasWalletProvider } from '../waas.types';
type GetWalletProviderFromWalletAccountParams = {
    walletAccount: WalletAccount;
};
export declare const getWaasWalletProviderFromWalletAccount: ({ walletAccount }: GetWalletProviderFromWalletAccountParams, client: DynamicClient) => WaasWalletProvider;
export {};
//# sourceMappingURL=getWaasWalletProviderFromWalletAccount.d.ts.map