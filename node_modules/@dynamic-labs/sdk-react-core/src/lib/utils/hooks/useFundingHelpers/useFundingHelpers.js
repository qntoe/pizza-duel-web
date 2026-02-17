'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useRef, useCallback } from 'react';
import { StorageService, PHANTOM_REDIRECT_CONNECTION_TYPE_KEY, DynamicError, DeferredPromise } from '@dynamic-labs/utils';
import { useInternalUserWallets } from '../../../context/UserWalletsContext/UserWalletsContext.js';
import { getWalletConnectorOptions } from '../../../store/state/walletOptions/walletOptions.js';
import { rejectPromiseRef } from '../../functions/rejectPromiseRef/rejectPromiseRef.js';
import { resolvePromiseRef } from '../../functions/resolvePromiseRef/resolvePromiseRef.js';
import { useHandleWalletItem } from '../useWalletItemActions/useHandleWalletItem/useHandleWalletItem.js';
import { useWalletOptions } from '../useWalletOptions/useWalletOptions.js';

const useFundingHelpers = () => {
    const initiatedByWidgetRef = useRef(false);
    const internalConnectionPromiseRef = useRef(null);
    const { walletOptions } = useWalletOptions();
    const { userWallets } = useInternalUserWallets();
    const handleWalletMethod = useCallback((props) => __awaiter(void 0, void 0, void 0, function* () {
        const connectionType = {
            connectorConsumed: false,
            initiatedByWidget: initiatedByWidgetRef.current,
            type: 'external-wallet-funding',
        };
        StorageService.setItem(PHANTOM_REDIRECT_CONNECTION_TYPE_KEY, connectionType);
        const address = yield props.walletConnector.getAddress(props.getAddressOpts);
        if (!address) {
            rejectPromiseRef(internalConnectionPromiseRef, new DynamicError('No wallet address found'));
            return;
        }
        resolvePromiseRef(internalConnectionPromiseRef, address);
    }), []);
    const { handleWalletItemClick } = useHandleWalletItem({
        allowAlreadyConnectedWallet: true,
        onConnectOnly: handleWalletMethod,
        onCustodialWallet: handleWalletMethod,
        onInstalledExtension: handleWalletMethod,
        onQrCodeConnect: handleWalletMethod,
    });
    const getWalletAddress = useCallback((walletConnector) => {
        var _a;
        const walletOption = walletOptions.find(({ key }) => key === walletConnector.key);
        if (!walletOption) {
            return Promise.reject(new DynamicError(`Connect wallet for funding error: wallet option for ${walletConnector.key} not found`));
        }
        internalConnectionPromiseRef.current = new DeferredPromise();
        handleWalletItemClick(Object.assign(Object.assign({}, walletOption), { group: (_a = walletOption.group) !== null && _a !== void 0 ? _a : undefined, walletConnector }));
        return internalConnectionPromiseRef.current.promise;
    }, [handleWalletItemClick, walletOptions]);
    // Reset WC session when needed
    const hasWalletConnectWallet = userWallets.some((w) => w.connector.isWalletConnect);
    const resetWalletConnectSession = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (hasWalletConnectWallet)
            return;
        const walletOption = getWalletConnectorOptions().find(({ walletConnector }) => walletConnector.isWalletConnect);
        yield (walletOption === null || walletOption === void 0 ? void 0 : walletOption.walletConnector.endSession());
        yield (walletOption === null || walletOption === void 0 ? void 0 : walletOption.walletConnector.init());
    }), [hasWalletConnectWallet]);
    return {
        getWalletAddress,
        handleWalletMethod,
        initiatedByWidgetRef,
        internalConnectionPromiseRef,
        resetWalletConnectSession,
    };
};

export { useFundingHelpers };
