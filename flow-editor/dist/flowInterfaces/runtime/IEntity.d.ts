export interface IPropertyBase {
    name: string;
    description?: string;
    array?: boolean;
    required?: boolean;
}
export interface IPropertyObject extends IPropertyBase {
    type: "object";
    item: IEntity;
}
export declare type PropertyString = IPropertyString | IPropertyStringRegex;
export interface IPropertyString extends IPropertyBase {
    type: "string";
    minLength?: number;
    maxLength?: number;
    secret?: boolean;
    unique?: boolean;
    /**
     * @param base64 base64 encoded characters.
     * @param binary any sequence of octets.
     * @param date full-date of [RFC3339]
     * @param dateTime date-time of [RFC3339]
     * @see https://www.rfc-editor.org/rfc/rfc3339.
     * @param regex defined by @type IPropertyStringRegex
     */
    format?: "base64" | "binary" | "email" | "date" | "dateTime" | "regex";
}
export interface IPropertyStringRegex extends IPropertyString {
    format: "regex";
    regex: string;
}
export interface IPropertyBoolean extends IPropertyBase {
    type: "boolean";
}
export interface IPropertyNumber extends IPropertyBase {
    type: "number";
    min?: number;
    max?: number;
    unique?: boolean;
}
export declare type Property = IPropertyObject | PropertyString | IPropertyBoolean | IPropertyNumber;
export interface IEntity {
    name: string;
    properties: Array<Property>;
}
//# sourceMappingURL=IEntity.d.ts.map