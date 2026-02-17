import { GenericNetwork } from '@dynamic-labs/types';
/**
 * Get the Sui network id from the network name
 *
 * The Wallet Standard API returns Sui networks in the format `sui:mainnet`,
 * so we need to map that to our network id.
 *
 * @param name - The network name
 * @param networks - The list of networks
 * @returns The Sui network id
 */
export declare const getSuiNetworkIdFromName: (name: string, networks: GenericNetwork[]) => string | undefined;
/**
 * Get the preferred RPC URL for a given network
 *
 * @param network - The network
 * @returns The preferred RPC URL
 */
export declare const getPreferredRpcUrl: (network: GenericNetwork) => string;
