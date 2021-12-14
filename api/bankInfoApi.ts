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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BankInfo } from '../model/bankInfo';
import { PaginatedBankInfoList } from '../model/paginatedBankInfoList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.merge.dev/api/hris/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BankInfoApiApiKeys {
    tokenAuth,
}

export class BankInfoApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuth': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: BankInfoApiApiKeys, value: string) {
        (this.authentications as any)[BankInfoApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of `BankInfo` objects.
     * @param x_account_token Token identifying the end user.
     * @param account_type The bank account type
     * @param bank_name 
     * @param created_after If provided, will only return objects created after this datetime.
     * @param created_before If provided, will only return objects created before this datetime.
     * @param cursor The pagination cursor value.
     * @param employee If provided, will only return bank accounts for this employee.
     * @param employee_id If provided, will only return bank accounts for this employee.
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param modified_after If provided, will only return objects modified after this datetime.
     * @param modified_before If provided, will only return objects modified before this datetime.
     * @param order_by Overrides the default ordering for this endpoint.
     * @param page_size Number of results to return per page.
     * @param remote_created_at 
     * @param remote_id The API provider\&#39;s ID for the given object.
     */
    public async bankInfoList (x_account_token: string, account_type?: 'CHECKING' | 'SAVINGS', bank_name?: string, created_after?: Date, created_before?: Date, cursor?: string, employee?: string, employee_id?: string, expand?: 'employee', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, order_by?: '-remote_created_at' | 'remote_created_at', page_size?: number, remote_created_at?: Date, remote_id?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaginatedBankInfoList;  }> {
        const localVarPath = this.basePath + '/bank-info';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'x_account_token' is not null or undefined
        if (x_account_token === null || x_account_token === undefined) {
            throw new Error('Required parameter x_account_token was null or undefined when calling bankInfoList.');
        }

        if (account_type !== undefined) {
            localVarQueryParameters['account_type'] = ObjectSerializer.serialize(account_type, "'CHECKING' | 'SAVINGS'");
        }

        if (bank_name !== undefined) {
            localVarQueryParameters['bank_name'] = ObjectSerializer.serialize(bank_name, "string");
        }

        if (created_after !== undefined) {
            localVarQueryParameters['created_after'] = ObjectSerializer.serialize(created_after, "Date");
        }

        if (created_before !== undefined) {
            localVarQueryParameters['created_before'] = ObjectSerializer.serialize(created_before, "Date");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (employee !== undefined) {
            localVarQueryParameters['employee'] = ObjectSerializer.serialize(employee, "string");
        }

        if (employee_id !== undefined) {
            localVarQueryParameters['employee_id'] = ObjectSerializer.serialize(employee_id, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'employee'");
        }

        if (include_remote_data !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(include_remote_data, "boolean");
        }

        if (modified_after !== undefined) {
            localVarQueryParameters['modified_after'] = ObjectSerializer.serialize(modified_after, "Date");
        }

        if (modified_before !== undefined) {
            localVarQueryParameters['modified_before'] = ObjectSerializer.serialize(modified_before, "Date");
        }

        if (order_by !== undefined) {
            localVarQueryParameters['order_by'] = ObjectSerializer.serialize(order_by, "'-remote_created_at' | 'remote_created_at'");
        }

        if (page_size !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(page_size, "number");
        }

        if (remote_created_at !== undefined) {
            localVarQueryParameters['remote_created_at'] = ObjectSerializer.serialize(remote_created_at, "Date");
        }

        if (remote_id !== undefined) {
            localVarQueryParameters['remote_id'] = ObjectSerializer.serialize(remote_id, "string");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(x_account_token, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaginatedBankInfoList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PaginatedBankInfoList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a `BankInfo` object with the given `id`.
     * @param x_account_token Token identifying the end user.
     * @param id 
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    public async bankInfoRetrieve (x_account_token: string, id: string, expand?: 'employee', include_remote_data?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BankInfo;  }> {
        const localVarPath = this.basePath + '/bank-info/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'x_account_token' is not null or undefined
        if (x_account_token === null || x_account_token === undefined) {
            throw new Error('Required parameter x_account_token was null or undefined when calling bankInfoRetrieve.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bankInfoRetrieve.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'employee'");
        }

        if (include_remote_data !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(include_remote_data, "boolean");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(x_account_token, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BankInfo;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "BankInfo");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
