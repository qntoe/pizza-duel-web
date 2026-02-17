import { FC, ReactElement, ReactNode } from 'react';
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
export type ExchangeListItemTileProps = {
    leading: ReactNode;
    name: string;
    onClick: () => void;
    trailing: ReactNode;
};
export type ExchangeListItemTile = (props: ExchangeListItemTileProps) => ReactElement;
export type ExchangeListItemProps = {
    onResetSearchValue?: (newSearchValue: string) => void;
    tile?: ExchangeListItemTile;
    exchange: ExchangeKeyEnum;
    disabled?: boolean;
    onSelectExchange: (exchange: ExchangeKeyEnum) => void;
    trailingProp?: ReactNode;
};
export declare const ExchangeListItem: FC<ExchangeListItemProps>;
