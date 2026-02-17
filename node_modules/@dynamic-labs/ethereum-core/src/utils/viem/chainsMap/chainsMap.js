'use client'
import * as viemChains from 'viem/chains';

// eslint-disable-next-line import/no-namespace
const chainsMap = Object.values(viemChains).reduce((acc, chain) => {
    acc[chain.id] = chain;
    return acc;
}, {});

export { chainsMap };
