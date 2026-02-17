'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var RoomTypeEnum = require('./RoomTypeEnum.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');

/* tslint:disable */
function CreateRoomsWithoutWalletIdRequestFromJSON(json) {
    return CreateRoomsWithoutWalletIdRequestFromJSONTyped(json);
}
function CreateRoomsWithoutWalletIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomType': RoomTypeEnum.RoomTypeEnumFromJSON(json['roomType']),
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'roomCount': !runtime.exists(json, 'roomCount') ? undefined : json['roomCount'],
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
        'roomType': RoomTypeEnum.RoomTypeEnumToJSON(value.roomType),
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'roomCount': value.roomCount,
    };
}

exports.CreateRoomsWithoutWalletIdRequestFromJSON = CreateRoomsWithoutWalletIdRequestFromJSON;
exports.CreateRoomsWithoutWalletIdRequestFromJSONTyped = CreateRoomsWithoutWalletIdRequestFromJSONTyped;
exports.CreateRoomsWithoutWalletIdRequestToJSON = CreateRoomsWithoutWalletIdRequestToJSON;
