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
    'remoteId'?: string | null;
    /**
    * The employee whose payroll is being run.
    */
    'employee'?: string | null;
    /**
    * The payroll being run.
    */
    'payrollRun'?: string | null;
    /**
    * The gross pay from the run.
    */
    'grossPay'?: number | null;
    /**
    * The net pay from the run.
    */
    'netPay'?: number | null;
    /**
    * The day and time the payroll run started.
    */
    'startDate'?: Date | null;
    /**
    * The day and time the payroll run ended.
    */
    'endDate'?: Date | null;
    /**
    * The day and time the payroll run was checked.
    */
    'checkDate'?: Date | null;
    'earnings'?: Array<Earning>;
    'deductions'?: Array<Deduction>;
    'taxes'?: Array<Tax>;
    'remoteData'?: Array<RemoteData> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employee",
            "baseName": "employee",
            "type": "string"
        },
        {
            "name": "payrollRun",
            "baseName": "payroll_run",
            "type": "string"
        },
        {
            "name": "grossPay",
            "baseName": "gross_pay",
            "type": "number"
        },
        {
            "name": "netPay",
            "baseName": "net_pay",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "checkDate",
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
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeePayrollRun.attributeTypeMap;
    }
}

