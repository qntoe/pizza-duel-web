'use client'
import { SuiWalletConnector } from '../../SuiWalletConnector.js';

class Injected extends SuiWalletConnector {
    constructor(name, isInstalledOnBrowser, props) {
        super(name, props);
        this._isInstalledOnBrowser = isInstalledOnBrowser;
        this.overrideKey = props.overrideKey;
    }
    isInstalledOnBrowser() {
        return this._isInstalledOnBrowser;
    }
}

export { Injected };
