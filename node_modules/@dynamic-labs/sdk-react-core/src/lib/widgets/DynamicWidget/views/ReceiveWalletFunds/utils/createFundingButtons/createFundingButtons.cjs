'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
var arrowLeft = require('../../../../../../shared/assets/arrow-left.cjs');
var close = require('../../../../../../shared/assets/close.cjs');
require('@dynamic-labs/iconic');
require('../../../../../../context/ViewContext/ViewContext.cjs');
var IconButton = require('../../../../../../components/IconButton/IconButton.cjs');

const createFundingButtons = ({ hideBackButton, onBack, defaultBackAction, setShowAuthFlow, setShowDynamicUserProfile, }) => {
    const backButton = hideBackButton ? undefined : (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', id: 'back-button', "data-testid": 'back-button', onClick: () => (onBack ? onBack() : defaultBackAction()), children: jsxRuntime.jsx(arrowLeft.ReactComponent, {}) }));
    const closeButton = hideBackButton ? (jsxRuntime.jsx(IconButton.IconButton, { onClick: () => {
            setShowAuthFlow(false);
            setShowDynamicUserProfile(false);
        }, type: 'button', id: 'close-button', "data-testid": 'close-button-main', children: jsxRuntime.jsx(close.ReactComponent, {}) })) : undefined;
    return { backButton, closeButton };
};

exports.createFundingButtons = createFundingButtons;
