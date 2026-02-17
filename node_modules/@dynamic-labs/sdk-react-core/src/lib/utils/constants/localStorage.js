'use client'
const DEVICE_FINGERPRINT = 'dynamic_device_fingerprint';
const LAST_USED_WALLET = 'dynamic_last_used_wallet';
const WALLET_PICKER_SEARCH_KEY = 'dynamic_wallet_picker_search';
const EXCHANGE_PICKER_SEARCH_KEY = 'dynamic_exchange_picker_search';
const NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY = 'dynamic_newtoweb3_wallet_extension_installed';
const CONNECTED_WALLET_NAME_SERVICE = 'dynamic_connected_wallet_ns';
const BRIDGE_ONBOARDING_COMPLETED = 'dynamic_bridge_onboarding_completed';
const DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS = 'dynamic_context_session_settings';
const WAGMI_LAST_SESSION_SETTINGS = 'dynamic_wagmi_session_settings';
const EMBEDDED_WALLET_SESSION_SETTINGS = 'dynamic_embedded_wallet_session_settings';
const EMBEDDED_WALLET_SECURE_BANNER = 'dynamic_embedded_secure_banner';
const PHONE_INPUT_DEFAULT_COUNTRY = 'dynamic_phone_input_default_country';
const CAPTCHA_TOKEN = 'dynamic_captcha_token';
/**
 * Used to identify the purpose of a signature after phantom redirects back to the app in mobile
 */
const PHANTOM_SIGNATURE_STATE = 'phantom_verification_type';
// Wallet Delegation: unified state container for delegation flow
const DELEGATION_STATE = 'dynamic_delegation_state';
const STORE_STORAGE_KEY = 'dynamic_store';
const SECURE_ENCLAVE_WALLET_SESSION_KEYS = 'dynamic_secure_enclave_session_keys';
const SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS = {
    priority: ['secureStorage', 'localStorage'],
};

export { BRIDGE_ONBOARDING_COMPLETED, CAPTCHA_TOKEN, CONNECTED_WALLET_NAME_SERVICE, DELEGATION_STATE, DEVICE_FINGERPRINT, DYNAMIC_CONTEXT_LAST_SESSION_SETTINGS, EMBEDDED_WALLET_SECURE_BANNER, EMBEDDED_WALLET_SESSION_SETTINGS, EXCHANGE_PICKER_SEARCH_KEY, LAST_USED_WALLET, NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY, PHANTOM_SIGNATURE_STATE, PHONE_INPUT_DEFAULT_COUNTRY, SECURE_ENCLAVE_WALLET_SESSION_KEYS, SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS, STORE_STORAGE_KEY, WAGMI_LAST_SESSION_SETTINGS, WALLET_PICKER_SEARCH_KEY };
