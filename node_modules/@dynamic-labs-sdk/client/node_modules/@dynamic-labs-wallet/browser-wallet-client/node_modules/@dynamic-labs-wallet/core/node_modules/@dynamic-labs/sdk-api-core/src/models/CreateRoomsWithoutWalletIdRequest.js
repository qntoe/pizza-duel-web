import { exists } from '../runtime.js';
import { RoomTypeEnumFromJSON, RoomTypeEnumToJSON } from './RoomTypeEnum.js';
import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';

/* tslint:disable */
function CreateRoomsWithoutWalletIdRequestFromJSON(json) {
    return CreateRoomsWithoutWalletIdRequestFromJSONTyped(json);
}
function CreateRoomsWithoutWalletIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomType': RoomTypeEnumFromJSON(json['roomType']),
        'thresholdSignatureScheme': ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'roomCount': !exists(json, 'roomCount') ? undefined : json['roomCount'],
    };
}
function CreateRoomsWithoutWalletIdRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomType': RoomTypeEnumToJSON(value.roomType),
        'thresholdSignatureScheme': ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'roomCount': value.roomCount,
    };
}

export { CreateRoomsWithoutWalletIdRequestFromJSON, CreateRoomsWithoutWalletIdRequestFromJSONTyped, CreateRoomsWithoutWalletIdRequestToJSON };
