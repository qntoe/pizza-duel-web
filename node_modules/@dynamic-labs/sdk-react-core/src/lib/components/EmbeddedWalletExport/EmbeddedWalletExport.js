'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { isSessionKeyCompatibleWalletConnector, isTurnkeyWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
import { iframeElementId, iframeContainerId } from '../../views/EmbeddedReveal/constants.js';
import { initExport } from '../../views/EmbeddedReveal/utils/turnkeyExport/turnkeyExport.js';

const EmbeddedWalletExport = ({ wallet, isTurnkeyWallet, isWaasWallet, data, onIframeContainerRef, onExportReady, isVisible = true, }) => {
    const iframeContainerRef = useRef(null);
    // Replace useEffect with ref callback
    const setIframeContainerRef = (element) => {
        iframeContainerRef.current = element;
        if (element && onIframeContainerRef) {
            onIframeContainerRef(element);
        }
    };
    usePromise(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const iframeContainerElement = iframeContainerRef.current;
        if (!iframeContainerElement ||
            ((_a = iframeContainerElement === null || iframeContainerElement === void 0 ? void 0 : iframeContainerElement.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return;
        }
        if (isSessionKeyCompatibleWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
            yield ((_b = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _b === void 0 ? void 0 : _b.createOrRestoreSession());
        }
        if (isTurnkeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
            yield ((_c = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _c === void 0 ? void 0 : _c.getTurnkeyClient());
        }
        if (isTurnkeyWallet) {
            yield initExport({
                iframeContainer: iframeContainerElement,
                iframeElementId,
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
            lines.push(jsx("div", { className: className, "data-testid": i === 0 ? 'private-key-skeleton' : undefined }, i));
        }
        return lines;
    };
    if (!isTurnkeyWallet && !isWaasWallet) {
        return null;
    }
    return (jsxs("div", { className: getCredentialContainerClassName(), children: [jsx("div", { id: iframeContainerId, className: getIframeContainerClassName(), ref: setIframeContainerRef }), !data && iframeContainerRef.current && (jsx("div", { className: 'embedded-wallet-export__skeleton-container', children: getSkeletonLines() }))] }));
};

export { EmbeddedWalletExport };
