'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const CLIENT_SESSION_KEYS = 'dynamic_client_session_keys';
const CLIENT_SESSION_KEYS_STORAGE_OPTIONS = {
    priority: ['secureStorage', 'localStorage'],
};
const SECURE_ENCLAVE_WALLET_SESSION_KEYS = 'dynamic_secure_enclave_session_keys';
const SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS = {
    priority: ['secureStorage', 'localStorage'],
};

exports.CLIENT_SESSION_KEYS = CLIENT_SESSION_KEYS;
exports.CLIENT_SESSION_KEYS_STORAGE_OPTIONS = CLIENT_SESSION_KEYS_STORAGE_OPTIONS;
exports.SECURE_ENCLAVE_WALLET_SESSION_KEYS = SECURE_ENCLAVE_WALLET_SESSION_KEYS;
exports.SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS = SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS;
