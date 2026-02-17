'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useClientState = require('../../hooks/useClientState/useClientState.cjs');

const useProjectSettings = () => useClientState.useClientState('projectSettings');

exports.useProjectSettings = useProjectSettings;
