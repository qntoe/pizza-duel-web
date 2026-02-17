import EventEmitter from 'eventemitter3';
import { PhantomSignAllTransactionsPayload, PhantomSignAndSendTransactionPayload, PhantomSignMessagePayload, PhantomSignTransactionPayload } from '@dynamic-labs/types';
import { WalletConnectorBase } from '..';
export type SignAndSendTransactionListener = (response: PhantomSignAndSendTransactionPayload) => void;
export type SignAllTransactionsListener = (response: PhantomSignAllTransactionsPayload) => void;
export type SignTransactionListener = (response: PhantomSignTransactionPayload) => void;
export type SignMessageListener = (response: PhantomSignMessagePayload) => void;
type Events = {
    signAndSendTransaction: SignAndSendTransactionListener;
    signAllTransactions: SignAllTransactionsListener;
    signMessage: SignMessageListener;
    signTransaction: SignTransactionListener;
};
export interface IPhantomRedirectConnector extends WalletConnectorBase {
    extractSignature(): {
        signature: string;
        message: string;
    };
    extractTransactions(): any[];
    extractTransaction(): any;
    /**
     * Extracts the signed transaction and sends it to the network.
     * Used for signAndSendTransaction since Phantom redirect doesn't support it natively.
     * @returns The transaction signature
     */
    extractAndSendTransaction(): Promise<string>;
    consumeMethod(): keyof Events | undefined;
    consumeRequestId?(): string | undefined;
}
export type IPhantomRedirectConnectorWithEvents = IPhantomRedirectConnector & EventEmitter<Events>;
export {};
