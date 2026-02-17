import { Transaction } from '@mysten/sui/transactions';
import { SuiClient } from '@mysten/sui/client';
import { SuiSignAndExecuteTransactionBlockOutput, SuiSignAndExecuteTransactionOutput, WalletAccount } from '@mysten/wallet-standard';
import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { SuiWalletConnector } from '../SuiWalletConnector';
import { SuiSendBalanceProps, SuiSignAndExecuteTransactionBlockOptions } from '../types';
export declare class SuiWallet extends Wallet<SuiWalletConnector> {
    /**
     * Sends the native balance of the wallet to the given address.
     * @param amount - The amount of balance
     * @param toAddress - The address to send the balance to.
     * @returns The transaction as base64 encoded bcs.
     */
    sendBalance({ amount, toAddress, token, }: SuiSendBalanceProps): Promise<string>;
    /**
     * Returns the Sui Client object initialized for the wallet's current network.
     * @returns The [SuiClient] object.
     */
    getSuiClient(): Promise<SuiClient | undefined>;
    /**
     * @deprecated Use `getSuiClient` instead
     */
    getWalletClient(): Promise<SuiClient | undefined>;
    /**
     * Returns the wallet's current active account.
     * @returns a readonly [WalletAccount] object.
     */
    getWalletAccount(): Promise<WalletAccount | undefined>;
    /**
     * Returns the wallet's current active network.
     * @returns a string representing the active network, i.e. 'sui:devnet'.
     */
    getActiveNetwork(): Promise<string | undefined>;
    /**
     * Signs a Sui [Transaction].
     * @param tx - The [Transaction] to sign.
     * @returns The signature of the signed transaction.
     */
    signTransaction(transaction: Transaction): Promise<{
        signature: string;
        bytes: string;
    }>;
    signAndExecuteTransaction({ transaction, legacyOptions, }: {
        transaction: Transaction;
        legacyOptions?: SuiSignAndExecuteTransactionBlockOptions;
    }): Promise<SuiSignAndExecuteTransactionOutput | SuiSignAndExecuteTransactionBlockOutput>;
}
