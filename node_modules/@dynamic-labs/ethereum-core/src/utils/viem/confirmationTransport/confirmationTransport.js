'use client'
import { fromHex } from 'viem';
import { interceptTransport } from '../interceptTransport/interceptTransport.js';
import { ViemRpcUiTransaction } from '../ViemRpcUiTransaction/ViemRpcUiTransaction.js';

const confirmationTransport = ({ transport, walletUiUtils, getAccounts, onPersonalSign, onSendTransaction, onSignTransaction, onSignTypedData, walletConnector, provider, }) => interceptTransport({
    getAccounts,
    onPersonalSign: onPersonalSign
        ? (args) => walletUiUtils.signMessage({
            handler: () => onPersonalSign(args),
            message: fromHex(args.message, 'string'),
            walletConnector,
        })
        : undefined,
    onSendTransaction: onSendTransaction
        ? (args) => {
            const uiTransaction = new ViemRpcUiTransaction({
                onSubmit: (transaction) => onSendTransaction(Object.assign(Object.assign({}, args), { transaction })),
                publicClient: provider,
                transaction: args.transaction,
            });
            return walletUiUtils.sendTransaction(walletConnector, uiTransaction);
        }
        : undefined,
    onSignTransaction: onSignTransaction
        ? (args) => walletUiUtils.signMessage({
            handler: () => onSignTransaction(args),
            message: 'Sign Transaction',
            walletConnector,
        })
        : undefined,
    onSignTypedData: onSignTypedData
        ? (args) => walletUiUtils.signMessage({
            handler: () => onSignTypedData(args),
            message: args.message,
            walletConnector,
        })
        : undefined,
    transport,
});

export { confirmationTransport };
