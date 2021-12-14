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
import { Employee } from '../model/employee';
import { PaginatedEmployeeList } from '../model/paginatedEmployeeList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.merge.dev/api/hris/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum EmployeesApiApiKeys {
    tokenAuth,
}

export class EmployeesApi {
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

    public setApiKey(key: EmployeesApiApiKeys, value: string) {
        (this.authentications as any)[EmployeesApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of `Employee` objects.
     * @param x_account_token Token identifying the end user.
     * @param company_id If provided, will only return employees for this company.
     * @param created_after If provided, will only return objects created after this datetime.
     * @param created_before If provided, will only return objects created before this datetime.
     * @param cursor The pagination cursor value.
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param include_sensitive_fields Whether to include sensitive fields (such as social security numbers) in the response.
     * @param manager_id If provided, will only return employees for this manager.
     * @param modified_after If provided, will only return objects modified after this datetime.
     * @param modified_before If provided, will only return objects modified before this datetime.
     * @param page_size Number of results to return per page.
     * @param pay_group_id If provided, will only return employees for this pay group
     * @param personal_email If provided, will only return Employees with this personal email
     * @param remote_id The API provider\&#39;s ID for the given object.
     * @param team_id If provided, will only return employees for this team.
     * @param work_email If provided, will only return Employees with this work email
     * @param work_location_id If provided, will only return employees for this location.
     */
    public async employeesList (x_account_token: string, company_id?: string, created_after?: Date, created_before?: Date, cursor?: string, expand?: 'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group', include_remote_data?: boolean, include_sensitive_fields?: boolean, manager_id?: string, modified_after?: Date, modified_before?: Date, page_size?: number, pay_group_id?: string, personal_email?: string, remote_id?: string, team_id?: string, work_email?: string, work_location_id?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaginatedEmployeeList;  }> {
        const localVarPath = this.basePath + '/employees';
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
            throw new Error('Required parameter x_account_token was null or undefined when calling employeesList.');
        }

        if (company_id !== undefined) {
            localVarQueryParameters['company_id'] = ObjectSerializer.serialize(company_id, "string");
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

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
        }

        if (include_remote_data !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(include_remote_data, "boolean");
        }

        if (include_sensitive_fields !== undefined) {
            localVarQueryParameters['include_sensitive_fields'] = ObjectSerializer.serialize(include_sensitive_fields, "boolean");
        }

        if (manager_id !== undefined) {
            localVarQueryParameters['manager_id'] = ObjectSerializer.serialize(manager_id, "string");
        }

        if (modified_after !== undefined) {
            localVarQueryParameters['modified_after'] = ObjectSerializer.serialize(modified_after, "Date");
        }

        if (modified_before !== undefined) {
            localVarQueryParameters['modified_before'] = ObjectSerializer.serialize(modified_before, "Date");
        }

        if (page_size !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(page_size, "number");
        }

        if (pay_group_id !== undefined) {
            localVarQueryParameters['pay_group_id'] = ObjectSerializer.serialize(pay_group_id, "string");
        }

        if (personal_email !== undefined) {
            localVarQueryParameters['personal_email'] = ObjectSerializer.serialize(personal_email, "string");
        }

        if (remote_id !== undefined) {
            localVarQueryParameters['remote_id'] = ObjectSerializer.serialize(remote_id, "string");
        }

        if (team_id !== undefined) {
            localVarQueryParameters['team_id'] = ObjectSerializer.serialize(team_id, "string");
        }

        if (work_email !== undefined) {
            localVarQueryParameters['work_email'] = ObjectSerializer.serialize(work_email, "string");
        }

        if (work_location_id !== undefined) {
            localVarQueryParameters['work_location_id'] = ObjectSerializer.serialize(work_location_id, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PaginatedEmployeeList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PaginatedEmployeeList");
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
     * Returns an `Employee` object with the given `id`.
     * @param x_account_token Token identifying the end user.
     * @param id 
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param include_sensitive_fields Whether to include sensitive fields (such as social security numbers) in the response.
     */
    public async employeesRetrieve (x_account_token: string, id: string, expand?: 'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group', include_remote_data?: boolean, include_sensitive_fields?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Employee;  }> {
        const localVarPath = this.basePath + '/employees/{id}'
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
            throw new Error('Required parameter x_account_token was null or undefined when calling employeesRetrieve.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeesRetrieve.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
        }

        if (include_remote_data !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(include_remote_data, "boolean");
        }

        if (include_sensitive_fields !== undefined) {
            localVarQueryParameters['include_sensitive_fields'] = ObjectSerializer.serialize(include_sensitive_fields, "boolean");
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
            return new Promise<{ response: http.IncomingMessage; body: Employee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Employee");
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
