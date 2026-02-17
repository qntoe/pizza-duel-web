import { FC } from 'react';
export interface CryptoComOnrampProps {
    onBack?: () => void;
    hideBackButton?: boolean;
    onPaymentCreated?: (paymentUrl: string) => void;
    quickSuggestions?: number[];
    currency?: string;
    merchantName?: string;
}
export declare const CryptoComOnramp: FC<CryptoComOnrampProps>;
