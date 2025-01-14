import type { ExtractPublicPropTypes } from '../../_utils';
declare const thingProps: {
    title: StringConstructor;
    titleExtra: StringConstructor;
    description: StringConstructor;
    content: StringConstructor;
    contentIndented: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: import("vue").PropType<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
};
export declare type ThingProps = ExtractPublicPropTypes<typeof thingProps>;
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    titleExtra: StringConstructor;
    description: StringConstructor;
    content: StringConstructor;
    contentIndented: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: import("vue").PropType<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    titleExtra: StringConstructor;
    description: StringConstructor;
    content: StringConstructor;
    contentIndented: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: import("vue").PropType<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Thing", {
        fontSize: string;
        titleTextColor: string;
        textColor: string;
        titleFontWeight: string;
    }, any>>>;
}>>, {
    contentIndented: boolean;
}>;
export default _default;
