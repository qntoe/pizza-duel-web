'use client'
import { useState, useEffect } from 'react';
import { onEvent } from '@dynamic-labs-sdk/client';
import { useDynamicClient } from '../../../client.js';

const useClientState = (variable) => {
    const client = useDynamicClient();
    const [current, setCurrent] = useState(client[variable]);
    useEffect(() => {
        setCurrent(client[variable]);
        onEvent({
            event: `${variable}Changed`,
            listener: () => setCurrent(client[variable]),
        }, client);
    }, [client, variable]);
    return current !== null && current !== void 0 ? current : undefined;
};

export { useClientState };
