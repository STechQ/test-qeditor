interface IPlatformClientResponse {
    statusCode: number;
    headers?: Record<string, string>;
    body?: any;
}
interface IPlatformClientRequest {
    method: "get" | "post";
    url: string;
    queryString?: Record<string, string>;
    headers?: Record<string, string>;
    body?: any;
}
export interface IPlatformClientAdaptor {
    getFormData(): Record<string, any>;
    request: (request: IPlatformClientRequest) => Promise<IPlatformClientResponse>;
}
export {};
//# sourceMappingURL=IPlatformClientAdaptor.d.ts.map