import { Dispatch, SetStateAction } from 'react';
export declare const useMfaModals: () => {
    /**
     * @deprecated use setShowTotpMfaManage instead
     */
    setShowMFAManage: Dispatch<SetStateAction<boolean>>;
    setShowMfaChooseType: Dispatch<SetStateAction<boolean>>;
    setShowMfaEnterBackupCodes: Dispatch<SetStateAction<boolean>>;
    setShowMfaQRCode: Dispatch<SetStateAction<boolean>>;
    setShowMfaViewBackupCodes: Dispatch<SetStateAction<boolean>>;
    setShowOTPVerification: Dispatch<SetStateAction<boolean>>;
    setShowTotpMfaManage: Dispatch<SetStateAction<boolean>>;
};
