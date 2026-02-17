import { exists } from '../runtime.js';
import { RoomTypeEnumFromJSON, RoomTypeEnumToJSON } from './RoomTypeEnum.js';

/* tslint:disable */
function CreateRoomsRequestFromJSON(json) {
    return CreateRoomsRequestFromJSONTyped(json);
}
function CreateRoomsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomType': RoomTypeEnumFromJSON(json['roomType']),
        'roomCount': !exists(json, 'roomCount') ? undefined : json['roomCount'],
    };
}
function CreateRoomsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomType': RoomTypeEnumToJSON(value.roomType),
        'roomCount': value.roomCount,
    };
}

export { CreateRoomsRequestFromJSON, CreateRoomsRequestFromJSONTyped, CreateRoomsRequestToJSON };
