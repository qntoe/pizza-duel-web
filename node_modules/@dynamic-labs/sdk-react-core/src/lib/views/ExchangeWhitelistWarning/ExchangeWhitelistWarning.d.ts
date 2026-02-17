import { FC } from 'react';
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
type props = {
    exchange: ExchangeKeyEnum;
    onContinue: () => void;
    onClose: () => void;
};
export declare const ExchangeWhitelistWarning: FC<props>;
export {};
