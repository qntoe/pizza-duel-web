'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SponsorSVMTransactionResponseFromJSON(json) {
    return SponsorSVMTransactionResponseFromJSONTyped(json);
}
function SponsorSVMTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transaction': !runtime.exists(json, 'transaction') ? undefined : json['transaction'],
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

exports.SponsorSVMTransactionResponseFromJSON = SponsorSVMTransactionResponseFromJSON;
exports.SponsorSVMTransactionResponseFromJSONTyped = SponsorSVMTransactionResponseFromJSONTyped;
exports.SponsorSVMTransactionResponseToJSON = SponsorSVMTransactionResponseToJSON;
