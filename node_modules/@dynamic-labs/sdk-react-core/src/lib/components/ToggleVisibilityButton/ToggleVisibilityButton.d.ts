import { ComponentPropsWithoutRef } from 'react';
type Props = Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> & {
    initialState?: boolean;
    onClick?: (hidden: boolean) => void;
    className?: string;
};
export declare const ToggleVisibilityButton: ({ initialState, onClick, className, }: Props) => JSX.Element;
export {};
