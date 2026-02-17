import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { SessionKey } from '../../functions/embeddedWalletSessionKeysUtils';
export declare const useEmbeddedWalletSessionKeys: ({ environmentId, projectSettings, }: {
    environmentId: string;
    projectSettings?: ProjectSettings;
}) => {
    generateSessionKey: () => Promise<SessionKey>;
    getSessionPublicKey: () => string;
    getSignedSessionId: () => Promise<string>;
    registerEmbeddedWalletSessionKey: ({ ignoreRestore, walletId, }: {
        ignoreRestore?: boolean;
        walletId: string;
    }) => Promise<SessionKey | {
        expirationDate: Date;
        privateKey: string;
        publicKey: string;
    }>;
    removeSessionKey: () => void;
    shouldRegisterSessionKeysOnSignin: () => true;
};
