'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
require('react');
var googleDrive = require('../../../shared/assets/google-drive.cjs');
var icloud = require('../../../shared/assets/icloud.cjs');
require('@dynamic-labs/iconic');
require('../../../context/ViewContext/ViewContext.cjs');
var types = require('./types.cjs');

const CLOUD_PROVIDER_CONFIGS = {
    [types.CloudBackupProvider.GoogleDrive]: {
        icon: jsxRuntime.jsx(googleDrive.ReactComponent, { className: 'waas-backup-view__provider-icon' }),
        id: types.CloudBackupProvider.GoogleDrive,
        name: 'Google Drive',
        oauthProvider: sdkApiCore.ProviderEnum.Google,
        requiresIframe: false,
        requiresOAuth: true,
    },
    [types.CloudBackupProvider.ICloud]: {
        icon: jsxRuntime.jsx(icloud.ReactComponent, { className: 'waas-backup-view__provider-icon' }),
        id: types.CloudBackupProvider.ICloud,
        name: 'iCloud',
        requiresIframe: true,
        requiresOAuth: false,
    },
};
// Maps WaasBackupOptionsEnum to CloudBackupProvider
const BACKUP_OPTION_TO_PROVIDER = {
    [sdkApiCore.WaasBackupOptionsEnum.GoogleDrive]: types.CloudBackupProvider.GoogleDrive,
    [sdkApiCore.WaasBackupOptionsEnum.ICloud]: types.CloudBackupProvider.ICloud,
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

exports.CLOUD_PROVIDER_CONFIGS = CLOUD_PROVIDER_CONFIGS;
exports.getSupportedProviders = getSupportedProviders;
