'use client'
/**
 * Returns the initial state for the SdkStore
 */
const createInitialState = (dynamicContextProps) => {
    var _a, _b;
    const initialAuthMode = (_b = (_a = dynamicContextProps.settings) === null || _a === void 0 ? void 0 : _a.initialAuthenticationMode) !== null && _b !== void 0 ? _b : 'connect-and-sign';
    return {
        authMode: initialAuthMode,
        connectedWalletsInfo: [],
        connectorsInitializing: {},
        dynamicContextProps,
        loadingAndLifecycle: {
            initialWalletVerificationInProgress: false,
            sessionValidation: false,
        },
        multichainTokenBalancesState: {
            error: undefined,
            isError: false,
            isLoading: false,
            multichainTokenBalances: undefined,
            requestsKey: undefined,
        },
        nonce: { expiresAt: undefined, nonce: undefined },
        primaryWalletId: undefined,
        sendBalanceState: {
            amount: undefined,
            chainName: undefined,
            nativePrice: undefined,
        },
        tokenBalancesState: {
            error: undefined,
            isError: false,
            isLoading: false,
            tokenBalances: undefined,
        },
        user: undefined,
        walletOptions: {
            groups: {},
            walletConnectorOptions: [],
        },
    };
};
/**
 * Filters out which variables should be stored to local storage.
 * Also allows transforming them before storage.
 */
const transformStateForLocalStorage = (state) => ({
    connectedWalletsInfo: state.connectedWalletsInfo,
    nonce: state.nonce,
    primaryWalletId: state.primaryWalletId,
    user: state.user,
});
/**
 * The store version works to invalidate old versions of the stored data
 * it should only be updated when the schema saved to local storage has a braking change.
 *
 * update using the current date in the format YYYY-MM-DD
 */
const storeVersion = '2025-02-21';

export { createInitialState, storeVersion, transformStateForLocalStorage };
