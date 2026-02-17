'use client'
/**
 * Checks if the Web Crypto API (crypto.subtle) is available in the current environment.
 *
 * The Web Crypto API is only available in secure contexts:
 * - HTTPS environments
 * - localhost (http://localhost or http://127.0.0.1)
 * - file:// protocol
 *
 * @returns {boolean} True if crypto.subtle is available, false otherwise
 */
const isCryptoSubtleAvailable = () => typeof crypto !== 'undefined' &&
    typeof crypto.subtle !== 'undefined' &&
    crypto.subtle !== null;
/**
 * Throws a descriptive error if crypto.subtle is not available.
 * Use this at the beginning of functions that require crypto.subtle.
 *
 * @throws {Error} If crypto.subtle is not available
 */
const assertCryptoSubtleAvailable = () => {
    if (!isCryptoSubtleAvailable()) {
        throw new Error('Web Crypto API (crypto.subtle) is not available. ' +
            'This functionality requires a secure context. ' +
            'Please ensure you are using HTTPS or localhost for development. ' +
            'For testing on external devices, consider using ngrok to create an HTTPS tunnel. ' +
            'See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API#secure_contexts');
    }
};
/**
 * Error class for crypto-related failures with better context
 */
class CryptoNotAvailableError extends Error {
    constructor(operation) {
        var _a, _b;
        super(`Cannot perform ${operation}: Web Crypto API (crypto.subtle) is not available. ` +
            'This functionality requires a secure context (HTTPS or localhost). ' +
            'Current protocol: ' +
            (typeof window !== 'undefined'
                ? (_b = (_a = window.location) === null || _a === void 0 ? void 0 : _a.protocol) !== null && _b !== void 0 ? _b : 'unknown'
                : 'unknown'));
        this.name = 'CryptoNotAvailableError';
    }
}

export { CryptoNotAvailableError, assertCryptoSubtleAvailable, isCryptoSubtleAvailable };
