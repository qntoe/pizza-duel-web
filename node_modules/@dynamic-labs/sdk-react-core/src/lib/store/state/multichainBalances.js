'use client'
import { createPartialStoreSetter } from '../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js';
import { createStoreState } from '../internalImplementation/utils/createStoreState/createStoreState.js';

const { getMultichainTokenBalancesState, setMultichainTokenBalancesState, useMultichainTokenBalancesState, } = createStoreState('multichainTokenBalancesState');
const setMultichainTokenBalanceVariable = createPartialStoreSetter({
    get: getMultichainTokenBalancesState,
    set: setMultichainTokenBalancesState,
});

export { getMultichainTokenBalancesState, setMultichainTokenBalanceVariable, useMultichainTokenBalancesState };
