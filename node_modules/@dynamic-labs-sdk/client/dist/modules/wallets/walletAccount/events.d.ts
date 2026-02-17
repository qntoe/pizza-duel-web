import type { WalletAccount } from './walletAccount.types';
declare global {
    interface DynamicEvents {
        walletAccountsChanged: (args: {
            walletAccounts: WalletAccount[];
        }) => void;
    }
}
export {};
//# sourceMappingURL=events.d.ts.map