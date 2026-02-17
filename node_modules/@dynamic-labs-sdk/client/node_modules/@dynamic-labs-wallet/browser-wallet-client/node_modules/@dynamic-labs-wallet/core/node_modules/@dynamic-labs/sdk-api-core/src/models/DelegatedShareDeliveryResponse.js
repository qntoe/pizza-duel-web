import { exists } from '../runtime.js';

/* tslint:disable */
/**
* @export
* @enum {string}
*/
var DelegatedShareDeliveryResponseStatusEnum;
(function (DelegatedShareDeliveryResponseStatusEnum) {
    DelegatedShareDeliveryResponseStatusEnum["Accepted"] = "accepted";
    DelegatedShareDeliveryResponseStatusEnum["Queued"] = "queued";
})(DelegatedShareDeliveryResponseStatusEnum || (DelegatedShareDeliveryResponseStatusEnum = {}));
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
        'message': !exists(json, 'message') ? undefined : json['message'],
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

export { DelegatedShareDeliveryResponseFromJSON, DelegatedShareDeliveryResponseFromJSONTyped, DelegatedShareDeliveryResponseStatusEnum, DelegatedShareDeliveryResponseToJSON };
