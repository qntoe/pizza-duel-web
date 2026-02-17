'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../components/Icon/Icon.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { TypographyButton } from '../../../../components/TypographyButton/TypographyButton.js';
import { ReactComponent as SvgCheckCircleFilled } from '../../../../shared/assets/check-circle-filled.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';

const SetupPasswordSuccessView = ({ onDone, title, description, }) => {
    const { t } = useTranslation();
    const handleDone = useCallback(() => {
        onDone();
    }, [onDone]);
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.success.title', children: title !== null && title !== void 0 ? title : t('dyn_setup_password.success.title') }) }), jsxs("div", { className: 'setup-password-success-view', children: [jsx("div", { className: 'setup-password-success-view__content', children: jsxs("div", { className: 'setup-password-success-view__body', children: [jsx("div", { className: 'setup-password-success-view__icon-container', children: jsx(Icon, { color: 'brand-primary', children: jsx(SvgCheckCircleFilled, { width: 64, height: 64 }) }) }), jsx(Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.success.description', className: 'setup-password-success-view__description', children: description !== null && description !== void 0 ? description : t('dyn_setup_password.success.description') })] }) }), jsx("div", { className: 'setup-password-success-view__actions', children: jsx(TypographyButton, { dataTestId: 'setup-password-success-done-button', onClick: handleDone, copykey: 'dyn_setup_password.button.done', buttonVariant: 'brand-primary', typographyProps: {
                                color: 'inherit',
                            }, expanded: true, children: t('dyn_setup_password.button.done') }) })] })] }));
};

export { SetupPasswordSuccessView };
