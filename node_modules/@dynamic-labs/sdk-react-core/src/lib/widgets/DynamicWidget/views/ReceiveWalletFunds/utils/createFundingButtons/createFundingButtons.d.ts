import { ReactNode } from 'react';
export type CreateFundingButtonsParams = {
    hideBackButton: boolean;
    onBack?: () => void;
    defaultBackAction: () => void;
    setShowAuthFlow: (show: boolean) => void;
    setShowDynamicUserProfile: (show: boolean) => void;
};
export declare const createFundingButtons: ({ hideBackButton, onBack, defaultBackAction, setShowAuthFlow, setShowDynamicUserProfile, }: CreateFundingButtonsParams) => {
    backButton: ReactNode;
    closeButton: ReactNode;
};
