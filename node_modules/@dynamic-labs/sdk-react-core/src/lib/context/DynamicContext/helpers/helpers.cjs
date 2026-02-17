'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var localStorage = require('../../../utils/constants/localStorage.cjs');

let dynamicContextSettingsTimer;
let wagmiSettingsTimer;
const sdkSettingsTimeout = 24 * 60 * 60 * 1000; // 24 hours
const setDynamicContextSessionSettings = () => {
    setSessionSettings(localStorage.DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS);
    dynamicContextSettingsTimer = setTimeout(isDynamicContextSessionSettingExpired, sdkSettingsTimeout);
};
const setWagmiSessionSettings = () => {
    setSessionSettings(localStorage.WAGMI_LAST_SESSION_SETTINGS);
    wagmiSettingsTimer = setTimeout(isWagmiSessionSettingExpired, sdkSettingsTimeout);
};
const setSessionSettings = (lsKey) => {
    const timestamp = new Date().getTime();
    utils.StorageService.setItem(lsKey, timestamp.toString());
};
const isDynamicContextSessionSettingExpired = () => isSettingExpired(localStorage.DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS, dynamicContextSettingsTimer);
const isWagmiSessionSettingExpired = () => isSettingExpired(localStorage.WAGMI_LAST_SESSION_SETTINGS, wagmiSettingsTimer);
const isSettingExpired = (lsKey, timer) => {
    const lastSentTime = utils.StorageService.getItem(lsKey);
    // should set new time
    if (!lastSentTime) {
        return true;
    }
    const lastSentTimestamp = parseInt(lastSentTime);
    const currentTime = new Date().getTime();
    if (currentTime - lastSentTimestamp > sdkSettingsTimeout) {
        // Reset session-related data here
        clearTimeout(timer);
        utils.StorageService.removeItem(lsKey);
        return true;
    }
    return false;
};
const resolveNetworkValidationMode = ({ networkValidationMode, bridgeChains, }) => {
    if (networkValidationMode) {
        return networkValidationMode;
    }
    if (bridgeChains) {
        return 'always';
    }
    return 'sign-in';
};
const getDeepLinkPreference = (deepLinkPreferenceProp, isBridgeFlow) => {
    if (isBridgeFlow) {
        return 'universal';
    }
    return deepLinkPreferenceProp;
};

exports.getDeepLinkPreference = getDeepLinkPreference;
exports.isDynamicContextSessionSettingExpired = isDynamicContextSessionSettingExpired;
exports.isWagmiSessionSettingExpired = isWagmiSessionSettingExpired;
exports.resolveNetworkValidationMode = resolveNetworkValidationMode;
exports.sdkSettingsTimeout = sdkSettingsTimeout;
exports.setDynamicContextSessionSettings = setDynamicContextSessionSettings;
exports.setWagmiSessionSettings = setWagmiSessionSettings;
