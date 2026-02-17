'use client'
import { jsx } from 'react/jsx-runtime';
import 'react';
import { ReactComponent as SvgArrowLeft } from '../../../../../../shared/assets/arrow-left.js';
import { ReactComponent as SvgClose } from '../../../../../../shared/assets/close.js';
import '@dynamic-labs/iconic';
import '../../../../../../context/ViewContext/ViewContext.js';
import { IconButton } from '../../../../../../components/IconButton/IconButton.js';

const createFundingButtons = ({ hideBackButton, onBack, defaultBackAction, setShowAuthFlow, setShowDynamicUserProfile, }) => {
    const backButton = hideBackButton ? undefined : (jsx(IconButton, { type: 'button', id: 'back-button', "data-testid": 'back-button', onClick: () => (onBack ? onBack() : defaultBackAction()), children: jsx(SvgArrowLeft, {}) }));
    const closeButton = hideBackButton ? (jsx(IconButton, { onClick: () => {
            setShowAuthFlow(false);
            setShowDynamicUserProfile(false);
        }, type: 'button', id: 'close-button', "data-testid": 'close-button-main', children: jsx(SvgClose, {}) })) : undefined;
    return { backButton, closeButton };
};

export { createFundingButtons };
