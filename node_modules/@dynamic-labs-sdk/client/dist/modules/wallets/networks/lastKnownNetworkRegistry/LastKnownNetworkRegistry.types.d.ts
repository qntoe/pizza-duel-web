/**
 * A registry that keeps tabs on which wallet provider is connected to which network.
 *
 * This is useful for chains whose external wallet providers don't provide an API for
 * switching networks (ex Solana). In those cases, it falls on us to keep track of which wallet provider
 * is connected to which network.
 */
export type LastKnownNetworkRegistry = {
    /**
     * Gets the active network ID for a given wallet provider key.
     */
    getNetworkId: (params: {
        walletProviderKey: string;
    }) => Promise<{
        networkId: string;
    }>;
    /**
     * Sets the active network ID for a given wallet provider key.
     */
    setNetworkId: (params: {
        networkId: string;
        walletProviderKey: string;
    }) => Promise<void>;
};
//# sourceMappingURL=LastKnownNetworkRegistry.types.d.ts.map