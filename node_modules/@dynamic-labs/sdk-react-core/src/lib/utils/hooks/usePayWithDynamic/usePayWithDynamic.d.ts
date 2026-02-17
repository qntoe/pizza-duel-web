import { ChainEnum } from '@dynamic-labs/sdk-api-core';
export type PayWithDynamicProps = {
    destinationAddress: string;
    tokenAmount: number;
    tokenSymbol: string;
    network: string | number;
    chainName: ChainEnum;
};
export declare const usePayWithDynamic: () => (props: PayWithDynamicProps) => Promise<void>;
