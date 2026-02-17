'use client'
import { getDynamicRedirectDataFromUrl } from '../getDynamicRedirectDataFromUrl/getDynamicRedirectDataFromUrl.js';

const getDynamicRedirectData = (redirectUrl, href) => {
    if (redirectUrl) {
        const data = getDynamicRedirectDataFromUrl(redirectUrl);
        if (data) {
            return data;
        }
    }
    const data = getDynamicRedirectDataFromUrl(href);
    if (data) {
        return data;
    }
    return null;
};

export { getDynamicRedirectData };
