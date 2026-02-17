'use client'
import { StorageService } from '@dynamic-labs/utils';
import { DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS, WAGMI_LAST_SESSION_SETTINGS } from '../../../utils/constants/localStorage.js';

let dynamicContextSettingsTimer;
let wagmiSettingsTimer;
const sdkSettingsTimeout = 24 * 60 * 60 * 1000; // 24 hours
const setDynamicContextSessionSettings = () => {
    setSessionSettings(DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS);
    dynamicContextSettingsTimer = setTimeout(isDynamicContextSessionSettingExpired, sdkSettingsTimeout);
};
const setWagmiSessionSettings = () => {
    setSessionSettings(WAGMI_LAST_SESSION_SETTINGS);
    wagmiSettingsTimer = setTimeout(isWagmiSessionSettingExpired, sdkSettingsTimeout);
};
const setSessionSettings = (lsKey) => {
    const timestamp = new Date().getTime();
    StorageService.setItem(lsKey, timestamp.toString());
};
const isDynamicContextSessionSettingExpired = () => isSettingExpired(DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS, dynamicContextSettingsTimer);
const isWagmiSessionSettingExpired = () => isSettingExpired(WAGMI_LAST_SESSION_SETTINGS, wagmiSettingsTimer);
const isSettingExpired = (lsKey, timer) => {
    const lastSentTime = StorageService.getItem(lsKey);
    // should set new time
    if (!lastSentTime) {
        return true;
    }
    const lastSentTimestamp = parseInt(lastSentTime);
    const currentTime = new Date().getTime();
    if (currentTime - lastSentTimestamp > sdkSettingsTimeout) {
        // Reset session-related data here
        clearTimeout(timer);
        StorageService.removeItem(lsKey);
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

export { getDeepLinkPreference, isDynamicContextSessionSettingExpired, isWagmiSessionSettingExpired, resolveNetworkValidationMode, sdkSettingsTimeout, setDynamicContextSessionSettings, setWagmiSessionSettings };
