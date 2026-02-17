import { WalletOption } from '../../../../shared';
import { SetSelectedWalletConnectorKey } from './SetSelectedWalletConnectorKey.type';
type useSelectedWalletConnectorProps = {
    walletConnectorOptions: WalletOption[];
};
export declare const useSelectedWalletConnector: ({ walletConnectorOptions, }: useSelectedWalletConnectorProps) => {
    selectedWalletConnector: import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector | null;
    setSelectedWalletConnectorKey: SetSelectedWalletConnectorKey;
};
export {};
