'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '../../../../components/Checkbox/Checkbox.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { TypographyButton } from '../../../../components/TypographyButton/TypographyButton.js';
import { ReactComponent as SvgChevronLeft } from '../../../../shared/assets/chevron-left.js';
import { ReactComponent as SvgSetupPasswordTermsIllustration } from '../../../../shared/assets/setup-password-terms-illustration.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import { useAppName } from '../../../../store/utils/settingsUtils/settingsUtils.js';

const SetupPasswordTermsView = ({ onContinue, onBack, }) => {
    const { t } = useTranslation();
    const appName = useAppName();
    const [checkedItems, setCheckedItems] = useState({
        term1: false,
        term2: false,
        term3: false,
    });
    const handleCheckboxChange = useCallback((termKey) => {
        setCheckedItems((prev) => (Object.assign(Object.assign({}, prev), { [termKey]: !prev[termKey] })));
    }, []);
    const allChecked = Object.values(checkedItems).every(Boolean);
    const handleBack = useCallback(() => {
        onBack === null || onBack === void 0 ? void 0 : onBack();
    }, [onBack]);
    const backButton = onBack !== undefined ? (jsx(IconButton, { type: 'button', onClick: handleBack, "data-testid": 'setup-password-terms-back-button', children: jsx(SvgChevronLeft, {}) })) : undefined;
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_setup_password.terms.title', children: t('dyn_setup_password.terms.title') }) }), jsx("div", { className: 'setup-password-terms-view', children: jsxs("div", { className: 'setup-password-terms-view__body', children: [jsx("div", { className: 'setup-password-terms-view__icon-container', children: jsx(SvgSetupPasswordTermsIllustration, {}) }), jsx(Typography, { variant: 'body_normal', color: 'primary', copykey: 'dyn_setup_password.terms.description', className: 'setup-password-terms-view__description', children: t('dyn_setup_password.terms.description') }), jsxs("div", { className: 'setup-password-terms-view__checkboxes', children: [jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsx(Checkbox, { checked: checkedItems.term1, onChange: () => handleCheckboxChange('term1'), ariaLabel: t('dyn_setup_password.terms.checkbox_1') }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_1', children: t('dyn_setup_password.terms.checkbox_1') })] }), jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsx(Checkbox, { checked: checkedItems.term2, onChange: () => handleCheckboxChange('term2'), ariaLabel: t('dyn_setup_password.terms.checkbox_2', {
                                                appName,
                                            }) }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_2', children: t('dyn_setup_password.terms.checkbox_2', { appName }) })] }), jsxs("label", { className: 'setup-password-terms-view__checkbox-item', children: [jsx(Checkbox, { checked: checkedItems.term3, onChange: () => handleCheckboxChange('term3'), ariaLabel: t('dyn_setup_password.terms.checkbox_3') }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_setup_password.terms.checkbox_3', children: t('dyn_setup_password.terms.checkbox_3') })] })] }), jsx("div", { className: 'setup-password-terms-view__actions', children: jsx(TypographyButton, { dataTestId: 'setup-password-terms-continue-button', onClick: onContinue, disabled: !allChecked, copykey: 'dyn_setup_password.button.continue', buttonVariant: 'brand-primary', typographyProps: {
                                    color: 'inherit',
                                }, expanded: true, children: t('dyn_setup_password.button.continue') }) })] }) })] }));
};

export { SetupPasswordTermsView };
