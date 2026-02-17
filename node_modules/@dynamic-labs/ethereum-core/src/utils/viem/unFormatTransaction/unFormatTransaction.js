'use client'
import { hexToBigInt, hexToNumber } from 'viem';

/* eslint-disable max-len */
/**
 * Unformat a transaction request
 * This is used to convert the transaction the RPC transporter receives from
 * an eth_sendTransaction call to a format that viem account accepts.
 * This reverts what viem is doing internally with the format function.
 * https://github.com/wagmi-dev/viem/blob/0977829160effbe7dac5a69f43d263605544fa19/src/actions/wallet/sendTransaction.ts#L206
 */
const unFormatTransaction = (transactionRequest) => (Object.assign(Object.assign({}, transactionRequest), { authorizationList: typeof transactionRequest.authorizationList !== 'undefined'
        ? transactionRequest.authorizationList.map((authorization) => (Object.assign(Object.assign({}, authorization), { chainId: hexToBigInt(authorization.chainId), nonce: hexToBigInt(authorization.nonce), yParity: hexToNumber(authorization.yParity, { size: 1 }) })))
        : undefined, chainId: typeof transactionRequest.chainId === 'string'
        ? hexToNumber(transactionRequest.chainId)
        : transactionRequest.chainId, gas: typeof transactionRequest.gas !== 'undefined'
        ? hexToBigInt(transactionRequest.gas)
        : undefined, gasPrice: typeof transactionRequest.gasPrice !== 'undefined'
        ? hexToBigInt(transactionRequest.gasPrice)
        : undefined, maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined'
        ? hexToBigInt(transactionRequest.maxFeePerGas)
        : undefined, maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined'
        ? hexToBigInt(transactionRequest.maxPriorityFeePerGas)
        : undefined, nonce: typeof transactionRequest.nonce !== 'undefined'
        ? hexToBigInt(transactionRequest.nonce)
        : undefined, value: typeof transactionRequest.value !== 'undefined'
        ? hexToBigInt(transactionRequest.value)
        : undefined }));

export { unFormatTransaction };
