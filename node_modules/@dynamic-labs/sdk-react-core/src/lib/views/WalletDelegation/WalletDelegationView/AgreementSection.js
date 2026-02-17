'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { Checkbox } from '../../../components/Checkbox/Checkbox.js';
import { Typography } from '../../../components/Typography/Typography.js';

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
    return (jsxs("div", { className: containerClassName, onClick: onToggle, role: 'checkbox', "aria-checked": checked, tabIndex: 0, onKeyDown: handleKeyDown, children: [jsx(Checkbox, { checked: checked, onChange: handleCheckboxClick, value: 'agreement' }), jsx(Typography, { variant: 'body_small', color: 'secondary', children: text })] }));
};

export { AgreementSection };
