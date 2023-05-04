import { IComponentOperator } from "./IComponentOperator";
import { IEventOperator } from "./IEventOperator";
import { ILoadingOperator } from "./ILoadingOperator";
export interface IRendererOperatorCollection {
    eventOperator?: IEventOperator;
    componentOperator?: IComponentOperator;
    loadingOperator: ILoadingOperator;
}
//# sourceMappingURL=IRendererOperatorCollection.d.ts.map