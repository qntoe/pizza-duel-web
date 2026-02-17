'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const ModalCard = ({ children, borderRadius = 'default', border = false, sharpBottomRadiusOnMobile = true, dataTestId = 'modal-card', sharpBorder = false, dropShadow = true, }) => (jsxRuntime.jsx("div", { "data-testid": dataTestId, className: classNames.classNames('modal-card', {
        'modal-card--no-shadow': !dropShadow,
        'modal-card--sharp-border-radius': sharpBorder,
        'modal-card--sharp-mobile-bottom-radius': sharpBottomRadiusOnMobile,
        'modal-card--with-border': border,
    }, `modal-card--radius-${borderRadius}`), children: children }));

exports.ModalCard = ModalCard;
