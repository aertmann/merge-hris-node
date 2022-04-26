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

/**
* # The Company Object ### Description The `Company` object is used to represent a Company within the HRIS / Payroll system.  ### Usage Example Fetch from the `LIST Companies` endpoint and filter by `ID` to show all companies.
*/
export class Company {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The company\'s legal name.
    */
    'legal_name'?: string | null;
    /**
    * The company\'s display name.
    */
    'display_name'?: string | null;
    /**
    * The company\'s Employer Identification Numbers.
    */
    'eins'?: Array<string> | null;

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
            "name": "legal_name",
            "baseName": "legal_name",
            "type": "string"
        },
        {
            "name": "display_name",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "eins",
            "baseName": "eins",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Company.attributeTypeMap;
    }
}

