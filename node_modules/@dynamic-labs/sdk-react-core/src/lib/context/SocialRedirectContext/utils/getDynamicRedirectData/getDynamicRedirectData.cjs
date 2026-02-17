'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getDynamicRedirectDataFromUrl = require('../getDynamicRedirectDataFromUrl/getDynamicRedirectDataFromUrl.cjs');

const getDynamicRedirectData = (redirectUrl, href) => {
    if (redirectUrl) {
        const data = getDynamicRedirectDataFromUrl.getDynamicRedirectDataFromUrl(redirectUrl);
        if (data) {
            return data;
        }
    }
    const data = getDynamicRedirectDataFromUrl.getDynamicRedirectDataFromUrl(href);
    if (data) {
        return data;
    }
    return null;
};

exports.getDynamicRedirectData = getDynamicRedirectData;
