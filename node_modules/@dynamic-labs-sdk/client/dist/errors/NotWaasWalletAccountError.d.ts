import { BaseError } from './base';
type NotWaasWalletAccountErrorParams = {
    walletAddress: string;
};
export declare class NotWaasWalletAccountError extends BaseError {
    constructor({ walletAddress }: NotWaasWalletAccountErrorParams);
}
export {};
//# sourceMappingURL=NotWaasWalletAccountError.d.ts.map