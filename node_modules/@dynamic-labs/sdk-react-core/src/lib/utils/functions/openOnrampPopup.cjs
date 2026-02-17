'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var utils = require('@dynamic-labs/utils');
var openPopup = require('./openPopup/openPopup.cjs');

const ONRAMP_POPUP_CONFIG = {
    height: 600,
    width: 500,
};
/**
 * Opens an onramp popup and sets up event listeners to handle popup closure
 * @param url The base URL to open in the popup
 * @param wallet The user's wallet (optional)
 * @param setShowOnramp Callback to update the UI state when popup is closed
 * @param provider The onramp provider ID
 * @returns A promise that resolves when the popup is opened
 * @throws Error if there are issues with URL, wallet compatibility, etc.
 */
const openOnrampPopup = (url_1, wallet_1, setShowOnramp_1, ...args_1) => _tslib.__awaiter(void 0, [url_1, wallet_1, setShowOnramp_1, ...args_1], void 0, function* (url, wallet, setShowOnramp, provider = sdkApiCore.OnrampProviders.CoinbaseOnramp) {
    try {
        // Safety check: don't open popup with empty URL
        if (!url) {
            throw new Error('Cannot open onramp popup: Empty URL');
        }
        // On mobile devices, fall back to direct navigation for crypto.com
        // since mobile browsers often block popups
        if (utils.isMobile() && provider === sdkApiCore.OnrampProviders.CryptoDotCom) {
            window.open(url, '_blank', 'noopener,noreferrer');
            setShowOnramp(false);
            return;
        }
        // Open the popup - errors will propagate to the caller
        yield openPopup.openPopup(url, ONRAMP_POPUP_CONFIG.width, ONRAMP_POPUP_CONFIG.height, () => {
            // When the popup is closed (by user or programmatically), update the UI
            setShowOnramp(false);
        });
    }
    catch (error) {
        // Always set showOnramp to false on any error
        setShowOnramp(false);
        // Re-throw any error
        if (error instanceof Error) {
            throw error;
        }
        // For non-Error objects, wrap in a generic Error
        throw new Error('Error opening onramp popup');
    }
});

exports.ONRAMP_POPUP_CONFIG = ONRAMP_POPUP_CONFIG;
exports.openOnrampPopup = openOnrampPopup;
