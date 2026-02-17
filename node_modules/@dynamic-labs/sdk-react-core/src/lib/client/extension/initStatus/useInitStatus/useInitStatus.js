'use client'
import { useClientState } from '../../hooks/useClientState/useClientState.js';

const useInitStatus = () => useClientState('initStatus');

export { useInitStatus };
