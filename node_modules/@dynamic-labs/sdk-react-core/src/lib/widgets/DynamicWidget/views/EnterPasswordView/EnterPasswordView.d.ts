import { FC } from 'react';
export type EnterPasswordViewProps = {
    onContinue: (password: string) => Promise<void>;
    title?: string;
    description?: string;
    buttonLabel?: string;
    isLoading?: boolean;
};
export declare const EnterPasswordView: FC<EnterPasswordViewProps>;
