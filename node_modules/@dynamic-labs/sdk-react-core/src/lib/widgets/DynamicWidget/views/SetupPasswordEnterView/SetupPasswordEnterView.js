'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../components/Icon/Icon.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import { Input } from '../../../../components/Input/Input.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { ToggleVisibilityButton } from '../../../../components/ToggleVisibilityButton/ToggleVisibilityButton.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { TypographyButton } from '../../../../components/TypographyButton/TypographyButton.js';
import { ReactComponent as SvgChevronLeft } from '../../../../shared/assets/chevron-left.js';
import { ReactComponent as SvgErrorCircleX } from '../../../../shared/assets/error-circle-x.js';
import { ReactComponent as SvgPasswordLockIcon } from '../../../../shared/assets/password-lock-icon.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import { PasswordRequirement } from './PasswordRequirement.js';

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
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [samePasswordError, setSamePasswordError] = useState(false);
    const requirements = validatePassword(password);
    const allValid = Object.values(requirements).every(Boolean);
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
        setSamePasswordError(false);
    }, []);
    const handleToggleVisibility = useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = useCallback(() => {
        if (!allValid)
            return;
        if (oldPassword && password === oldPassword) {
            setSamePasswordError(true);
            return;
        }
        onContinue(password);
    }, [allValid, onContinue, password, oldPassword]);
    const backButton = (jsx(IconButton, { type: 'button', onClick: onBack, "data-testid": 'setup-password-enter-back-button', children: jsx(SvgChevronLeft, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.enter.title', children: title !== null && title !== void 0 ? title : t('dyn_setup_password.enter.title') }) }), jsxs("div", { className: 'setup-password-enter-view', children: [jsxs("div", { className: 'setup-password-enter-view__body', children: [jsx("div", { className: 'setup-password-enter-view__icon-container', children: jsx(Icon, { color: 'brand-primary', children: jsx(SvgPasswordLockIcon, { width: 64, height: 64 }) }) }), jsx(Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.enter.description', className: 'setup-password-enter-view__description', children: description !== null && description !== void 0 ? description : t('dyn_setup_password.enter.description') }), jsx(Input, { id: 'setup-password-enter-password-input', type: showPassword ? 'text' : 'password', label: t('dyn_setup_password.enter.label'), placeholder: t('dyn_setup_password.enter.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', suffix: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsx(ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsxs("div", { className: 'setup-password-enter-view__requirements', children: [jsx(PasswordRequirement, { met: requirements.length, text: t('dyn_setup_password.enter.requirement_length') }), jsx(PasswordRequirement, { met: requirements.uppercase, text: t('dyn_setup_password.enter.requirement_uppercase') }), jsx(PasswordRequirement, { met: requirements.lowercase, text: t('dyn_setup_password.enter.requirement_lowercase') }), jsx(PasswordRequirement, { met: requirements.number, text: t('dyn_setup_password.enter.requirement_number') }), jsx(PasswordRequirement, { met: requirements.symbol, text: t('dyn_setup_password.enter.requirement_symbol') })] }), samePasswordError && (jsxs("div", { className: 'setup-password-enter-view__same-password-error', children: [jsx(Icon, { color: 'text-error', size: 'medium', children: jsx(SvgErrorCircleX, {}) }), jsx(Typography, { variant: 'body_small', color: 'error-1', children: t('dyn_reset_password.enter.same_password_error') })] }))] }), jsx("div", { className: 'setup-password-enter-view__actions', children: jsx(TypographyButton, { dataTestId: 'setup-password-enter-continue-button', onClick: handleContinue, disabled: !allValid, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                color: 'inherit',
                            }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] })] }));
};

export { SetupPasswordEnterView };
