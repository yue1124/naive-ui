import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
declare const badgeProps: {
    readonly value: PropType<string | number>;
    readonly max: NumberConstructor;
    readonly dot: BooleanConstructor;
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showZero: BooleanConstructor;
    readonly processing: BooleanConstructor;
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
};
export declare type BadgeProps = ExtractPublicPropTypes<typeof badgeProps>;
declare const _default: import("vue").DefineComponent<{
    readonly value: PropType<string | number>;
    readonly max: NumberConstructor;
    readonly dot: BooleanConstructor;
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showZero: BooleanConstructor;
    readonly processing: BooleanConstructor;
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
}, {
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    appeared: import("vue").Ref<boolean>;
    showBadge: import("vue").ComputedRef<boolean>;
    handleAfterEnter: () => void;
    handleAfterLeave: () => void;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-font-family': string;
        '--n-color': string;
        '--n-ripple-color': string;
        '--n-bezier': string;
        '--n-ripple-bezier': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: PropType<string | number>;
    readonly max: NumberConstructor;
    readonly dot: BooleanConstructor;
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showZero: BooleanConstructor;
    readonly processing: BooleanConstructor;
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Badge", {
        color: string;
        colorInfo: string;
        colorSuccess: string;
        colorError: string;
        colorWarning: string;
        fontSize: string;
        fontFamily: string;
    }, any>>>;
}>>, {
    type: "default" | "error" | "info" | "success" | "warning";
    show: boolean;
    dot: boolean;
    showZero: boolean;
    processing: boolean;
}>;
export default _default;
