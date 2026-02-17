import { WalletBookSchema } from '../schemas';
export declare const findWalletBookWalletByNameAndChain: (walletBook: WalletBookSchema, walletName: string, chain: string) => {
    name: string;
    brand?: {
        alt?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
    chainGroup?: string | undefined;
    chains?: string[] | undefined;
    desktop?: {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    eip6963Config?: {
        rdns: string;
    } | undefined;
    filterFromWalletConnect?: boolean | undefined;
    group?: string | undefined;
    hardwareWallets?: string[] | undefined;
    injectedConfig?: {
        chain: string;
        extensionLocators: {
            flag: string;
            value: boolean;
        }[];
        providerInterface?: string | undefined;
        walletStandard?: {
            features: string[];
            name: string;
            providerId?: string | undefined;
        } | undefined;
        walletStandardLocators?: {
            locator: string;
            name: string;
        }[] | undefined;
        windowLocations?: string[] | undefined;
    }[] | undefined;
    mobile?: {
        android?: string | null | undefined;
        androidId?: string | undefined;
        inAppBrowser?: string | null | undefined;
        inAppBrowserV2?: string | null | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    mobileExperience?: "in-app-browser" | "redirect" | undefined;
    requiresDisconnectBeforeNewConnection?: boolean | undefined;
    shortName?: string | undefined;
    showOnlyIfInstalled?: boolean | undefined;
    switchNetworkOnlyFromWallet?: boolean | undefined;
    walletConnect?: {
        sdks?: string[] | undefined;
    } | undefined;
    walletGroup?: string | undefined;
    walletLimitations?: {
        browserExtension?: {
            unsupportedEvents?: string[] | undefined;
            unsupportedMethods?: string[] | undefined;
        } | undefined;
        mobile?: {
            unsupportedEvents?: string[] | undefined;
            unsupportedMethods?: string[] | undefined;
        } | undefined;
    } | undefined;
} | undefined;
