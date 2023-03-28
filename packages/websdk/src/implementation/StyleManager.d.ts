import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager, StyleCB } from "../../../../common/shrimp/interfaces/quick/IStyleManager";
export declare class StyleManager implements IStyleManager {
    private static styleTag;
    static createStyleTag(): void;
    private static index;
    private static cssIndexDict;
    static compStyleDict: Record<string, StyleCB>;
    static matchComponentStyles: (compCollection: IComponentCollection) => void;
    static matchStyleValue: ({ selector, selectorValue, styleValue, breakPoint, compType }: {
        selector: string;
        selectorValue: string;
        styleValue: string;
        breakPoint?: string | undefined;
        compType: string;
    }) => void;
    static addStyleRule: (selector: string, selectorValue: string, compType: string, breakPoint?: string | undefined) => void;
    static deleteStyleRule: (selector: string, selectorValue: string, compType: string) => number;
    static fromCamelCase: (message: string) => string;
    static matchSizeMinValue(sizeString?: string): string;
    static matchSizeMaxValue(sizeString?: string): string;
}
//# sourceMappingURL=StyleManager.d.ts.map