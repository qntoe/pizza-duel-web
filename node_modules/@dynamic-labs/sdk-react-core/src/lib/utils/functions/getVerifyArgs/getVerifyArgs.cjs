'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var logger = require('../../../shared/logger.cjs');
var index = require('../generateMessages/index.cjs');
var nonce = require('../../../store/state/nonce/nonce.cjs');

// TODO - This function is doing too much we should split it up.
const getVerifyArgs = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ walletConnector, walletProvider, environmentId, displaySiweStatement, skipEmptyAccountCheck, siweStatement, publicWalletAddress, signedMessageOverride, messageToSignOverride, }) {
    // WARNING - PLEASE READ!
    // DO NOT ADD ANY NEW ASYNC WORK WITH AWAIT!
    // Deep linking could break with too many blocking awaits
    // before the we call generateMessages.
    // This could manifest in users being directed to the app store
    // instead of the actual wallet app.
    const chain = walletConnector.connectedChain;
    logger.logger.logVerboseTroubleshootingMessage('[getVerifyArgs] called', {
        chain,
        displaySiweStatement,
        environmentId,
        hasMessageToSignOverride: Boolean(messageToSignOverride),
        hasSignedMessageOverride: Boolean(signedMessageOverride),
        publicWalletAddress,
        siweStatement,
        walletConnectorKey: walletConnector.key,
    });
    if (signedMessageOverride && messageToSignOverride) {
        logger.logger.logVerboseTroubleshootingMessage('[getVerifyArgs] using overrides', {
            messageToSignOverride,
            messageToSignOverrideLength: messageToSignOverride.length,
            signedMessageOverride,
            signedMessageOverrideLength: signedMessageOverride.length,
        });
        const [network, additionalWalletAddresses] = yield Promise.all([
            walletConnector.getNetwork(true),
            walletConnector.getAdditionalAddresses(publicWalletAddress),
        ]);
        const result = {
            additionalWalletAddresses,
            chain,
            messageToSign: messageToSignOverride,
            network: String(network),
            publicWalletAddress,
            signedMessage: signedMessageOverride,
            skipEmptyAccountCheck,
            walletName: walletConnector.key,
            walletProvider,
        };
        logger.logger.logVerboseTroubleshootingMessage('[getVerifyArgs] returning with overrides', {
            chain: result.chain,
            messageToSign: result.messageToSign,
            network: result.network,
            publicWalletAddress: result.publicWalletAddress,
            signedMessage: result.signedMessage,
            walletName: result.walletName,
        });
        return result;
    }
    const nonce$1 = nonce.consumeNonce();
    // generate message to sign and then initiate signing step to prove ownership
    const { messageToSign, signedMessage } = yield index.generateMessages(publicWalletAddress, walletConnector, nonce$1, environmentId, displaySiweStatement, siweStatement);
    const [network, additionalWalletAddresses] = yield Promise.all([
        walletConnector.getNetwork(true),
        walletConnector.getAdditionalAddresses(publicWalletAddress),
    ]);
    return {
        additionalWalletAddresses,
        chain,
        messageToSign,
        network: String(network),
        publicWalletAddress,
        signedMessage,
        skipEmptyAccountCheck,
        walletName: walletConnector.key,
        walletProvider,
    };
});

exports.getVerifyArgs = getVerifyArgs;
