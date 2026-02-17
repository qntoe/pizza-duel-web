export type WalletEvent = 'accountChanged' | 'chainChanged';
export type WalletMethod = 'getConnectedAccounts';
export type WalletLimitations = {
    desktop?: {
        unsupportedEvents?: WalletEvent[];
        unsupportedMethods?: WalletMethod[];
    };
    mobile?: {
        unsupportedEvents?: WalletEvent[];
        unsupportedMethods?: WalletMethod[];
    };
};
/**
 * @property android - The full url to download the wallet on Android
 * @property brave - The full url to download the wallet on Brave
 * @property chrome - The full url to download the wallet on Chrome
 * @property edge - The full url to download the wallet on Edge
 * @property firefox - The full url to download the wallet on Firefox
 * @property ios - The full url to download the wallet on iOS
 */
export type WalletLinks = {
    android: string;
    brave: string;
    chrome: string;
    edge: string;
    firefox: string;
    ios: string;
};
export type WalletDownloadLinks = {
    chromeId?: string;
    edgeId?: string;
    firefoxId?: string;
    operaId?: string;
    safariId?: string;
    /**
     * @property androidId - The id to download the wallet on Google Play
     */
    androidId?: string;
    /**
     * @property iosId - The id to download the wallet on App Store
     */
    iosId?: string;
    /**
     * @property android - The url to download the wallet on Android
     */
    androidUrl?: string;
    /**
     * @property ios - The url to download the wallet on iOS
     */
    iosUrl?: string;
};
export type WalletDeepLinks = {
    mobile?: {
        native?: string;
        universal?: string;
    };
    desktop?: {
        native?: string;
        universal?: string;
    };
};
export type HardwareWallet = 'ledger';
/**
 * @property id - A key that can be used to identify the wallet/connector, based on the wallet name
 * @property name - The wallet name
 * @property icon - The url or data for the wallet icon
 * @property brandColor - The hex valye for the wallet brand color
 * @property groupKey - Key used to group wallets together, for example, by chain
 * @property inAppBrowserUrl - The url to open the wallet in the in-app browser
 * @property deepLinks - The mobile deep links of the wallet
 * @property downloadLinks - The ids to download the wallet in the different browsers and mobile stores
 * @property walletLimitations - The limitations of the wallet in regards to methods and events
 * @property rdns - The wallet rdns if it supports EIP-6963
 */
export type WalletMetadata = {
    id: string;
    name: string;
    icon: string;
    brandColor?: `#${string}`;
    groupKey?: string;
    inAppBrowserUrl?: string;
    deepLinks?: WalletDeepLinks;
    downloadLinks?: WalletDownloadLinks;
    walletLimitations?: WalletLimitations;
    supportedHardwareWallets?: HardwareWallet[];
    rdns?: string;
};
/**
 * Serializable wallet option metadata for message transport.
 * This is a simplified version of WalletOption from sdk-react-core
 * that can be sent over message transport between client and webview.
 */
export type WalletOptionMetadata = {
    /** The blockchain chain this wallet supports */
    chain: string | null;
    /** The group this wallet belongs to */
    group: string | null;
    /** The display name of the group */
    groupName: string | null;
    /** Whether this wallet is installed on the browser */
    isInstalledOnBrowser: boolean;
    /** Whether this wallet uses WalletConnect */
    isWalletConnect: boolean;
    /** Unique identifier for this wallet connector */
    key: string;
    /** Metadata about the wallet */
    metadata: WalletMetadata;
    /** Display name of the wallet */
    name: string;
};
