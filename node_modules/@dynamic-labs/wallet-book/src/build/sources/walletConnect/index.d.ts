export declare const walletConnectSourceData: Record<string, {
    app: {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    chains: string[];
    description: string | null;
    desktop: {
        native: string | null;
        universal: string | null;
    };
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    };
    mobile: {
        native: string | null;
        universal: string | null;
    };
    name: string;
    rdns: string | null;
    sdks: string[];
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}>;
export declare const walletConnectTransformedData: Promise<Record<string, {
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
}>>;
