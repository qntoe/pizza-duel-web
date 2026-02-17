'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var isFiatToken = require('../isFiatToken/isFiatToken.cjs');

const useFundingHandlers = ({ setTokenSymbol, setShowTokenSelect, setHasUserInteracted, setAmountsByFiatValue, setAmountsByTokenValue, showTokenAsPrimary, setShowTokenAsPrimary, tokenAmount, setTokenAmount, fiatAmount, setFiatAmount, inputEmitter, quickSuggestionsToken, }) => {
    const handleSelectToken = React.useCallback((token) => {
        setTokenSymbol(token);
        setShowTokenSelect(false);
        setHasUserInteracted(true);
    }, [setTokenSymbol, setShowTokenSelect, setHasUserInteracted]);
    const handleQuickSuggestion = React.useCallback((value) => {
        setHasUserInteracted(true);
        if (isFiatToken.isFiatToken(quickSuggestionsToken)) {
            setAmountsByFiatValue(value.toString());
        }
        else if (setAmountsByTokenValue) {
            setAmountsByTokenValue(value.toString());
        }
        inputEmitter.emit('focus');
    }, [
        setHasUserInteracted,
        quickSuggestionsToken,
        setAmountsByFiatValue,
        setAmountsByTokenValue,
        inputEmitter,
    ]);
    const closeTokenSelect = React.useCallback(() => {
        setShowTokenSelect(false);
        inputEmitter.emit('focus');
    }, [setShowTokenSelect, inputEmitter]);
    const switchPrimaryAndSecondary = React.useCallback(() => {
        setHasUserInteracted(true);
        setShowTokenAsPrimary(!showTokenAsPrimary);
        if (tokenAmount && isNaN(parseFloat(tokenAmount))) {
            setTokenAmount('');
        }
        if (fiatAmount && isNaN(parseFloat(fiatAmount))) {
            setFiatAmount('');
        }
        inputEmitter.emit('focus');
    }, [
        setHasUserInteracted,
        showTokenAsPrimary,
        setShowTokenAsPrimary,
        tokenAmount,
        setTokenAmount,
        fiatAmount,
        setFiatAmount,
        inputEmitter,
    ]);
    return {
        closeTokenSelect,
        handleQuickSuggestion,
        handleSelectToken,
        switchPrimaryAndSecondary,
    };
};

exports.useFundingHandlers = useFundingHandlers;
