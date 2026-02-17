import { FC } from 'react';
import { CloudBackupProvider } from '../../../../utils/hooks/useWalletBackup/types';
export type WaasBackupProgressViewProps = {
    provider?: CloudBackupProvider;
};
export declare const WaasBackupProgressView: FC<WaasBackupProgressViewProps>;
