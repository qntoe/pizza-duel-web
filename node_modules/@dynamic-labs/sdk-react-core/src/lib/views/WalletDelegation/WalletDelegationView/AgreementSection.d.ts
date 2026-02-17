import { FC } from 'react';
type AgreementSectionProps = {
    checked: boolean;
    onToggle: () => void;
    text: string;
    className?: string;
};
export declare const AgreementSection: FC<AgreementSectionProps>;
export {};
