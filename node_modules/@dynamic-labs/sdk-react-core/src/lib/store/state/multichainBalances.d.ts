declare const getMultichainTokenBalancesState: () => import("..").MultichainTokenBalancesState, useMultichainTokenBalancesState: () => import("..").MultichainTokenBalancesState;
declare const setMultichainTokenBalanceVariable: <K extends keyof import("..").MultichainTokenBalancesState>(key: K, value: import("..").MultichainTokenBalancesState[K]) => void;
export { getMultichainTokenBalancesState, setMultichainTokenBalanceVariable, useMultichainTokenBalancesState, };
