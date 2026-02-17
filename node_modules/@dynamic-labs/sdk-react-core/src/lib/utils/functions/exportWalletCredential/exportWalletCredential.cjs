'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var logger = require('../../../shared/logger.cjs');
var turnkeyExport = require('../../../views/EmbeddedReveal/utils/turnkeyExport/turnkeyExport.cjs');
var waasExport = require('../../../views/EmbeddedReveal/utils/waasExport/waasExport.cjs');

const exportWalletCredential = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ isTurnkeyWallet, isWaasWallet, wallet, user, environmentId, exportPrivateKey, iframeContainerRef, handleAcknowledgeExportPrompt, }) {
    var _b, _c, _d;
    handleAcknowledgeExportPrompt();
    if (isTurnkeyWallet) {
        try {
            return yield turnkeyExport.exportCredential({
                address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                environmentId,
                user,
                wallet: wallet,
            });
        }
        catch (err) {
            if (walletConnectorCore.isSessionKeyCompatibleWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector) &&
                ((_b = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _b === void 0 ? void 0 : _b.removeSessionKeys)) {
                yield ((_c = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _c === void 0 ? void 0 : _c.removeSessionKeys());
                yield ((_d = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _d === void 0 ? void 0 : _d.createOrRestoreSession({
                    ignoreRestore: true,
                }));
                logger.logger.error('[TK - removeSessionKeys] failed to perform revealEmbeddedWalletKey activity', {
                    address: wallet === null || wallet === void 0 ? void 0 : wallet.address,
                    err,
                    userId: user === null || user === void 0 ? void 0 : user.userId,
                });
            }
            return turnkeyExport.exportCredential({
                address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                environmentId,
                user,
                wallet: wallet,
            });
        }
    }
    if (isWaasWallet) {
        // Start the export in the background
        return waasExport.exportWaasCredential({
            address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
            iframeContainer: iframeContainerRef,
            user,
            wallet: wallet,
        });
    }
    return undefined;
});

exports.exportWalletCredential = exportWalletCredential;
