import { BaseError } from './base';
type UserRejectedErrorParams = {
    action: string;
};
export declare class UserRejectedError extends BaseError {
    constructor({ action }: UserRejectedErrorParams);
}
export {};
//# sourceMappingURL=UserRejectedError.d.ts.map