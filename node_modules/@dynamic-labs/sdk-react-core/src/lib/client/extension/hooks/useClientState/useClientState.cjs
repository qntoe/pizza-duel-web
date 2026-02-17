'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var client$1 = require('@dynamic-labs-sdk/client');
var client = require('../../../client.cjs');

const useClientState = (variable) => {
    const client$2 = client.useDynamicClient();
    const [current, setCurrent] = React.useState(client$2[variable]);
    React.useEffect(() => {
        setCurrent(client$2[variable]);
        client$1.onEvent({
            event: `${variable}Changed`,
            listener: () => setCurrent(client$2[variable]),
        }, client$2);
    }, [client$2, variable]);
    return current !== null && current !== void 0 ? current : undefined;
};

exports.useClientState = useClientState;
