'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isSessionKeyCompatibleWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { logger } from '../../../shared/logger.js';
import { exportCredential } from '../../../views/EmbeddedReveal/utils/turnkeyExport/turnkeyExport.js';
import { exportWaasCredential } from '../../../views/EmbeddedReveal/utils/waasExport/waasExport.js';

const exportWalletCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ isTurnkeyWallet, isWaasWallet, wallet, user, environmentId, exportPrivateKey, iframeContainerRef, handleAcknowledgeExportPrompt, }) {
    var _b, _c, _d;
    handleAcknowledgeExportPrompt();
    if (isTurnkeyWallet) {
        try {
            return yield exportCredential({
                address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                environmentId,
                user,
                wallet: wallet,
            });
        }
        catch (err) {
            if (isSessionKeyCompatibleWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector) &&
                ((_b = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _b === void 0 ? void 0 : _b.removeSessionKeys)) {
                yield ((_c = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _c === void 0 ? void 0 : _c.removeSessionKeys());
                yield ((_d = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _d === void 0 ? void 0 : _d.createOrRestoreSession({
                    ignoreRestore: true,
                }));
                logger.error('[TK - removeSessionKeys] failed to perform revealEmbeddedWalletKey activity', {
                    address: wallet === null || wallet === void 0 ? void 0 : wallet.address,
                    err,
                    userId: user === null || user === void 0 ? void 0 : user.userId,
                });
            }
            return exportCredential({
                address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                environmentId,
                user,
                wallet: wallet,
            });
        }
    }
    if (isWaasWallet) {
        // Start the export in the background
        return exportWaasCredential({
            address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
            iframeContainer: iframeContainerRef,
            user,
            wallet: wallet,
        });
    }
    return undefined;
});

export { exportWalletCredential };
