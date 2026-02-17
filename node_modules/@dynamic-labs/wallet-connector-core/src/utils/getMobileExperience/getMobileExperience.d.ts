import { MobileExperience } from '@dynamic-labs/types';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { WalletConnectorBase } from '../../WalletConnectorBase/WalletConnectorBase';
/**
 * We first try to use the mobile experience from the context settings
 * If no set, we try to use the default set in wallet-book
 * If no set in wallet-book, we default to redirect for WC wallets and in-app-browser for other wallets
 */
export declare const getMobileExperience: ({ mobileExperienceProp, walletBook, walletKey, walletConnector, }: {
    mobileExperienceProp?: MobileExperience;
    walletBook: WalletBookSchema;
    walletKey: string;
    walletConnector: WalletConnectorBase;
}) => MobileExperience;
