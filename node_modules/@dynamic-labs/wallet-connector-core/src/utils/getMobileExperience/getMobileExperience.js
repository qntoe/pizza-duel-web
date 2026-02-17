'use client'
import { findWalletBookWallet } from '@dynamic-labs/wallet-book';
import { logger } from '../logger.js';

/**
 * The mobileExperience prop can be:
 * - a string:
 *  in older versions of the SDK, this was the only way to set the mobile experience
 * - an object with the wallet key set:
 *  this is the way to set the mobile experience for a specific wallet
 * - an object with the default set:
 *  this was the way to set the default mobile experience for all wallets, unless a specific wallet key is set
 */
const getMobileExperienceFromProp = ({ mobileExperienceProp, walletKey, }) => {
    if (!mobileExperienceProp) {
        return undefined;
    }
    // if the legacy prop is set, use that
    if (typeof mobileExperienceProp === 'string') {
        return mobileExperienceProp;
    }
    // set the mobile experience for a specific wallet
    if (mobileExperienceProp[walletKey]) {
        return mobileExperienceProp[walletKey];
    }
    // set the default mobile experience for all wallets, unless a specific wallet key is set
    if (mobileExperienceProp.default) {
        return mobileExperienceProp.default;
    }
    return undefined;
};
/**
 * We first try to use the mobile experience from the context settings
 * If no set, we try to use the default set in wallet-book
 * If no set in wallet-book, we default to redirect for WC wallets and in-app-browser for other wallets
 */
const getMobileExperience = ({ mobileExperienceProp, walletBook, walletKey, walletConnector, }) => {
    logger.logVerboseTroubleshootingMessage('[getMobileExperience]', {
        mobileExperienceProp,
        walletKey,
    });
    const mobileExperienceFromProp = getMobileExperienceFromProp({
        mobileExperienceProp,
        walletKey,
    });
    // if the mobile experience is set in the props
    // use it unless it's redirect and redirect is not supported
    // usually only WC wallets or wallets that can be connected via popup support redirect
    const supportsRedirect = walletConnector.isWalletConnect ||
        walletConnector.canConnectViaCustodialService;
    if (mobileExperienceFromProp &&
        (supportsRedirect || mobileExperienceFromProp !== 'redirect')) {
        return mobileExperienceFromProp;
    }
    const walletBookRecord = findWalletBookWallet(walletBook, walletKey);
    logger.logVerboseTroubleshootingMessage('[getMobileExperience]', {
        isWalletConnect: walletConnector.isWalletConnect,
        walletBookRecord,
    });
    if (walletBookRecord === null || walletBookRecord === void 0 ? void 0 : walletBookRecord.mobileExperience) {
        return walletBookRecord.mobileExperience;
    }
    // a hack to only apply this experience on v4+ sdks, otherwise we would have it changed to redirect
    if (walletKey === 'metamask') {
        return 'redirect';
    }
    // default to redirect for WC wallets
    if (walletConnector.isWalletConnect) {
        return 'redirect';
    }
    return 'in-app-browser';
};

export { getMobileExperience };
