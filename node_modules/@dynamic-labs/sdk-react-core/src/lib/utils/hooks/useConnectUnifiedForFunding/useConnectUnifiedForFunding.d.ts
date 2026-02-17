import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { OnrampOption } from '../../../context/DynamicContext';
type Props = {
    initiatedByWidget: boolean;
};
export type UnifiedFundingResult = {
    kind: 'wallet';
    wallet: Wallet;
} | {
    kind: 'exchange';
    exchange: ExchangeKeyEnum;
} | {
    kind: 'onramp';
    onramp: OnrampOption;
};
export declare const useConnectUnifiedForFunding: () => ({ initiatedByWidget }: Props) => Promise<UnifiedFundingResult>;
export {};
