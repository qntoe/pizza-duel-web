'use client'
import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { fetchProjectSettings } from '@dynamic-labs-sdk/client';

const useRefetchProjectSettings = () => useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
    const projectSettings = yield fetchProjectSettings();
    return projectSettings || undefined;
}), []);

export { useRefetchProjectSettings };
