'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { DynamicError } from '@dynamic-labs/utils';
import { getSuiNetworkIdFromName } from '../../utils/network/networkHelpers.js';
import { Injected } from '../injected/injected.js';

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
class Slush extends Injected {
    constructor() {
        super(...arguments);
        this.name = 'Slush — A Sui wallet';
        this.overrideKey = 'slushsui';
        /** Tracks all wallet accounts returned by the wallet */
        this.accounts = [];
    }
    /** Tracks the primary/active wallet account (first account by default) */
    getPrimaryAccount() {
        return this.accounts[0];
    }
    /**
     * Set a specific account as the primary account by address.
     * This moves the specified account to the front of the accounts array.
     * @param address - The address of the account to set as primary
     * @returns true if the account was found and set as primary, false otherwise
     */
    setPrimaryAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!account) {
                this.accounts = [];
                return;
            }
            return this.setPrimaryAccountAddress(account.address);
        });
    }
    setPrimaryAccountAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const accountIndex = this.accounts.findIndex((acc) => acc.address === address);
            if (accountIndex === -1) {
                this.logger.error(`[setPrimaryAccount] Account with address ${address} not found for ${this.name}`);
                return false;
            }
            if (accountIndex === 0) {
                // Already primary
                return true;
            }
            // Move the account to the front
            this.logger.debug(`[${this.name}] [setPrimaryAccount] Moving account to primary position`, {
                accountIndex,
                address,
                currentAccountAddresses: this.accounts.map((acc) => acc.address),
            });
            const [targetAccount] = this.accounts.splice(accountIndex, 1);
            this.accounts.unshift(targetAccount);
            this.logger.debug(`[setPrimaryAccount] Set account ${address} as primary account for ${this.name}`);
            // Update the active network ID based on the new primary account
            const primaryChain = (_a = this.getPrimaryAccount()) === null || _a === void 0 ? void 0 : _a.chains[0];
            if (primaryChain) {
                this.activeNetworkId = getSuiNetworkIdFromName(primaryChain, this.suiNetworks);
            }
            return true;
        });
    }
    /**
     * Connect to the wallet using the standard:connect feature.
     *
     * Any currently connected wallet will be disconnected first.
     * This happens because we want the user to reselect which wallets they want connected.
     *
     * We only allow adding one new wallet connection per manual user connection.
     */
    connect() {
        return __awaiter(this, arguments, void 0, function* ({ silent = false, } = {}) {
            var _a, _b, _c;
            this.logger.debug(`[${this.name}] [connect] Initiating connection`, {
                isConnecting: this.isConnecting,
                silent,
            });
            if (this.isConnecting) {
                return;
            }
            const connectFeature = (_a = this.getFeatures()) === null || _a === void 0 ? void 0 : _a['standard:connect'];
            if (!connectFeature) {
                if (silent) {
                    return;
                }
                throw new DynamicError('Wallet does not support standard:connect');
            }
            // Start connecting
            this.isConnecting = true;
            try {
                const disconnectFeature = (_b = this.getFeatures()) === null || _b === void 0 ? void 0 : _b['standard:disconnect'];
                if (disconnectFeature) {
                    yield disconnectFeature.disconnect();
                }
                const response = yield connectFeature.connect(silent ? { silent } : undefined);
                this.logger.debug(`[${this.name}] [connect] Connection returned accounts: ${response === null || response === void 0 ? void 0 : response.accounts.length}`);
                this.logger.debug(`[${this.name}] [connect] Received accounts from wallet`, {
                    accountAddresses: response === null || response === void 0 ? void 0 : response.accounts.map((acc) => acc.address),
                    accountCount: response === null || response === void 0 ? void 0 : response.accounts.length,
                });
                // Store all accounts returned by the wallet (create a mutable copy)
                const newAccounts = (response === null || response === void 0 ? void 0 : response.accounts) ? [...response.accounts] : [];
                if (this.hasAccountsChanged(newAccounts)) {
                    const filteredAccounts = this.filterAccountsForSingleWalletConstraint({
                        newAccounts,
                    });
                    this.logger.logVerboseTroubleshootingMessage(`[${this.name}] [connect] Accounts changed, applying filter`, {
                        currentAccounts: this.accounts.map((acc) => acc.address),
                        newAccounts: filteredAccounts.map((acc) => acc.address),
                    });
                    this.accounts = filteredAccounts;
                }
                const primaryChain = (_c = this.getPrimaryAccount()) === null || _c === void 0 ? void 0 : _c.chains[0];
                if (primaryChain) {
                    this.activeNetworkId = getSuiNetworkIdFromName(primaryChain, this.suiNetworks);
                }
            }
            catch (error) {
                this.logger.error(error);
                if (silent) {
                    return;
                }
                throw new DynamicError('Connection failed');
            }
            finally {
                this.isConnecting = false;
            }
            this.setupEventListeners();
        });
    }
    validateActiveWallet(expectedAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const addresses = yield this.getConnectedAccounts();
            const isWalletActive = addresses.find((address) => address === expectedAddress);
            if (isWalletActive) {
                return;
            }
            return this.handleWalletNotActive({
                activeAddress: (yield this.getConnectedAccounts())[0],
                expectedAddress,
            });
        });
    }
    /** Get the wallet address by connecting to the current account */
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[${this.name}] [getAddress] called, attempting to obtain the account address`);
            if (this.handleInAppBrowserGetAddress()) {
                return;
            }
            const previousAddresses = this.accounts.map((account) => account.address);
            yield this.connect();
            const newAddresses = this.accounts.map((account) => account.address);
            // If there is a new account, return the new address
            const newAddress = newAddresses.find((address) => !previousAddresses.includes(address));
            if (newAddress) {
                yield this.setPrimaryAccountAddress(newAddress);
                this.logger.debug(`[${this.name}] [getAddress] New account added`, {
                    accountAddresses: this.accounts.map((acc) => acc.address),
                    newAddress,
                });
                return newAddress;
            }
            this.logger.logVerboseTroubleshootingMessage(`[${this.name}] [setupEventListeners] No new address to add`, {
                accountAddresses: this.accounts.map((acc) => acc.address),
                newAddresses,
            });
            if (newAddresses.length === 0) {
                throw new DynamicError('No account found');
            }
            return newAddresses[0];
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.accounts.length === 0) {
                yield this.connect({ silent: true });
            }
            // Return all connected account addresses
            return this.accounts.map((account) => account.address);
        });
    }
    /**
     * Helper to check if accounts have changed by comparing addresses.
     * Accounts are compared in a sorted order to handle cases where the order changes.
     *
     * @param newAccounts - The new accounts to compare against current accounts
     * @returns true if accounts have changed, false otherwise
     */
    hasAccountsChanged(newAccounts) {
        const currentAddresses = this.accounts
            .map((acc) => acc.address)
            .sort()
            .join(',');
        const newAddresses = newAccounts
            .map((acc) => acc.address)
            .sort()
            .join(',');
        return currentAddresses !== newAddresses;
    }
    /**
     * Filters new accounts to enforce the SDK's single-wallet connection constraint.
     * The Dynamic SDK only supports connecting one wallet at a time.
     * This method ensures that at most one NEW address is added to the existing accounts.
     *
     * @param newAccounts - The new accounts returned by the wallet
     * @returns Filtered accounts with at most one new address added
     */
    filterAccountsForSingleWalletConstraint({ newAccounts, }) {
        if (this.accounts.length === 0) {
            return [newAccounts[0]];
        }
        // Keep all currently connected accounts that are still in the new accounts list
        const currentAddresses = new Set(this.accounts.map((acc) => acc.address.toLowerCase()));
        const filteredAccounts = newAccounts.filter((acc) => currentAddresses.has(acc.address.toLowerCase()));
        // Find new accounts that aren't in the current list
        const trulyNewAccounts = newAccounts.filter((acc) => !currentAddresses.has(acc.address.toLowerCase()));
        // Allow at most one new account to be added
        if (trulyNewAccounts.length > 0) {
            filteredAccounts.push(trulyNewAccounts[0]);
        }
        return filteredAccounts;
    }
    handleAccountChange() {
        // We intentionally ignore account change events from Slush wallets.
        // Slush wallets support connecting multiple accounts simultaneously,
        // but the Dynamic SDK only supports connecting one wallet at a time.
        // To enforce this constraint, we only allow adding new accounts through the connect()
        // method, where we can properly filter and ensure at most one new account is added.
        // Account change events are therefore ignored to prevent bypassing this limitation.
    }
    signMessage(messageToSign_1) {
        const _super = Object.create(null, {
            signMessage: { get: () => super.signMessage }
        });
        return __awaiter(this, arguments, void 0, function* (messageToSign, { address } = {}) {
            if (address) {
                yield this.setPrimaryAccountAddress(address);
            }
            return _super.signMessage.call(this, messageToSign);
        });
    }
    /** Function used to create transactions in the SDK interface */
    createUiTransaction(from) {
        const _super = Object.create(null, {
            createUiTransaction: { get: () => super.createUiTransaction }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.accounts.length === 0) {
                throw new DynamicError('No account connected');
            }
            yield this.setPrimaryAccountAddress(from);
            return _super.createUiTransaction.call(this, from);
        });
    }
    signAndExecuteTransactionFeature(_a) {
        const _super = Object.create(null, {
            signAndExecuteTransactionFeature: { get: () => super.signAndExecuteTransactionFeature }
        });
        return __awaiter(this, arguments, void 0, function* ({ transaction, legacyOptions, }) {
            const { sender } = transaction.getData();
            if (sender) {
                yield this.setPrimaryAccountAddress(sender);
            }
            return _super.signAndExecuteTransactionFeature.call(this, {
                legacyOptions,
                transaction,
            });
        });
    }
    signTransactionFeature(_a) {
        const _super = Object.create(null, {
            signTransactionFeature: { get: () => super.signTransactionFeature }
        });
        return __awaiter(this, arguments, void 0, function* ({ transaction, }) {
            const { sender } = transaction.getData();
            if (sender) {
                yield this.setPrimaryAccountAddress(sender);
            }
            return _super.signTransactionFeature.call(this, { transaction });
        });
    }
}
Object.defineProperty(Slush, 'key', {
    value: 'slushsui',
    writable: false,
});

export { Slush };
