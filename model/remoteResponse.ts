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
* # The RemoteResponse Object ### Description The `RemoteResponse` object is used to represent information returned from a third-party endpoint.  ### Usage Example View the `RemoteResponse` returned from your `DataPassthrough`.
*/
export class RemoteResponse {
    'method': string;
    'path': string;
    'status': number;
    'response': { [key: string]: any; };
    'headers'?: { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return RemoteResponse.attributeTypeMap;
    }
}

