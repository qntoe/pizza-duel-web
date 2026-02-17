'use client'
import { getPrimaryWalletId, setPrimaryWalletId } from '../../../store/state/primaryWalletId/primaryWalletId.js';
import { findPrimaryWalletVCForUser } from '../findPrimaryWalletVCForUser/findPrimaryWalletVCForUser.js';
import { updatePrimaryWalletId } from '../updatePrimaryWalletId/updatePrimaryWalletId.js';

const reconcilePrimaryWallet = (user) => {
    // Check if the primary wallet is still in this user's VCs
    const primaryWalletInUserVCs = user.verifiedCredentials.some(({ id }) => id === getPrimaryWalletId());
    if (primaryWalletInUserVCs)
        return;
    // Try to set primary wallet ID from available wallets (AA or embedded)
    const primaryWalletVC = findPrimaryWalletVCForUser(user);
    if (primaryWalletVC) {
        updatePrimaryWalletId(primaryWalletVC.id);
    }
    else {
        // No wallet VCs found, unset the primary wallet
        setPrimaryWalletId(undefined);
    }
};

export { reconcilePrimaryWallet };
