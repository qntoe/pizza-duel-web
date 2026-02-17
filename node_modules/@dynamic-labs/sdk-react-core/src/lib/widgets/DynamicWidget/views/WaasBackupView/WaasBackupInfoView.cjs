'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Icon = require('../../../../components/Icon/Icon.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var cautionTriangle = require('../../../../shared/assets/caution-triangle.cjs');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
var filledQuestionMark = require('../../../../shared/assets/filled-question-mark.cjs');
require('@dynamic-labs/iconic');

const WaasBackupInfoView = () => {
    const { goBack } = ViewContext.useViewContext();
    const { t } = reactI18next.useTranslation();
    const handleBackClick = React.useCallback(() => goBack(), [goBack]);
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_waas.backup_info.title', children: t('dyn_waas.backup_info.title') }) }), jsxRuntime.jsx("div", { className: 'waas-backup-view', children: jsxRuntime.jsxs("div", { className: 'waas-backup-view__info', children: [jsxRuntime.jsx("div", { className: 'waas-backup-view__info-icon', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(filledQuestionMark.ReactComponent, { width: 64, height: 64 }) }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'medium', color: 'primary', copykey: 'dyn_waas.backup_info.subtitle', className: 'waas-backup-view__info-subtitle', children: t('dyn_waas.backup_info.subtitle') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_waas.backup_info.description', className: 'waas-backup-view__info-description', children: t('dyn_waas.backup_info.description') }), jsxRuntime.jsxs("div", { className: 'waas-backup-view__info-alert', children: [jsxRuntime.jsx(cautionTriangle.ReactComponent, { className: 'waas-backup-view__info-alert-icon' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', children: t('dyn_waas.backup_info.warning') })] })] }) })] }));
};

exports.WaasBackupInfoView = WaasBackupInfoView;
