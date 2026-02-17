import { UserProfile } from '../../../..';
/**
 * @deprecated Use `signInWithExternalJwt` instead.
 * This currently does not work.
 */
export declare const externalAuthVerify: ({ environmentId, externalJwt, }: {
    environmentId: string;
    externalJwt?: string;
}) => Promise<UserProfile | undefined>;
