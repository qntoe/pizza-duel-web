'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var UserWalletsContext = require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var walletOptions = require('../../../store/state/walletOptions/walletOptions.cjs');
var rejectPromiseRef = require('../../functions/rejectPromiseRef/rejectPromiseRef.cjs');
var resolvePromiseRef = require('../../functions/resolvePromiseRef/resolvePromiseRef.cjs');
var useHandleWalletItem = require('../useWalletItemActions/useHandleWalletItem/useHandleWalletItem.cjs');
var useWalletOptions = require('../useWalletOptions/useWalletOptions.cjs');

const useFundingHelpers = () => {
    const initiatedByWidgetRef = React.useRef(false);
    const internalConnectionPromiseRef = React.useRef(null);
    const { walletOptions: walletOptions$1 } = useWalletOptions.useWalletOptions();
    const { userWallets } = UserWalletsContext.useInternalUserWallets();
    const handleWalletMethod = React.useCallback((props) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const connectionType = {
            connectorConsumed: false,
            initiatedByWidget: initiatedByWidgetRef.current,
            type: 'external-wallet-funding',
        };
        utils.StorageService.setItem(utils.PHANTOM_REDIRECT_CONNECTION_TYPE_KEY, connectionType);
        const address = yield props.walletConnector.getAddress(props.getAddressOpts);
        if (!address) {
            rejectPromiseRef.rejectPromiseRef(internalConnectionPromiseRef, new utils.DynamicError('No wallet address found'));
            return;
        }
        resolvePromiseRef.resolvePromiseRef(internalConnectionPromiseRef, address);
    }), []);
    const { handleWalletItemClick } = useHandleWalletItem.useHandleWalletItem({
        allowAlreadyConnectedWallet: true,
        onConnectOnly: handleWalletMethod,
        onCustodialWallet: handleWalletMethod,
        onInstalledExtension: handleWalletMethod,
        onQrCodeConnect: handleWalletMethod,
    });
    const getWalletAddress = React.useCallback((walletConnector) => {
        var _a;
        const walletOption = walletOptions$1.find(({ key }) => key === walletConnector.key);
        if (!walletOption) {
            return Promise.reject(new utils.DynamicError(`Connect wallet for funding error: wallet option for ${walletConnector.key} not found`));
        }
        internalConnectionPromiseRef.current = new utils.DeferredPromise();
        handleWalletItemClick(Object.assign(Object.assign({}, walletOption), { group: (_a = walletOption.group) !== null && _a !== void 0 ? _a : undefined, walletConnector }));
        return internalConnectionPromiseRef.current.promise;
    }, [handleWalletItemClick, walletOptions$1]);
    // Reset WC session when needed
    const hasWalletConnectWallet = userWallets.some((w) => w.connector.isWalletConnect);
    const resetWalletConnectSession = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (hasWalletConnectWallet)
            return;
        const walletOption = walletOptions.getWalletConnectorOptions().find(({ walletConnector }) => walletConnector.isWalletConnect);
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

exports.useFundingHelpers = useFundingHelpers;
