import { IContextItem } from "../../../../shrimp/context";
import { INetworkResponse } from "../../../../shrimp/interfaces/quick/INetworkResponse";
export declare const QJsonRetrieverContextName: string;
export interface IQJsonRetriever extends IContextItem {
    retrieveQJsonAsync(qjsonPath: string, success: (qjson: string | {
        qjson: string;
    }) => void, fail: (reason: string) => void, options?: {
        disableLoading: boolean;
    }): Promise<INetworkResponse<string | {
        qjson: string;
    }>>;
}
//# sourceMappingURL=IQJsonRetriever.d.ts.map