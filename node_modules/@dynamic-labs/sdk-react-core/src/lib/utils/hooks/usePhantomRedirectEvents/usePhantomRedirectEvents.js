'use client'
import { useRef, useEffect } from 'react';
import { usePhantomRedirectContext } from '../../../context/PhantomRedirectContext/PhantomRedirectContext.js';

/**
 * Hook to listen for Phantom redirect events.
 *
 * When using Phantom wallet on mobile, signing operations open the Phantom app
 * via deep link. After the user approves, Phantom redirects back to your app.
 * On mobile web browsers, this redirect opens a new tab, which means the
 * original page context (including any Promise awaiting the signature) is lost.
 *
 * This hook allows you to subscribe to events that fire when Phantom redirects
 * back, so you can handle the signature result even after context is lost.
 *
 * @example
 * ```tsx
 * usePhantomRedirectEvents({
 *   onSignMessage: ({ signature, errorCode, errorMessage }) => {
 *     if (errorCode) {
 *       console.error('Sign failed:', errorMessage);
 *       return;
 *     }
 *     console.log('Signature:', signature);
 *   },
 * });
 * ```
 */
const usePhantomRedirectEvents = ({ onSignMessage, onSignAndSendTransaction, onSignTransaction, onSignAllTransactions, }) => {
    const { phantomRedirectConnector } = usePhantomRedirectContext();
    // Store callbacks in refs to avoid re-subscribing when they change
    const onSignMessageRef = useRef(onSignMessage);
    const onSignAndSendTransactionRef = useRef(onSignAndSendTransaction);
    const onSignTransactionRef = useRef(onSignTransaction);
    const onSignAllTransactionsRef = useRef(onSignAllTransactions);
    // Keep refs up to date
    onSignMessageRef.current = onSignMessage;
    onSignAndSendTransactionRef.current = onSignAndSendTransaction;
    onSignTransactionRef.current = onSignTransaction;
    onSignAllTransactionsRef.current = onSignAllTransactions;
    useEffect(() => {
        if (!phantomRedirectConnector)
            return;
        const handleSignMessage = (data) => { var _a; return (_a = onSignMessageRef.current) === null || _a === void 0 ? void 0 : _a.call(onSignMessageRef, data); };
        const handleSignAndSendTransaction = (data) => { var _a; return (_a = onSignAndSendTransactionRef.current) === null || _a === void 0 ? void 0 : _a.call(onSignAndSendTransactionRef, data); };
        const handleSignTransaction = (data) => { var _a; return (_a = onSignTransactionRef.current) === null || _a === void 0 ? void 0 : _a.call(onSignTransactionRef, data); };
        const handleSignAllTransactions = (data) => { var _a; return (_a = onSignAllTransactionsRef.current) === null || _a === void 0 ? void 0 : _a.call(onSignAllTransactionsRef, data); };
        phantomRedirectConnector.on('signMessage', handleSignMessage);
        phantomRedirectConnector.on('signAndSendTransaction', handleSignAndSendTransaction);
        phantomRedirectConnector.on('signTransaction', handleSignTransaction);
        phantomRedirectConnector.on('signAllTransactions', handleSignAllTransactions);
        return () => {
            phantomRedirectConnector.off('signMessage', handleSignMessage);
            phantomRedirectConnector.off('signAndSendTransaction', handleSignAndSendTransaction);
            phantomRedirectConnector.off('signTransaction', handleSignTransaction);
            phantomRedirectConnector.off('signAllTransactions', handleSignAllTransactions);
        };
    }, [phantomRedirectConnector]);
};

export { usePhantomRedirectEvents };
