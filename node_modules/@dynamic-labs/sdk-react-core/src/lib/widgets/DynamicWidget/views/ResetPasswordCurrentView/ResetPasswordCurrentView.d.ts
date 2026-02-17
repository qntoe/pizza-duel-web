import { FC } from 'react';
export type ResetPasswordCurrentViewProps = {
    onContinue: (password: string) => void;
    onBack: () => void;
    isLoading?: boolean;
    error?: string | null;
};
export declare const ResetPasswordCurrentView: FC<ResetPasswordCurrentViewProps>;
