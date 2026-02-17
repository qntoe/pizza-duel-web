'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var FarcasterConnectView = require('../FarcasterConnectView/FarcasterConnectView.cjs');
var useSocialAuth = require('../../utils/hooks/useSocialAuth/useSocialAuth.cjs');
var nonce = require('../../store/state/nonce/nonce.cjs');

/**
 * This view is used to display the QR code for the farcaster connection.
 * It is only used in the login view when Farcaster is the only available login method.
 */
const FarcasterQrCodeView = () => {
    const { setError } = ErrorContext.useErrorContext();
    const [url, setUrl] = React.useState(undefined);
    // this is used to prevent the connectSocialAccount from being more than once
    const triggeredConnect = React.useRef(false);
    const nonce$1 = nonce.useNonce();
    const onError = React.useCallback(() => {
        setError('Something went wrong');
    }, [setError]);
    const onFarcasterUrl = React.useCallback((url) => {
        setUrl(url);
    }, [setUrl]);
    const { connectSocialAccount } = useSocialAuth.useSocialAuth({
        onError,
        onFarcasterUrl,
    });
    React.useEffect(() => {
        // wait until the nonce is fetched
        if (triggeredConnect.current || !nonce$1)
            return;
        triggeredConnect.current = true;
        connectSocialAccount({
            authMode: 'signin',
            provider: sdkApiCore.ProviderEnum.Farcaster,
        });
    }, [connectSocialAccount, nonce$1]);
    return jsxRuntime.jsx(FarcasterConnectView.FarcasterConnectView, { url: url !== null && url !== void 0 ? url : '' });
};

exports.FarcasterQrCodeView = FarcasterQrCodeView;
