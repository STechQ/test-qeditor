import { IContextItem } from "../../context";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
export declare const UXManagerContextName: string;
export interface IUXManager extends IContextItem {
    getThemeList(): Array<string> | undefined;
    setTheme(themeName: string): void;
    addTheme(themeName: string): void;
    removeTheme(themeName: string): void;
    setDarkTheme?: (comCollection: IComponentCollection, isDark: boolean) => void;
}
//# sourceMappingURL=IUXManager.d.ts.map