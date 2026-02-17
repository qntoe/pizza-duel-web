'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useSelectedWalletConnector = ({ walletConnectorOptions, }) => {
    const [selectedWalletConnectorData, setSelectedWalletConnectorData] = React.useState(null);
    /**
     * To keep backwards compatibility, this also accepts a single string param which will be just the key
     */
    const setSelectedWalletConnectorKey = (data) => {
        if (typeof data === 'string') {
            setSelectedWalletConnectorData({ key: data });
        }
        else {
            setSelectedWalletConnectorData(data);
        }
    };
    // Instead of storing the selected connector directly, we derive it from the wallets
    // This way if wallets change, the selected connector will be updated too
    const selectedWalletConnector = React.useMemo(() => {
        var _a;
        if (!selectedWalletConnectorData)
            return null;
        const option = walletConnectorOptions.find(({ walletConnector }) => walletConnector.key === selectedWalletConnectorData.key &&
            (!selectedWalletConnectorData.chain ||
                walletConnector.connectedChain === selectedWalletConnectorData.chain));
        return (_a = option === null || option === void 0 ? void 0 : option.walletConnector) !== null && _a !== void 0 ? _a : null;
    }, [selectedWalletConnectorData, walletConnectorOptions]);
    return { selectedWalletConnector, setSelectedWalletConnectorKey };
};

exports.useSelectedWalletConnector = useSelectedWalletConnector;
