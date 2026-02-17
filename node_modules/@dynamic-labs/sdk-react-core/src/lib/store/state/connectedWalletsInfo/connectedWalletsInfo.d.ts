import { ConnectedWalletConnectorType } from '../../../utils/hooks/useConnectWallet/useConnectWallet';
declare const getConnectedWalletsInfo: () => ConnectedWalletConnectorType[], useConnectedWalletsInfo: () => ConnectedWalletConnectorType[];
declare const resetConnectedWalletsInfo: () => void;
declare const setConnectedWalletsInfo: (value: ConnectedWalletConnectorType[]) => void;
export { getConnectedWalletsInfo, resetConnectedWalletsInfo, setConnectedWalletsInfo, useConnectedWalletsInfo, };
