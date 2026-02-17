'use client'
import { useClientState } from '../../hooks/useClientState/useClientState.js';

const useProjectSettings = () => useClientState('projectSettings');

export { useProjectSettings };
