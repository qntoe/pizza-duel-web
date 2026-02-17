import { FC } from 'react';
export type SetupPasswordEnterViewProps = {
    onContinue: (password: string) => void;
    onBack: () => void;
    title?: string;
    description?: string;
    oldPassword?: string;
};
export declare const SetupPasswordEnterView: FC<SetupPasswordEnterViewProps>;
