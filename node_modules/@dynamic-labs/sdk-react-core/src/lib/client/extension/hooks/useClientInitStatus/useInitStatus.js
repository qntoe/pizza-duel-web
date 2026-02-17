'use client'
import { useClientState } from '../useClientState/useClientState.js';

const useClientInitStatus = () => { var _a; return (_a = useClientState('initStatus')) !== null && _a !== void 0 ? _a : 'uninitialized'; };

export { useClientInitStatus };
