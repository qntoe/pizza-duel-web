import { SetCallbackType, UseCustomerCallbacksArgs } from './types';
export declare const useCustomerCallbacks: ({ callbacks: { onAuthSuccess }, handleLogOut, primaryWallet, user, isAuthenticated, }: UseCustomerCallbacksArgs) => {
    setCallback: SetCallbackType;
};
