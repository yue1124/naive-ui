import { PropType, ExtractPropTypes, Ref, CSSProperties } from 'vue';
import type { MergedTheme } from '../../_mixins';
import { ExtractPublicPropTypes, Mutable } from '../../_utils';
import { NotificationTheme } from '../styles';
import { notificationEnvOptions } from './NotificationEnvironment';
export declare type NotificationPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare type NotificationOptions = Partial<ExtractPropTypes<typeof notificationEnvOptions>>;
export interface NotificationProviderInjection {
    props: ExtractPropTypes<typeof notificationProviderProps>;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<NotificationTheme>>;
}
declare type Create = (options: NotificationOptions) => NotificationReactive;
declare type TypedCreate = (options: Omit<NotificationOptions, 'type'>) => NotificationReactive;
export interface NotificationApiInjection {
    create: Create;
    info: TypedCreate;
    success: TypedCreate;
    warning: TypedCreate;
    error: TypedCreate;
    /** @deprecated */
    open: Create;
    destroyAll: () => void;
}
export declare type NotificationProviderInst = NotificationApiInjection;
export declare const notificationApiInjectionKey: import("vue").InjectionKey<NotificationApiInjection>;
export declare type NotificationType = 'info' | 'success' | 'warning' | 'error';
export declare type NotificationReactive = {
    readonly key: string;
    readonly destroy: () => void;
    /** @deprecated */
    readonly hide: () => void;
    /** @deprecated */
    readonly deactivate: () => void;
} & Mutable<NotificationOptions>;
interface NotificationRef {
    hide: () => void;
}
declare const notificationProviderProps: {
    containerStyle: PropType<string | CSSProperties>;
    to: PropType<string | HTMLElement>;
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: NumberConstructor;
    placement: {
        type: PropType<NotificationPlacement>;
        default: string;
    };
    theme: PropType<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
};
export declare type NotificationProviderProps = ExtractPublicPropTypes<typeof notificationProviderProps>;
declare const _default: import("vue").DefineComponent<{
    containerStyle: PropType<string | CSSProperties>;
    to: PropType<string | HTMLElement>;
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: NumberConstructor;
    placement: {
        type: PropType<NotificationPlacement>;
        default: string;
    };
    theme: PropType<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    notificationList: Ref<{
        readonly key: string;
        readonly destroy: () => void;
        readonly hide: () => void;
        readonly deactivate: () => void;
        type?: "default" | "error" | "info" | "success" | "warning" | undefined;
        closable?: boolean | undefined;
        meta?: string | (() => import("vue").VNodeChild) | undefined;
        content?: string | (() => import("vue").VNodeChild) | undefined;
        description?: string | (() => import("vue").VNodeChild) | undefined;
        duration?: number | undefined;
        onAfterEnter?: (() => void) | undefined;
        onLeave?: (() => void) | undefined;
        onAfterLeave?: (() => void) | undefined;
        title?: string | (() => import("vue").VNodeChild) | undefined;
        action?: string | (() => import("vue").VNodeChild) | undefined;
        avatar?: (() => import("vue").VNodeChild) | undefined;
        onClose?: (() => any) | undefined;
        onHide?: (() => void) | undefined;
        onAfterHide?: (() => void) | undefined;
        onAfterShow?: (() => void) | undefined;
    }[]>;
    notificationRefs: Record<string, NotificationRef>;
    handleAfterLeave: (key: string) => void;
} & {
    create: (options: NotificationOptions) => NotificationReactive;
    info: (options: Omit<NotificationOptions, 'type'>) => NotificationReactive;
    success: (options: Omit<NotificationOptions, 'type'>) => NotificationReactive;
    warning: (options: Omit<NotificationOptions, 'type'>) => NotificationReactive;
    error: (options: Omit<NotificationOptions, 'type'>) => NotificationReactive;
    open: (options: NotificationOptions) => NotificationReactive;
    destroyAll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    containerStyle: PropType<string | CSSProperties>;
    to: PropType<string | HTMLElement>;
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: NumberConstructor;
    placement: {
        type: PropType<NotificationPlacement>;
        default: string;
    };
    theme: PropType<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Notification", {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeColor: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        width: string;
        padding: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}>>, {
    placement: NotificationPlacement;
    scrollable: boolean;
}>;
export default _default;
