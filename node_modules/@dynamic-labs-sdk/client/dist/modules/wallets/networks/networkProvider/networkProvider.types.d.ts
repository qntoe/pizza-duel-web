import type { Chain } from '../../../chain';
/**
 * Configuration necessary to create a network provider
 */
export type NetworkData = {
    /** Array of URLs for blockchain explorers (e.g., Etherscan, Solscan) where users can view transaction details and network activity */
    blockExplorerUrls: string[];
    /** The blockchain chain type (e.g., 'EVM', 'SOLANA', 'SUI') that identifies the network's protocol */
    chain: Chain;
    /**
     * The cluster name of the network (e.g., 'mainnet', 'testnet').
     * Particularly useful for Solana networks.
     */
    cluster?: string;
    /** Human-readable name for the network (e.g., "Ethereum Mainnet", "Polygon Mumbai") */
    displayName: string;
    /**
     * The genesis hash of the network.
     * Particularly useful for Solana networks.
     */
    genesisHash?: string;
    /** URL to the network's icon/logo image for UI display purposes */
    iconUrl: string;
    /** Configuration for the network's native cryptocurrency */
    nativeCurrency: {
        /** Number of decimal places for the native currency (e.g., 18 for ETH, 9 for SOL) */
        decimals: number;
        /** Optional URL to the native currency's icon/logo image */
        iconUrl?: string;
        /** Full name of the native currency (e.g., "Ethereum", "Solana") */
        name: string;
        /** Symbol/ticker for the native currency (e.g., "ETH", "SOL") */
        symbol: string;
    };
    /** Network identifier string that distinguishes between different networks of the same chain type */
    networkId: string;
    /** RPC (Remote Procedure Call) endpoint configurations for network communication */
    rpcUrls: {
        /** Array of HTTP RPC endpoints */
        http: string[];
    };
    /** Boolean flag indicating whether this network is a testnet */
    testnet: boolean;
};
/**
 * Base interface for network providers that handle blockchain network interactions.
 * Provides a unified way to interact with different blockchain networks (Ethereum, Solana, etc.).
 */
export type BaseNetworkProvider<TChain extends Chain = Chain> = Omit<NetworkData, 'chain'> & {
    /** The blockchain chain type (e.g., 'EVM', 'SOLANA', 'SUI') that identifies the network's protocol */
    chain: TChain;
    /** Function to retrieve the balance of a given address on this network */
    getBalance: (args: {
        address: string;
    }) => Promise<{
        balance: string | null;
    }>;
    /** Unique identifier for the network configuration (e.g. 'evm-1', 'solana-mainnet') */
    id: string;
};
declare global {
    /**
     * Global interface that allows blockchain extensions to register their network provider types.
     *
     * This interface starts empty in the client package and gets extended by blockchain-specific packages
     * like @dynamic-labs-sdk/evm, @dynamic-labs-sdk/solana, etc.
     *
     * How it works:
     * 1. Client package defines this empty interface
     * 2. Extensions add their types: `interface NetworkProviderMap { EVM: EvmNetworkProvider; }`
     * 3. The NetworkProvider type becomes a union of all registered providers
     *
     * Example of how extensions use this:
     * ```typescript
     * // In @dynamic-labs-sdk/evm package:
     * export type EvmNetworkProvider = BaseNetworkProvider<'EVM'>;
     *
     * declare global {
     *   interface NetworkProviderMap {
     *     EVM: EvmNetworkProvider;
     *   }
     * }
     * ```
     *
     * When no extensions are added: NetworkProvider = BaseNetworkProvider
     * When extensions are added: NetworkProvider = EvmNetworkProvider | SolanaNetworkProvider | etc.
     */
    interface NetworkProviderMap {
    }
}
/**
 * NetworkProvider represents a configured network provider to the SDK.
 */
export type NetworkProvider = NetworkProviderMap[keyof NetworkProviderMap] extends never ? BaseNetworkProvider : NetworkProviderMap[keyof NetworkProviderMap];
//# sourceMappingURL=networkProvider.types.d.ts.map