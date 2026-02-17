export type ParseQuickSuggestionsResult = {
    quickSuggestionsWithToken: {
        token: string;
        values: number[];
    };
    quickSuggestionsParsed: Array<{
        display: string | undefined;
        value: number;
    }>;
};
export declare const parseQuickSuggestions: (quickSuggestions: number[] | {
    token: string;
    values: number[];
}, filterFn?: (value: number) => boolean) => ParseQuickSuggestionsResult;
