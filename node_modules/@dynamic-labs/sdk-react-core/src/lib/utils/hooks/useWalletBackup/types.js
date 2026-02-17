'use client'
import { WaasBackupOptionsEnum } from '@dynamic-labs/sdk-api-core';

const CloudBackupProvider = {
    GoogleDrive: WaasBackupOptionsEnum.GoogleDrive,
    ICloud: WaasBackupOptionsEnum.ICloud,
};

export { CloudBackupProvider };
