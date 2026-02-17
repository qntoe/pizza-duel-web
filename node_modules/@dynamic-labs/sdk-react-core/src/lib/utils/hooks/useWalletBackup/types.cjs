'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const CloudBackupProvider = {
    GoogleDrive: sdkApiCore.WaasBackupOptionsEnum.GoogleDrive,
    ICloud: sdkApiCore.WaasBackupOptionsEnum.ICloud,
};

exports.CloudBackupProvider = CloudBackupProvider;
