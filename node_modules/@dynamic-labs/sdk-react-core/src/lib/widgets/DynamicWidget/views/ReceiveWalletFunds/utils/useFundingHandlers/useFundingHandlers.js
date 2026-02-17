'use client'
import { useCallback } from 'react';
import { isFiatToken } from '../isFiatToken/isFiatToken.js';

const useFundingHandlers = ({ setTokenSymbol, setShowTokenSelect, setHasUserInteracted, setAmountsByFiatValue, setAmountsByTokenValue, showTokenAsPrimary, setShowTokenAsPrimary, tokenAmount, setTokenAmount, fiatAmount, setFiatAmount, inputEmitter, quickSuggestionsToken, }) => {
    const handleSelectToken = useCallback((token) => {
        setTokenSymbol(token);
        setShowTokenSelect(false);
        setHasUserInteracted(true);
    }, [setTokenSymbol, setShowTokenSelect, setHasUserInteracted]);
    const handleQuickSuggestion = useCallback((value) => {
        setHasUserInteracted(true);
        if (isFiatToken(quickSuggestionsToken)) {
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
    const closeTokenSelect = useCallback(() => {
        setShowTokenSelect(false);
        inputEmitter.emit('focus');
    }, [setShowTokenSelect, inputEmitter]);
    const switchPrimaryAndSecondary = useCallback(() => {
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

export { useFundingHandlers };
