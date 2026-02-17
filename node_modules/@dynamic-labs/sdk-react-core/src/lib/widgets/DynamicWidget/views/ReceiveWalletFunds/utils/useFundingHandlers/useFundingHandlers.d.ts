import EventEmitter from 'eventemitter3';
export type UseFundingHandlersParams = {
    setTokenSymbol: (symbol: string) => void;
    setShowTokenSelect: (show: boolean) => void;
    setHasUserInteracted: (interacted: boolean) => void;
    setAmountsByFiatValue: (amount: string) => void;
    setAmountsByTokenValue?: (amount: string) => void;
    showTokenAsPrimary: boolean;
    setShowTokenAsPrimary: (show: boolean) => void;
    tokenAmount: string | undefined;
    setTokenAmount: (amount: string) => void;
    fiatAmount: string | undefined;
    setFiatAmount: (amount: string) => void;
    inputEmitter: EventEmitter<{
        focus: () => void;
    }>;
    quickSuggestionsToken: string;
};
export declare const useFundingHandlers: ({ setTokenSymbol, setShowTokenSelect, setHasUserInteracted, setAmountsByFiatValue, setAmountsByTokenValue, showTokenAsPrimary, setShowTokenAsPrimary, tokenAmount, setTokenAmount, fiatAmount, setFiatAmount, inputEmitter, quickSuggestionsToken, }: UseFundingHandlersParams) => {
    closeTokenSelect: () => void;
    handleQuickSuggestion: (value: number) => void;
    handleSelectToken: (token: string) => void;
    switchPrimaryAndSecondary: () => void;
};
