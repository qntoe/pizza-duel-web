import type { UserFields } from '@dynamic-labs/sdk-api-core';
import { BaseError } from './base';
type MissingUserVerificationErrorParams = {
    informationToVerify: Extract<keyof UserFields, 'email' | 'phoneNumber'>;
    message?: string;
};
export declare class MissingUserVerificationError extends BaseError {
    readonly informationToVerify: MissingUserVerificationErrorParams['informationToVerify'];
    constructor({ informationToVerify, message, }: MissingUserVerificationErrorParams);
}
export {};
//# sourceMappingURL=MissingUserVerificationError.d.ts.map