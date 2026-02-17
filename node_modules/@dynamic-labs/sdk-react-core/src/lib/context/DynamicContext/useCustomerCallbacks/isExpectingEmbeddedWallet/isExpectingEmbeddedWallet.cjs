'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isExpectingEmbeddedWallet = (projectSettings) => {
    var _a;
    if (!projectSettings.sdk.automaticEmbeddedWalletCreation) {
        return false;
    }
    const chainConfigurations = (_a = projectSettings.sdk.embeddedWallets) === null || _a === void 0 ? void 0 : _a.chainConfigurations;
    if (!chainConfigurations) {
        return false;
    }
    return chainConfigurations.some((config) => config.enabled);
};

exports.isExpectingEmbeddedWallet = isExpectingEmbeddedWallet;
