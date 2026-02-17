'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var cryptoAvailability = require('../cryptoAvailability/cryptoAvailability.cjs');

/**
 * Generates an ECDH key pair for cryptographic operations.
 * Uses the P-256 curve for key generation, which provides 128-bit security level.
 *
 * @returns {Promise<{publicKey: CryptoKey, privateKey: CryptoKey}>} A promise that resolves to an object containing:
 *   - publicKey: The generated public key
 *   - privateKey: The generated private key
 * @throws CryptoNotAvailableError if crypto.subtle is not available (requires secure context)
 */
const createKeyPair = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    cryptoAvailability.assertCryptoSubtleAvailable();
    const keyPair = yield crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, ['deriveKey', 'deriveBits']);
    return {
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
    };
});

exports.createKeyPair = createKeyPair;
