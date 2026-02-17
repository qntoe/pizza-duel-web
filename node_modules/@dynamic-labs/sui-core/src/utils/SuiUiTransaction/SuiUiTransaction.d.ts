import { Transaction } from '@mysten/sui/transactions';
import { SuiClient } from '@mysten/sui/client';
import { IUITransaction, IUITransactionFormatOptions } from '@dynamic-labs/types';
type SuiUiTransactionProps = {
    /** SUI Address of the sender */
    from: string;
    /** The [SuiClient] instance, needed to estimate gas fees */
    client: SuiClient;
    /** The function to call when the transaction is submitted */
    onSubmit: (transaction?: Transaction) => Promise<any>;
};
export declare class SuiUiTransaction implements IUITransaction {
    to: string | undefined;
    from: string;
    value: bigint | undefined;
    chain: string;
    receipt: string | undefined;
    data: undefined;
    fee: {
        gas: bigint | undefined;
    };
    nonNativeAddress?: string;
    nonNativeDecimal?: number;
    nonNativeValue?: bigint;
    nativePrice?: number;
    private onSubmit;
    private client;
    constructor({ onSubmit, from, client }: SuiUiTransactionProps);
    /**
     * Fetches the gas fee for the transaction by executing a dry run of the
     * transaction and calculating the gas used.
     *
     * @returns The gas fee for the transaction
     */
    fetchFee(): Promise<void>;
    isGasSponsored(): boolean;
    parse(input: string): bigint;
    parseNonNativeToken(input: string, decimals: number): bigint;
    formatNonNativeToken: (value: bigint, decimals: number) => string;
    format(value: bigint, { precision }?: IUITransactionFormatOptions): string;
    submit(): Promise<any>;
    getBalance(): Promise<bigint>;
    validateAddressFormat(address: string): boolean;
    private createTransaction;
    private createTransactionSafe;
}
export {};
