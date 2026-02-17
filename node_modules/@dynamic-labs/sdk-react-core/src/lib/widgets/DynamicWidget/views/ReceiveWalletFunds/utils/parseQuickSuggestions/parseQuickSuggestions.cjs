'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var formatValue = require('../formatValue/formatValue.cjs');

const parseQuickSuggestions = (quickSuggestions, filterFn) => {
    const quickSuggestionsWithToken = Array.isArray(quickSuggestions)
        ? { token: 'USD', values: quickSuggestions }
        : quickSuggestions;
    const values = filterFn
        ? quickSuggestionsWithToken.values.filter(filterFn)
        : quickSuggestionsWithToken.values;
    const quickSuggestionsParsed = values
        .map((value) => ({
        display: formatValue.formatValue({
            symbol: quickSuggestionsWithToken.token,
            value: value,
        }),
        value,
    }))
        .filter(({ display }) => display !== undefined);
    return { quickSuggestionsParsed, quickSuggestionsWithToken };
};

exports.parseQuickSuggestions = parseQuickSuggestions;
