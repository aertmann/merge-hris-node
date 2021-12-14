"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataPassthroughRequest = (function () {
    function DataPassthroughRequest() {
    }
    DataPassthroughRequest.getAttributeTypeMap = function () {
        return DataPassthroughRequest.attributeTypeMap;
    };
    DataPassthroughRequest.discriminator = undefined;
    DataPassthroughRequest.attributeTypeMap = [
        {
            "name": "method",
            "baseName": "method",
            "type": "MethodEnum"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "baseUrlOverride",
            "baseName": "base_url_override",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "requestFormat",
            "baseName": "request_format",
            "type": "RequestFormatEnum"
        }
    ];
    return DataPassthroughRequest;
}());
exports.DataPassthroughRequest = DataPassthroughRequest;
//# sourceMappingURL=dataPassthroughRequest.js.map