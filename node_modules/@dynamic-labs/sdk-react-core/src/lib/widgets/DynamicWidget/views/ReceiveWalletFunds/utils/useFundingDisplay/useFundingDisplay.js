'use client'
import { useMemo } from 'react';
import { formatValue } from '../formatValue/formatValue.js';
import { isFiatOrStablecoin } from '../isFiatToken/isFiatToken.js';
import { isNonZero } from '../isNonZero/isNonZero.js';

const useFundingDisplay = ({ primaryData, secondaryData, }) => {
    var _a;
    const isSecondaryFiatOrStable = useMemo(() => isFiatOrStablecoin(secondaryData.symbol), [secondaryData.symbol]);
    const secondaryDisplay = formatValue({
        maxDecimals: isSecondaryFiatOrStable ? 2 : undefined,
        symbol: secondaryData.symbol,
        value: secondaryData.amount,
        withFixedZeros: isSecondaryFiatOrStable,
    });
    const grayOutSecondaryDisplay = !isNonZero(secondaryData.amount) ||
        (isSecondaryFiatOrStable &&
            parseFloat((_a = secondaryData.amount) !== null && _a !== void 0 ? _a : '0') < 0.0099);
    const inputSymbolProp = primaryData.symbol === 'USD'
        ? { leading: '$' }
        : { trailing: primaryData.symbol };
    return {
        grayOutSecondaryDisplay,
        inputSymbolProp,
        isSecondaryFiatOrStable,
        secondaryDisplay,
    };
};

export { useFundingDisplay };
