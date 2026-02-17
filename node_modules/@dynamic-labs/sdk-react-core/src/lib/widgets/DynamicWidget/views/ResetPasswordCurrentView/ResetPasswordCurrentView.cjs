'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Icon = require('../../../../components/Icon/Icon.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
var Input = require('../../../../components/Input/Input.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var ToggleVisibilityButton = require('../../../../components/ToggleVisibilityButton/ToggleVisibilityButton.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var TypographyButton = require('../../../../components/TypographyButton/TypographyButton.cjs');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
var errorCircleX = require('../../../../shared/assets/error-circle-x.cjs');
var passwordLockIcon = require('../../../../shared/assets/password-lock-icon.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

const ResetPasswordCurrentView = ({ onContinue, onBack, isLoading = false, error: externalError = null, }) => {
    const { t } = reactI18next.useTranslation();
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalError, setInternalError] = React.useState(null);
    const error = externalError !== null && externalError !== void 0 ? externalError : internalError;
    const handlePasswordChange = React.useCallback((e) => {
        setPassword(e.target.value);
        setInternalError(null);
    }, []);
    const handleToggleVisibility = React.useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = React.useCallback(() => {
        if (!password) {
            setInternalError(t('dyn_reset_password.current.error.required'));
            return;
        }
        onContinue(password);
    }, [password, onContinue, t]);
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onBack, "data-testid": 'reset-password-current-back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_reset_password.current.title', children: t('dyn_reset_password.current.title') }) }), jsxRuntime.jsx("div", { className: 'enter-password-view', children: jsxRuntime.jsxs("div", { className: 'enter-password-view__body', children: [jsxRuntime.jsx("div", { className: 'enter-password-view__icon-container', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(passwordLockIcon.ReactComponent, { width: 64, height: 64 }) }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_reset_password.current.description', className: 'enter-password-view__description', children: t('dyn_reset_password.current.description') }), jsxRuntime.jsx(Input.Input, { id: 'reset-password-current-input', type: showPassword ? 'text' : 'password', label: t('dyn_reset_password.current.label'), placeholder: t('dyn_reset_password.current.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', error: Boolean(error), message: error ? (jsxRuntime.jsxs("span", { className: 'enter-password-view__error-message', children: [jsxRuntime.jsx(errorCircleX.ReactComponent, { width: 14, height: 14 }), error] })) : undefined, suffix: 
                            // eslint-disable-next-line react/jsx-wrap-multilines
                            jsxRuntime.jsx(ToggleVisibilityButton.ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsxRuntime.jsx("div", { className: 'enter-password-view__actions', children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'reset-password-current-continue-button', onClick: handleContinue, disabled: !password || isLoading, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                    color: 'inherit',
                                }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] }) })] }));
};

exports.ResetPasswordCurrentView = ResetPasswordCurrentView;
