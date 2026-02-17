import { StorageOptions } from '@dynamic-labs/utils';
export declare const DEVICE_FINGERPRINT = "dynamic_device_fingerprint";
export declare const LAST_USED_WALLET = "dynamic_last_used_wallet";
export declare const NETWORKS_STORAGE_KEY = "dynamic_networks";
export declare const THEME = "dynamic_theme";
export declare const WALLET_PICKER_SEARCH_KEY = "dynamic_wallet_picker_search";
export declare const EXCHANGE_PICKER_SEARCH_KEY = "dynamic_exchange_picker_search";
export declare const NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY = "dynamic_newtoweb3_wallet_extension_installed";
export declare const CONNECTED_WALLET_NAME_SERVICE = "dynamic_connected_wallet_ns";
export declare const BRIDGE_ONBOARDING_COMPLETED = "dynamic_bridge_onboarding_completed";
export declare const DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS = "dynamic_context_session_settings";
export declare const WAGMI_LAST_SESSION_SETTINGS = "dynamic_wagmi_session_settings";
export declare const EMBEDDED_WALLET_SESSION_SETTINGS = "dynamic_embedded_wallet_session_settings";
export declare const EMBEDDED_WALLET_SECURE_BANNER = "dynamic_embedded_secure_banner";
export declare const PHONE_INPUT_DEFAULT_COUNTRY = "dynamic_phone_input_default_country";
export declare const CAPTCHA_TOKEN = "dynamic_captcha_token";
export type PhantomSignatureState = {
    /**
     * Whether the user has agreed to transfer a wallet even if that means
     * they lose access to the original wallet's account.
     */
    loseOriginalAccountOnTransfer: boolean;
    verificationType: 'awaiting_verification' | 'awaiting_transfer' | undefined;
    submittedAtTimestamp: string;
};
/**
 * Used to identify the purpose of a signature after phantom redirects back to the app in mobile
 */
export declare const PHANTOM_SIGNATURE_STATE = "phantom_verification_type";
export declare const DELEGATION_DENIED_WALLET_IDS = "dynamic_delegation_denied_wallet_ids";
export declare const DELEGATION_PROMPT_DISMISSED = "dynamic_delegation_prompt_dismissed";
export declare const DELEGATION_COMPLETED_WALLET_IDS = "dynamic_delegation_completed_wallet_ids";
export declare const DELEGATION_STATE = "dynamic_delegation_state";
export declare const STORE_STORAGE_KEY = "dynamic_store";
export declare const IP_LOOKUP_STORAGE_KEY = "dynamic_ip_lookup";
export declare const SECURE_ENCLAVE_WALLET_SESSION_KEYS = "dynamic_secure_enclave_session_keys";
export declare const SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS: StorageOptions;
