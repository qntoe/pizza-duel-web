import type { DynamicClient } from '../../../../client/types';
import type { WalletAccount } from '../../walletAccount';
type GetSignInMessageParams = {
    walletAccount: WalletAccount;
};
export declare const getSignInMessage: ({ walletAccount }: GetSignInMessageParams, client: DynamicClient) => Promise<string>;
export {};
//# sourceMappingURL=getSignInMessage.d.ts.map