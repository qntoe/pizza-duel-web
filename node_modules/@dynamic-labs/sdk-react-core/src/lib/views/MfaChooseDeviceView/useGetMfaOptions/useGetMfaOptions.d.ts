/// <reference types="react" />
import { MFADeviceType } from '@dynamic-labs/sdk-api-core';
type MFAAuthType = MFADeviceType | 'backupCode';
export type MfaOption = {
    Icon?: React.ReactNode;
    descriptionKey: string;
    labelKey: string;
    type: MFAAuthType;
};
export declare const PASSKEY_OPTION: MfaOption;
export declare const TOTP_OPTION: MfaOption;
export declare const BACKUP_CODE_OPTION: MfaOption;
export declare const useGetMfaOptions: (isInitialSetup: boolean) => () => Promise<MfaOption[]>;
export {};
