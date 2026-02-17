'use client'
import { jsx } from 'react/jsx-runtime';
import { ProviderEnum, WaasBackupOptionsEnum } from '@dynamic-labs/sdk-api-core';
import 'react';
import { ReactComponent as SvgGoogleDrive } from '../../../shared/assets/google-drive.js';
import { ReactComponent as SvgIcloud } from '../../../shared/assets/icloud.js';
import '@dynamic-labs/iconic';
import '../../../context/ViewContext/ViewContext.js';
import { CloudBackupProvider } from './types.js';

const CLOUD_PROVIDER_CONFIGS = {
    [CloudBackupProvider.GoogleDrive]: {
        icon: jsx(SvgGoogleDrive, { className: 'waas-backup-view__provider-icon' }),
        id: CloudBackupProvider.GoogleDrive,
        name: 'Google Drive',
        oauthProvider: ProviderEnum.Google,
        requiresIframe: false,
        requiresOAuth: true,
    },
    [CloudBackupProvider.ICloud]: {
        icon: jsx(SvgIcloud, { className: 'waas-backup-view__provider-icon' }),
        id: CloudBackupProvider.ICloud,
        name: 'iCloud',
        requiresIframe: true,
        requiresOAuth: false,
    },
};
// Maps WaasBackupOptionsEnum to CloudBackupProvider
const BACKUP_OPTION_TO_PROVIDER = {
    [WaasBackupOptionsEnum.GoogleDrive]: CloudBackupProvider.GoogleDrive,
    [WaasBackupOptionsEnum.ICloud]: CloudBackupProvider.ICloud,
};
const getSupportedProviders = (backupOptions) => {
    const allProviders = Object.values(CLOUD_PROVIDER_CONFIGS);
    if (!backupOptions || backupOptions.length === 0) {
        return allProviders;
    }
    const enabledProviderIds = new Set(backupOptions
        .map((option) => BACKUP_OPTION_TO_PROVIDER[option])
        .filter((id) => id !== undefined));
    return allProviders.filter((provider) => enabledProviderIds.has(provider.id));
};

export { CLOUD_PROVIDER_CONFIGS, getSupportedProviders };
