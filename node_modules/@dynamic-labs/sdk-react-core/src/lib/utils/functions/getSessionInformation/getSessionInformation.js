'use client'
import { shortenWalletAddress } from '../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import { getTimeSince } from '../getTimeSince/getTimeSince.js';

/** Returns the name of the session or the shortened wallet address if no name is available */
const getSessionInformationName = (session) => { var _a; return (_a = session.origin) !== null && _a !== void 0 ? _a : shortenWalletAddress(session.sessionId); };
/** Returns the time since the session was created in a human readable format */
const getSessionInformationTimeSinceCreation = (session) => {
    const { value, unit } = getTimeSince(new Date(session.timestamp));
    return `${value} ${unit}`;
};
/** Returns the expiration of the session in a human readable format */
const getSessionInformationExpiration = (session) => {
    const { value, unit } = getTimeSince(new Date(), new Date(Number(session.session.expiresAt) * 1000));
    return `${value} ${unit}`;
};
/** Returns the spending limit of the session in ETH */
const getSessionInformationSpendingLimit = (session) => {
    var _a, _b;
    const policies = session.session.transferPolicies;
    if (!policies) {
        return '0 ETH';
    }
    let limit = BigInt(0);
    for (const policy of policies) {
        limit += (_b = (_a = policy.valueLimit) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : BigInt(0);
    }
    const formatter = new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 6,
    });
    const ethString = formatter.format(Number(limit) / Math.pow(10, 18));
    return `~${ethString} ETH`;
};
/** Exports the session information as a JSON string with a helper to process bigints */
const getSessionInformationJson = (session) => JSON.stringify(session, (_, val) => (typeof val === 'bigint' ? val.toString() : val), 2);

export { getSessionInformationExpiration, getSessionInformationJson, getSessionInformationName, getSessionInformationSpendingLimit, getSessionInformationTimeSinceCreation };
