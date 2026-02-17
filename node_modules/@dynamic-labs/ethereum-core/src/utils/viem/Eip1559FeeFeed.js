'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { logger } from '../logger.js';

class Eip1559FeeFeed {
    constructor({ publicClient, initialGasLimit, initialMaxFeePerGas, }) {
        this.fee = {
            gas: BigInt(0),
        };
        this.publicClient = publicClient;
        this.initialGasLimit = initialGasLimit;
        this.initialMaxFeePerGas = initialMaxFeePerGas;
    }
    fetchFee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const l1Fee = yield this.estimateL1Fee();
                // Handle the case where max fee per gas is explicitly set to 0
                if (this.initialGasLimit && this.initialMaxFeePerGas === BigInt(0)) {
                    this.fee.gas = l1Fee;
                    this.maxPriorityFeePerGas = BigInt(0);
                    this.maxFeePerGas = BigInt(0);
                    return;
                }
                // Original transaction already defined the gas limit and max fee per gas
                if (this.initialGasLimit && this.initialMaxFeePerGas) {
                    this.fee.gas = this.initialGasLimit * this.initialMaxFeePerGas + l1Fee;
                    return;
                }
                // Estimate the gas limit
                const gasLimit = yield this.estimateGas();
                let overrideMaxFeePerGas = false;
                //Special case: if a developer sets the max fee per gas to 0, we need to override the max fee per gas to 0
                // So that it doesn't magically gets overriden later on.
                if (this.initialMaxFeePerGas === BigInt(0)) {
                    overrideMaxFeePerGas = true;
                }
                // Original transaction defined the max fee per gas
                if (this.initialMaxFeePerGas || overrideMaxFeePerGas) {
                    this.fee.gas = gasLimit * this.initialMaxFeePerGas + l1Fee;
                    if (overrideMaxFeePerGas) {
                        this.maxPriorityFeePerGas = BigInt(0);
                        this.maxFeePerGas = BigInt(0);
                    }
                    return;
                }
                // Estimate max fee per gas
                const estimatedFeesPerGas = yield this.publicClient.estimateFeesPerGas();
                if (!estimatedFeesPerGas || !estimatedFeesPerGas.maxFeePerGas) {
                    return;
                }
                this.fee.gas = gasLimit * estimatedFeesPerGas.maxFeePerGas + l1Fee;
                this.maxFeePerGas =
                    this.maxFeePerGas === BigInt(0)
                        ? this.maxFeePerGas
                        : estimatedFeesPerGas.maxFeePerGas;
                this.maxPriorityFeePerGas =
                    this.maxPriorityFeePerGas === BigInt(0)
                        ? this.maxPriorityFeePerGas
                        : estimatedFeesPerGas.maxPriorityFeePerGas;
            }
            catch (error) {
                logger.debug(error);
                return undefined;
            }
        });
    }
}

export { Eip1559FeeFeed };
