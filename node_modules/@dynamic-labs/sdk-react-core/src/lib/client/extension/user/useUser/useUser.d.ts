import { SdkUser } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
export declare const useUser: () => SdkUser | undefined;
/**
 * @deprecated you should call useUser() instead
 */
export declare const useUserProfile: () => UserProfile | undefined;
