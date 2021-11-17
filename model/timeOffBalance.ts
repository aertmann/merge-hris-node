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
import { BlankEnum } from './blankEnum';
import { NullEnum } from './nullEnum';
import { PolicyTypeEnum } from './policyTypeEnum';
import { RemoteData } from './remoteData';

/**
* # The TimeOffBalance Object ### Description The `TimeOffBalance` object is used to represent a Time Off Balance for an employee.  ### Usage Example Fetch from the `LIST TimeOffBalances` endpoint and filter by `ID` to show all time off balances.
*/
export class TimeOffBalance {
    'id': string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The employee the balance belongs to.
    */
    'employee'?: string | null;
    /**
    * The current PTO balance in terms of hours.
    */
    'balance'?: number | null;
    /**
    * The amount of PTO used in terms of hours.
    */
    'used'?: number | null;
    /**
    * The policy type of this time off balance.
    */
    'policy_type'?: PolicyTypeEnum | BlankEnum | NullEnum | null;
    'remote_data': Array<RemoteData> | null;

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
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "number"
        },
        {
            "name": "policy_type",
            "baseName": "policy_type",
            "type": "PolicyTypeEnum | BlankEnum | NullEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return TimeOffBalance.attributeTypeMap;
    }
}

