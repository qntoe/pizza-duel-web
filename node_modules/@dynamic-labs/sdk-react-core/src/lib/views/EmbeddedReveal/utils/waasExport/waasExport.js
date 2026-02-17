'use client'
import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { DynamicError, InvalidPrimaryWalletOrConnectorError } from '@dynamic-labs/utils';
import { logger } from '../../../../shared/logger.js';
import { USER_NOT_LOGGED_IN } from '../../../../utils/constants/errors.js';

const handleExportInitCheck = ({ user, wallet, }) => {
    var _a, _b, _c;
    if (!user) {
        throw new DynamicError(USER_NOT_LOGGED_IN);
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) || !(wallet === null || wallet === void 0 ? void 0 : wallet.id)) {
        logger.error('Cannot initialize embedded wallet export', {
            connector: (_a = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _a === void 0 ? void 0 : _a.name,
            version: 'v3',
            wallet: Boolean(wallet),
            walletId: wallet === null || wallet === void 0 ? void 0 : wallet.id,
        });
        throw new InvalidPrimaryWalletOrConnectorError();
    }
    const connector = wallet.connector;
    let walletProperties = (_c = (_b = user.verifiedCredentials) === null || _b === void 0 ? void 0 : _b.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('dynamicwaas'))) === null || _c === void 0 ? void 0 : _c.walletProperties;
    if (walletProperties) {
        walletProperties = Object.assign(Object.assign({}, walletProperties), { accountAddress: wallet.address });
    }
    if (!walletProperties) {
        throw new DynamicError('Invalid token!');
    }
    return {
        connector,
        walletProperties,
    };
};
const exportWaasCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ user, wallet, address, iframeContainer, }) {
    const { connector, walletProperties } = handleExportInitCheck({
        user,
        wallet,
    });
    yield connector.exportPrivateKey({
        accountAddress: address || walletProperties.accountAddress,
        displayContainer: iframeContainer,
    });
    return true;
});
const cleanupExport = (_b) => __awaiter(void 0, [_b], void 0, function* ({ wallet }) {
    var _c;
    const connector = wallet === null || wallet === void 0 ? void 0 : wallet.connector;
    // clear iframeStamper and its reference
    try {
        (_c = connector === null || connector === void 0 ? void 0 : connector.getExportHandler()) === null || _c === void 0 ? void 0 : _c.clear();
    }
    catch (error) {
        logger.error('Error cleaning up export:', error);
    }
});

export { cleanupExport, exportWaasCredential };
