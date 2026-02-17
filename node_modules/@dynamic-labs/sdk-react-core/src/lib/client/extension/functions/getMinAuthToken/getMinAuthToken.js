'use client'
import { getDefaultClient } from '@dynamic-labs-sdk/client';

const getMinAuthToken = () => { var _a; return (_a = getDefaultClient().token) !== null && _a !== void 0 ? _a : undefined; };

export { getMinAuthToken };
