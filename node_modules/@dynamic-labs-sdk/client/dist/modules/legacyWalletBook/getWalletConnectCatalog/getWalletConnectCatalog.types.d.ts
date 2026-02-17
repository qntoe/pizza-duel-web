import type { Chain } from '../../chain';
/**
 * WalletConnect catalog group containing only essential display information.
 */
export type WalletConnectCatalogGroup = {
    /** Unique key identifier for the wallet group */
    key: string;
    /** Display name of the wallet group */
    name: string;
    /** Primary brand color in hex format (e.g., "#f6851b") */
    primaryColor?: string;
    /** Full URL to the sprite/icon used to display the wallet group */
    spriteUrl: string;
};
/**
 * Deep link information for mobile wallet connections.
 */
export type WalletConnectCatalogDeepLinks = {
    /** Native mobile app deep link or URL scheme */
    native?: string;
    /** Universal link or URL that works across all mobile platforms */
    universal?: string;
};
/**
 * Download links for mobile wallet apps.
 */
export type WalletConnectCatalogDownloadLinks = {
    /** Complete Google Play Store URL for Android download */
    androidUrl?: string;
    /** Complete Apple App Store URL for iOS download */
    iosUrl?: string;
};
/**
 * WalletConnect catalog wallet entry containing only essential display and connection information.
 */
export type WalletConnectCatalogWallet = {
    /** Primary blockchain chain that this wallet supports */
    chain: Chain;
    /** Deep link information for mobile wallet connections */
    deeplinks: WalletConnectCatalogDeepLinks;
    /** Download links for mobile wallet apps */
    downloadLinks: WalletConnectCatalogDownloadLinks;
    /** Group identifier that this wallet belongs to */
    groupId?: string;
    /** Full display name of the wallet */
    name: string;
    /** Primary brand color in hex format (e.g., "#f6851b") */
    primaryColor?: string;
    /** Full URL to the sprite/icon used to display the wallet */
    spriteUrl: string;
};
/**
 * WalletConnect catalog structure containing groups and wallets from Dynamic's wallet book.
 */
export type WalletConnectCatalog = {
    /** Record of wallet groups keyed by group identifier */
    groups: Record<string, WalletConnectCatalogGroup>;
    /** Record of individual wallets keyed by wallet identifier */
    wallets: Record<string, WalletConnectCatalogWallet>;
};
//# sourceMappingURL=getWalletConnectCatalog.types.d.ts.map