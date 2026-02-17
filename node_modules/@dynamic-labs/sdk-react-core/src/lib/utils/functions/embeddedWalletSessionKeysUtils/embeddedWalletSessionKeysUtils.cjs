'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var keyService = require('../keyService/keyService.cjs');
var utils = require('@dynamic-labs/utils');
var sessionStorage = require('../../constants/sessionStorage.cjs');

const generateSessionKey = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const { private: privateKey, public: publicKey, privateJwk, } = yield keyService.p256Keygen();
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
const generateAndSaveSessionKey = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const newSessionKey = yield generateSessionKey();
    utils.StorageService.setItem(sessionStorage.SECURE_ENCLAVE_WALLET_SESSION_KEYS, keyService.toEncodedFormat(newSessionKey.publicKey, newSessionKey.privateKey, newSessionKey.privateKeyJwk, newSessionKey.registered), sessionStorage.SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS);
    return newSessionKey;
});

exports.generateAndSaveSessionKey = generateAndSaveSessionKey;
exports.generateSessionKey = generateSessionKey;
