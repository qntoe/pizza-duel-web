import * as z from 'zod/mini';
export declare const walletRecordsSchema: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniPipe<z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniObject<{
    brand: z.ZodMiniOptional<z.ZodMiniObject<{
        alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>;
    chainGroup: z.ZodMiniOptional<z.ZodMiniString<string>>;
    chains: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    desktop: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniObject<{
        chromeId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
        edgeId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
        firefoxId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
        native: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        operaId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        safariId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        universal: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>, z.ZodMiniTransform<{
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined, {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    }>>>;
    eip6963Config: z.ZodMiniOptional<z.ZodMiniObject<{
        rdns: z.ZodMiniString<string>;
    }, z.core.$strip>>;
    filterFromWalletConnect: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    group: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hardwareWallets: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    injectedConfig: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        chain: z.ZodMiniString<string>;
        extensionLocators: z.ZodMiniArray<z.ZodMiniObject<{
            flag: z.ZodMiniString<string>;
            value: z.ZodMiniDefault<z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>>;
        }, z.core.$strip>>;
        providerInterface: z.ZodMiniOptional<z.ZodMiniString<string>>;
        walletStandard: z.ZodMiniOptional<z.ZodMiniObject<{
            features: z.ZodMiniArray<z.ZodMiniString<string>>;
            name: z.ZodMiniString<string>;
            providerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>;
        walletStandardLocators: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            locator: z.ZodMiniString<string>;
            name: z.ZodMiniString<string>;
        }, z.core.$strip>>>;
        windowLocations: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
    }, z.core.$strip>>>;
    mobile: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniObject<{
        android: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
        androidId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
        inAppBrowser: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
        inAppBrowserV2: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
        ios: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
        iosId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
        native: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        universal: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>, z.ZodMiniTransform<{
        android?: string | null | undefined;
        androidId?: string | undefined;
        inAppBrowser?: string | null | undefined;
        inAppBrowserV2?: string | null | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined, {
        android?: string | null | undefined;
        androidId?: string | undefined;
        inAppBrowser?: string | null | undefined;
        inAppBrowserV2?: string | null | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined>>>;
    mobileExperience: z.ZodMiniOptional<z.ZodMiniEnum<{
        "in-app-browser": "in-app-browser";
        redirect: "redirect";
    }>>;
    name: z.ZodMiniString<string>;
    requiresDisconnectBeforeNewConnection: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    shortName: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    showOnlyIfInstalled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    switchNetworkOnlyFromWallet: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    walletConnect: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniObject<{
        sdks: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>>>;
    }, z.core.$strip>>, z.ZodMiniTransform<{
        sdks?: string[] | undefined;
    } | undefined, {
        sdks?: string[] | undefined;
    } | undefined>>>;
    walletGroup: z.ZodMiniOptional<z.ZodMiniString<string>>;
    walletLimitations: z.ZodMiniOptional<z.ZodMiniObject<{
        browserExtension: z.ZodMiniOptional<z.ZodMiniObject<{
            unsupportedEvents: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
            unsupportedMethods: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
        }, z.core.$strip>>;
        mobile: z.ZodMiniOptional<z.ZodMiniObject<{
            unsupportedEvents: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
            unsupportedMethods: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodMiniTransform<{
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
}, {
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
}>>>;
export declare const walletBookSchema: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniObject<{
    groups: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        brand: z.ZodMiniOptional<z.ZodMiniObject<{
            alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>;
        key: z.ZodMiniString<string>;
        name: z.ZodMiniString<string>;
        walletOverrides: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
            brand: z.ZodMiniOptional<z.ZodMiniObject<{
                alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
                primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
                spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            }, z.core.$strip>>;
            name: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    wallets: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniPipe<z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniObject<{
        brand: z.ZodMiniOptional<z.ZodMiniObject<{
            alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>;
        chainGroup: z.ZodMiniOptional<z.ZodMiniString<string>>;
        chains: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
        desktop: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniObject<{
            chromeId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
            edgeId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
            firefoxId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
            native: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            operaId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            safariId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            universal: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>, z.ZodMiniTransform<{
            chromeId?: string | undefined;
            edgeId?: string | undefined;
            firefoxId?: string | undefined;
            native?: string | undefined;
            operaId?: string | undefined;
            safariId?: string | undefined;
            universal?: string | undefined;
        } | undefined, {
            chromeId?: string | undefined;
            edgeId?: string | undefined;
            firefoxId?: string | undefined;
            native?: string | undefined;
            operaId?: string | undefined;
            safariId?: string | undefined;
            universal?: string | undefined;
        }>>>;
        eip6963Config: z.ZodMiniOptional<z.ZodMiniObject<{
            rdns: z.ZodMiniString<string>;
        }, z.core.$strip>>;
        filterFromWalletConnect: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        group: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hardwareWallets: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
        injectedConfig: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            chain: z.ZodMiniString<string>;
            extensionLocators: z.ZodMiniArray<z.ZodMiniObject<{
                flag: z.ZodMiniString<string>;
                value: z.ZodMiniDefault<z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>>;
            }, z.core.$strip>>;
            providerInterface: z.ZodMiniOptional<z.ZodMiniString<string>>;
            walletStandard: z.ZodMiniOptional<z.ZodMiniObject<{
                features: z.ZodMiniArray<z.ZodMiniString<string>>;
                name: z.ZodMiniString<string>;
                providerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            walletStandardLocators: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
                locator: z.ZodMiniString<string>;
                name: z.ZodMiniString<string>;
            }, z.core.$strip>>>;
            windowLocations: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
        }, z.core.$strip>>>;
        mobile: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniObject<{
            android: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
            androidId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
            inAppBrowser: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
            inAppBrowserV2: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
            ios: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
            iosId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>, z.ZodMiniTransform<string | undefined, string | undefined>>>;
            native: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            universal: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>, z.ZodMiniTransform<{
            android?: string | null | undefined;
            androidId?: string | undefined;
            inAppBrowser?: string | null | undefined;
            inAppBrowserV2?: string | null | undefined;
            ios?: string | null | undefined;
            iosId?: string | undefined;
            native?: string | undefined;
            universal?: string | undefined;
        } | undefined, {
            android?: string | null | undefined;
            androidId?: string | undefined;
            inAppBrowser?: string | null | undefined;
            inAppBrowserV2?: string | null | undefined;
            ios?: string | null | undefined;
            iosId?: string | undefined;
            native?: string | undefined;
            universal?: string | undefined;
        } | undefined>>>;
        mobileExperience: z.ZodMiniOptional<z.ZodMiniEnum<{
            "in-app-browser": "in-app-browser";
            redirect: "redirect";
        }>>;
        name: z.ZodMiniString<string>;
        requiresDisconnectBeforeNewConnection: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        shortName: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        showOnlyIfInstalled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        switchNetworkOnlyFromWallet: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        walletConnect: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniOptional<z.ZodMiniObject<{
            sdks: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>>>;
        }, z.core.$strip>>, z.ZodMiniTransform<{
            sdks?: string[] | undefined;
        } | undefined, {
            sdks?: string[] | undefined;
        } | undefined>>>;
        walletGroup: z.ZodMiniOptional<z.ZodMiniString<string>>;
        walletLimitations: z.ZodMiniOptional<z.ZodMiniObject<{
            browserExtension: z.ZodMiniOptional<z.ZodMiniObject<{
                unsupportedEvents: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
                unsupportedMethods: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
            }, z.core.$strip>>;
            mobile: z.ZodMiniOptional<z.ZodMiniObject<{
                unsupportedEvents: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
                unsupportedMethods: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>, z.ZodMiniTransform<{
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
    }, {
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
    }>>>;
}, z.core.$strip>>;
export type WalletBookSchema = z.infer<typeof walletBookSchema>;
export type WalletRecordsSchema = z.infer<typeof walletBookSchema>['wallets'];
declare const WalletGroupRecordSchema: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
    brand: z.ZodMiniOptional<z.ZodMiniObject<{
        alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>;
    key: z.ZodMiniString<string>;
    name: z.ZodMiniString<string>;
    walletOverrides: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        brand: z.ZodMiniOptional<z.ZodMiniObject<{
            alt: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            primaryColor: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
            spriteId: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
        }, z.core.$strip>>;
        name: z.ZodMiniOptional<z.ZodMiniPipe<z.ZodMiniTransform<{} | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniString<string>>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>>;
export type WalletGroupRecordSchema = z.infer<typeof WalletGroupRecordSchema>;
export type WalletBookGroupSchema = z.infer<typeof walletBookSchema>['groups'];
export {};
