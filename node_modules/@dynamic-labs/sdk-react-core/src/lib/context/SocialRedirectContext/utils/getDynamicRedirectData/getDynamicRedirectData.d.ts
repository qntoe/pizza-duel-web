export declare const getDynamicRedirectData: (redirectUrl: string | null, href: string) => {
    dynamicOauthCode: string;
    dynamicOauthState: string;
    dynamicOauthSsoProviderId: string | undefined;
} | null;
