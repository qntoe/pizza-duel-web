import { UserProfile } from '@dynamic-labs/types';
export type UnlinkUserEmailArgs = {
    verifiedCredentialId: string;
};
export type UnlinkUserEmail = (args: UnlinkUserEmailArgs) => Promise<UserProfile | undefined>;
export declare const useUnlinkUserEmail: () => UnlinkUserEmail;
