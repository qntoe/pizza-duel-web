import type { WalletProvider } from '../walletProvider/walletProvider.types';
declare global {
    interface DynamicEvents {
        /**
         * Event emitted when an wallet provider is registered, updated or unregistered
         */
        walletProviderChanged: (args: {
            walletProviderKey: string;
        }) => void;
        /**
         * Event emitted every time a wallet provider is registered
         */
        walletProviderRegistered: (args: {
            walletProvider: WalletProvider;
        }) => void;
        /**
         * Event emitted every time a wallet provider is unregistered
         */
        walletProviderUnregistered: (args: {
            walletProviderKey: string;
        }) => void;
    }
}
export {};
//# sourceMappingURL=events.d.ts.map