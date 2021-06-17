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
exports.Deduction = void 0;
/**
* # The Deduction Object ### Description The `Deduction` object is used to represent a deduction for a given employee\'s payroll run. One run could include several deductions.  ### Usage Example Fetch from the `LIST Deductions` endpoint and filter by `ID` to show all deductions.
*/
var Deduction = /** @class */ (function () {
    function Deduction() {
    }
    Deduction.getAttributeTypeMap = function () {
        return Deduction.attributeTypeMap;
    };
    Deduction.discriminator = undefined;
    Deduction.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employee_payroll_run",
            "baseName": "employee_payroll_run",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "employee_deduction",
            "baseName": "employee_deduction",
            "type": "number"
        },
        {
            "name": "company_deduction",
            "baseName": "company_deduction",
            "type": "number"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return Deduction;
}());
exports.Deduction = Deduction;
