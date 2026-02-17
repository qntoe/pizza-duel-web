'use client'
// These are constant to ensure we keep a consistent length for cropped
// wallet addresses throughout the app.
const before = 4;
const after = 4;
// While it would be useful to export this function, we need to ensure the wallet lengths
// follow a standard. Therefore, we export the functions with the specific lengths.
const shortenWalletAddress = (walletAddress) => {
    if (!walletAddress)
        return '';
    if (walletAddress.length <= before + after)
        return walletAddress;
    return walletAddress.replace(walletAddress.substring(before, Number(walletAddress.length) - after), '...');
};

export { shortenWalletAddress };
