import { DynamicClient } from '@dynamic-labs-sdk/client';
export declare const setDynamicClient: (newClient: DynamicClient) => void;
export declare const hasDynamicClient: () => boolean;
export declare const getDynamicClient: () => DynamicClient;
/**
 * Not many customers will ever change the client mid execution, but demo v2 will.
 * That means we need hooks that can react to client changes.
 */
export declare const useDynamicClient: () => DynamicClient;
