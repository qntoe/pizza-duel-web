import { exists } from '../runtime.js';

/* tslint:disable */
function SponsorSVMTransactionResponseFromJSON(json) {
    return SponsorSVMTransactionResponseFromJSONTyped(json);
}
function SponsorSVMTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transaction': !exists(json, 'transaction') ? undefined : json['transaction'],
    };
}
function SponsorSVMTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transaction': value.transaction,
    };
}

export { SponsorSVMTransactionResponseFromJSON, SponsorSVMTransactionResponseFromJSONTyped, SponsorSVMTransactionResponseToJSON };
