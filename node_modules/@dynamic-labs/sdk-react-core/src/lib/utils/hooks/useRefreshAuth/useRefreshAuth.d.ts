import { UserProfile } from '@dynamic-labs/types';
type RefreshAuthCallback = () => Promise<UserProfile | undefined>;
/**
 * Refresh auth state
 * @returns A callback function that can be used to refresh the auth state
 */
export declare const useRefreshAuth: () => RefreshAuthCallback;
export {};
