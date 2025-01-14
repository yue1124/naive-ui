import { PropType, ExtractPropTypes, CSSProperties } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface LoadingBarInst {
    start: () => void;
    error: () => void;
    finish: () => void;
}
export declare type LoadingBarProviderInst = LoadingBarInst;
export declare type LoadingBarApiInjection = LoadingBarInst;
declare const loadingBarProps: {
    to: {
        type: PropType<string | HTMLElement>;
        default: undefined;
    };
    loadingBarStyle: {
        type: PropType<{
            loading?: string | CSSProperties | undefined;
            error?: string | CSSProperties | undefined;
        }>;
    };
    theme: PropType<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
};
export declare type LoadingBarProviderProps = ExtractPublicPropTypes<typeof loadingBarProps>;
export declare type LoadingBarProviderSetupProps = ExtractPropTypes<typeof loadingBarProps>;
declare const _default: import("vue").DefineComponent<{
    to: {
        type: PropType<string | HTMLElement>;
        default: undefined;
    };
    loadingBarStyle: {
        type: PropType<{
            loading?: string | CSSProperties | undefined;
            error?: string | CSSProperties | undefined;
        }>;
    };
    theme: PropType<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
}, LoadingBarInst & {
    loadingBarRef: import("vue").Ref<{
        start: () => void;
        error: () => void;
        finish: () => void;
    } | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    to: {
        type: PropType<string | HTMLElement>;
        default: undefined;
    };
    loadingBarStyle: {
        type: PropType<{
            loading?: string | CSSProperties | undefined;
            error?: string | CSSProperties | undefined;
        }>;
    };
    theme: PropType<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"LoadingBar", {
        colorError: string;
        colorLoading: string;
        height: string;
    }, any>>>;
}>>, {
    to: string | HTMLElement;
}>;
export default _default;
