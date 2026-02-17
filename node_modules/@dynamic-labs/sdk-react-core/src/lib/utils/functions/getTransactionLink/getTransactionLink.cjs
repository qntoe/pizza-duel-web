'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var blockExplorerPatterns = require('./blockExplorerPatterns.cjs');

const getTransactionLink = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ walletConnector, transactionHash, }) {
    try {
        if (!walletConnector) {
            return undefined;
        }
        const [blockExplorerUrl] = yield walletConnector.getBlockExplorerUrlsForCurrentNetwork();
        if (!blockExplorerUrl)
            return undefined;
        // Find the appropriate pattern for this block explorer
        const pattern = blockExplorerPatterns.findBlockExplorerPattern(blockExplorerUrl);
        // Generate the transaction URL using the pattern
        return pattern.generateUrl(blockExplorerUrl, transactionHash);
    }
    catch (error) {
        return undefined;
    }
});

exports.getTransactionLink = getTransactionLink;
