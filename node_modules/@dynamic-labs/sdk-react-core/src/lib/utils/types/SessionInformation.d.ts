export type SessionInformation = {
    blockNumber: bigint;
    sessionId: string;
    session: SessionConfig;
    timestamp: number;
    transactionHash: string;
    origin?: string;
};
export type SessionConfig = {
    signer: string;
    expiresAt: bigint;
    feeLimit: Limit;
    callPolicies: unknown[];
    transferPolicies: TransferPolicy[];
};
export type Limit = {
    limitType: LimitType;
    limit: bigint;
    period: bigint;
};
export declare enum LimitType {
    Unlimited = 0,
    Lifetime = 1,
    Allowance = 2
}
export type TransferPolicy = {
    target: string;
    maxValuePerUse: bigint;
    valueLimit: Limit;
};
