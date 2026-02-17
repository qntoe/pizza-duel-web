import { FC } from 'react';
export interface Currency {
    code: string;
    name: string;
    symbol: string;
}
type CurrencySelectScreenProps = {
    onClose: () => void;
    onSelectCurrency: (currencyCode: string) => void;
    currencies: Currency[];
    currentCurrency: string;
};
export declare const CurrencySelectScreen: FC<CurrencySelectScreenProps>;
export {};
