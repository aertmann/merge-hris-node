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

import { RequestFile } from './models';
import { RemoteData } from './remoteData';

/**
* # The Benefit Object ### Description The `Benefit` object is used to represent a Benefit for an employee.  ### Usage Example Fetch from the `LIST Benefits` endpoint and filter by `ID` to show all benefits.
*/
export class Benefit {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'employee'?: string | null;
    /**
    * The name of the benefit provider.
    */
    'provider_name'?: string | null;
    /**
    * The type of benefit plan
    */
    'benefit_plan_type'?: string | null;
    /**
    * The employee\'s contribution.
    */
    'employee_contribution'?: number | null;
    /**
    * The company\'s contribution.
    */
    'company_contribution'?: number | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * Indicates whether or not this object has been deleted on the third-party.
    */
    'remote_was_deleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employee",
            "baseName": "employee",
            "type": "string"
        },
        {
            "name": "provider_name",
            "baseName": "provider_name",
            "type": "string"
        },
        {
            "name": "benefit_plan_type",
            "baseName": "benefit_plan_type",
            "type": "string"
        },
        {
            "name": "employee_contribution",
            "baseName": "employee_contribution",
            "type": "number"
        },
        {
            "name": "company_contribution",
            "baseName": "company_contribution",
            "type": "number"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Benefit.attributeTypeMap;
    }
}

