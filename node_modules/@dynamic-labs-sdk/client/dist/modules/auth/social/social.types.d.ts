import type { ProviderEnum } from '@dynamic-labs/sdk-api-core';
export type SocialProvider = `${Extract<ProviderEnum, ProviderEnum.Apple | ProviderEnum.Discord | ProviderEnum.Facebook | ProviderEnum.Github | ProviderEnum.Google | ProviderEnum.Kraken | ProviderEnum.Linkedin | ProviderEnum.Microsoft | ProviderEnum.Epicgames | ProviderEnum.Steam | ProviderEnum.Tiktok | ProviderEnum.Twitch | ProviderEnum.Twitter>}`;
export type SocialAccount = {
    accountId?: string;
    displayName?: string;
    emails: string[];
    photos: string[];
    provider: SocialProvider;
    username?: string;
    verifiedCredentialId: string;
};
//# sourceMappingURL=social.types.d.ts.map