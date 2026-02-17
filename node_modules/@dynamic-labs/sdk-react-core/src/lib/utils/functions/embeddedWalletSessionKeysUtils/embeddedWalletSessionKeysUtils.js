'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { p256Keygen, toEncodedFormat } from '../keyService/keyService.js';
import { StorageService } from '@dynamic-labs/utils';
import { SECURE_ENCLAVE_WALLET_SESSION_KEYS, SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS } from '../../constants/sessionStorage.js';

const generateSessionKey = () => __awaiter(void 0, void 0, void 0, function* () {
    const { private: privateKey, public: publicKey, privateJwk, } = yield p256Keygen();
    // convert to base64 and store the session keys in session storage
    return {
        privateKey,
        privateKeyJwk: privateJwk,
        publicKey,
        registered: false,
    };
});
// TODO - what is the reason that the session keys are not registered in the backend?
/**
 * Generates a new session key and saves it to session storage
 * It doesn't register the session key with the backend, it's only used to generate a new key
 * and save it to session storage.
 * @returns the new session key
 */
const generateAndSaveSessionKey = () => __awaiter(void 0, void 0, void 0, function* () {
    const newSessionKey = yield generateSessionKey();
    StorageService.setItem(SECURE_ENCLAVE_WALLET_SESSION_KEYS, toEncodedFormat(newSessionKey.publicKey, newSessionKey.privateKey, newSessionKey.privateKeyJwk, newSessionKey.registered), SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS);
    return newSessionKey;
});

export { generateAndSaveSessionKey, generateSessionKey };
