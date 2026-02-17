'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var primaryWalletId = require('../../../store/state/primaryWalletId/primaryWalletId.cjs');
var findPrimaryWalletVCForUser = require('../findPrimaryWalletVCForUser/findPrimaryWalletVCForUser.cjs');
var updatePrimaryWalletId = require('../updatePrimaryWalletId/updatePrimaryWalletId.cjs');

const reconcilePrimaryWallet = (user) => {
    // Check if the primary wallet is still in this user's VCs
    const primaryWalletInUserVCs = user.verifiedCredentials.some(({ id }) => id === primaryWalletId.getPrimaryWalletId());
    if (primaryWalletInUserVCs)
        return;
    // Try to set primary wallet ID from available wallets (AA or embedded)
    const primaryWalletVC = findPrimaryWalletVCForUser.findPrimaryWalletVCForUser(user);
    if (primaryWalletVC) {
        updatePrimaryWalletId.updatePrimaryWalletId(primaryWalletVC.id);
    }
    else {
        // No wallet VCs found, unset the primary wallet
        primaryWalletId.setPrimaryWalletId(undefined);
    }
};

exports.reconcilePrimaryWallet = reconcilePrimaryWallet;
