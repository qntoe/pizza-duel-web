import { SdkUser } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
/**
 * Returns the user if and only if the user is logged in and has completed the onboarding process.
 *
 * We used to have the concept of "onboardingOnlyJwt", but now we only have the standard JWT.
 * Some customers used to rely on there not being a user until onboarding was complete.
 * To maintain backwards compatibility, we had to add logic that checks if a user has completed onboarding.
 * However, once a user is "tagged" as onboarding complete, it should never go back
 * to an incomplete onboarding tag unless they log out.
 * In order to ensure this doesn't happen we lock it with a ref.
 */
export declare const useOnboardingCompleteUser: () => SdkUser | undefined;
/**
 * @deprecated you should call useOnboardingCompleteUser() instead
 */
export declare const useOnboardingCompleteUserProfile: () => UserProfile | undefined;
