import { FC } from 'react';
import { ExchangeTransferResponse } from '@dynamic-labs/sdk-api-core';
type props = {
    transaction: ExchangeTransferResponse;
    onClose: () => void;
    onSubmit: () => void;
    onView?: () => void;
    toAddress: string;
};
export declare const DepositedExchangeView: FC<props>;
export {};
