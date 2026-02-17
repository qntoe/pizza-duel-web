import { BaseError } from '../base';
export declare class APIError extends BaseError {
    status: number;
    constructor(message: string, code: string, status: number);
    static fromResponse(response: Response): Promise<APIError | null>;
}
//# sourceMappingURL=APIError.d.ts.map