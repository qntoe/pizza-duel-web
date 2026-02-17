import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
import type { PayWithDynamicProps } from '../usePayWithDynamic/usePayWithDynamic';
export declare const usePromptAmountAndFundWithExchange: () => ({ exchange, payingWithDynamic, onBack, hideBackButton, }: {
    exchange: ExchangeKeyEnum;
    payingWithDynamic?: PayWithDynamicProps;
    onBack?: () => void;
    hideBackButton?: boolean;
}) => Promise<void>;
