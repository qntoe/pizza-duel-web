'use client'
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { ReactComponent as SvgCheck } from '../../../../shared/assets/check.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';

const STEPS = ['Cloud Backup', 'Download'];
const BackupStepper = ({ currentStep, completedSteps, }) => {
    const getStepClassName = (index) => {
        const classes = ['waas-backup-view__step'];
        if (index < completedSteps) {
            classes.push('waas-backup-view__step--completed');
        }
        else if (index === currentStep) {
            classes.push('waas-backup-view__step--current');
        }
        else {
            classes.push('waas-backup-view__step--upcoming');
        }
        return classes.join(' ');
    };
    const getSeparatorClassName = () => {
        const classes = ['waas-backup-view__step-separator'];
        if (completedSteps >= 1) {
            classes.push('waas-backup-view__step-separator--solid');
        }
        return classes.join(' ');
    };
    return (jsx("div", { className: 'waas-backup-view__stepper', children: STEPS.map((step, index) => (jsxs("div", { className: 'waas-backup-view__step-container', children: [jsx("div", { className: getStepClassName(index), children: jsx("div", { className: 'waas-backup-view__step-indicator', children: index < completedSteps ? (jsx(SvgCheck, { className: 'waas-backup-view__step-check' })) : (jsx("div", { className: 'waas-backup-view__step-number', children: index + 1 })) }) }), index < STEPS.length - 1 && (jsx("div", { className: getSeparatorClassName() }))] }, step))) }));
};

export { BackupStepper };
