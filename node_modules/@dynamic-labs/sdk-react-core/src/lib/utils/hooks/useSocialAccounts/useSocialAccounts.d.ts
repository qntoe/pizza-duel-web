import { ExchangeKeyEnum, ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { SocialAccountInformation } from '@dynamic-labs/types';
import { PayWithDynamicProps } from '../usePayWithDynamic/usePayWithDynamic';
type ConnectSocialProps = {
    /**
     * Overrides the redirectUrl provided by DynamicContextProvider
     */
    redirectUrl?: string;
    /**
     * Whether to show the widget after a connection is made
     */
    showWidgetAfterConnection?: boolean;
    /**
     * Forces popup strategy instead of redirect
     */
    forcePopup?: boolean;
    /** Exchange to be funded */
    triggerFundFromExchangeOnSuccess?: ExchangeKeyEnum;
    /**
     * If this is true, then we will pass in additional props and hide back button
     */
    payingWithDynamic?: PayWithDynamicProps;
};
type UseSocialAccountsProps = {
    onError?: (error: unknown) => void;
};
export declare const useSocialAccounts: ({ onError }?: UseSocialAccountsProps) => {
    readonly error: import("@dynamic-labs/types").SocialOAuthError | undefined;
    readonly getAllLinkedAccounts: () => SocialAccountInformation[];
    readonly getLinkedAccountInformation: (provider: ProviderEnum, verifiedCredentialId?: string) => SocialAccountInformation | undefined;
    readonly getLinkedAccounts: (provider: ProviderEnum) => SocialAccountInformation[];
    readonly isLinked: (provider: ProviderEnum) => boolean;
    readonly isProcessing: boolean;
    readonly isProcessingForProvider: (provider: ProviderEnum) => boolean;
    readonly linkSocialAccount: (provider: ProviderEnum, { forcePopup, redirectUrl, showWidgetAfterConnection, triggerFundFromExchangeOnSuccess, payingWithDynamic, }?: ConnectSocialProps) => Promise<void>;
    readonly signInWithSocialAccount: (provider: ProviderEnum, { redirectUrl, payingWithDynamic, showWidgetAfterConnection, triggerFundFromExchangeOnSuccess, }?: ConnectSocialProps) => Promise<void>;
    readonly unlinkSocialAccount: (provider: ProviderEnum, verifiedCredentialId?: string) => Promise<void>;
};
export {};
