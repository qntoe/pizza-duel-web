import { exists } from '../runtime.js';

/* tslint:disable */
function DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSON(json) {
    return DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSONTyped(json);
}
function DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alg': json['alg'],
        'iv': json['iv'],
        'ct': json['ct'],
        'tag': json['tag'],
        'ek': json['ek'],
        'kid': !exists(json, 'kid') ? undefined : json['kid'],
    };
}
function DelegatedShareDeliveryRequestEncryptedDelegatedShareToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alg': value.alg,
        'iv': value.iv,
        'ct': value.ct,
        'tag': value.tag,
        'ek': value.ek,
        'kid': value.kid,
    };
}

export { DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSON, DelegatedShareDeliveryRequestEncryptedDelegatedShareFromJSONTyped, DelegatedShareDeliveryRequestEncryptedDelegatedShareToJSON };
