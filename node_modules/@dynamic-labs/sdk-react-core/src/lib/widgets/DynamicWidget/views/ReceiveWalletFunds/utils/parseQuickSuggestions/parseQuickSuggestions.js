'use client'
import { formatValue } from '../formatValue/formatValue.js';

const parseQuickSuggestions = (quickSuggestions, filterFn) => {
    const quickSuggestionsWithToken = Array.isArray(quickSuggestions)
        ? { token: 'USD', values: quickSuggestions }
        : quickSuggestions;
    const values = filterFn
        ? quickSuggestionsWithToken.values.filter(filterFn)
        : quickSuggestionsWithToken.values;
    const quickSuggestionsParsed = values
        .map((value) => ({
        display: formatValue({
            symbol: quickSuggestionsWithToken.token,
            value: value,
        }),
        value,
    }))
        .filter(({ display }) => display !== undefined);
    return { quickSuggestionsParsed, quickSuggestionsWithToken };
};

export { parseQuickSuggestions };
