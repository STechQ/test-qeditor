import { IComponentCollection } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IStyleManager, StyleCB } from "../../../../common/shrimp/interfaces/quick/IStyleManager";
export declare class StyleManager implements IStyleManager {
    private static styleTag;
    static createStyleTag(): void;
    static compStyleDict: Record<string, StyleCB>;
    static matchComponentStyles: (compCollection: IComponentCollection) => void;
    static matchStyleValue: ({ selector, selectorValue, styleValue, breakPoint, }: {
        selector: string;
        selectorValue: string;
        styleValue: string;
        breakPoint?: string | undefined;
    }) => void;
    static addStyleRule: (selector: string, value: string, breakPoint?: string | undefined) => void;
    static deleteStyleRule: (selector: string) => number;
    static fromCamelCase: (message: string) => string;
    static matchSizeMinValue(sizeString?: string): string;
    static matchSizeMaxValue(sizeString?: string): string;
}
//# sourceMappingURL=StyleManager.d.ts.map