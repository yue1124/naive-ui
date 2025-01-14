import { PropType } from 'vue';
import type { Size } from '../../button/src/interface';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface ButtonGroupInjection {
    size?: Size | undefined;
}
declare const buttonGroupProps: {
    readonly size: {
        readonly type: PropType<Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
};
export declare type ButtonGroupProps = ExtractPublicPropTypes<typeof buttonGroupProps>;
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: PropType<Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
}, {
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedClsPrefix: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
}>>, {
    size: Size | undefined;
    vertical: boolean;
}>;
export default _default;
