import { IEVMTransaction } from '@dynamic-labs/types';
import { SimulateTransactionResponse } from '@dynamic-labs/sdk-api-core';
import { type TransactionType, type FeeData, type SimulationState } from './useBaseTransactionSimulation';
export type { TransactionType, SimulationState, FeeData };
export type EVMTransactionParams = {
    transaction: IEVMTransaction;
    type: Omit<TransactionType, 'SignAllTransactions' | 'SignTransaction'>;
};
export type EVMTransactionSimulationHook = {
    simulateEVMTransaction: (params: EVMTransactionParams) => Promise<SimulateTransactionResponse>;
    simulateEVMTransactionAA: (params: EVMTransactionParams) => Promise<SimulateTransactionResponse>;
} & SimulationState;
export declare const useEVMTransactionSimulation: () => EVMTransactionSimulationHook;
