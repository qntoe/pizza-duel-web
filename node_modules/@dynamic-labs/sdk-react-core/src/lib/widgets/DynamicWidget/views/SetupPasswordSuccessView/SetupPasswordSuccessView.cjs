'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Icon = require('../../../../components/Icon/Icon.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var TypographyButton = require('../../../../components/TypographyButton/TypographyButton.cjs');
var checkCircleFilled = require('../../../../shared/assets/check-circle-filled.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

const SetupPasswordSuccessView = ({ onDone, title, description, }) => {
    const { t } = reactI18next.useTranslation();
    const handleDone = React.useCallback(() => {
        onDone();
    }, [onDone]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.success.title', children: title !== null && title !== void 0 ? title : t('dyn_setup_password.success.title') }) }), jsxRuntime.jsxs("div", { className: 'setup-password-success-view', children: [jsxRuntime.jsx("div", { className: 'setup-password-success-view__content', children: jsxRuntime.jsxs("div", { className: 'setup-password-success-view__body', children: [jsxRuntime.jsx("div", { className: 'setup-password-success-view__icon-container', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(checkCircleFilled.ReactComponent, { width: 64, height: 64 }) }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.success.description', className: 'setup-password-success-view__description', children: description !== null && description !== void 0 ? description : t('dyn_setup_password.success.description') })] }) }), jsxRuntime.jsx("div", { className: 'setup-password-success-view__actions', children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'setup-password-success-done-button', onClick: handleDone, copykey: 'dyn_setup_password.button.done', buttonVariant: 'brand-primary', typographyProps: {
                                color: 'inherit',
                            }, expanded: true, children: t('dyn_setup_password.button.done') }) })] })] }));
};

exports.SetupPasswordSuccessView = SetupPasswordSuccessView;
