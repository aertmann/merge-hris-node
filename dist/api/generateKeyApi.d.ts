/// <reference types="node" />
import http from 'http';
import { GenerateRemoteKeyRequest } from '../model/generateRemoteKeyRequest';
import { RemoteKey } from '../model/remoteKey';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum GenerateKeyApiApiKeys {
    tokenAuth = 0
}
export declare class GenerateKeyApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'tokenAuth': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: GenerateKeyApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    generateKeyCreate(generate_remote_key_request: GenerateRemoteKeyRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteKey;
    }>;
}
