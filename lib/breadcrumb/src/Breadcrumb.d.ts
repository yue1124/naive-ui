import { Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface BreadcrumbInjection {
    separatorRef: Ref<string>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const breadcrumbInjectionKey: import("vue").InjectionKey<BreadcrumbInjection>;
declare const breadcrumbProps: {
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
};
export declare type BreadcrumbProps = ExtractPublicPropTypes<typeof breadcrumbProps>;
declare const _default: import("vue").DefineComponent<{
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-item-text-color': string;
        '--n-item-text-color-hover': string;
        '--n-item-text-color-pressed': string;
        '--n-item-text-color-active': string;
        '--n-separator-color': string;
        '--n-font-weight-active': string;
    }> | undefined;
    themeClass: Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
}>>, {
    separator: string;
}>;
export default _default;
