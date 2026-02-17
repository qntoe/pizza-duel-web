import { FC, PropsWithChildren } from 'react';
import { CopyKey } from '../../shared';
type FormFieldLabelProps = {
    htmlFor?: string;
    className?: string;
    divider?: boolean;
} & CopyKey;
export declare const FormFieldLabel: FC<PropsWithChildren<FormFieldLabelProps>>;
export {};
