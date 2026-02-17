'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('@dynamic-labs/utils');
require('../../utils/constants/colors.cjs');
require('../../utils/constants/values.cjs');
require('@dynamic-labs/sdk-api-core');
require('react');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('../../shared/consts/index.cjs');
var Icon = require('../Icon/Icon.cjs');

const ChainIcon = ({ chain, chainName }) => {
    const ChainIconComponent = getChainIcon.getChainIcon(chainName);
    return (jsxRuntime.jsx(Icon.Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsxRuntime.jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsxRuntime.jsx(ChainIconComponent, {})) }));
};

exports.ChainIcon = ChainIcon;
