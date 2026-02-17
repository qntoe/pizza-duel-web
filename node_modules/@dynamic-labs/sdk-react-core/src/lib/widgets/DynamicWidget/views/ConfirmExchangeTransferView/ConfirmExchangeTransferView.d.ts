import { FC } from 'react';
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
import { FundingTokenData } from '../ReceiveWalletFunds/types';
export type ConfirmExchangeTransferViewProps = {
    amount?: number;
    fiatAmount?: number;
    toAddress?: string;
    exchange: ExchangeKeyEnum;
    accountIdentifier?: string;
    token?: FundingTokenData;
    fee?: number;
    feeInFiat?: number;
    fiatCurrencySymbol?: string;
    onSubmit: () => void;
    onBack: () => void;
};
export declare const ConfirmExchangeTransferView: FC<ConfirmExchangeTransferViewProps>;
