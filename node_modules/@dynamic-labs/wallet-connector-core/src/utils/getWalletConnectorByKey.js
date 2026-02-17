'use client'
const filterWalletsByKey = (wallets, keys, chain) => keys
    .flatMap((key) => wallets.find((w) => walletHasKey(w, key, chain)))
    .filter(isWalletConnector);
const walletHasKey = (wallet, key, chain) => wallet.key === key && (chain ? wallet.connectedChain === chain : true);
const isWalletConnector = (item) => Boolean(item);
const getWalletConnectorByKey = (wallets, key, chain) => {
    const filteredWallets = filterWalletsByKey(wallets, [key], chain);
    return filteredWallets.length > 0 ? filteredWallets[0] : null;
};

export { getWalletConnectorByKey };
