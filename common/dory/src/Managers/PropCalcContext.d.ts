import { ContextManager, IContextItem } from "../../../shrimp/context";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { ScriptLang } from "../../../shrimp/interfaces/Scripting/scriptLang";
export interface IContextTargetInst {
    targetInstance: object | ICompDepTarget;
}
export interface IContextDepTarget {
    instanceHolder: IContextTargetInst;
    field: string;
    depScriptValue: string;
}
export interface ICompDepTarget {
    ref: IComponentCollection;
}
export declare class PropCalcContext implements IContextItem {
    static ContextName: string;
    contextName: string;
    private evaluator;
    private contextTarget?;
    private context;
    constructor(context: ContextManager);
    watch(bindObject: object, field: string): void;
    /**
     * Return prop context value
     * @param self 'this' will be lost when triggering from Object defined get method
     */
    propContextDepGetter(self: PropCalcContext): IContextDepTarget;
    /**
     * Trigger the dependent target with new value
     * @param depTarget Dependency target
     * @param dataItem Evaluator dataSource
     * @param self 'this' will be lost when triggering from Object defined get method
     * @param lang Evaluator language option
     */
    propContextDepTriggerer({ depTarget, dataItem, self, lang }: {
        depTarget: IContextDepTarget;
        dataItem: object;
        self: PropCalcContext;
        lang?: ScriptLang;
    }): void;
    /**
     * Set prop context value with field and scriptValue
     * @param instanceHolder Target object instance
     * @param field Binded field
     * @param scriptValue Binded script value
     */
    setContextTarget(instanceHolder: IContextTargetInst, field: string, scriptValue: string | object): void;
    /**
     * Reset prop context
     */
    clearPropTarget(): void;
    private isTargetCompInstance;
}
//# sourceMappingURL=PropCalcContext.d.ts.map