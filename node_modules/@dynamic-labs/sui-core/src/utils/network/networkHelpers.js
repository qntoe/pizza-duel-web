'use client'
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
const getSuiNetworkIdFromName = (name, networks) => {
    var _a;
    const suiNetworkName = name.split(':').pop();
    if (!suiNetworkName) {
        return undefined;
    }
    const chainId = (_a = networks.find((network) => network.name.toLowerCase().includes(suiNetworkName.toLowerCase()))) === null || _a === void 0 ? void 0 : _a.chainId;
    return chainId ? String(chainId) : undefined;
};
/**
 * Get the preferred RPC URL for a given network
 *
 * @param network - The network
 * @returns The preferred RPC URL
 */
const getPreferredRpcUrl = (network) => { var _a, _b, _c; return (_b = (_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : (_c = network.rpcUrls) === null || _c === void 0 ? void 0 : _c[0]; };

export { getPreferredRpcUrl, getSuiNetworkIdFromName };
