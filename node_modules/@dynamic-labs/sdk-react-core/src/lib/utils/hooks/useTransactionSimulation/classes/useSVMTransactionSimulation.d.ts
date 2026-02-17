import { SimulateTransactionResponse } from '@dynamic-labs/sdk-api-core';
import { ISolanaTransaction } from '@dynamic-labs/types';
import { type TransactionType, type SimulationState, type FeeData } from './useBaseTransactionSimulation';
export type { TransactionType, SimulationState, FeeData };
export type SVMTransaction = ISolanaTransaction | ISolanaTransaction[];
export type SVMTransactionParams = {
    transaction: SVMTransaction;
    type: Omit<TransactionType, 'SendTransaction'>;
};
export type SVMTransactionSimulationHook = {
    simulateSVMTransaction: (params: SVMTransactionParams) => Promise<SimulateTransactionResponse>;
} & SimulationState;
export declare const useSVMTransactionSimulation: () => SVMTransactionSimulationHook;
