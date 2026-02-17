'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { Transaction } from '@mysten/sui/transactions';
import { isValidSuiAddress } from '@mysten/sui/utils';
import { formatNumberText } from '@dynamic-labs/utils';
import { MIST_PER_SUI } from '../constants/constants.js';

class SuiUiTransaction {
    constructor({ onSubmit, from, client }) {
        this.chain = 'SUI';
        this.data = undefined;
        this.fee = { gas: undefined };
        this.formatNonNativeToken = (value, decimals) => (Number(value) / Number(Math.pow(10, decimals))).toString();
        this.from = from;
        this.onSubmit = onSubmit;
        this.client = client;
    }
    /**
     * Fetches the gas fee for the transaction by executing a dry run of the
     * transaction and calculating the gas used.
     *
     * @returns The gas fee for the transaction
     */
    fetchFee() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.fee.gas)
                return;
            const transaction = yield this.createTransactionSafe();
            if (!transaction) {
                throw new Error('Could not create a valid SUI transaction, check your address and value');
            }
            const transactionBlock = yield transaction.build({ client: this.client });
            const dryRunResult = yield this.client.dryRunTransactionBlock({
                transactionBlock,
            });
            if (!dryRunResult) {
                this.fee.gas = undefined;
                throw new Error('Error accessing SUI network to calculate gas, please try again later');
            }
            const gasObject = dryRunResult.effects.gasUsed;
            // net_gas_fees = computation_gas_fee + storage_gas_fee - storage_rebate
            // https://docs.sui.io/concepts/tokenomics/gas-in-sui
            const calculatedGas = BigInt(gasObject.computationCost) +
                BigInt(gasObject.storageCost) -
                BigInt(gasObject.storageRebate);
            this.fee.gas = calculatedGas;
            if (this.fee.gas <= BigInt(0)) {
                this.fee.gas = undefined;
            }
        });
    }
    isGasSponsored() {
        return false;
    }
    parse(input) {
        const floatValue = parseFloat(input);
        const mist = Math.round(floatValue * MIST_PER_SUI);
        return BigInt(mist);
    }
    parseNonNativeToken(input, decimals) {
        return BigInt(Math.floor(Number(input) * Math.pow(10, decimals)));
    }
    format(value, { precision } = {}) {
        const suiValue = Number(value) / MIST_PER_SUI;
        const decimalString = suiValue.toLocaleString('fullwide', {
            maximumFractionDigits: 20,
            minimumFractionDigits: 0,
            useGrouping: false,
        });
        return formatNumberText(decimalString, { precision });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const sendTransaction = (yield this.createTransaction());
            return this.onSubmit(sendTransaction);
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.client.getBalance({
                coinType: '0x2::sui::SUI',
                owner: this.from,
            });
            return BigInt(balance.totalBalance);
        });
    }
    validateAddressFormat(address) {
        if (address === 'dyn_send_transaction.multiple_recipients') {
            return true;
        }
        return isValidSuiAddress(address);
    }
    createTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            const { value, to, nonNativeAddress, nonNativeValue } = this;
            if (!to) {
                throw new Error('Destination is required');
            }
            if (!value && !nonNativeValue) {
                return undefined;
            }
            const sendTransaction = new Transaction();
            sendTransaction.setSender(this.from);
            let coin = undefined;
            if (nonNativeAddress && nonNativeValue) {
                const { data: coins } = yield this.client.getCoins({
                    coinType: nonNativeAddress,
                    owner: this.from,
                });
                if (coins.length === 0) {
                    throw new Error('Token not found');
                }
                [coin] = sendTransaction.splitCoins(coins[0].coinObjectId, [
                    nonNativeValue,
                ]);
                sendTransaction.transferObjects([coin], to);
            }
            if (value) {
                [coin] = sendTransaction.splitCoins(sendTransaction.gas, [value]);
                sendTransaction.transferObjects([coin], to);
            }
            return sendTransaction;
        });
    }
    createTransactionSafe() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.createTransaction();
            }
            catch (error) {
                return undefined;
            }
        });
    }
}

export { SuiUiTransaction };
