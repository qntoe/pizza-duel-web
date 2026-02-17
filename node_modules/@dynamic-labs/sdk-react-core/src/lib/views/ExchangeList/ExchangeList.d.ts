/// <reference types="react" />
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
export type ExchangeListProps = {
    onSelectExchange: (exchange: ExchangeKeyEnum) => void;
    showDefaultFooter?: boolean;
    scrollContainerClassName?: string;
};
export declare const ExchangeList: ({ onSelectExchange, showDefaultFooter, scrollContainerClassName, }: ExchangeListProps) => JSX.Element;
