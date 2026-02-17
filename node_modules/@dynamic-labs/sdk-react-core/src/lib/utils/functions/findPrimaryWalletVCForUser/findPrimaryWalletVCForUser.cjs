'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var findPrimaryEmbeddedChain = require('../../../views/Passkey/utils/findPrimaryEmbeddedChain/findPrimaryEmbeddedChain.cjs');
var findEmbeddedWalletFromVerifiedCredentials = require('../findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.cjs');

/**
 * Finds the primary wallet VC for the user based on wallet type priority and most recent lastSelectedAt
 * @param user - The SDK user object or UserProfile
 * @param projectSettings - Project settings containing embedded wallet configuration
 * @param onlyEmbeddedWallets - Whether to only return embedded wallets
 * @returns JwtVerifiedCredential | undefined - The primary wallet VC for the user
 */
const findPrimaryWalletVCForUser = (user, projectSettings, onlyEmbeddedWallets = false) => {
    if (!(user === null || user === void 0 ? void 0 : user.verifiedCredentials))
        return undefined;
    // Sort all verified credentials by lastSelectedAt (most recent first)
    const sortedCredentials = [...user.verifiedCredentials].sort((a, b) => {
        // Handle credentials without lastSelectedAt
        if (!a.lastSelectedAt && !b.lastSelectedAt)
            return 0;
        if (!a.lastSelectedAt)
            return 1; // a goes to end
        if (!b.lastSelectedAt)
            return -1; // b goes to end
        // Both have lastSelectedAt, sort by most recent first
        return b.lastSelectedAt.getTime() - a.lastSelectedAt.getTime();
    });
    // Find AA wallet credential (highest priority)
    const aaWalletCredential = sortedCredentials.find((vc) => vc.walletProvider === sdkApiCore.WalletProviderEnum.SmartContractWallet);
    if (aaWalletCredential) {
        return aaWalletCredential;
    }
    // Find embedded wallet credential (second priority)
    let embeddedWalletCredential;
    if (projectSettings) {
        const primaryEmbeddedChain = findPrimaryEmbeddedChain.findPrimaryEmbeddedChain(projectSettings);
        embeddedWalletCredential = findEmbeddedWalletFromVerifiedCredentials.findEmbeddedWalletFromVerifiedCredentials(Object.assign(Object.assign({}, user), { verifiedCredentials: sortedCredentials }), [primaryEmbeddedChain]);
    }
    if (embeddedWalletCredential) {
        return embeddedWalletCredential;
    }
    if (onlyEmbeddedWallets) {
        return undefined;
    }
    // Find external wallet credential (lowest priority)
    const externalWalletCredential = sortedCredentials.find((vc) => vc.format === 'blockchain');
    if (externalWalletCredential) {
        return externalWalletCredential;
    }
    return undefined;
};

exports.findPrimaryWalletVCForUser = findPrimaryWalletVCForUser;
