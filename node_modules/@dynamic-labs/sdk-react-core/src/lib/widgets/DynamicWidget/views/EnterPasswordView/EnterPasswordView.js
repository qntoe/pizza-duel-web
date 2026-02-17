'use client'
import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../components/Icon/Icon.js';
import { Input } from '../../../../components/Input/Input.js';
import { ToggleVisibilityButton } from '../../../../components/ToggleVisibilityButton/ToggleVisibilityButton.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { TypographyButton } from '../../../../components/TypographyButton/TypographyButton.js';
import { ReactComponent as SvgErrorCircleX } from '../../../../shared/assets/error-circle-x.js';
import { ReactComponent as SvgPasswordLockIcon } from '../../../../shared/assets/password-lock-icon.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';

const INVALID_PASSWORD_ERROR_MESSAGE = 'Decryption failed: Invalid password';
const EnterPasswordView = ({ onContinue, title, description, buttonLabel, isLoading: externalLoading, }) => {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
        setError(null);
    }, []);
    const handleToggleVisibility = useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!password) {
            setError(t('dyn_enter_password.error.required'));
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            yield onContinue(password);
        }
        catch (err) {
            let errorMessage;
            if (err instanceof Error) {
                if (err.message.includes(INVALID_PASSWORD_ERROR_MESSAGE)) {
                    errorMessage = t('dyn_enter_password.error.invalid_password');
                }
                else {
                    errorMessage = err.message;
                }
            }
            else {
                errorMessage = t('dyn_enter_password.error.failed');
            }
            setError(errorMessage);
        }
        finally {
            setIsLoading(false);
        }
    }), [password, onContinue, t]);
    const loading = externalLoading || isLoading;
    return (jsx("div", { className: 'enter-password-view', children: jsxs("div", { className: 'enter-password-view__body', children: [jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_enter_password.title', className: 'enter-password-view__title', style: { marginBottom: '24px', textAlign: 'center' }, children: title !== null && title !== void 0 ? title : t('dyn_enter_password.title') }), jsx("div", { className: 'enter-password-view__icon-container', children: jsx(Icon, { color: 'brand-primary', children: jsx(SvgPasswordLockIcon, { width: 64, height: 64 }) }) }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_enter_password.description', className: 'enter-password-view__description', children: description !== null && description !== void 0 ? description : t('dyn_enter_password.description') }), jsx(Input, { id: 'enter-password-input', type: showPassword ? 'text' : 'password', label: t('dyn_enter_password.label'), placeholder: t('dyn_enter_password.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', error: Boolean(error), message: error ? (jsxs("span", { className: 'enter-password-view__error-message', children: [jsx(SvgErrorCircleX, { width: 14, height: 14 }), error] })) : undefined, suffix: 
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    jsx(ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsx("div", { className: 'enter-password-view__actions', children: jsx(TypographyButton, { dataTestId: 'enter-password-continue-button', onClick: handleContinue, disabled: !password || loading, copykey: 'dyn_enter_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                            color: 'inherit',
                        }, expanded: true, children: buttonLabel !== null && buttonLabel !== void 0 ? buttonLabel : t('dyn_enter_password.button.continue') }) })] }) }));
};

export { EnterPasswordView };
