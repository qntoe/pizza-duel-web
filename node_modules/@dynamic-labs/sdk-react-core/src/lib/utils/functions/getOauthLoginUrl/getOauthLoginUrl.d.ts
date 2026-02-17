import { Provider, ProviderEnum } from '@dynamic-labs/sdk-api-core';
type GetOauthLoginUrlOptions = {
    isGoogleDriveBackupEnabled?: boolean;
};
export declare const getOauthLoginUrl: (providers: Provider[], providerType: ProviderEnum, options?: GetOauthLoginUrlOptions) => string;
export {};
