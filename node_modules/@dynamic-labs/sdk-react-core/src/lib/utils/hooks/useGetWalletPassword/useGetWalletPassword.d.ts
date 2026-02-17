import { GetWalletPasswordFn } from '../../../shared/types/dynamicHandlers';
export type GetWalletPasswordProps = {
    accountAddress: string;
    chainName: string;
};
export declare const useGetWalletPassword: () => GetWalletPasswordFn;
