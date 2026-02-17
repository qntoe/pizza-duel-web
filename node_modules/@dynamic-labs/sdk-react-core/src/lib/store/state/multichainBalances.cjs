'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createPartialStoreSetter = require('../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.cjs');
var createStoreState = require('../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getMultichainTokenBalancesState, setMultichainTokenBalancesState, useMultichainTokenBalancesState, } = createStoreState.createStoreState('multichainTokenBalancesState');
const setMultichainTokenBalanceVariable = createPartialStoreSetter.createPartialStoreSetter({
    get: getMultichainTokenBalancesState,
    set: setMultichainTokenBalancesState,
});

exports.getMultichainTokenBalancesState = getMultichainTokenBalancesState;
exports.setMultichainTokenBalanceVariable = setMultichainTokenBalanceVariable;
exports.useMultichainTokenBalancesState = useMultichainTokenBalancesState;
