'use client'
import { jsx } from 'react/jsx-runtime';
import { useInternalUserWallets } from '../../context/UserWalletsContext/UserWalletsContext.js';
import { UserWallet } from './UserWallet/UserWallet.js';

const UserWalletsList = ({ onSelectWallet, wallets: providedWallets, }) => {
    const { userWallets } = useInternalUserWallets();
    const wallets = providedWallets !== null && providedWallets !== void 0 ? providedWallets : userWallets;
    return (jsx("div", { className: 'user-wallets-list', children: wallets.map((wallet) => (jsx(UserWallet, { wallet: wallet, onSelect: () => onSelectWallet === null || onSelectWallet === void 0 ? void 0 : onSelectWallet(wallet) }, wallet.id))) }));
};

export { UserWalletsList };
