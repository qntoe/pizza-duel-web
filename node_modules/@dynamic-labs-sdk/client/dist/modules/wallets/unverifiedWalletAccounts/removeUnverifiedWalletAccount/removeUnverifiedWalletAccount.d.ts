import type { DynamicClient } from '../../../../client/types';
import type { UnverifiedWalletAccount } from '../unverifiedWalletAccounts.types';
type RemoveUnverifiedWalletAccountParams = {
    unverifiedWalletAccount: UnverifiedWalletAccount;
};
/**
 * Removes an unverified wallet account from the client's state.
 */
export declare const removeUnverifiedWalletAccount: ({ unverifiedWalletAccount }: RemoveUnverifiedWalletAccountParams, client: DynamicClient) => void;
export {};
//# sourceMappingURL=removeUnverifiedWalletAccount.d.ts.map