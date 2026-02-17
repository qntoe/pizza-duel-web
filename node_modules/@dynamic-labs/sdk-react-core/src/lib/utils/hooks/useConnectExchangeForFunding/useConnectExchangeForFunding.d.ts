import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
type Props = {
    initiatedByWidget: boolean;
};
export declare const useConnectExchangeForFunding: () => ({ initiatedByWidget }: Props) => Promise<ExchangeKeyEnum>;
export {};
