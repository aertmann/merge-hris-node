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
import { RemoteData } from './remoteData';
import { RequestTypeEnum } from './requestTypeEnum';
import { TimeOffStatusEnum } from './timeOffStatusEnum';
import { UnitsEnum } from './unitsEnum';

/**
* # The TimeOff Object ### Description The `TimeOff` object is used to represent a Time Off Request filed by an employee.  ### Usage Example Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests.
*/
export class TimeOff {
    'id': string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The employee requesting time off.
    */
    'employee'?: string | null;
    /**
    * The employee approving the time off request.
    */
    'approver'?: string | null;
    /**
    * The status of this time off request.
    */
    'status'?: TimeOffStatusEnum | BlankEnum | NullEnum | null;
    /**
    * The employee note for this time off request.
    */
    'employee_note'?: string | null;
    /**
    * The unit of time requested.
    */
    'units'?: UnitsEnum | BlankEnum | NullEnum | null;
    /**
    * The number of time off units requested.
    */
    'amount'?: number | null;
    /**
    * The type of time off request.
    */
    'request_type'?: RequestTypeEnum | BlankEnum | NullEnum | null;
    /**
    * The day and time of the start of the time requested off.
    */
    'start_time'?: Date | null;
    /**
    * The day and time of the end of the time requested off.
    */
    'end_time'?: Date | null;
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
            "name": "approver",
            "baseName": "approver",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TimeOffStatusEnum | BlankEnum | NullEnum"
        },
        {
            "name": "employee_note",
            "baseName": "employee_note",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "UnitsEnum | BlankEnum | NullEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "request_type",
            "baseName": "request_type",
            "type": "RequestTypeEnum | BlankEnum | NullEnum"
        },
        {
            "name": "start_time",
            "baseName": "start_time",
            "type": "Date"
        },
        {
            "name": "end_time",
            "baseName": "end_time",
            "type": "Date"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return TimeOff.attributeTypeMap;
    }
}

