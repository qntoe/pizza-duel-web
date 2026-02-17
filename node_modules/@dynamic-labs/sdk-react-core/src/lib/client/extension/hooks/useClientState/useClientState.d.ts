import { DynamicClient } from '@dynamic-labs-sdk/client';
export declare const useClientState: <T extends keyof DynamicClient>(variable: T) => NonNullable<DynamicClient[T]> | undefined;
