import { ExecuteTransactionRequestType, SuiClient, SuiTransactionBlockResponseOptions } from '@mysten/sui/client';
import { SignedTransaction, SuiSignAndExecuteTransactionBlockOutput, SuiSignAndExecuteTransactionOutput, SuiSignTransactionBlockOutput, SuiWalletFeatures, WalletAccount, WalletWithFeatures } from '@mysten/wallet-standard';
import { Transaction } from '@mysten/sui/transactions';
import { Logger } from '@dynamic-labs/logger';
import { GenericNetwork, IUITransaction } from '@dynamic-labs/types';
import { Chain, WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { SuiChangeEvent, SuiWalletConnectorProps, SuiWalletStandardEventHandler } from './types';
import { SuiWallet } from './wallet/SuiWallet';
export declare abstract class SuiWalletConnector extends WalletConnectorBase<typeof SuiWallet> {
    name: string;
    ChainWallet: typeof SuiWallet;
    connectedChain: Chain;
    supportedChains: Chain[];
    switchNetworkOnlyFromWallet: boolean;
    /** required for metamask snap integration as MM snaps don't have event listeners */
    canSetEventListeners: boolean;
    eventsHandler: SuiWalletStandardEventHandler | undefined;
    /** Sui wallet instance */
    wallet: WalletWithFeatures<SuiWalletFeatures> | undefined;
    eventsUnsubscribeHandler: (() => void) | undefined;
    /** Tracks the active wallet account */
    protected account: WalletAccount | undefined;
    /** Returns the active wallet account, may be overridden */
    getPrimaryAccount(): WalletAccount | undefined;
    setPrimaryAccount(account: WalletAccount | undefined): void;
    /**
     * Tracks the active network id
     *
     * This is needed because the account's network order doesn't update after a
     * network change event.
     */
    protected activeNetworkId: string | undefined;
    /** Sui clients */
    suiClients: Record<string, SuiClient>;
    /** Enabled SUI networks */
    suiNetworks: GenericNetwork[];
    /** Dynamic logger */
    logger: Logger;
    /** Whether the connector is currently attempting to connect */
    protected isConnecting: boolean;
    constructor(name: string, opts: SuiWalletConnectorProps);
    /** Helper to return the wallet features */
    getFeatures(): SuiWalletFeatures | undefined;
    /** Connect to the wallet using the standard:connect feature */
    connect({ silent }?: {
        silent?: boolean;
    }): Promise<void>;
    /**
     * If is inAppBrowser experience, redirects to the inAppBrowser template.
     * Returns true if redirection was triggered.
     */
    protected handleInAppBrowserGetAddress(): boolean;
    /** Get the wallet address by connecting to the current account */
    getAddress(): Promise<string | undefined>;
    /** Returns the network id of the account's active chain */
    getNetwork(): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    /**
     * Helper to get the chain id from a [SuiChangeEvent].
     *
     * Some wallets set the event.chains objects but others use event.accounts.chains,
     * so we need to deal with both cases.
     *
     * @param event - The [SuiChangeEvent] to get the chain id from
     * @returns The dynamic chain id or '-1' if the chain id is not found
     */
    protected getChainFromEvent(event: SuiChangeEvent): string;
    handleAccountChange(event: SuiChangeEvent): void;
    setupEventListeners(): void;
    /**
     * Helper to get the Sui client for the current network
     *
     * The client will prefer the private customer rpc url if available.
     */
    getSuiClient(networkId?: string): Promise<SuiClient | undefined>;
    getBalance(address: string): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getWalletAccount(): Promise<WalletAccount | undefined>;
    /** Function used to create transactions in the SDK interface */
    createUiTransaction(from: string): Promise<IUITransaction>;
    teardownEventListeners(): Promise<void>;
    endSession(): Promise<void>;
    getEnabledNetworks(): GenericNetwork[];
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
export type SuiWalletConnectorType = SuiWalletConnector;
