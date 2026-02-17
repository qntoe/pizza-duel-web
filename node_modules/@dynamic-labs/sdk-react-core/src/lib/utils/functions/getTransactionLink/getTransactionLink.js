'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { findBlockExplorerPattern } from './blockExplorerPatterns.js';

const getTransactionLink = (_a) => __awaiter(void 0, [_a], void 0, function* ({ walletConnector, transactionHash, }) {
    try {
        if (!walletConnector) {
            return undefined;
        }
        const [blockExplorerUrl] = yield walletConnector.getBlockExplorerUrlsForCurrentNetwork();
        if (!blockExplorerUrl)
            return undefined;
        // Find the appropriate pattern for this block explorer
        const pattern = findBlockExplorerPattern(blockExplorerUrl);
        // Generate the transaction URL using the pattern
        return pattern.generateUrl(blockExplorerUrl, transactionHash);
    }
    catch (error) {
        return undefined;
    }
});

export { getTransactionLink };
