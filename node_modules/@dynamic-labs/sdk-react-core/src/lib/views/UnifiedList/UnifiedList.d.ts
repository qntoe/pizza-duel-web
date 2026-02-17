import React from 'react';
import { ExchangeKeyEnum } from '@dynamic-labs/sdk-api-core';
import { WalletOption } from '../../shared/types';
import { OnrampOption } from '../../context/DynamicContext';
export type UnifiedListProps = {
    onSelectWallet: (wallet: WalletOption) => void;
    onSelectExchange: (exchange: ExchangeKeyEnum) => void;
    onSelectOnRamp: (onramp: OnrampOption) => void;
    showDefaultFooter?: boolean;
    scrollContainerClassName?: string;
};
export declare const UnifiedList: React.FC<UnifiedListProps>;
