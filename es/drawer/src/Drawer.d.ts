import { PropType, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import { ScrollbarProps } from '../../_internal';
import type { Placement } from './DrawerBodyWrapper';
declare const drawerProps: {
    readonly show: BooleanConstructor;
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly default: "right";
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly to: PropType<string | HTMLElement>;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if">;
        readonly default: "if";
    };
    readonly nativeScrollbar: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly zIndex: NumberConstructor;
    readonly onMaskClick: PropType<(e: MouseEvent) => void>;
    readonly scrollbarProps: PropType<ScrollbarProps>;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly trapFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onEsc: PropType<() => void>;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEsc: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    readonly onAfterEnter: PropType<() => void>;
    readonly onAfterLeave: PropType<() => void>;
    /** @deprecated */
    readonly drawerStyle: PropType<string | CSSProperties>;
    readonly drawerClass: StringConstructor;
    readonly target: null;
    readonly onShow: PropType<(value: boolean) => void>;
    readonly onHide: PropType<(value: boolean) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
};
export declare type DrawerProps = ExtractPublicPropTypes<typeof drawerProps>;
declare const _default: import("vue").DefineComponent<{
    readonly show: BooleanConstructor;
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly default: "right";
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly to: PropType<string | HTMLElement>;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if">;
        readonly default: "if";
    };
    readonly nativeScrollbar: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly zIndex: NumberConstructor;
    readonly onMaskClick: PropType<(e: MouseEvent) => void>;
    readonly scrollbarProps: PropType<ScrollbarProps>;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly trapFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onEsc: PropType<() => void>;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEsc: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    readonly onAfterEnter: PropType<() => void>;
    readonly onAfterLeave: PropType<() => void>;
    /** @deprecated */
    readonly drawerStyle: PropType<string | CSSProperties>;
    readonly drawerClass: StringConstructor;
    readonly target: null;
    readonly onShow: PropType<(value: boolean) => void>;
    readonly onHide: PropType<(value: boolean) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    namespace: import("vue").ComputedRef<string | undefined>;
    mergedBodyStyle: import("vue").ComputedRef<(string | CSSProperties | undefined)[]>;
    handleMaskClick: (e: MouseEvent) => void;
    handleEsc: () => void;
    mergedTheme: import("vue").ComputedRef<{
        common: {
            baseColor: string;
            primaryColor: string;
            primaryColorHover: string;
            primaryColorPressed: string;
            primaryColorSuppl: string;
            infoColor: string;
            infoColorHover: string;
            infoColorPressed: string;
            infoColorSuppl: string;
            successColor: string;
            successColorHover: string;
            successColorPressed: string;
            successColorSuppl: string;
            warningColor: string;
            warningColorHover: string;
            warningColorPressed: string;
            warningColorSuppl: string;
            errorColor: string;
            errorColorHover: string;
            errorColorPressed: string;
            errorColorSuppl: string;
            textColorBase: string;
            textColor1: string;
            textColor2: string;
            textColor3: string;
            textColorDisabled: string;
            placeholderColor: string;
            placeholderColorDisabled: string;
            iconColor: string;
            iconColorHover: string;
            iconColorPressed: string;
            iconColorDisabled: string;
            opacity1: string;
            opacity2: string;
            opacity3: string;
            opacity4: string;
            opacity5: string;
            dividerColor: string;
            borderColor: string;
            closeColor: string;
            closeColorHover: string;
            closeColorPressed: string;
            closeColorDisabled: string;
            clearColor: string;
            clearColorHover: string;
            clearColorPressed: string;
            scrollbarColor: string;
            scrollbarColorHover: string;
            scrollbarWidth: string;
            scrollbarHeight: string;
            scrollbarBorderRadius: string;
            progressRailColor: string;
            railColor: string;
            popoverColor: string;
            tableColor: string;
            cardColor: string;
            modalColor: string;
            bodyColor: string;
            tagColor: string;
            avatarColor: string;
            invertedColor: string;
            inputColor: string;
            codeColor: string;
            tabColor: string;
            actionColor: string;
            tableHeaderColor: string;
            hoverColor: string;
            tableColorHover: string;
            tableColorStriped: string;
            pressedColor: string;
            opacityDisabled: string;
            inputColorDisabled: string;
            buttonColor2: string;
            buttonColor2Hover: string;
            buttonColor2Pressed: string;
            boxShadow1: string;
            boxShadow2: string;
            boxShadow3: string;
            fontFamily: string;
            fontFamilyMono: string;
            fontWeight: string;
            fontWeightStrong: string;
            cubicBezierEaseInOut: string;
            cubicBezierEaseOut: string;
            cubicBezierEaseIn: string;
            borderRadius: string;
            borderRadiusSmall: string;
            fontSize: string;
            fontSizeTiny: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            lineHeight: string;
            heightTiny: string;
            heightSmall: string;
            heightMedium: string;
            heightLarge: string;
            heightHuge: string;
            name: "common";
        };
        self: {
            bodyPadding: string;
            headerPadding: string;
            footerPadding: string;
            color: string;
            textColor: string;
            titleTextColor: string;
            titleFontSize: string;
            titleFontWeight: string;
            boxShadow: string;
            lineHeight: string;
            headerBorderBottom: string;
            footerBorderTop: string;
            closeColor: string;
            closeColorHover: string;
            closeColorPressed: string;
            closeSize: string;
        };
        peers: {
            Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
                color: string;
                colorHover: string;
            }, any>;
        };
        peerOverrides: {
            Scrollbar?: {
                peers?: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        };
    }>;
    cssVars: import("vue").ComputedRef<{
        '--n-line-height': string;
        '--n-color': string;
        '--n-text-color': string;
        '--n-box-shadow': string;
        '--n-bezier': string;
        '--n-bezier-out': string;
        '--n-bezier-in': string;
        '--n-header-padding': string;
        '--n-body-padding': string;
        '--n-footer-padding': string;
        '--n-title-text-color': string;
        '--n-title-font-size': string;
        '--n-title-font-weight': string;
        '--n-header-border-bottom': string;
        '--n-footer-border-top': string;
        '--n-close-color': string;
        '--n-close-color-hover': string;
        '--n-close-color-pressed': string;
        '--n-close-size': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
    isMounted: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly show: BooleanConstructor;
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: 251;
    };
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly default: "right";
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly to: PropType<string | HTMLElement>;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if">;
        readonly default: "if";
    };
    readonly nativeScrollbar: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly zIndex: NumberConstructor;
    readonly onMaskClick: PropType<(e: MouseEvent) => void>;
    readonly scrollbarProps: PropType<ScrollbarProps>;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly trapFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onEsc: PropType<() => void>;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEsc: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    readonly onAfterEnter: PropType<() => void>;
    readonly onAfterLeave: PropType<() => void>;
    /** @deprecated */
    readonly drawerStyle: PropType<string | CSSProperties>;
    readonly drawerClass: StringConstructor;
    readonly target: null;
    readonly onShow: PropType<(value: boolean) => void>;
    readonly onHide: PropType<(value: boolean) => void>;
    readonly theme: PropType<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Drawer", {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeSize: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}>>, {
    show: boolean;
    height: string | number;
    width: string | number;
    autoFocus: boolean;
    placement: Placement;
    displayDirective: "show" | "if";
    trapFocus: boolean;
    blockScroll: boolean;
    maskClosable: boolean;
    closeOnEsc: boolean;
    nativeScrollbar: boolean;
}>;
export default _default;
