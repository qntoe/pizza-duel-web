import { exists } from '../runtime.js';
import { SsoProviderEnumFromJSON, SsoProviderEnumToJSON } from './SsoProviderEnum.js';

/* tslint:disable */
function SsoProviderFromJSON(json) {
    return SsoProviderFromJSONTyped(json);
}
function SsoProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'clientId': json['clientId'],
        'maskedClientSecret': json['maskedClientSecret'],
        'organizationId': json['organizationId'],
        'ssoDomain': json['ssoDomain'],
        'emailDomain': json['emailDomain'],
        'provider': SsoProviderEnumFromJSON(json['provider']),
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'enforceOnlySSO': json['enforceOnlySSO'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function SsoProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'clientId': value.clientId,
        'maskedClientSecret': value.maskedClientSecret,
        'organizationId': value.organizationId,
        'ssoDomain': value.ssoDomain,
        'emailDomain': value.emailDomain,
        'provider': SsoProviderEnumToJSON(value.provider),
        'redirectUrl': value.redirectUrl,
        'enforceOnlySSO': value.enforceOnlySSO,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

export { SsoProviderFromJSON, SsoProviderFromJSONTyped, SsoProviderToJSON };
