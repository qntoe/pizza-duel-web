import { SignAllTransactionsListener, SignAndSendTransactionListener, SignMessageListener, SignTransactionListener } from '@dynamic-labs/wallet-connector-core';
export type UsePhantomRedirectEventsProps = {
    /** Called when a signMessage operation completes after Phantom redirect. */
    onSignMessage?: SignMessageListener;
    /** Called when a signAndSendTransaction operation completes after Phantom redirect. */
    onSignAndSendTransaction?: SignAndSendTransactionListener;
    /** Called when a signTransaction operation completes after Phantom redirect. */
    onSignTransaction?: SignTransactionListener;
    /** Called when a signAllTransactions operation completes after Phantom redirect. */
    onSignAllTransactions?: SignAllTransactionsListener;
};
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
export declare const usePhantomRedirectEvents: ({ onSignMessage, onSignAndSendTransaction, onSignTransaction, onSignAllTransactions, }: UsePhantomRedirectEventsProps) => void;
