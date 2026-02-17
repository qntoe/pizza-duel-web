type AmountData = {
    amount: string | undefined;
    symbol: string;
};
type PrimaryData = AmountData & {
    setAmount: (amount: string) => void;
};
export type UseFundingDisplayParams = {
    primaryData: PrimaryData;
    secondaryData: AmountData;
};
export declare const useFundingDisplay: ({ primaryData, secondaryData, }: UseFundingDisplayParams) => {
    grayOutSecondaryDisplay: boolean;
    inputSymbolProp: {
        leading: string;
        trailing?: undefined;
    } | {
        trailing: string;
        leading?: undefined;
    };
    isSecondaryFiatOrStable: boolean;
    secondaryDisplay: string | undefined;
};
export {};
