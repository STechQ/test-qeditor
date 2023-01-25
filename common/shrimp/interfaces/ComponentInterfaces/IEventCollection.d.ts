import { IDictionary } from "../IDictionary";
import { IDictionaryNullable } from "../IDictionaryNullable";
import { IComponentCollection } from "./IComponentCollection";
import { IEventData } from "./IEventData";
import { IEventFunctions } from "./IEventFunctions";
export interface IEventCollection {
    RegisterEvent({ eventData }: {
        eventData: IEventData;
    }): void;
    SetOwner({ ownerComponent }: {
        ownerComponent: IComponentCollection;
    }): void;
    GetEventBoundFunctions(): IEventFunctions;
    GetExternalEventBoundFunctions(): IDictionary<Function>;
    Trigger({ eventName, eventArguments }: {
        eventName: string;
        eventArguments?: Array<any> | IDictionaryNullable<any>;
    }): any;
}
//# sourceMappingURL=IEventCollection.d.ts.map