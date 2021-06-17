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
exports.EmploymentRequest = void 0;
/**
* # The Employment Object ### Description The `Employment` object is used to represent an employment position at a company. These are associated with the employee filling the role.  ### Usage Example Fetch from the `LIST Employments` endpoint and filter by `ID` to show all employees.
*/
var EmploymentRequest = /** @class */ (function () {
    function EmploymentRequest() {
    }
    EmploymentRequest.getAttributeTypeMap = function () {
        return EmploymentRequest.attributeTypeMap;
    };
    EmploymentRequest.discriminator = undefined;
    EmploymentRequest.attributeTypeMap = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "job_title",
            "baseName": "job_title",
            "type": "string"
        },
        {
            "name": "pay_rate",
            "baseName": "pay_rate",
            "type": "number"
        },
        {
            "name": "pay_period",
            "baseName": "pay_period",
            "type": "PayPeriodEnum"
        },
        {
            "name": "pay_frequency",
            "baseName": "pay_frequency",
            "type": "PayFrequencyEnum"
        },
        {
            "name": "pay_currency",
            "baseName": "pay_currency",
            "type": "PayCurrencyEnum"
        },
        {
            "name": "flsa_status",
            "baseName": "flsa_status",
            "type": "FlsaStatusEnum"
        },
        {
            "name": "effective_date",
            "baseName": "effective_date",
            "type": "Date"
        },
        {
            "name": "employment_type",
            "baseName": "employment_type",
            "type": "EmploymentTypeEnum"
        }
    ];
    return EmploymentRequest;
}());
exports.EmploymentRequest = EmploymentRequest;
