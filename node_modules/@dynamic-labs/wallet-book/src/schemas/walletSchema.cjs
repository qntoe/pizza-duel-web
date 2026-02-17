'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var z = require('zod/mini');
var filterEmptyObject = require('./utils/filterEmptyObject.cjs');
var nonEmptyString = require('./utils/nonEmptyString.cjs');
var nonEmptyStringArray = require('./utils/nonEmptyStringArray.cjs');
var transformAndroidId = require('./utils/transformAndroidId.cjs');
var transformChromeExtensionId = require('./utils/transformChromeExtensionId.cjs');
var transformEdgeExtensionId = require('./utils/transformEdgeExtensionId.cjs');
var transformFirefoxExtensionId = require('./utils/transformFirefoxExtensionId.cjs');
var transformIosId = require('./utils/transformIosId.cjs');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var z__namespace = /*#__PURE__*/_interopNamespace(z);

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
const injectedConfigSchema = z__namespace.object({
    chain: z__namespace.string(),
    extensionLocators: z__namespace.array(z__namespace.object({
        flag: z__namespace.string(),
        value: z__namespace._default(z__namespace.optional(z__namespace.boolean()), true),
    })),
    /**
     * Allows declaring which interface, if any, this wallet's implementation follows
     * ex. Leather with https://btckit.org/
     */
    providerInterface: z__namespace.optional(z__namespace.string()),
    /**
     * Allows declaring that this wallet is discoverable through the the Wallet Standard
     * See https://github.com/wallet-standard/wallet-standard
     * Also allows ignoring wallets that don't support the provided features
     */
    walletStandard: z__namespace.optional(z__namespace.object({
        features: z__namespace.array(z__namespace.string()),
        name: z__namespace.string(),
        providerId: z__namespace.optional(z__namespace.string()),
    })),
    walletStandardLocators: z__namespace.optional(z__namespace.array(z__namespace.object({ locator: z__namespace.string(), name: z__namespace.string() }))),
    windowLocations: z__namespace.optional(z__namespace.array(z__namespace.string())).check(z__namespace.refine((val) => {
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
const brandSchema = z__namespace.object({
    alt: nonEmptyString.nonEmptyString,
    primaryColor: nonEmptyString.nonEmptyString,
    spriteId: nonEmptyString.nonEmptyString,
});
const walletSchema = z__namespace.pipe(z__namespace.pipe(z__namespace.transform((val) => val), z__namespace.object({
    brand: z__namespace.optional(brandSchema),
    chainGroup: z__namespace.optional(z__namespace.string()),
    chains: z__namespace.optional(z__namespace.array(z__namespace.string())),
    desktop: z__namespace.optional(z__namespace.pipe(z__namespace.object({
        chromeId: z__namespace.optional(z__namespace.pipe(nonEmptyString.nonEmptyString, z__namespace.transform(transformChromeExtensionId.transformChromeExtensionId))),
        edgeId: z__namespace.optional(z__namespace.pipe(nonEmptyString.nonEmptyString, z__namespace.transform(transformEdgeExtensionId.transformEdgeExtensionId))),
        firefoxId: z__namespace.optional(z__namespace.pipe(nonEmptyString.nonEmptyString, z__namespace.transform(transformFirefoxExtensionId.transformFirefoxExtensionId))),
        native: nonEmptyString.nonEmptyString,
        operaId: nonEmptyString.nonEmptyString,
        safariId: nonEmptyString.nonEmptyString,
        universal: nonEmptyString.nonEmptyString,
    }), z__namespace.transform(filterEmptyObject.filterEmptyObject))),
    eip6963Config: z__namespace.optional(z__namespace.object({ rdns: z__namespace.string() })),
    filterFromWalletConnect: z__namespace.optional(z__namespace.boolean()),
    group: z__namespace.optional(z__namespace.string()),
    /**
     * Indicates which hardware wallets are enabled for this wallet
     */
    hardwareWallets: z__namespace.optional(z__namespace.array(z__namespace.string())),
    injectedConfig: z__namespace.optional(z__namespace.array(injectedConfigSchema)),
    mobile: z__namespace.optional(z__namespace.pipe(z__namespace.optional(z__namespace.object({
        android: z__namespace.nullish(z__namespace.string()),
        androidId: z__namespace.optional(z__namespace.pipe(nonEmptyString.nonEmptyString, z__namespace.transform(transformAndroidId.transformAndroidId))),
        /**
         * @deprecated Use inAppBrowserV2 instead for EVM wallet deep linking
         */
        inAppBrowser: z__namespace.nullish(z__namespace.string()),
        inAppBrowserV2: z__namespace.nullish(z__namespace.string()),
        ios: z__namespace.nullish(z__namespace.string()),
        iosId: z__namespace.optional(z__namespace.pipe(nonEmptyString.nonEmptyString, z__namespace.transform(transformIosId.transformIosId))),
        native: nonEmptyString.nonEmptyString,
        universal: nonEmptyString.nonEmptyString,
    })), z__namespace.transform(filterEmptyObject.filterEmptyObject))),
    mobileExperience: z__namespace.optional(z__namespace.enum(['in-app-browser', 'redirect'])),
    name: z__namespace.string(),
    /**
     * Indicates if the wallet requires disconnecting current wallet before connecting a new one.
     * An example is Slush.
     */
    requiresDisconnectBeforeNewConnection: z__namespace.optional(z__namespace.boolean()),
    shortName: nonEmptyString.nonEmptyString,
    showOnlyIfInstalled: z__namespace.optional(z__namespace.boolean()),
    switchNetworkOnlyFromWallet: z__namespace.optional(z__namespace.boolean()),
    walletConnect: z__namespace.optional(z__namespace.pipe(z__namespace.optional(z__namespace.object({
        sdks: nonEmptyStringArray.nonEmptyStringArray,
    })), z__namespace.transform(filterEmptyObject.filterEmptyObject))),
    walletGroup: z__namespace.optional(z__namespace.string()),
    /**
     * Indicates which connector methods/events are not supported, keyed by wallet type
     */
    walletLimitations: z__namespace.optional(z__namespace.object({
        browserExtension: z__namespace.optional(z__namespace.object({
            unsupportedEvents: z__namespace.optional(z__namespace.array(z__namespace.string())),
            unsupportedMethods: z__namespace.optional(z__namespace.array(z__namespace.string())),
        })),
        mobile: z__namespace.optional(z__namespace.object({
            unsupportedEvents: z__namespace.optional(z__namespace.array(z__namespace.string())),
            unsupportedMethods: z__namespace.optional(z__namespace.array(z__namespace.string())),
        })),
    })),
})), z__namespace.transform((val) => {
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

exports.brandSchema = brandSchema;
exports.walletSchema = walletSchema;
