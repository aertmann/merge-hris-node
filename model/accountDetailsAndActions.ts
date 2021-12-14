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
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum } from './accountDetailsAndActionsStatusEnum';
import { CategoryEnum } from './categoryEnum';

/**
* # The LinkedAccount Object ### Description The `LinkedAccount` object is used to represent an end user\'s link with a specific integration.  ### Usage Example View a list of your organization\'s `LinkedAccount` objects.
*/
export class AccountDetailsAndActions {
    'id': string;
    'category'?: CategoryEnum;
    'status': AccountDetailsAndActionsStatusEnum;
    'statusDetail'?: string;
    'endUserOriginId'?: string;
    'endUserOrganizationName': string;
    'endUserEmailAddress': string;
    'integration'?: AccountDetailsAndActionsIntegration;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountDetailsAndActionsStatusEnum"
        },
        {
            "name": "statusDetail",
            "baseName": "status_detail",
            "type": "string"
        },
        {
            "name": "endUserOriginId",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "endUserOrganizationName",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "endUserEmailAddress",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountDetailsAndActionsIntegration"
        }    ];

    static getAttributeTypeMap() {
        return AccountDetailsAndActions.attributeTypeMap;
    }
}

