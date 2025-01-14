import { PropType } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
declare const rateProps: {
    readonly allowHalf: BooleanConstructor;
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly value: NumberConstructor;
    readonly defaultValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly readonly: BooleanConstructor;
    readonly size: {
        readonly type: PropType<number | "small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly color: StringConstructor;
    readonly 'onUpdate:value': PropType<MaybeArray<(value: number) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: number) => void>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
};
export declare type RateProps = ExtractPublicPropTypes<typeof rateProps>;
declare const _default: import("vue").DefineComponent<{
    readonly allowHalf: BooleanConstructor;
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly value: NumberConstructor;
    readonly defaultValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly readonly: BooleanConstructor;
    readonly size: {
        readonly type: PropType<number | "small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly color: StringConstructor;
    readonly 'onUpdate:value': PropType<MaybeArray<(value: number) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: number) => void>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedValue: import("vue").ComputedRef<number>;
    hoverIndex: import("vue").Ref<number | null>;
    handleMouseMove: (index: number, e: MouseEvent) => void;
    handleClick: (index: number, e: MouseEvent) => void;
    handleMouseLeave: () => void;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-item-color': string;
        '--n-item-color-active': string;
        '--n-item-size': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly allowHalf: BooleanConstructor;
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly value: NumberConstructor;
    readonly defaultValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly readonly: BooleanConstructor;
    readonly size: {
        readonly type: PropType<number | "small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly color: StringConstructor;
    readonly 'onUpdate:value': PropType<MaybeArray<(value: number) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: number) => void>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Rate", {
        itemColor: string;
        itemColorActive: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
    }, any>>>;
}>>, {
    readonly: boolean;
    size: number | "small" | "medium" | "large";
    defaultValue: number;
    count: number;
    allowHalf: boolean;
}>;
export default _default;
