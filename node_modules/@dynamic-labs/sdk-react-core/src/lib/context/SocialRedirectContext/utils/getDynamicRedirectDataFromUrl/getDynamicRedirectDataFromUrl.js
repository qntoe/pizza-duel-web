'use client'
import { logger } from '../../../../shared/logger.js';

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
        logger.error('Error extracting dynamic redirect data from URL', error);
        return null;
    }
};

export { getDynamicRedirectDataFromUrl };
