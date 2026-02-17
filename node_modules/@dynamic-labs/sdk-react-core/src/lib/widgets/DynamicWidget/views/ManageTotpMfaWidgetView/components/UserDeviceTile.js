'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../../../../components/Typography/Typography.js';
import 'react';
import { ReactComponent as SvgAuthenticator } from '../../../../../shared/assets/authenticator.js';
import '@dynamic-labs/iconic';
import '../../../../../context/ViewContext/ViewContext.js';
import { getTimeSince } from '../../../../../utils/functions/getTimeSince/getTimeSince.js';
import { DotsMenu } from '../../../components/DotsMenu/DotsMenu.js';

const UserDeviceTile = ({ userDevice, deleteDevice, isMfaRequired, }) => {
    const { t } = useTranslation();
    const optionsMenu = [
        {
            Icon: null,
            callback: () => deleteDevice(userDevice.id),
            copykey: 'dyn_manage_mfa.delete',
            text: t('dyn_manage_mfa.delete'),
        },
    ];
    const timeSinceCreated = userDevice.verifiedAt && getTimeSince(new Date(userDevice.verifiedAt));
    return (jsxs("div", { className: 'manage-totp-mfa-widget-view__list-tile', children: [jsx(SvgAuthenticator, { className: 'manage-totp-mfa-widget-view__list-tile__icon' }), jsxs("div", { className: 'manage-totp-mfa-widget-view__list-tile__details', children: [jsx("div", { className: 'manage-totp-mfa-widget-view__list-tile__details__title', children: jsx(Typography, { variant: 'body_normal', color: 'primary', children: userDevice.alias || 'Authenticator App' }) }), timeSinceCreated && (jsxs(Typography, { variant: 'body_small', color: 'secondary', children: ["Created ", timeSinceCreated.value, " ", timeSinceCreated.unit, " ago"] }))] }), isMfaRequired || (jsx("div", { style: {
                    cursor: 'pointer',
                    display: 'flex',
                }, children: jsx(DotsMenu, { direction: 'left', "data-testid": 'dots-menu', options: optionsMenu, buttonClassName: 'manage-totp-mfa-widget-view__list-tile__dots-menu', buttonClassNameWithOpenMenu: 'manage-totp-mfa-widget-view__list-tile__dots-menu' }) }))] }, userDevice.id));
};

export { UserDeviceTile };
