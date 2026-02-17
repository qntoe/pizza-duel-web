import { SuiWalletConnector } from '../../SuiWalletConnector';
import { SuiWalletConnectorProps } from '../../types';
export declare class Injected extends SuiWalletConnector {
    /**
     * Tracks whether the injected wallet is installed on the browser
     *
     * If the wallet is in wallet book but not found with getWallets().get(),
     * it's not installed on the browser.
     */
    private _isInstalledOnBrowser;
    constructor(name: string, isInstalledOnBrowser: boolean, props: SuiWalletConnectorProps);
    isInstalledOnBrowser(): boolean;
}
