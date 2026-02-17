/**
 * Events that can be listened to for a wallet provider
 */
export type WalletProviderEvents = {
    accountsChanged: (params: {
        addresses: string[];
    }) => void;
    disconnected: () => void;
    networkChanged: (params: {
        networkId: string;
    }) => void;
};
//# sourceMappingURL=walletProviderEvents.types.d.ts.map