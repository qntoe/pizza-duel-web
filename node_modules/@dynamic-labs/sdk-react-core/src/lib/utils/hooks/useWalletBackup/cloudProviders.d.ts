/// <reference types="react" />
import { WaasBackupOptionsEnum } from '@dynamic-labs/sdk-api-core';
import { CloudBackupProvider, CloudProviderConfig } from './types';
export type CloudProviderConfigWithIcon = CloudProviderConfig & {
    icon: JSX.Element;
};
export declare const CLOUD_PROVIDER_CONFIGS: Record<CloudBackupProvider, CloudProviderConfigWithIcon>;
export declare const getSupportedProviders: (backupOptions?: WaasBackupOptionsEnum[]) => CloudProviderConfigWithIcon[];
