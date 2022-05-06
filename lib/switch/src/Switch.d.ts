import { CSSProperties, PropType } from 'vue';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type { OnUpdateValue } from './interface';
declare const switchProps: {
    readonly size: {
        readonly type: PropType<"small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | undefined>;
        readonly default: undefined;
    };
    readonly loading: BooleanConstructor;
    readonly defaultValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly checkedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly uncheckedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly railStyle: PropType<(params: {
        focused: boolean;
        checked: boolean;
    }) => string | CSSProperties>;
    readonly rubberBand: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
};
export declare type SwitchProps = ExtractPublicPropTypes<typeof switchProps>;
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: PropType<"small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | undefined>;
        readonly default: undefined;
    };
    readonly loading: BooleanConstructor;
    readonly defaultValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly checkedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly uncheckedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly railStyle: PropType<(params: {
        focused: boolean;
        checked: boolean;
    }) => string | CSSProperties>;
    readonly rubberBand: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
}, {
    handleClick: () => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleKeyup: (e: KeyboardEvent) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    mergedRailStyle: import("vue").ComputedRef<string | CSSProperties | undefined>;
    pressed: import("vue").Ref<boolean>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedValue: import("vue").ComputedRef<string | number | boolean>;
    checked: import("vue").ComputedRef<boolean>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-button-border-radius': string;
        '--n-button-box-shadow': string;
        '--n-button-color': string;
        '--n-button-width': string;
        '--n-button-width-pressed': string;
        '--n-button-height': string;
        '--n-height': string;
        '--n-offset': string;
        '--n-opacity-disabled': string;
        '--n-rail-border-radius': string;
        '--n-rail-color': string;
        '--n-rail-color-active': string;
        '--n-rail-height': string;
        '--n-rail-width': string;
        '--n-width': string;
        '--n-box-shadow-focus': string;
        '--n-loading-color': string;
        '--n-text-color': string;
        '--n-icon-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<"small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | undefined>;
        readonly default: undefined;
    };
    readonly loading: BooleanConstructor;
    readonly defaultValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly checkedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly uncheckedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly railStyle: PropType<(params: {
        focused: boolean;
        checked: boolean;
    }) => string | CSSProperties>;
    readonly rubberBand: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Switch", {
        iconColor: string;
        textColor: string;
        loadingColor: string;
        opacityDisabled: string;
        railColor: string;
        railColorActive: string;
        buttonBoxShadow: string;
        buttonColor: string;
        railBorderRadiusSmall: string;
        railBorderRadiusMedium: string;
        railBorderRadiusLarge: string;
        buttonBorderRadiusSmall: string;
        buttonBorderRadiusMedium: string;
        buttonBorderRadiusLarge: string;
        boxShadowFocus: string;
        buttonHeightSmall: string;
        buttonHeightMedium: string;
        buttonHeightLarge: string;
        buttonWidthSmall: string;
        buttonWidthMedium: string;
        buttonWidthLarge: string;
        buttonWidthPressedSmall: string;
        buttonWidthPressedMedium: string;
        buttonWidthPressedLarge: string;
        railHeightSmall: string;
        railHeightMedium: string;
        railHeightLarge: string;
        railWidthSmall: string;
        railWidthMedium: string;
        railWidthLarge: string;
    }, any>>>;
}>>, {
    value: string | number | boolean | undefined;
    round: boolean;
    size: "small" | "medium" | "large";
    disabled: boolean | undefined;
    loading: boolean;
    defaultValue: string | number | boolean;
    checkedValue: string | number | boolean;
    uncheckedValue: string | number | boolean;
    rubberBand: boolean;
}>;
export default _default;
