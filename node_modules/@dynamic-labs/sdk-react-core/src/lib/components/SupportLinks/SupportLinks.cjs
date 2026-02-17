'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var Typography = require('../Typography/Typography.cjs');
var Icon = require('../Icon/Icon.cjs');

const getIconForPlatform = (platform) => {
    switch (platform.toLowerCase()) {
        case 'slack':
            return (jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', children: jsxRuntime.jsx(iconic.SlackIcon, {}) }));
        case 'discord':
            return (jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', children: jsxRuntime.jsx(iconic.DiscordIcon, {}) }));
        case 'twitter':
            return (jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', children: jsxRuntime.jsx(iconic.TwitterIcon, {}) }));
        default:
            return null;
    }
};
const SupportLinks = ({ supportEmail, supportUrls, }) => {
    const { t } = reactI18next.useTranslation();
    if (!supportEmail && !supportUrls) {
        return null;
    }
    return (jsxRuntime.jsxs("div", { className: 'support-links', children: [supportEmail && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_need_help_section.contact_support', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'link', as: 'span', children: jsxRuntime.jsx("a", { href: `mailto:${supportEmail}`, children: t('dyn_need_help_section.contact_support') }) }) })), supportUrls && (jsxRuntime.jsx("div", { className: 'support-links__icons-container', children: Object.entries(supportUrls).map(([platform, url]) => {
                    const icon = getIconForPlatform(platform);
                    const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                    return icon ? (jsxRuntime.jsxs("a", { href: url, rel: 'noreferrer', target: '_blank', className: 'support-links__icon-link', children: [icon, jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', as: 'span', children: platformName })] }, platform)) : null;
                }) }))] }));
};

exports.SupportLinks = SupportLinks;
