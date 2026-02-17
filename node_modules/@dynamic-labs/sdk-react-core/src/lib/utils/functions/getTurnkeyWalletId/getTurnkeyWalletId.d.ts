import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
/**
 * returns the id of the turnkey wallet
 * if the wallet is a turnkey wallet, it returns the id of the wallet
 * if the wallet is a zerodev wallet, it returns corresponding turnkey wallet id
 */
export declare const getTurnkeyWalletId: (turnkeyWalletId: string, verifiedCredentials: JwtVerifiedCredential[]) => string;
