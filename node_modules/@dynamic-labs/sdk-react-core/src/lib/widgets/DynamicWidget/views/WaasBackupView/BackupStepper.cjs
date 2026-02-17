'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
var check = require('../../../../shared/assets/check.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

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
    return (jsxRuntime.jsx("div", { className: 'waas-backup-view__stepper', children: STEPS.map((step, index) => (jsxRuntime.jsxs("div", { className: 'waas-backup-view__step-container', children: [jsxRuntime.jsx("div", { className: getStepClassName(index), children: jsxRuntime.jsx("div", { className: 'waas-backup-view__step-indicator', children: index < completedSteps ? (jsxRuntime.jsx(check.ReactComponent, { className: 'waas-backup-view__step-check' })) : (jsxRuntime.jsx("div", { className: 'waas-backup-view__step-number', children: index + 1 })) }) }), index < STEPS.length - 1 && (jsxRuntime.jsx("div", { className: getSeparatorClassName() }))] }, step))) }));
};

exports.BackupStepper = BackupStepper;
