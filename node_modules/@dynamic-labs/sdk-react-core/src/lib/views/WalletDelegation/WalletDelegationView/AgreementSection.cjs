'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Checkbox = require('../../../components/Checkbox/Checkbox.cjs');
var Typography = require('../../../components/Typography/Typography.cjs');

const AgreementSection = ({ checked, onToggle, text, className, }) => {
    const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            onToggle();
        }
    };
    const handleCheckboxClick = (event) => {
        // Prevent the container onClick from firing twice
        event.stopPropagation();
        onToggle();
    };
    const containerClassName = className
        ? `embedded-delegated-view__agreement-section ${className}`
        : 'embedded-delegated-view__agreement-section';
    return (jsxRuntime.jsxs("div", { className: containerClassName, onClick: onToggle, role: 'checkbox', "aria-checked": checked, tabIndex: 0, onKeyDown: handleKeyDown, children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: checked, onChange: handleCheckboxClick, value: 'agreement' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', children: text })] }));
};

exports.AgreementSection = AgreementSection;
