"use strict";
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
exports.__esModule = true;
exports.PaginatedCompanyList = void 0;
var PaginatedCompanyList = /** @class */ (function () {
    function PaginatedCompanyList() {
    }
    PaginatedCompanyList.getAttributeTypeMap = function () {
        return PaginatedCompanyList.attributeTypeMap;
    };
    PaginatedCompanyList.discriminator = undefined;
    PaginatedCompanyList.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Company>"
        }
    ];
    return PaginatedCompanyList;
}());
exports.PaginatedCompanyList = PaginatedCompanyList;
