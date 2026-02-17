'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
/**
* @export
* @enum {string}
*/
exports.DelegatedShareDeliveryResponseStatusEnum = void 0;
(function (DelegatedShareDeliveryResponseStatusEnum) {
    DelegatedShareDeliveryResponseStatusEnum["Accepted"] = "accepted";
    DelegatedShareDeliveryResponseStatusEnum["Queued"] = "queued";
})(exports.DelegatedShareDeliveryResponseStatusEnum || (exports.DelegatedShareDeliveryResponseStatusEnum = {}));
function DelegatedShareDeliveryResponseFromJSON(json) {
    return DelegatedShareDeliveryResponseFromJSONTyped(json);
}
function DelegatedShareDeliveryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'delegatedShareDeliveryId': json['delegatedShareDeliveryId'],
        'status': json['status'],
        'message': !runtime.exists(json, 'message') ? undefined : json['message'],
    };
}
function DelegatedShareDeliveryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'delegatedShareDeliveryId': value.delegatedShareDeliveryId,
        'status': value.status,
        'message': value.message,
    };
}

exports.DelegatedShareDeliveryResponseFromJSON = DelegatedShareDeliveryResponseFromJSON;
exports.DelegatedShareDeliveryResponseFromJSONTyped = DelegatedShareDeliveryResponseFromJSONTyped;
exports.DelegatedShareDeliveryResponseToJSON = DelegatedShareDeliveryResponseToJSON;
