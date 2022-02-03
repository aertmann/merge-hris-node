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
import { Deduction } from './deduction';
import { Earning } from './earning';
import { RemoteData } from './remoteData';
import { Tax } from './tax';

/**
* # The EmployeePayrollRun Object ### Description The `EmployeePayrollRun` object is used to represent a payroll run for a specific employee.  ### Usage Example Fetch from the `LIST EmployeePayrollRun` endpoint and filter by `ID` to show all employee payroll runs.
*/
export class EmployeePayrollRun {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'employee'?: string;
    'payroll_run'?: string;
    /**
    * The gross pay from the run.
    */
    'gross_pay'?: number | null;
    /**
    * The net pay from the run.
    */
    'net_pay'?: number | null;
    /**
    * The day and time the payroll run started.
    */
    'start_date'?: Date | null;
    /**
    * The day and time the payroll run ended.
    */
    'end_date'?: Date | null;
    /**
    * The day and time the payroll run was checked.
    */
    'check_date'?: Date | null;
    'earnings'?: Array<Earning>;
    'deductions'?: Array<Deduction>;
    'taxes'?: Array<Tax>;
    'remote_data'?: Array<RemoteData> | null;

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
            "name": "payroll_run",
            "baseName": "payroll_run",
            "type": "string"
        },
        {
            "name": "gross_pay",
            "baseName": "gross_pay",
            "type": "number"
        },
        {
            "name": "net_pay",
            "baseName": "net_pay",
            "type": "number"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "end_date",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "check_date",
            "baseName": "check_date",
            "type": "Date"
        },
        {
            "name": "earnings",
            "baseName": "earnings",
            "type": "Array<Earning>"
        },
        {
            "name": "deductions",
            "baseName": "deductions",
            "type": "Array<Deduction>"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeePayrollRun.attributeTypeMap;
    }
}

