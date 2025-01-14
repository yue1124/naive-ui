import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
declare const stepProps: {
    readonly status: PropType<"wait" | "error" | "finish" | "process">;
    readonly title: StringConstructor;
    readonly description: StringConstructor;
    readonly internalIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export declare type StepProps = ExtractPublicPropTypes<typeof stepProps>;
declare const _default: import("vue").DefineComponent<{
    readonly status: PropType<"wait" | "error" | "finish" | "process">;
    readonly title: StringConstructor;
    readonly description: StringConstructor;
    readonly internalIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, {
    stepsSlots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    mergedClsPrefix: import("vue").Ref<string>;
    vertical: import("vue").ComputedRef<boolean>;
    mergedStatus: import("vue").ComputedRef<"wait" | "error" | "finish" | "process">;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-description-text-color': string;
        '--n-header-text-color': string;
        '--n-indicator-border-color': string;
        '--n-indicator-color': string;
        '--n-indicator-icon-size': string;
        '--n-indicator-index-font-size': string;
        '--n-indicator-size': string;
        '--n-indicator-text-color': string;
        '--n-splitor-color': string;
        '--n-step-header-font-size': string;
        '--n-step-header-font-weight': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly status: PropType<"wait" | "error" | "finish" | "process">;
    readonly title: StringConstructor;
    readonly description: StringConstructor;
    readonly internalIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    internalIndex: number;
}>;
export default _default;
