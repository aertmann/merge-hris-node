import http from 'http';
import { RemoteKey } from '../model/remoteKey';
import { RemoteKeyForRegenerationRequest } from '../model/remoteKeyForRegenerationRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum RegenerateKeyApiApiKeys {
    tokenAuth = 0
}
export declare class RegenerateKeyApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        tokenAuth: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: RegenerateKeyApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    regenerateKeyCreate(remote_key_for_regeneration_request: RemoteKeyForRegenerationRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteKey;
    }>;
}
