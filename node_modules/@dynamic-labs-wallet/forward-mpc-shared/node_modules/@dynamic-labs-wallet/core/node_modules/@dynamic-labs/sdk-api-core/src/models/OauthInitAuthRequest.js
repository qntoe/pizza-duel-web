import { exists } from '../runtime.js';

/* tslint:disable */
function OauthInitAuthRequestFromJSON(json) {
    return OauthInitAuthRequestFromJSONTyped(json);
}
function OauthInitAuthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': json['state'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'ssoProviderId': !exists(json, 'ssoProviderId') ? undefined : json['ssoProviderId'],
    };
}
function OauthInitAuthRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'redirectUrl': value.redirectUrl,
        'ssoProviderId': value.ssoProviderId,
    };
}

export { OauthInitAuthRequestFromJSON, OauthInitAuthRequestFromJSONTyped, OauthInitAuthRequestToJSON };
