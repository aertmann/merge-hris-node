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

export class LinkToken {
    'link_token': string;
    'integration_name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link_token",
            "baseName": "link_token",
            "type": "string"
        },
        {
            "name": "integration_name",
            "baseName": "integration_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LinkToken.attributeTypeMap;
    }
}

