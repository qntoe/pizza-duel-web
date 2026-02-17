'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var client = require('@mysten/sui/client');
var logger = require('@dynamic-labs/logger');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var networkHelpers = require('./utils/network/networkHelpers.cjs');
var SuiUiTransaction = require('./utils/SuiUiTransaction/SuiUiTransaction.cjs');
var SuiWallet = require('./wallet/SuiWallet.cjs');

class SuiWalletConnector extends walletConnectorCore.WalletConnectorBase {
    /** Returns the active wallet account, may be overridden */
    getPrimaryAccount() {
        return this.account;
    }
    setPrimaryAccount(account) {
        this.account = account;
    }
    constructor(name, opts) {
        super(opts);
        this.name = 'Sui';
        this.ChainWallet = SuiWallet.SuiWallet;
        this.connectedChain = 'SUI';
        this.supportedChains = ['SUI'];
        this.switchNetworkOnlyFromWallet = true;
        /** required for metamask snap integration as MM snaps don't have event listeners */
        this.canSetEventListeners = true;
        /** Sui clients */
        this.suiClients = {};
        /** Whether the connector is currently attempting to connect */
        this.isConnecting = false;
        this.name = name;
        this.wallet = opts.wallet;
        this.chainRpcProviders = opts.chainRpcProviders;
        this.suiNetworks = opts.suiNetworks;
        this.logger = new logger.Logger(this.name);
    }
    /** Helper to return the wallet features */
    getFeatures() {
        var _a;
        return (_a = this.wallet) === null || _a === void 0 ? void 0 : _a.features;
    }
    /** Connect to the wallet using the standard:connect feature */
    connect() {
        return _tslib.__awaiter(this, arguments, void 0, function* ({ silent } = {}) {
            var _a, _b;
            if (this.getPrimaryAccount() || this.isConnecting) {
                // Account is already connected or we're already connecting
                return;
            }
            const connectFeature = (_a = this.getFeatures()) === null || _a === void 0 ? void 0 : _a['standard:connect'];
            if (!connectFeature) {
                if (silent) {
                    return;
                }
                throw new utils.DynamicError('Wallet does not support standard:connect');
            }
            // Start connecting
            this.isConnecting = true;
            this.logger.debug(`[${this.name}] [connect] Creating new connection`);
            try {
                const response = yield connectFeature.connect(silent ? { silent } : undefined);
                this.logger.debug(`[${this.name}] [connect] Connection returned accounts: ${response === null || response === void 0 ? void 0 : response.accounts.length}`);
                this.setPrimaryAccount(response === null || response === void 0 ? void 0 : response.accounts[0]);
                const primaryChain = (_b = this.getPrimaryAccount()) === null || _b === void 0 ? void 0 : _b.chains[0];
                if (primaryChain) {
                    this.activeNetworkId = networkHelpers.getSuiNetworkIdFromName(primaryChain, this.suiNetworks);
                }
            }
            catch (error) {
                this.logger.error(error);
                if (silent) {
                    return;
                }
                throw new utils.DynamicError('Connection failed');
            }
            finally {
                this.isConnecting = false;
            }
            this.setupEventListeners();
        });
    }
    /**
     * If is inAppBrowser experience, redirects to the inAppBrowser template.
     * Returns true if redirection was triggered.
     */
    handleInAppBrowserGetAddress() {
        var _a;
        const inAppBrowserUrl = (_a = this.metadata) === null || _a === void 0 ? void 0 : _a.inAppBrowserUrl;
        if (!utils.isMobile() ||
            this.isInstalledOnBrowser() ||
            !inAppBrowserUrl ||
            this.mobileExperience !== 'in-app-browser') {
            return false;
        }
        const inAppBrowserTemplate = utils.template(inAppBrowserUrl);
        const deepLink = inAppBrowserTemplate({
            encodedDappURI: encodeURIComponent(utils.PlatformService.getUrl().toString()),
        });
        utils.PlatformService.openURL(deepLink);
        return true;
    }
    /** Get the wallet address by connecting to the current account */
    getAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            var _a;
            this.logger.debug(`[${this.name}] [getAddress] called, attempting to obtain the account address`);
            if (this.handleInAppBrowserGetAddress()) {
                return;
            }
            yield this.connect();
            if (!this.getPrimaryAccount()) {
                throw new utils.DynamicError(`[${this.name}] [getAddress] No account found`);
            }
            return (_a = this.getPrimaryAccount()) === null || _a === void 0 ? void 0 : _a.address;
        });
    }
    /** Returns the network id of the account's active chain */
    getNetwork() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.getPrimaryAccount()) {
                yield this.connect();
            }
            return this.activeNetworkId;
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.getPrimaryAccount()) {
                yield this.connect({ silent: true });
            }
            const address = (_a = this.getPrimaryAccount()) === null || _a === void 0 ? void 0 : _a.address;
            if (address) {
                return [address];
            }
            return [];
        });
    }
    /**
     * Helper to get the chain id from a [SuiChangeEvent].
     *
     * Some wallets set the event.chains objects but others use event.accounts.chains,
     * so we need to deal with both cases.
     *
     * @param event - The [SuiChangeEvent] to get the chain id from
     * @returns The dynamic chain id or '-1' if the chain id is not found
     */
    getChainFromEvent(event) {
        var _a, _b, _c, _d, _e;
        let suiChain = (_a = event.chains) === null || _a === void 0 ? void 0 : _a[0];
        if (!suiChain) {
            suiChain = (_d = (_c = (_b = event.accounts) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.chains) === null || _d === void 0 ? void 0 : _d[0];
        }
        if (!suiChain) {
            return '-1';
        }
        return (_e = networkHelpers.getSuiNetworkIdFromName(suiChain, this.suiNetworks)) !== null && _e !== void 0 ? _e : '-1';
    }
    handleAccountChange(event) {
        var _a;
        // If the event sets accounts but it's empty, we need to disconnect.
        if (event.accounts.length === 0 && this.getPrimaryAccount()) {
            this.setPrimaryAccount(undefined);
            this.emit('disconnect');
            return;
        }
        const [primaryAccount] = event.accounts;
        if (primaryAccount.address !== ((_a = this.getPrimaryAccount()) === null || _a === void 0 ? void 0 : _a.address)) {
            this.setPrimaryAccount(primaryAccount);
            this.emit('accountChange', { accounts: [primaryAccount.address] });
        }
    }
    setupEventListeners() {
        var _a;
        if (!this.canSetEventListeners || this.eventsHandler)
            return;
        const eventsFeature = (_a = this.getFeatures()) === null || _a === void 0 ? void 0 : _a['standard:events'];
        if (!eventsFeature) {
            this.logger.debug(`[${this.name}] [setupEventListeners] Wallet not connected or does not support standard:events`);
            return;
        }
        this.eventsHandler = (event) => _tslib.__awaiter(this, void 0, void 0, function* () {
            if (event.accounts) {
                this.handleAccountChange(event);
                return;
            }
            // Some events will leave out accounts but set the chains object, so we process those
            // with the helper.
            const suiChainId = this.getChainFromEvent(event);
            if (suiChainId !== this.activeNetworkId) {
                this.activeNetworkId = suiChainId;
                this.emit('chainChange', { chain: suiChainId });
            }
        });
        this.logger.debug(`[${this.name}] [setupEventListeners] Setting up sui wallet connector event listeners`);
        this.eventsUnsubscribeHandler = eventsFeature.on('change', this.eventsHandler);
    }
    /**
     * Helper to get the Sui client for the current network
     *
     * The client will prefer the private customer rpc url if available.
     */
    getSuiClient(networkId) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const clientNetworkId = networkId !== null && networkId !== void 0 ? networkId : (yield this.getNetwork());
            if (!clientNetworkId) {
                this.logger.error(`[${this.name}] [getSuiClient] Failed to get network id`);
                return undefined;
            }
            // Default to an existing client if available
            if (this.suiClients[clientNetworkId]) {
                return this.suiClients[clientNetworkId];
            }
            const network = this.getEnabledNetworks().find((network) => network.networkId === clientNetworkId);
            const url = network ? networkHelpers.getPreferredRpcUrl(network) : undefined;
            if (!url) {
                this.logger.error(`[${this.name}] [getSuiClient] Failed to get network url`);
                return undefined;
            }
            this.suiClients[clientNetworkId] = new client.SuiClient({
                url: url,
            });
            return this.suiClients[clientNetworkId];
        });
    }
    getBalance(address) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = yield this.getSuiClient();
            if (!client) {
                this.logger.error(`[${this.name}] [getBalance] Failed to get Sui client`);
                return undefined;
            }
            const balanceResult = yield client.getBalance({
                owner: address,
            });
            // Balance comes back as MIST, 1 SUI = 1e9 MIST
            const balance = Number(balanceResult === null || balanceResult === void 0 ? void 0 : balanceResult.totalBalance) / 1e9;
            if (Number.isNaN(balance)) {
                this.logger.error(`[${this.name}] [getBalance] Failed to get balance for address: ${address}`);
                return undefined;
            }
            return balance.toFixed(6);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            var _a;
            this.logger.debug(`[${this.name}] [signMessage] called, attempting to sign a message`);
            const signFeature = (_a = this.getFeatures()) === null || _a === void 0 ? void 0 : _a['sui:signPersonalMessage'];
            if (!signFeature) {
                throw new utils.DynamicError('Wallet does not support sui:signPersonalMessage');
            }
            if (!this.getPrimaryAccount()) {
                throw new utils.DynamicError('[signMessage] No account found');
            }
            let output;
            try {
                output = yield signFeature.signPersonalMessage({
                    account: this.getPrimaryAccount(),
                    message: new TextEncoder().encode(messageToSign),
                });
            }
            catch (error) {
                this.logger.error(error);
                throw new utils.DynamicError('An error occured during signing');
            }
            if (!output || !output.signature) {
                throw new utils.DynamicError('[signMessage] Failed to sign message');
            }
            this.logger.debug(`[${this.name}] [signMessage] Signed message: ${output.signature}`);
            return output.signature;
        });
    }
    getWalletAccount() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return this.getPrimaryAccount();
        });
    }
    /** Function used to create transactions in the SDK interface */
    createUiTransaction(from) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.validateActiveWallet(from);
            const suiClient = yield this.getSuiClient();
            if (!suiClient) {
                throw new utils.DynamicError('No Sui client available');
            }
            return new SuiUiTransaction.SuiUiTransaction({
                client: suiClient,
                from,
                onSubmit: (transaction) => _tslib.__awaiter(this, void 0, void 0, function* () {
                    if (!transaction) {
                        throw new utils.DynamicError('Transaction must be provided');
                    }
                    const result = yield this.signAndExecuteTransactionFeature({
                        transaction,
                    });
                    return result.digest;
                }),
            });
        });
    }
    teardownEventListeners() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.eventsUnsubscribeHandler) {
                this.eventsUnsubscribeHandler();
                this.eventsUnsubscribeHandler = undefined;
            }
        });
    }
    endSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            var _a;
            this.teardownEventListeners();
            this.setPrimaryAccount(undefined);
            if (!this.isInstalledOnBrowser())
                return;
            const disconnectFeature = (_a = this.getFeatures()) === null || _a === void 0 ? void 0 : _a['standard:disconnect'];
            if (disconnectFeature) {
                yield disconnectFeature.disconnect();
                return;
            }
            if (this.wallet.disconnect) {
                yield this.wallet.disconnect();
                return;
            }
            throw new utils.DynamicError('Wallet does not support disconnect');
        });
    }
    getEnabledNetworks() {
        return this.suiNetworks;
    }
    signAndExecuteTransactionFeature(_a) {
        return _tslib.__awaiter(this, arguments, void 0, function* ({ transaction, legacyOptions, }) {
            var _b, _c;
            if (!this.getPrimaryAccount()) {
                throw new utils.DynamicError('No account found');
            }
            const features = this.getFeatures();
            const signAndExecuteTransactionFeature = features === null || features === void 0 ? void 0 : features['sui:signAndExecuteTransaction'];
            if (signAndExecuteTransactionFeature) {
                return signAndExecuteTransactionFeature.signAndExecuteTransaction({
                    account: this.getPrimaryAccount(),
                    chain: (_b = this.getPrimaryAccount()) === null || _b === void 0 ? void 0 : _b.chains[0],
                    transaction,
                });
            }
            const signAndExecuteTransactionBlockFeature = features === null || features === void 0 ? void 0 : features['sui:signAndExecuteTransactionBlock'];
            if (!signAndExecuteTransactionBlockFeature) {
                throw new utils.DynamicError('Wallet does not support sui:signAndExecuteTransaction or sui:signAndExecuteTransactionBlock');
            }
            const result = yield signAndExecuteTransactionBlockFeature.signAndExecuteTransactionBlock({
                account: this.getPrimaryAccount(),
                chain: (_c = this.getPrimaryAccount()) === null || _c === void 0 ? void 0 : _c.chains[0],
                options: legacyOptions === null || legacyOptions === void 0 ? void 0 : legacyOptions.options,
                requestType: legacyOptions === null || legacyOptions === void 0 ? void 0 : legacyOptions.requestType,
                transactionBlock: transaction,
            });
            return result;
        });
    }
    signTransactionFeature(_a) {
        return _tslib.__awaiter(this, arguments, void 0, function* ({ transaction, }) {
            var _b, _c;
            if (!this.getPrimaryAccount()) {
                throw new utils.DynamicError('No account found');
            }
            const features = this.getFeatures();
            const signTransactionFeature = features === null || features === void 0 ? void 0 : features['sui:signTransaction'];
            if (signTransactionFeature) {
                return signTransactionFeature === null || signTransactionFeature === void 0 ? void 0 : signTransactionFeature.signTransaction({
                    account: this.getPrimaryAccount(),
                    chain: (_b = this.getPrimaryAccount()) === null || _b === void 0 ? void 0 : _b.chains[0],
                    transaction,
                });
            }
            const signTransactionBlockFeature = features === null || features === void 0 ? void 0 : features['sui:signTransactionBlock'];
            if (!signTransactionBlockFeature) {
                throw new utils.DynamicError('Wallet does not support sui:signTransaction or sui:signTransactionBlock');
            }
            const result = yield signTransactionBlockFeature.signTransactionBlock({
                account: this.getPrimaryAccount(),
                chain: (_c = this.getPrimaryAccount()) === null || _c === void 0 ? void 0 : _c.chains[0],
                transactionBlock: transaction,
            });
            return result;
        });
    }
}

exports.SuiWalletConnector = SuiWalletConnector;
