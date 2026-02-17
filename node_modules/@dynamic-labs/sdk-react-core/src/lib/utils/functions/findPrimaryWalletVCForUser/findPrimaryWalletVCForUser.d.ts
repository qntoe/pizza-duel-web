import { SdkUser } from '@dynamic-labs/sdk-api-core';
import type { JwtVerifiedCredential, ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
/**
 * Finds the primary wallet VC for the user based on wallet type priority and most recent lastSelectedAt
 * @param user - The SDK user object or UserProfile
 * @param projectSettings - Project settings containing embedded wallet configuration
 * @param onlyEmbeddedWallets - Whether to only return embedded wallets
 * @returns JwtVerifiedCredential | undefined - The primary wallet VC for the user
 */
export declare const findPrimaryWalletVCForUser: (user: SdkUser | UserProfile | null, projectSettings?: ProjectSettings, onlyEmbeddedWallets?: boolean) => JwtVerifiedCredential | undefined;
