'use client'
import * as z from 'zod/mini';
import { filterEmptyObject } from './utils/filterEmptyObject.js';
import { nonEmptyString } from './utils/nonEmptyString.js';
import { nonEmptyStringArray } from './utils/nonEmptyStringArray.js';
import { transformAndroidId } from './utils/transformAndroidId.js';
import { transformChromeExtensionId } from './utils/transformChromeExtensionId.js';
import { transformEdgeExtensionId } from './utils/transformEdgeExtensionId.js';
import { transformFirefoxExtensionId } from './utils/transformFirefoxExtensionId.js';
import { transformIosId } from './utils/transformIosId.js';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
const injectedConfigSchema = z.object({
    chain: z.string(),
    extensionLocators: z.array(z.object({
        flag: z.string(),
        value: z._default(z.optional(z.boolean()), true),
    })),
    /**
     * Allows declaring which interface, if any, this wallet's implementation follows
     * ex. Leather with https://btckit.org/
     */
    providerInterface: z.optional(z.string()),
    /**
     * Allows declaring that this wallet is discoverable through the the Wallet Standard
     * See https://github.com/wallet-standard/wallet-standard
     * Also allows ignoring wallets that don't support the provided features
     */
    walletStandard: z.optional(z.object({
        features: z.array(z.string()),
        name: z.string(),
        providerId: z.optional(z.string()),
    })),
    walletStandardLocators: z.optional(z.array(z.object({ locator: z.string(), name: z.string() }))),
    windowLocations: z.optional(z.array(z.string())).check(z.refine((val) => {
        if (!val)
            return true;
        if (!val.some((v) => ['ethereum', 'ethereum.providers'].includes(v)))
            return true;
        return false;
    }, {
        message: 'windowLocations cannot include ethereum or ethereum.providers as they are included by default',
        path: ['config'],
    })),
});
const brandSchema = z.object({
    alt: nonEmptyString,
    primaryColor: nonEmptyString,
    spriteId: nonEmptyString,
});
const walletSchema = z.pipe(z.pipe(z.transform((val) => val), z.object({
    brand: z.optional(brandSchema),
    chainGroup: z.optional(z.string()),
    chains: z.optional(z.array(z.string())),
    desktop: z.optional(z.pipe(z.object({
        chromeId: z.optional(z.pipe(nonEmptyString, z.transform(transformChromeExtensionId))),
        edgeId: z.optional(z.pipe(nonEmptyString, z.transform(transformEdgeExtensionId))),
        firefoxId: z.optional(z.pipe(nonEmptyString, z.transform(transformFirefoxExtensionId))),
        native: nonEmptyString,
        operaId: nonEmptyString,
        safariId: nonEmptyString,
        universal: nonEmptyString,
    }), z.transform(filterEmptyObject))),
    eip6963Config: z.optional(z.object({ rdns: z.string() })),
    filterFromWalletConnect: z.optional(z.boolean()),
    group: z.optional(z.string()),
    /**
     * Indicates which hardware wallets are enabled for this wallet
     */
    hardwareWallets: z.optional(z.array(z.string())),
    injectedConfig: z.optional(z.array(injectedConfigSchema)),
    mobile: z.optional(z.pipe(z.optional(z.object({
        android: z.nullish(z.string()),
        androidId: z.optional(z.pipe(nonEmptyString, z.transform(transformAndroidId))),
        /**
         * @deprecated Use inAppBrowserV2 instead for EVM wallet deep linking
         */
        inAppBrowser: z.nullish(z.string()),
        inAppBrowserV2: z.nullish(z.string()),
        ios: z.nullish(z.string()),
        iosId: z.optional(z.pipe(nonEmptyString, z.transform(transformIosId))),
        native: nonEmptyString,
        universal: nonEmptyString,
    })), z.transform(filterEmptyObject))),
    mobileExperience: z.optional(z.enum(['in-app-browser', 'redirect'])),
    name: z.string(),
    /**
     * Indicates if the wallet requires disconnecting current wallet before connecting a new one.
     * An example is Slush.
     */
    requiresDisconnectBeforeNewConnection: z.optional(z.boolean()),
    shortName: nonEmptyString,
    showOnlyIfInstalled: z.optional(z.boolean()),
    switchNetworkOnlyFromWallet: z.optional(z.boolean()),
    walletConnect: z.optional(z.pipe(z.optional(z.object({
        sdks: nonEmptyStringArray,
    })), z.transform(filterEmptyObject))),
    walletGroup: z.optional(z.string()),
    /**
     * Indicates which connector methods/events are not supported, keyed by wallet type
     */
    walletLimitations: z.optional(z.object({
        browserExtension: z.optional(z.object({
            unsupportedEvents: z.optional(z.array(z.string())),
            unsupportedMethods: z.optional(z.array(z.string())),
        })),
        mobile: z.optional(z.object({
            unsupportedEvents: z.optional(z.array(z.string())),
            unsupportedMethods: z.optional(z.array(z.string())),
        })),
    })),
})), z.transform((val) => {
    var _a, _b, _c, _d, _e, _f;
    if (val.group) {
        val.chainGroup = val.group;
    }
    if (((_a = val.mobile) === null || _a === void 0 ? void 0 : _a.iosId) || ((_b = val.mobile) === null || _b === void 0 ? void 0 : _b.ios) === null) {
        (_c = val.mobile) === null || _c === void 0 ? true : delete _c.ios;
    }
    if (((_d = val.mobile) === null || _d === void 0 ? void 0 : _d.androidId) || ((_e = val.mobile) === null || _e === void 0 ? void 0 : _e.android) === null) {
        (_f = val.mobile) === null || _f === void 0 ? true : delete _f.android;
    }
    return val;
}));

export { brandSchema, walletSchema };
