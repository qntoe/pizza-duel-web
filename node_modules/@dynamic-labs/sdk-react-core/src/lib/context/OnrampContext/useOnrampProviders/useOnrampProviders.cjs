'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var usePromise = require('../../../utils/hooks/usePromise/usePromise.cjs');
var getOnrampProviders = require('../utils/getOnrampProviders.cjs');

const useOnrampProviders = ({ primaryWallet, network, environmentId, projectSettingsOnramps, target, includeDisabled, shouldFetch = false, }) => {
    const { data: allOnRamps = [] } = usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address))
            return [];
        return getOnrampProviders.getOnrampProviders({
            address: target.address,
            chainName: target.chainName,
            currency: target.currency,
            environmentId,
            includeDisabled: true,
            network: (_a = target.network) !== null && _a !== void 0 ? _a : network,
            primaryWallet: primaryWallet,
            token: target.token,
            tokenAmount: target.tokenAmount,
        });
    }), {
        deps: [
            environmentId,
            network,
            primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address,
            target.address,
            target.token,
            target.tokenAmount,
            target.chainName,
            target.network,
            target.currency,
        ],
        // only fetch when explicitly requested and onramps are configured
        enabled: shouldFetch &&
            (includeDisabled || Boolean(projectSettingsOnramps === null || projectSettingsOnramps === void 0 ? void 0 : projectSettingsOnramps.length)),
        initialData: [],
    });
    const enabledOnRamps = React.useMemo(() => allOnRamps.filter((p) => projectSettingsOnramps === null || projectSettingsOnramps === void 0 ? void 0 : projectSettingsOnramps.includes(p.provider)), [allOnRamps, projectSettingsOnramps]);
    return React.useMemo(() => ({ allOnRamps, enabledOnRamps }), [allOnRamps, enabledOnRamps]);
};

exports.useOnrampProviders = useOnrampProviders;
