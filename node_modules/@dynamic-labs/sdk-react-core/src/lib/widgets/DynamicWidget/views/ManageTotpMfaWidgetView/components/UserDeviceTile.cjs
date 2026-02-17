'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var Typography = require('../../../../../components/Typography/Typography.cjs');
require('react');
var authenticator = require('../../../../../shared/assets/authenticator.cjs');
require('@dynamic-labs/iconic');
require('../../../../../context/ViewContext/ViewContext.cjs');
var getTimeSince = require('../../../../../utils/functions/getTimeSince/getTimeSince.cjs');
var DotsMenu = require('../../../components/DotsMenu/DotsMenu.cjs');

const UserDeviceTile = ({ userDevice, deleteDevice, isMfaRequired, }) => {
    const { t } = reactI18next.useTranslation();
    const optionsMenu = [
        {
            Icon: null,
            callback: () => deleteDevice(userDevice.id),
            copykey: 'dyn_manage_mfa.delete',
            text: t('dyn_manage_mfa.delete'),
        },
    ];
    const timeSinceCreated = userDevice.verifiedAt && getTimeSince.getTimeSince(new Date(userDevice.verifiedAt));
    return (jsxRuntime.jsxs("div", { className: 'manage-totp-mfa-widget-view__list-tile', children: [jsxRuntime.jsx(authenticator.ReactComponent, { className: 'manage-totp-mfa-widget-view__list-tile__icon' }), jsxRuntime.jsxs("div", { className: 'manage-totp-mfa-widget-view__list-tile__details', children: [jsxRuntime.jsx("div", { className: 'manage-totp-mfa-widget-view__list-tile__details__title', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', children: userDevice.alias || 'Authenticator App' }) }), timeSinceCreated && (jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', color: 'secondary', children: ["Created ", timeSinceCreated.value, " ", timeSinceCreated.unit, " ago"] }))] }), isMfaRequired || (jsxRuntime.jsx("div", { style: {
                    cursor: 'pointer',
                    display: 'flex',
                }, children: jsxRuntime.jsx(DotsMenu.DotsMenu, { direction: 'left', "data-testid": 'dots-menu', options: optionsMenu, buttonClassName: 'manage-totp-mfa-widget-view__list-tile__dots-menu', buttonClassNameWithOpenMenu: 'manage-totp-mfa-widget-view__list-tile__dots-menu' }) }))] }, userDevice.id));
};

exports.UserDeviceTile = UserDeviceTile;
