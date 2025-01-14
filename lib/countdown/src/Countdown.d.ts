import { PropType, VNodeChild } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
declare const countdownProps: {
    duration: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: PropType<0 | 2 | 1 | 3>;
        default: number;
    };
    render: PropType<(props: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    }) => VNodeChild>;
    onFinish: PropType<() => void>;
};
export declare type CountdownProps = ExtractPublicPropTypes<typeof countdownProps>;
declare const _default: import("vue").DefineComponent<{
    duration: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: PropType<0 | 2 | 1 | 3>;
        default: number;
    };
    render: PropType<(props: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    }) => VNodeChild>;
    onFinish: PropType<() => void>;
}, () => VNodeChild, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    duration: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: PropType<0 | 2 | 1 | 3>;
        default: number;
    };
    render: PropType<(props: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    }) => VNodeChild>;
    onFinish: PropType<() => void>;
}>>, {
    active: boolean;
    duration: number;
    precision: 0 | 2 | 1 | 3;
}>;
export default _default;
