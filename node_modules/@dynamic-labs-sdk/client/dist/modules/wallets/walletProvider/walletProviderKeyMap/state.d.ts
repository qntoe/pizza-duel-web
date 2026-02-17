import type { WalletProviderKeyMap } from './walletProviderKeyMap.types';
declare global {
    interface DynamicCoreState {
        /**
         * Keeps records on which user's Wallet verified credential maps to which wallet provider key.
         *
         * Even though most wallet provider keys can be easily inferred from the verified credential's data alone
         * (walletName + walletProvider), some kinds of wallet providers (such as Wallet Connect) need a special
         * suffix added to their keys which will not be stored in the backend. Therefore this map is necessary for
         * those wallet providers.
         */
        walletProviderKeyMap: WalletProviderKeyMap;
    }
}
export {};
//# sourceMappingURL=state.d.ts.map