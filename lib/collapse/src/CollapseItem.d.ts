import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
declare const collapseItemProps: {
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly displayDirective: PropType<"show" | "if">;
};
export declare type CollapseItemProps = ExtractPublicPropTypes<typeof collapseItemProps>;
declare const _default: import("vue").DefineComponent<{
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly displayDirective: PropType<"show" | "if">;
}, {
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    collapseSlots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    randomName: string;
    mergedClsPrefix: import("vue").Ref<string>;
    collapsed: import("vue").ComputedRef<boolean>;
    mergedDisplayDirective: import("vue").ComputedRef<"show" | "if">;
    arrowPlacement: import("vue").ComputedRef<"left" | "right">;
    handleClick(e: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly displayDirective: PropType<"show" | "if">;
}>>, {}>;
export default _default;
