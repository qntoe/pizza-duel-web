import { Address, CustomTransport, GetCapabilitiesReturnType, Hex, RpcTransactionRequest, SendCallsParameters, SendCallsReturnType, Transport } from 'viem';
type Provider = Pick<ReturnType<CustomTransport>, 'request'>;
export type InterceptTransportProps = {
    transport: Transport;
    getAccounts?: (props: {
        provider: Provider;
    }) => Promise<Address[]>;
    onPersonalSign?: (props: {
        message: Hex;
        args: Args;
        provider: Provider;
    }) => Promise<string>;
    onSendTransaction?: (props: {
        transaction: RpcTransactionRequest;
        args: Args;
        provider: Provider;
    }) => Promise<Hex>;
    onSignTransaction?: (props: {
        transaction: RpcTransactionRequest;
        args: Args;
        provider: Provider;
    }) => Promise<Hex>;
    onSignTypedData?: (props: {
        message: string;
        args: Args;
        provider: Provider;
    }) => Promise<string>;
    onGetCapabilities?: (props: {
        provider: Provider;
    }) => Promise<GetCapabilitiesReturnType>;
    onSendCalls?: (props: {
        callParams: SendCallsParameters;
        provider: Provider;
    }) => Promise<SendCallsReturnType>;
};
type Args = {
    method: string;
    params: unknown[];
};
export declare const interceptTransport: ({ getAccounts, onPersonalSign, onSendTransaction, onSignTransaction, onSignTypedData, onGetCapabilities, onSendCalls, transport, }: InterceptTransportProps) => CustomTransport;
export {};
