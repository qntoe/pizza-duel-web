'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../../../../shared/logger.cjs');

/**
 * Extracts the dynamicOauthCode and dynamicOauthState from the URL
 * if the URL is not a valid URL, returns null
 */
const getDynamicRedirectDataFromUrl = (url) => {
    if (!url) {
        return null;
    }
    try {
        const urlObj = new URL(url);
        const dynamicOauthCode = urlObj.searchParams.get('dynamicOauthCode');
        const dynamicOauthState = urlObj.searchParams.get('dynamicOauthState');
        const dynamicOauthSsoProviderId = urlObj.searchParams.get('dynamicOauthSsoProviderId') || undefined;
        if (!dynamicOauthCode || !dynamicOauthState) {
            return null;
        }
        return { dynamicOauthCode, dynamicOauthSsoProviderId, dynamicOauthState };
    }
    catch (error) {
        logger.logger.error('Error extracting dynamic redirect data from URL', error);
        return null;
    }
};

exports.getDynamicRedirectDataFromUrl = getDynamicRedirectDataFromUrl;
