export declare type StyleValue = Record<string, string | undefined | Record<string, string>>;
export interface StyleItem {
    [key: string]: StyleValue | undefined;
    default?: StyleValue;
}
export declare type StyleJson = Record<string, StyleItem>;
export interface IComponentStyleInlineInterface {
    [key: string]: Array<IComponentInternalSI>;
}
export interface IComponentInternalSI {
    groupName?: string;
    groupContent: Array<IGroupContent>;
    showComponent?: boolean;
}
export interface IGroupContent {
    styleKey: Array<IComponentStyleKey>;
    type?: keyof typeof COMPONENT_STYLE_TYPE | "";
    displayName?: string;
    [key: string]: any;
}
export interface IComponentStyleKey {
    param: string;
    value?: string;
    [key: string]: string | boolean | undefined;
}
export declare const COMPONENT_STYLE_TYPE: {
    "color-picker": string;
    "font-picker": string;
    size: string;
    layout: string;
    "layout-chooser": string;
    "grid-column": string;
    "box-layout": string;
    "basic-input": string;
    "box-shadow": string;
    slider: string;
    border: string;
    "break-point-picker": string;
};
export interface IComponentDefinition {
    componentStyleList: Array<IComponentInternalSI>;
}
export declare type IAssetList = Record<string, Record<string, StyleValue>>;
//# sourceMappingURL=IStyle.d.ts.map