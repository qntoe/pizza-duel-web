import { SuiSignAndExecuteTransactionBlockOutput, SuiSignAndExecuteTransactionOutput, WalletAccount, SignedTransaction, SuiSignTransactionBlockOutput } from '@mysten/wallet-standard';
import { Transaction } from '@mysten/sui/transactions';
import { ExecuteTransactionRequestType, SuiTransactionBlockResponseOptions } from '@mysten/sui/client';
import { Injected } from '../injected/injected';
/**
 * Slush Wallet Connector with Multi-Account Support
 *
 * This connector extends the base Injected connector to support multiple
 * wallet accounts per connection prompt. Unlike other Sui wallets that only
 * allow one account at a time, Slush wallet can connect multiple accounts
 * simultaneously.
 *
 * Key features:
 * - Tracks multiple wallet accounts (accounts array)
 * - Filters new accounts to allow only one new address per connection
 * - Supports setting a primary account for operations
 * - Handles account switching for transactions and signing
 */
export declare class Slush extends Injected {
    name: string;
    overrideKey: string;
    /** Tracks all wallet accounts returned by the wallet */
    protected accounts: WalletAccount[];
    /** Tracks the primary/active wallet account (first account by default) */
    getPrimaryAccount(): WalletAccount | undefined;
    /**
     * Set a specific account as the primary account by address.
     * This moves the specified account to the front of the accounts array.
     * @param address - The address of the account to set as primary
     * @returns true if the account was found and set as primary, false otherwise
     */
    setPrimaryAccount(account: WalletAccount | undefined): Promise<boolean | undefined>;
    private setPrimaryAccountAddress;
    /**
     * Connect to the wallet using the standard:connect feature.
     *
     * Any currently connected wallet will be disconnected first.
     * This happens because we want the user to reselect which wallets they want connected.
     *
     * We only allow adding one new wallet connection per manual user connection.
     */
    connect({ silent, }?: {
        silent?: boolean;
    }): Promise<void>;
    validateActiveWallet(expectedAddress: string): Promise<void>;
    /** Get the wallet address by connecting to the current account */
    getAddress(): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    /**
     * Helper to check if accounts have changed by comparing addresses.
     * Accounts are compared in a sorted order to handle cases where the order changes.
     *
     * @param newAccounts - The new accounts to compare against current accounts
     * @returns true if accounts have changed, false otherwise
     */
    private hasAccountsChanged;
    /**
     * Filters new accounts to enforce the SDK's single-wallet connection constraint.
     * The Dynamic SDK only supports connecting one wallet at a time.
     * This method ensures that at most one NEW address is added to the existing accounts.
     *
     * @param newAccounts - The new accounts returned by the wallet
     * @returns Filtered accounts with at most one new address added
     */
    private filterAccountsForSingleWalletConstraint;
    handleAccountChange(): void;
    signMessage(messageToSign: string, { address }?: {
        address?: string;
    }): Promise<string | undefined>;
    /** Function used to create transactions in the SDK interface */
    createUiTransaction(from: string): Promise<import("dist/packages/types/src").IUITransaction>;
    signAndExecuteTransactionFeature({ transaction, legacyOptions, }: {
        transaction: Transaction;
        legacyOptions?: {
            options?: SuiTransactionBlockResponseOptions;
            requestType?: ExecuteTransactionRequestType;
        };
    }): Promise<SuiSignAndExecuteTransactionOutput | SuiSignAndExecuteTransactionBlockOutput>;
    signTransactionFeature({ transaction, }: {
        transaction: Transaction;
    }): Promise<SignedTransaction | SuiSignTransactionBlockOutput>;
}
