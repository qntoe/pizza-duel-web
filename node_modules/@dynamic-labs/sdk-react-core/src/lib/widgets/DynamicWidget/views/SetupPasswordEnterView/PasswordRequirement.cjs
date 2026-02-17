'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('react');
var checkCircle = require('../../../../shared/assets/check-circle.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

const PasswordRequirement = ({ met, text, }) => (jsxRuntime.jsxs("div", { className: 'password-requirement', children: [met ? (jsxRuntime.jsx("div", { className: 'password-requirement__icon-wrapper', children: jsxRuntime.jsx(checkCircle.ReactComponent, {}) })) : (jsxRuntime.jsx("div", { className: 'password-requirement__circle' })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: met ? 'primary' : 'secondary', weight: 'regular', children: text })] }));

exports.PasswordRequirement = PasswordRequirement;
