'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var RoomTypeEnum = require('./RoomTypeEnum.cjs');

/* tslint:disable */
function CreateRoomsRequestFromJSON(json) {
    return CreateRoomsRequestFromJSONTyped(json);
}
function CreateRoomsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomType': RoomTypeEnum.RoomTypeEnumFromJSON(json['roomType']),
        'roomCount': !runtime.exists(json, 'roomCount') ? undefined : json['roomCount'],
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
        'roomType': RoomTypeEnum.RoomTypeEnumToJSON(value.roomType),
        'roomCount': value.roomCount,
    };
}

exports.CreateRoomsRequestFromJSON = CreateRoomsRequestFromJSON;
exports.CreateRoomsRequestFromJSONTyped = CreateRoomsRequestFromJSONTyped;
exports.CreateRoomsRequestToJSON = CreateRoomsRequestToJSON;
