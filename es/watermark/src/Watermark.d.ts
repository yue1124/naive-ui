import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
declare const watermarkProps: {
    readonly debug: BooleanConstructor;
    readonly cross: BooleanConstructor;
    readonly fullscreen: BooleanConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly xGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly rotate: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly image: StringConstructor;
    readonly imageOpacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly imageHeight: NumberConstructor;
    readonly imageWidth: NumberConstructor;
    readonly content: StringConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fontSize: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly fontFamily: StringConstructor;
    readonly fontStyle: {
        readonly type: PropType<"normal" | "italic" | "oblique" | `oblique ${number}deg`>;
        readonly default: "normal";
    };
    readonly fontVariant: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fontWeight: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(128, 128, 128, .3)";
    };
    readonly fontStretch: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly lineHeight: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
};
export declare type WatermarkProps = ExtractPublicPropTypes<typeof watermarkProps>;
declare const _default: import("vue").DefineComponent<{
    readonly debug: BooleanConstructor;
    readonly cross: BooleanConstructor;
    readonly fullscreen: BooleanConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly xGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly rotate: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly image: StringConstructor;
    readonly imageOpacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly imageHeight: NumberConstructor;
    readonly imageWidth: NumberConstructor;
    readonly content: StringConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fontSize: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly fontFamily: StringConstructor;
    readonly fontStyle: {
        readonly type: PropType<"normal" | "italic" | "oblique" | `oblique ${number}deg`>;
        readonly default: "normal";
    };
    readonly fontVariant: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fontWeight: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(128, 128, 128, .3)";
    };
    readonly fontStretch: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly lineHeight: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly debug: BooleanConstructor;
    readonly cross: BooleanConstructor;
    readonly fullscreen: BooleanConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly xGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly rotate: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly image: StringConstructor;
    readonly imageOpacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly imageHeight: NumberConstructor;
    readonly imageWidth: NumberConstructor;
    readonly content: StringConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fontSize: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly fontFamily: StringConstructor;
    readonly fontStyle: {
        readonly type: PropType<"normal" | "italic" | "oblique" | `oblique ${number}deg`>;
        readonly default: "normal";
    };
    readonly fontVariant: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly fontWeight: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: "rgba(128, 128, 128, .3)";
    };
    readonly fontStretch: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly lineHeight: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Watermark", {
        fontFamily: string;
    }, unknown>>>;
}>>, {
    fontSize: number;
    fontStretch: string;
    fontStyle: "normal" | "italic" | "oblique" | `oblique ${number}deg`;
    fontVariant: string;
    fontWeight: number;
    height: number;
    lineHeight: number;
    rotate: number;
    width: number;
    zIndex: number;
    cross: boolean;
    xGap: number;
    yGap: number;
    selectable: boolean;
    fullscreen: boolean;
    debug: boolean;
    yOffset: number;
    xOffset: number;
    imageOpacity: number;
    fontColor: string;
}>;
export default _default;
