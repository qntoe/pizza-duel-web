/// <reference types="react" />
import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
type Props = {
    isRecoveryFlow?: boolean;
    isExport?: boolean;
    walletCredential?: JwtVerifiedCredential;
};
export declare const NeedHelpSection: ({ isRecoveryFlow, isExport, walletCredential, }: Props) => JSX.Element | null;
export {};
