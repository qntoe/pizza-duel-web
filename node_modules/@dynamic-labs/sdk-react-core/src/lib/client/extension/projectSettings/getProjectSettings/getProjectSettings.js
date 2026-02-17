'use client'
import { getDynamicClient } from '../../../client.js';

const getProjectSettings = () => { var _a; return (_a = getDynamicClient().projectSettings) !== null && _a !== void 0 ? _a : undefined; };

export { getProjectSettings };
