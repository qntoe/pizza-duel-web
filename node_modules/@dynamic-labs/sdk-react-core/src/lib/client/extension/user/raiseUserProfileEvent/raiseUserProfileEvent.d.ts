import { SdkUser } from '@dynamic-labs/sdk-api-core';
type RaiseUserProfileEventParams = {
    oldUser: SdkUser;
    newUser: SdkUser;
};
export declare const hasFieldChanged: <T extends string>(fields: T[], record1: Partial<Record<T, unknown>> | undefined, record2: Partial<Record<T, unknown>> | undefined) => boolean;
export declare const raiseUserProfileEvent: ({ oldUser, newUser, }: RaiseUserProfileEventParams) => void;
export {};
