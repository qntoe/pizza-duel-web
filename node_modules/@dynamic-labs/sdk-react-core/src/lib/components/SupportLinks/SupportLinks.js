'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { TwitterIcon, DiscordIcon, SlackIcon } from '@dynamic-labs/iconic';
import { Typography } from '../Typography/Typography.js';
import { Icon } from '../Icon/Icon.js';

const getIconForPlatform = (platform) => {
    switch (platform.toLowerCase()) {
        case 'slack':
            return (jsx(Icon, { size: 'xsmall', children: jsx(SlackIcon, {}) }));
        case 'discord':
            return (jsx(Icon, { size: 'xsmall', children: jsx(DiscordIcon, {}) }));
        case 'twitter':
            return (jsx(Icon, { size: 'xsmall', children: jsx(TwitterIcon, {}) }));
        default:
            return null;
    }
};
const SupportLinks = ({ supportEmail, supportUrls, }) => {
    const { t } = useTranslation();
    if (!supportEmail && !supportUrls) {
        return null;
    }
    return (jsxs("div", { className: 'support-links', children: [supportEmail && (jsx(Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_need_help_section.contact_support', children: jsx(Typography, { variant: 'body_small', color: 'link', as: 'span', children: jsx("a", { href: `mailto:${supportEmail}`, children: t('dyn_need_help_section.contact_support') }) }) })), supportUrls && (jsx("div", { className: 'support-links__icons-container', children: Object.entries(supportUrls).map(([platform, url]) => {
                    const icon = getIconForPlatform(platform);
                    const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                    return icon ? (jsxs("a", { href: url, rel: 'noreferrer', target: '_blank', className: 'support-links__icon-link', children: [icon, jsx(Typography, { variant: 'body_small', color: 'secondary', as: 'span', children: platformName })] }, platform)) : null;
                }) }))] }));
};

export { SupportLinks };
