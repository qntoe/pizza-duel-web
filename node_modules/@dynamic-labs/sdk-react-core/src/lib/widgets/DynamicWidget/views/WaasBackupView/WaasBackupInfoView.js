'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../components/Icon/Icon.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgCautionTriangle } from '../../../../shared/assets/caution-triangle.js';
import { ReactComponent as SvgChevronLeft } from '../../../../shared/assets/chevron-left.js';
import { ReactComponent as SvgFilledQuestionMark } from '../../../../shared/assets/filled-question-mark.js';
import '@dynamic-labs/iconic';

const WaasBackupInfoView = () => {
    const { goBack } = useViewContext();
    const { t } = useTranslation();
    const handleBackClick = useCallback(() => goBack(), [goBack]);
    const backButton = (jsx(IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_waas.backup_info.title', children: t('dyn_waas.backup_info.title') }) }), jsx("div", { className: 'waas-backup-view', children: jsxs("div", { className: 'waas-backup-view__info', children: [jsx("div", { className: 'waas-backup-view__info-icon', children: jsx(Icon, { color: 'brand-primary', children: jsx(SvgFilledQuestionMark, { width: 64, height: 64 }) }) }), jsx(Typography, { variant: 'body_normal', weight: 'medium', color: 'primary', copykey: 'dyn_waas.backup_info.subtitle', className: 'waas-backup-view__info-subtitle', children: t('dyn_waas.backup_info.subtitle') }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: 'dyn_waas.backup_info.description', className: 'waas-backup-view__info-description', children: t('dyn_waas.backup_info.description') }), jsxs("div", { className: 'waas-backup-view__info-alert', children: [jsx(SvgCautionTriangle, { className: 'waas-backup-view__info-alert-icon' }), jsx(Typography, { variant: 'body_small', color: 'secondary', children: t('dyn_waas.backup_info.warning') })] })] }) })] }));
};

export { WaasBackupInfoView };
