'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var usePromise = require('../../utils/hooks/usePromise/usePromise.cjs');
var constants = require('../../views/EmbeddedReveal/constants.cjs');
var turnkeyExport = require('../../views/EmbeddedReveal/utils/turnkeyExport/turnkeyExport.cjs');

const EmbeddedWalletExport = ({ wallet, isTurnkeyWallet, isWaasWallet, data, onIframeContainerRef, onExportReady, isVisible = true, }) => {
    const iframeContainerRef = React.useRef(null);
    // Replace useEffect with ref callback
    const setIframeContainerRef = (element) => {
        iframeContainerRef.current = element;
        if (element && onIframeContainerRef) {
            onIframeContainerRef(element);
        }
    };
    usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const iframeContainerElement = iframeContainerRef.current;
        if (!iframeContainerElement ||
            ((_a = iframeContainerElement === null || iframeContainerElement === void 0 ? void 0 : iframeContainerElement.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return;
        }
        if (walletConnectorCore.isSessionKeyCompatibleWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
            yield ((_b = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _b === void 0 ? void 0 : _b.createOrRestoreSession());
        }
        if (walletConnectorCore.isTurnkeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
            yield ((_c = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _c === void 0 ? void 0 : _c.getTurnkeyClient());
        }
        if (isTurnkeyWallet) {
            yield turnkeyExport.initExport({
                iframeContainer: iframeContainerElement,
                iframeElementId: constants.iframeElementId,
                wallet: wallet,
            });
            onExportReady === null || onExportReady === void 0 ? void 0 : onExportReady(true, wallet);
            return;
        }
        return;
    }), { deps: [wallet.address] });
    const getCredentialContainerClassName = () => {
        const baseClass = 'embedded-wallet-export__credential-container';
        if (!data && !isVisible) {
            return `${baseClass} ${baseClass}--hidden`;
        }
        if (isWaasWallet) {
            return `${baseClass} ${baseClass}--waas`;
        }
        return baseClass;
    };
    const getIframeContainerClassName = () => {
        const baseClass = 'embedded-wallet-export__iframe-container';
        // Keep iframe hidden when component is not visible or data is not ready
        if (!data) {
            return `${baseClass} ${baseClass}--hidden`;
        }
        return baseClass;
    };
    const getSkeletonLines = () => {
        const lineCount = 3;
        const lines = [];
        for (let i = 0; i < lineCount; i++) {
            const isLastLine = i === lineCount - 1;
            const className = isLastLine
                ? 'embedded-wallet-export__skeleton-line embedded-wallet-export__skeleton-line--short'
                : 'embedded-wallet-export__skeleton-line';
            lines.push(jsxRuntime.jsx("div", { className: className, "data-testid": i === 0 ? 'private-key-skeleton' : undefined }, i));
        }
        return lines;
    };
    if (!isTurnkeyWallet && !isWaasWallet) {
        return null;
    }
    return (jsxRuntime.jsxs("div", { className: getCredentialContainerClassName(), children: [jsxRuntime.jsx("div", { id: constants.iframeContainerId, className: getIframeContainerClassName(), ref: setIframeContainerRef }), !data && iframeContainerRef.current && (jsxRuntime.jsx("div", { className: 'embedded-wallet-export__skeleton-container', children: getSkeletonLines() }))] }));
};

exports.EmbeddedWalletExport = EmbeddedWalletExport;
