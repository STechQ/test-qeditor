import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IQJsonRetriever } from "../../../../common/qshell";
import NetworkManagerImpl from "./NetworkManagerImpl";
import { IExternalQJsonRetriever } from "../../../../common/shrimp/interfaces/quick/IExternalQJsonRetriever";
import { INetworkResponse } from "../../../../common/shrimp/interfaces/quick/INetworkResponse";
export default class QJsonRetrieverImpl implements IQJsonRetriever {
    contextName: string;
    private network;
    private settingsWrapper;
    private externalQJsonRetriever?;
    private get qjsonDirectPath();
    private get qjsonUrlPrefix();
    constructor({ contextName, network, settingsWrapper }: {
        contextName: string;
        network: NetworkManagerImpl;
        settingsWrapper: IWebSDKSettingsWrapper;
    });
    private arrangeQJsonPath;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    private willExternalHandle;
    retrieveQJsonAsync(qjsonPath: string, success: (qjson: string | {
        qjson: string;
    }) => void, fail: (reason: string) => void, options: {
        disableLoading: boolean;
    }): Promise<INetworkResponse<string | {
        qjson: string;
    }>>;
}
//# sourceMappingURL=QJsonRetrieverImpl.d.ts.map