'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Icon = require('../../../../components/Icon/Icon.cjs');
var Input = require('../../../../components/Input/Input.cjs');
var ToggleVisibilityButton = require('../../../../components/ToggleVisibilityButton/ToggleVisibilityButton.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var TypographyButton = require('../../../../components/TypographyButton/TypographyButton.cjs');
var errorCircleX = require('../../../../shared/assets/error-circle-x.cjs');
var passwordLockIcon = require('../../../../shared/assets/password-lock-icon.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

const INVALID_PASSWORD_ERROR_MESSAGE = 'Decryption failed: Invalid password';
const EnterPasswordView = ({ onContinue, title, description, buttonLabel, isLoading: externalLoading, }) => {
    const { t } = reactI18next.useTranslation();
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const handlePasswordChange = React.useCallback((e) => {
        setPassword(e.target.value);
        setError(null);
    }, []);
    const handleToggleVisibility = React.useCallback((hidden) => {
        setShowPassword(!hidden);
    }, []);
    const handleContinue = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    return (jsxRuntime.jsx("div", { className: 'enter-password-view', children: jsxRuntime.jsxs("div", { className: 'enter-password-view__body', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_enter_password.title', className: 'enter-password-view__title', style: { marginBottom: '24px', textAlign: 'center' }, children: title !== null && title !== void 0 ? title : t('dyn_enter_password.title') }), jsxRuntime.jsx("div", { className: 'enter-password-view__icon-container', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(passwordLockIcon.ReactComponent, { width: 64, height: 64 }) }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_enter_password.description', className: 'enter-password-view__description', children: description !== null && description !== void 0 ? description : t('dyn_enter_password.description') }), jsxRuntime.jsx(Input.Input, { id: 'enter-password-input', type: showPassword ? 'text' : 'password', label: t('dyn_enter_password.label'), placeholder: t('dyn_enter_password.placeholder'), value: password, onChange: handlePasswordChange, variant: 'regular', error: Boolean(error), message: error ? (jsxRuntime.jsxs("span", { className: 'enter-password-view__error-message', children: [jsxRuntime.jsx(errorCircleX.ReactComponent, { width: 14, height: 14 }), error] })) : undefined, suffix: 
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    jsxRuntime.jsx(ToggleVisibilityButton.ToggleVisibilityButton, { initialState: true, onClick: handleToggleVisibility }) }), jsxRuntime.jsx("div", { className: 'enter-password-view__actions', children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'enter-password-continue-button', onClick: handleContinue, disabled: !password || loading, copykey: 'dyn_enter_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                            color: 'inherit',
                        }, expanded: true, children: buttonLabel !== null && buttonLabel !== void 0 ? buttonLabel : t('dyn_enter_password.button.continue') }) })] }) }));
};

exports.EnterPasswordView = EnterPasswordView;
