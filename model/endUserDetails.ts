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

export class EndUserDetails {
    'endUserEmailAddress': string;
    'endUserOrganizationName': string;
    'endUserOriginId': string;
    'categories': Array<EndUserDetails.CategoriesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endUserEmailAddress",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "endUserOrganizationName",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "endUserOriginId",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<EndUserDetails.CategoriesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return EndUserDetails.attributeTypeMap;
    }
}

export namespace EndUserDetails {
    export enum CategoriesEnum {
        Hris = <any> 'hris',
        Ats = <any> 'ats'
    }
}
