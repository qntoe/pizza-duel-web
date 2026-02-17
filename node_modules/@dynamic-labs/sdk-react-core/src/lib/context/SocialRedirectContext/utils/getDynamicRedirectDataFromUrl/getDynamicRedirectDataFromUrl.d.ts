/**
 * Extracts the dynamicOauthCode and dynamicOauthState from the URL
 * if the URL is not a valid URL, returns null
 */
export declare const getDynamicRedirectDataFromUrl: (url: string) => {
    dynamicOauthCode: string;
    dynamicOauthSsoProviderId: string | undefined;
    dynamicOauthState: string;
} | null;
