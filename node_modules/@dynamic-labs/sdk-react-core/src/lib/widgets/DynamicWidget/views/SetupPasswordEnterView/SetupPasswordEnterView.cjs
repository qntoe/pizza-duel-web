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
var PasswordRequirement = require('./PasswordRequirement.cjs');

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 70;
const validatePassword = (password) => ({
    length: password.length >= PASSWORD_MIN_LENGTH &&
        password.length <= PASSWORD_MAX_LENGTH,
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    uppercase: /[A-Z]/.test(password),
});
const SetupPasswordEnterView = ({ onContinue, onBack, title, description, oldPassword, }) => {
    const { t } = reactI18next.useTranslation();
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [samePasswordError, setSamePasswordError] = React.useState(false);
    const requirements = validatePassword(password);
    const allValid = Object.values(requirements).every(Boolean);
    const handlePasswordChange = React.useCallback((e) => {
        setPassword(e.target.value);
        setSamePasswordError(false);
    }, []);
    const handleToggleVisibility = React.useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = React.useCallback(() => {
        if (!allValid)
            return;
        if (oldPassword && password === oldPassword) {
            setSamePasswordError(true);
            return;
        }
        onContinue(password);
    }, [allValid, onContinue, password, oldPassword]);
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onBack, "data-testid": 'setup-password-enter-back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.enter.title', children: title !== null && title !== void 0 ? title : t('dyn_setup_password.enter.title') }) }), jsxRuntime.jsxs("div", { className: 'setup-password-enter-view', children: [jsxRuntime.jsxs("div", { className: 'setup-password-enter-view__body', children: [jsxRuntime.jsx("div", { className: 'setup-password-enter-view__icon-container', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(passwordLockIcon.ReactComponent, { width: 64, height: 64 }) }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.enter.description', className: 'setup-password-enter-view__description', children: description !== null && description !== void 0 ? description : t('dyn_setup_password.enter.description') }), jsxRuntime.jsx(Input.Input, { id: 'setup-password-enter-password-input', type: showPassword ? 'text' : 'password', label: t('dyn_setup_password.enter.label'), placeholder: t('dyn_setup_password.enter.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', suffix: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsxRuntime.jsx(ToggleVisibilityButton.ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsxRuntime.jsxs("div", { className: 'setup-password-enter-view__requirements', children: [jsxRuntime.jsx(PasswordRequirement.PasswordRequirement, { met: requirements.length, text: t('dyn_setup_password.enter.requirement_length') }), jsxRuntime.jsx(PasswordRequirement.PasswordRequirement, { met: requirements.uppercase, text: t('dyn_setup_password.enter.requirement_uppercase') }), jsxRuntime.jsx(PasswordRequirement.PasswordRequirement, { met: requirements.lowercase, text: t('dyn_setup_password.enter.requirement_lowercase') }), jsxRuntime.jsx(PasswordRequirement.PasswordRequirement, { met: requirements.number, text: t('dyn_setup_password.enter.requirement_number') }), jsxRuntime.jsx(PasswordRequirement.PasswordRequirement, { met: requirements.symbol, text: t('dyn_setup_password.enter.requirement_symbol') })] }), samePasswordError && (jsxRuntime.jsxs("div", { className: 'setup-password-enter-view__same-password-error', children: [jsxRuntime.jsx(Icon.Icon, { color: 'text-error', size: 'medium', children: jsxRuntime.jsx(errorCircleX.ReactComponent, {}) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'error-1', children: t('dyn_reset_password.enter.same_password_error') })] }))] }), jsxRuntime.jsx("div", { className: 'setup-password-enter-view__actions', children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'setup-password-enter-continue-button', onClick: handleContinue, disabled: !allValid, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                color: 'inherit',
                            }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] })] }));
};

exports.SetupPasswordEnterView = SetupPasswordEnterView;
