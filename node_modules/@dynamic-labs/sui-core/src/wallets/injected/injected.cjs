'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SuiWalletConnector = require('../../SuiWalletConnector.cjs');

class Injected extends SuiWalletConnector.SuiWalletConnector {
    constructor(name, isInstalledOnBrowser, props) {
        super(name, props);
        this._isInstalledOnBrowser = isInstalledOnBrowser;
        this.overrideKey = props.overrideKey;
    }
    isInstalledOnBrowser() {
        return this._isInstalledOnBrowser;
    }
}

exports.Injected = Injected;
