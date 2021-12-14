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
import { EmploymentTypeEnum } from './employmentTypeEnum';
import { FlsaStatusEnum } from './flsaStatusEnum';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
import { RemoteData } from './remoteData';

/**
* # The Employment Object ### Description The `Employment` object is used to represent an employment position at a company. These are associated with the employee filling the role.  ### Usage Example Fetch from the `LIST Employments` endpoint and filter by `ID` to show all employees.
*/
export class Employment {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The employee holding this position.
    */
    'employee'?: string | null;
    /**
    * The position\'s title.
    */
    'job_title'?: string | null;
    /**
    * The position\'s pay rate in dollars.
    */
    'pay_rate'?: number | null;
    /**
    * The time period this pay rate encompasses.
    */
    'pay_period'?: PayPeriodEnum | null;
    /**
    * The position\'s pay frequency.
    */
    'pay_frequency'?: PayFrequencyEnum | null;
    /**
    * The position\'s currency code.
    */
    'pay_currency'?: PayCurrencyEnum | null;
    /**
    * The position\'s FLSA status.
    */
    'flsa_status'?: FlsaStatusEnum | null;
    /**
    * The position\'s effective date.
    */
    'effective_date'?: Date | null;
    /**
    * The position\'s type of employment.
    */
    'employment_type'?: EmploymentTypeEnum | null;
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
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Employment.attributeTypeMap;
    }
}

