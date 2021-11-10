/**
 * @internal
 */
 declare type StylePropertyList = Partial<Record<string, string>>;
 /**
  * @internal
  */
 declare type ClassSelectors = Record<string, StylePropertyList>;
 /**
  * @internal
  */
declare type ClientClassSelectors = Partial<Record<string, StylePropertyList | ClassSelectors>>;
declare const ALLOWED_INPUT_PROPERTIES: string[];
declare const ALLOWED_COMPONENT_PROPERTIES: string[];
declare const ALLOWED_COMPONENT_STATE_PROPERTIES: string[];
declare const ALLOWED_INPUT_TEXT_PROPERTIES: string[];
declare const ALLOWED_INPUT_ICON_PROPERTIES: string[];
declare type InputPropertyValues = Partial<{
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
}>;
declare type ComponentPropertyValues = Partial<{
    borderColor?: string;
    borderRadius?: string;
    /**
     * `border-width` can be specified with 1, 2, 3, or 4 values.
     * It allows for length values of `px` and `em`, or a value of `0`.
     * It does not allow for the keyword value of `thin`, `medium`, or `thick`.
     */
    borderWidth?: string;
}>;
declare type ComponentStatePropertyValues = Partial<{
    borderColor?: string;
    /**
     * `border-width` for state properties is `inset`, and starts from the outside border.
     * `border-width` can be specified with 1, 2, 3, or 4 values.
     * It allows for length values of `px` and `em`, or a value of `0`.
     * It does not allow for the keyword value of `thin`, `medium`, or `thick`.
     */
    borderWidth?: string;
}>;
declare type InputIconPropertyValues = Partial<{
    color?: string;
}>;
declare type InputTextPropertyValues = Partial<{
    color?: string;
}>;