import type { ExtractPublicPropTypes } from '../../_utils';
export interface AnchorInst {
    scrollTo: (href: string) => void;
}
declare const anchorProps: {
    readonly type: {
        readonly type: import("vue").PropType<"block" | "rail">;
        readonly default: "rail";
    };
    readonly showRail: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showBackground: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly bound: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly internalScrollable: BooleanConstructor;
    readonly ignoreGap: BooleanConstructor;
    readonly offsetTarget: import("vue").PropType<string | import("./utils").OffsetTarget | (() => HTMLElement)>;
    readonly listenTo: import("vue").PropType<string | import("../../affix/src/utils").ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: import("vue").PropType<"absolute" | "fix">;
        readonly default: "fix";
    };
    readonly offsetTop: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: import("vue").PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly affix: BooleanConstructor;
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
};
export declare type AnchorProps = ExtractPublicPropTypes<typeof anchorProps>;
declare const _default: import("vue").DefineComponent<{
    readonly type: {
        readonly type: import("vue").PropType<"block" | "rail">;
        readonly default: "rail";
    };
    readonly showRail: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showBackground: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly bound: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly internalScrollable: BooleanConstructor;
    readonly ignoreGap: BooleanConstructor;
    readonly offsetTarget: import("vue").PropType<string | import("./utils").OffsetTarget | (() => HTMLElement)>;
    readonly listenTo: import("vue").PropType<string | import("../../affix/src/utils").ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: import("vue").PropType<"absolute" | "fix">;
        readonly default: "fix";
    };
    readonly offsetTop: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: import("vue").PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly affix: BooleanConstructor;
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
}, {
    scrollTo(href: string): void;
    renderAnchor: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<"block" | "rail">;
        readonly default: "rail";
    };
    readonly showRail: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showBackground: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly bound: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly internalScrollable: BooleanConstructor;
    readonly ignoreGap: BooleanConstructor;
    readonly offsetTarget: import("vue").PropType<string | import("./utils").OffsetTarget | (() => HTMLElement)>;
    readonly listenTo: import("vue").PropType<string | import("../../affix/src/utils").ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: import("vue").PropType<"absolute" | "fix">;
        readonly default: "fix";
    };
    readonly offsetTop: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: import("vue").PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: import("vue").PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly affix: BooleanConstructor;
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Anchor", {
        borderRadius: string;
        railColor: string;
        railColorActive: string;
        linkColor: string;
        linkTextColor: string;
        linkTextColorHover: string;
        linkTextColorPressed: string;
        linkTextColorActive: string;
        linkFontSize: string;
        linkPadding: string;
        railWidth: string;
    }, any>>>;
}>>, {
    type: "block" | "rail";
    bound: number;
    position: "absolute" | "fix";
    target: (() => HTMLElement) | undefined;
    affix: boolean;
    offsetTop: number | undefined;
    offsetBottom: number | undefined;
    showRail: boolean;
    showBackground: boolean;
    internalScrollable: boolean;
    ignoreGap: boolean;
}>;
export default _default;
