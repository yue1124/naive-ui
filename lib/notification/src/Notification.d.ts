import { PropType, VNodeChild } from 'vue';
export declare const notificationProps: {
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly avatar: PropType<() => VNodeChild>;
    readonly title: PropType<string | (() => VNodeChild)>;
    readonly description: PropType<string | (() => VNodeChild)>;
    readonly content: PropType<string | (() => VNodeChild)>;
    readonly meta: PropType<string | (() => VNodeChild)>;
    readonly action: PropType<string | (() => VNodeChild)>;
    readonly onClose: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
};
export declare const notificationPropKeys: ("type" | "meta" | "content" | "description" | "title" | "action" | "avatar" | "onClose" | "closable")[];
export declare const Notification: import("vue").DefineComponent<{
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly avatar: PropType<() => VNodeChild>;
    readonly title: PropType<string | (() => VNodeChild)>;
    readonly description: PropType<string | (() => VNodeChild)>;
    readonly content: PropType<string | (() => VNodeChild)>;
    readonly meta: PropType<string | (() => VNodeChild)>;
    readonly action: PropType<string | (() => VNodeChild)>;
    readonly onClose: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, {
    mergedClsPrefix: import("vue").Ref<string>;
    showAvatar: import("vue").ComputedRef<boolean | (() => VNodeChild)>;
    handleCloseClick(): void;
    cssVars: import("vue").ComputedRef<{
        '--n-color': string;
        '--n-font-size': string;
        '--n-text-color': string;
        '--n-description-text-color': string;
        '--n-action-text-color': string;
        '--n-title-text-color': string;
        '--n-title-font-weight': string;
        '--n-bezier': string;
        '--n-bezier-ease-out': string;
        '--n-bezier-ease-in': string;
        '--n-border-radius': string;
        '--n-box-shadow': string;
        '--n-close-color': string;
        '--n-close-color-hover': string;
        '--n-close-color-pressed': string;
        '--n-line-height': string;
        '--n-icon-color': string;
        '--n-close-margin': string;
        '--n-close-size': string;
        '--n-width': string;
        '--n-padding-left': string;
        '--n-padding-right': string;
        '--n-padding-top': string;
        '--n-padding-bottom': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly type: {
        readonly type: PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    readonly avatar: PropType<() => VNodeChild>;
    readonly title: PropType<string | (() => VNodeChild)>;
    readonly description: PropType<string | (() => VNodeChild)>;
    readonly content: PropType<string | (() => VNodeChild)>;
    readonly meta: PropType<string | (() => VNodeChild)>;
    readonly action: PropType<string | (() => VNodeChild)>;
    readonly onClose: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {
    type: "default" | "error" | "info" | "success" | "warning";
    closable: boolean;
}>;
