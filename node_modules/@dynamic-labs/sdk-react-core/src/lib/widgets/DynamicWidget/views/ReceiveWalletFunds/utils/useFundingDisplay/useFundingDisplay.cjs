'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var formatValue = require('../formatValue/formatValue.cjs');
var isFiatToken = require('../isFiatToken/isFiatToken.cjs');
var isNonZero = require('../isNonZero/isNonZero.cjs');

const useFundingDisplay = ({ primaryData, secondaryData, }) => {
    var _a;
    const isSecondaryFiatOrStable = React.useMemo(() => isFiatToken.isFiatOrStablecoin(secondaryData.symbol), [secondaryData.symbol]);
    const secondaryDisplay = formatValue.formatValue({
        maxDecimals: isSecondaryFiatOrStable ? 2 : undefined,
        symbol: secondaryData.symbol,
        value: secondaryData.amount,
        withFixedZeros: isSecondaryFiatOrStable,
    });
    const grayOutSecondaryDisplay = !isNonZero.isNonZero(secondaryData.amount) ||
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

exports.useFundingDisplay = useFundingDisplay;
