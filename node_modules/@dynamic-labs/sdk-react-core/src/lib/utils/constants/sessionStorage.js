'use client'
const CLIENT_SESSION_KEYS = 'dynamic_client_session_keys';
const CLIENT_SESSION_KEYS_STORAGE_OPTIONS = {
    priority: ['secureStorage', 'localStorage'],
};
const SECURE_ENCLAVE_WALLET_SESSION_KEYS = 'dynamic_secure_enclave_session_keys';
const SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS = {
    priority: ['secureStorage', 'localStorage'],
};

export { CLIENT_SESSION_KEYS, CLIENT_SESSION_KEYS_STORAGE_OPTIONS, SECURE_ENCLAVE_WALLET_SESSION_KEYS, SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS };
