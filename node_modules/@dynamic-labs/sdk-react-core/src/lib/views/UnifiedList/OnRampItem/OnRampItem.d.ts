import { FC, ReactElement, ReactNode } from 'react';
import { OnrampOption } from '../../../context/DynamicContext';
export type OnRampItemTileProps = {
    leading: ReactNode;
    name: string;
    onClick: () => void;
    trailing: ReactNode;
};
export type OnRampItemTile = (props: OnRampItemTileProps) => ReactElement;
export type OnRampItemProps = {
    onResetSearchValue?: (newSearchValue: string) => void;
    tile?: OnRampItemTile;
    onramp: OnrampOption;
    disabled?: boolean;
    onSelectOnRamp: (onramp: OnrampOption) => void;
    trailingProp?: ReactNode;
};
export declare const OnRampItem: FC<OnRampItemProps>;
