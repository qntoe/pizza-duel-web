'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Checkbox = require('../../../../components/Checkbox/Checkbox.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var TypographyButton = require('../../../../components/TypographyButton/TypographyButton.cjs');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
var setupPasswordTermsIllustration = require('../../../../shared/assets/setup-password-terms-illustration.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
var settingsUtils = require('../../../../store/utils/settingsUtils/settingsUtils.cjs');

const SetupPasswordTermsView = ({ onContinue, onBack, }) => {
    const { t } = reactI18next.useTranslation();
    const appName = settingsUtils.useAppName();
    const [checkedItems, setCheckedItems] = React.useState({
        term1: false,
        term2: false,
        term3: false,
    });
    const handleCheckboxChange = React.useCallback((termKey) => {
        setCheckedItems((prev) => (Object.assign(Object.assign({}, prev), { [termKey]: !prev[termKey] })));
    }, []);
    const allChecked = Object.values(checkedItems).every(Boolean);
    const handleBack = React.useCallback(() => {
        onBack === null || onBack === void 0 ? void 0 : onBack();
    }, [onBack]);
    const backButton = onBack !== undefined ? (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: handleBack, "data-testid": 'setup-password-terms-back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) })) : undefined;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.terms.title', children: t('dyn_setup_password.terms.title') }) }), jsxRuntime.jsx("div", { className: 'setup-password-terms-view', children: jsxRuntime.jsxs("div", { className: 'setup-password-terms-view__body', children: [jsxRuntime.jsx("div", { className: 'setup-password-terms-view__icon-container', children: jsxRuntime.jsx(setupPasswordTermsIllustration.ReactComponent, {}) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.terms.description', className: 'setup-password-terms-view__description', children: t('dyn_setup_password.terms.description') }), jsxRuntime.jsxs("div", { className: 'setup-password-terms-view__checkboxes', children: [jsxRuntime.jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: checkedItems.term1, onChange: () => handleCheckboxChange('term1'), ariaLabel: t('dyn_setup_password.terms.checkbox_1') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_1', children: t('dyn_setup_password.terms.checkbox_1') })] }), jsxRuntime.jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: checkedItems.term2, onChange: () => handleCheckboxChange('term2'), ariaLabel: t('dyn_setup_password.terms.checkbox_2', {
                                                appName,
                                            }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_2', children: t('dyn_setup_password.terms.checkbox_2', { appName }) })] }), jsxRuntime.jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: checkedItems.term3, onChange: () => handleCheckboxChange('term3'), ariaLabel: t('dyn_setup_password.terms.checkbox_3') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_3', children: t('dyn_setup_password.terms.checkbox_3') })] })] }), jsxRuntime.jsx("div", { className: 'setup-password-terms-view__actions', children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'setup-password-terms-continue-button', onClick: onContinue, disabled: !allChecked, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                    color: 'inherit',
                                }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] }) })] }));
};

exports.SetupPasswordTermsView = SetupPasswordTermsView;
