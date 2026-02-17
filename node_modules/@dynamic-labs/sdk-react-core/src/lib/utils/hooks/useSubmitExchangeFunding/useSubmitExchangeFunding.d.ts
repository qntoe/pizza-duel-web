import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
import { ConfirmExchangeTransferViewProps } from '../../../widgets/DynamicWidget/views/ConfirmExchangeTransferView/ConfirmExchangeTransferView';
export type SubmitExchangeFundingProps = {
    tokenAmount: string | undefined;
    exchange: ExchangeKeyEnum;
    tokenSymbol: string;
    mfaCode?: string;
    toAddress: string;
    props: ConfirmExchangeTransferViewProps;
};
export declare const useSubmitExchangeFunding: () => ({ tokenAmount, exchange, tokenSymbol, mfaCode, toAddress, props, }: SubmitExchangeFundingProps) => Promise<void>;
