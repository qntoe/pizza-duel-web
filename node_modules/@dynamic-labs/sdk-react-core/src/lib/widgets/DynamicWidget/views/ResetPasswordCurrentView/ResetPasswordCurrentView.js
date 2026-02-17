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

const ResetPasswordCurrentView = ({ onContinue, onBack, isLoading = false, error: externalError = null, }) => {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [internalError, setInternalError] = useState(null);
    const error = externalError !== null && externalError !== void 0 ? externalError : internalError;
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
        setInternalError(null);
    }, []);
    const handleToggleVisibility = useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = useCallback(() => {
        if (!password) {
            setInternalError(t('dyn_reset_password.current.error.required'));
            return;
        }
        onContinue(password);
    }, [password, onContinue, t]);
    const backButton = (jsx(IconButton, { type: 'button', onClick: onBack, "data-testid": 'reset-password-current-back-button', children: jsx(SvgChevronLeft, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_reset_password.current.title', children: t('dyn_reset_password.current.title') }) }), jsx("div", { className: 'enter-password-view', children: jsxs("div", { className: 'enter-password-view__body', children: [jsx("div", { className: 'enter-password-view__icon-container', children: jsx(Icon, { color: 'brand-primary', children: jsx(SvgPasswordLockIcon, { width: 64, height: 64 }) }) }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_reset_password.current.description', className: 'enter-password-view__description', children: t('dyn_reset_password.current.description') }), jsx(Input, { id: 'reset-password-current-input', type: showPassword ? 'text' : 'password', label: t('dyn_reset_password.current.label'), placeholder: t('dyn_reset_password.current.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', error: Boolean(error), message: error ? (jsxs("span", { className: 'enter-password-view__error-message', children: [jsx(SvgErrorCircleX, { width: 14, height: 14 }), error] })) : undefined, suffix: 
                            // eslint-disable-next-line react/jsx-wrap-multilines
                            jsx(ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsx("div", { className: 'enter-password-view__actions', children: jsx(TypographyButton, { dataTestId: 'reset-password-current-continue-button', onClick: handleContinue, disabled: !password || isLoading, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                    color: 'inherit',
                                }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] }) })] }));
};

export { ResetPasswordCurrentView };
