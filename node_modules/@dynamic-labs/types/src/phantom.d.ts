/**
 * Phantom redirect event payload types
 * These are shared between wallet-connector-core and webview-messages
 */
export type PhantomSignMessagePayload = {
    signature?: string;
    errorCode?: string;
    errorMessage?: string;
    /** Unique ID to match this event with its originating request */
    requestId?: string;
    /** The message that was signed */
    message?: string;
};
export type PhantomSignAndSendTransactionPayload = {
    signature?: string;
    errorCode?: string;
    errorMessage?: string;
    /** Unique ID to match this event with its originating request */
    requestId?: string;
};
export type PhantomSignTransactionPayload = {
    /** Signed serialized transaction, bs58-encoded */
    transaction?: string;
    errorCode?: string;
    errorMessage?: string;
    /** Unique ID to match this event with its originating request */
    requestId?: string;
};
export type PhantomSignAllTransactionsPayload = {
    /** Signed serialized transactions, bs58-encoded */
    transactions?: string[];
    errorCode?: string;
    errorMessage?: string;
    /** Unique ID to match this event with its originating request */
    requestId?: string;
};
