import { SdkUser } from '@dynamic-labs/sdk-api-core';
/**
 * Determines if social accounts have changed between two user profiles.
 * Detects linking, unlinking, and credential replacement scenarios.
 *
 * @param oldUser - The previous user profile
 * @param newUser - The current user profile
 * @returns true if social accounts have changed, false otherwise
 */
export declare const hasSocialAccountChanged: (oldUser: SdkUser, newUser: SdkUser) => boolean;
