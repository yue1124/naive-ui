import { PropType } from 'vue';
import type { Size, ObjectFit } from './interface';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const avatarProps: {
    readonly size: PropType<Size>;
    readonly src: StringConstructor;
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly objectFit: PropType<ObjectFit>;
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly onError: PropType<(e: Event) => void>;
    readonly fallbackSrc: StringConstructor;
    /** @deprecated */
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
};
export declare type AvatarProps = ExtractPublicPropTypes<typeof avatarProps>;
declare const _default: import("vue").DefineComponent<{
    readonly size: PropType<Size>;
    readonly src: StringConstructor;
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly objectFit: PropType<ObjectFit>;
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly onError: PropType<(e: Event) => void>;
    readonly fallbackSrc: StringConstructor;
    /** @deprecated */
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
}, {
    textRef: import("vue").Ref<HTMLElement | null>;
    selfRef: import("vue").Ref<HTMLElement | null>;
    mergedRoundRef: import("vue").ComputedRef<boolean | undefined>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    fitTextTransform: () => void;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-border': string;
        '--n-border-radius': string;
        '--n-color': string;
        '--n-color-modal': string;
        '--n-color-popover': string;
        '--n-bezier': string;
        '--n-merged-size': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
    hasLoadError: import("vue").Ref<boolean>;
    handleError: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: PropType<Size>;
    readonly src: StringConstructor;
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly objectFit: PropType<ObjectFit>;
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly onError: PropType<(e: Event) => void>;
    readonly fallbackSrc: StringConstructor;
    /** @deprecated */
    readonly color: StringConstructor;
    readonly theme: PropType<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Avatar", {
        borderRadius: string;
        fontSize: string;
        border: string;
        heightTiny: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
        heightHuge: string;
        color: string;
        colorModal: string;
        colorPopover: string;
    }, any>>>;
}>>, {
    round: boolean;
    circle: boolean;
    bordered: boolean;
}>;
export default _default;