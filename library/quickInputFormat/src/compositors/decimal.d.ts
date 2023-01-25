import { Context } from "../core/context";
import { ICompositor } from "./ICompositor";
export declare class Decimal implements ICompositor {
    private readonly context;
    private numberValue;
    private _maskedValue;
    private _unmaskedValue;
    private _skipInputEvent;
    constructor(context: Context);
    compose(): void;
    private changeValue;
    private formatValue;
    getUnmaskedValue(): string;
    private unMask;
    private validate;
    private convertToNumber;
    private alignDigits;
    private deleteLeadingZero;
    private deleteBeforeNegativeSymbol;
}
//# sourceMappingURL=decimal.d.ts.map