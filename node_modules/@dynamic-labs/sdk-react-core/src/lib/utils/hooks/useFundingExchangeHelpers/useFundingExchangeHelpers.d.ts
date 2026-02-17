/// <reference types="react" />
import { DeferredPromise } from '@dynamic-labs/utils';
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
export declare const useFundingExchangeHelpers: () => {
    initiatedByWidgetRef: import("react").MutableRefObject<boolean>;
    selectExchangeConfig: <T>({ promiseRef, initiatedByWidget, resultBuilder, }: {
        promiseRef: React.MutableRefObject<DeferredPromise<T> | null>;
        initiatedByWidget: boolean;
        resultBuilder: (value: ExchangeKeyEnum) => T;
    }) => {
        onSelectExchange: (value: ExchangeKeyEnum) => void;
        showDefaultFooter: boolean;
    };
};
