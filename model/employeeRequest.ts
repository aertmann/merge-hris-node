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
import { EmploymentStatusEnum } from './employmentStatusEnum';
import { EthnicityEnum } from './ethnicityEnum';
import { GenderEnum } from './genderEnum';
import { MaritalStatusEnum } from './maritalStatusEnum';

/**
* # The Employee Object ### Description The `Employee` object is used to represent an Employee for a company.  ### Usage Example Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
*/
export class EmployeeRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The employee\'s number that appears in the remote UI. Note: This is distinct from the remote_id field, which is a unique identifier for the employee set by the remote API, and is not exposed to the user. This value can also change in many API providers.
    */
    'employee_number'?: string | null;
    'company'?: string | null;
    /**
    * The employee\'s first name.
    */
    'first_name'?: string | null;
    /**
    * The employee\'s last name.
    */
    'last_name'?: string | null;
    /**
    * The employee\'s full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
    */
    'display_full_name'?: string | null;
    'groups'?: Array<string>;
    /**
    * The employee\'s work email.
    */
    'work_email'?: string | null;
    /**
    * The employee\'s personal email.
    */
    'personal_email'?: string | null;
    /**
    * The employee\'s mobile phone number.
    */
    'mobile_phone_number'?: string | null;
    /**
    * Array of `Employment` IDs for this Employee.
    */
    'employments'?: Array<string>;
    'home_location'?: string | null;
    'work_location'?: string | null;
    'manager'?: string | null;
    'team'?: string | null;
    'pay_group'?: string | null;
    /**
    * The employee\'s social security number.
    */
    'ssn'?: string | null;
    /**
    * The employee\'s gender.
    */
    'gender'?: GenderEnum | null;
    /**
    * The employee\'s ethnicity.
    */
    'ethnicity'?: EthnicityEnum | null;
    /**
    * The employee\'s marital status.
    */
    'marital_status'?: MaritalStatusEnum | null;
    /**
    * The employee\'s date of birth.
    */
    'date_of_birth'?: Date | null;
    /**
    * The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you\'re looking for the employee\'s start date, refer to the start_date field.
    */
    'hire_date'?: Date | null;
    /**
    * The date that the employee started working. If an employee has multiple start dates from previous employments, this represents the most recent start date.
    */
    'start_date'?: Date | null;
    /**
    * The employment status of the employee.
    */
    'employment_status'?: EmploymentStatusEnum | null;
    /**
    * The employee\'s termination date.
    */
    'termination_date'?: Date | null;
    /**
    * The URL of the employee\'s avatar image.
    */
    'avatar'?: string | null;
    /**
    * Custom fields configured for a given model.
    */
    'custom_fields'?: { [key: string]: any; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employee_number",
            "baseName": "employee_number",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "first_name",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "display_full_name",
            "baseName": "display_full_name",
            "type": "string"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "work_email",
            "baseName": "work_email",
            "type": "string"
        },
        {
            "name": "personal_email",
            "baseName": "personal_email",
            "type": "string"
        },
        {
            "name": "mobile_phone_number",
            "baseName": "mobile_phone_number",
            "type": "string"
        },
        {
            "name": "employments",
            "baseName": "employments",
            "type": "Array<string>"
        },
        {
            "name": "home_location",
            "baseName": "home_location",
            "type": "string"
        },
        {
            "name": "work_location",
            "baseName": "work_location",
            "type": "string"
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string"
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string"
        },
        {
            "name": "pay_group",
            "baseName": "pay_group",
            "type": "string"
        },
        {
            "name": "ssn",
            "baseName": "ssn",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "GenderEnum"
        },
        {
            "name": "ethnicity",
            "baseName": "ethnicity",
            "type": "EthnicityEnum"
        },
        {
            "name": "marital_status",
            "baseName": "marital_status",
            "type": "MaritalStatusEnum"
        },
        {
            "name": "date_of_birth",
            "baseName": "date_of_birth",
            "type": "Date"
        },
        {
            "name": "hire_date",
            "baseName": "hire_date",
            "type": "Date"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "employment_status",
            "baseName": "employment_status",
            "type": "EmploymentStatusEnum"
        },
        {
            "name": "termination_date",
            "baseName": "termination_date",
            "type": "Date"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string"
        },
        {
            "name": "custom_fields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeRequest.attributeTypeMap;
    }
}

