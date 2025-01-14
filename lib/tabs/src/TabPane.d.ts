import { PropType, VNodeChild, VNode, HTMLAttributes } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const tabPaneProps: {
    readonly tab: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
    readonly name: {
        readonly type: PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if" | "show:lazy">;
        readonly default: "if";
    };
    readonly closable: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: PropType<HTMLAttributes>;
    /** @deprecated */
    readonly label: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
};
export declare type TabPaneProps = ExtractPublicPropTypes<typeof tabPaneProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tab: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
    readonly name: {
        readonly type: PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if" | "show:lazy">;
        readonly default: "if";
    };
    readonly closable: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: PropType<HTMLAttributes>;
    /** @deprecated */
    readonly label: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
}, {
    style: import("vue").Ref<string | import("vue").CSSProperties | undefined>;
    class: import("vue").Ref<string | undefined>;
    mergedClsPrefix: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tab: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
    readonly name: {
        readonly type: PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: PropType<"show" | "if" | "show:lazy">;
        readonly default: "if";
    };
    readonly closable: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: PropType<HTMLAttributes>;
    /** @deprecated */
    readonly label: PropType<string | number | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => VNodeChild)>;
}>>, {
    disabled: boolean;
    closable: boolean | undefined;
    displayDirective: "show" | "if" | "show:lazy";
}>;
export default _default;
