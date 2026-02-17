'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../../../../components/Typography/Typography.js';
import 'react';
import { ReactComponent as SvgCheckCircle } from '../../../../shared/assets/check-circle.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';

const PasswordRequirement = ({ met, text, }) => (jsxs("div", { className: 'password-requirement', children: [met ? (jsx("div", { className: 'password-requirement__icon-wrapper', children: jsx(SvgCheckCircle, {}) })) : (jsx("div", { className: 'password-requirement__circle' })), jsx(Typography, { variant: 'body_small', color: met ? 'primary' : 'secondary', weight: 'regular', children: text })] }));

export { PasswordRequirement };
