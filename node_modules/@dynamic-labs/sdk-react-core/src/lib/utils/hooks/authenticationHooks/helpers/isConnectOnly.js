'use client'
import { getAuthMode } from '../../../../store/state/authMode/authMode.js';

const isConnectOnly = () => {
    const authMode = getAuthMode();
    return authMode === 'connect-only';
};

export { isConnectOnly };
