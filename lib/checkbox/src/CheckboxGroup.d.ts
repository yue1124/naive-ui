import { PropType, Ref, ComputedRef } from 'vue';
import { MaybeArray } from '../../_utils';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface CheckboxGroupInjection {
    checkedCountRef: ComputedRef<number>;
    maxRef: Ref<number | undefined>;
    minRef: Ref<number | undefined>;
    disabledRef: Ref<boolean>;
    valueSetRef: Ref<Set<string | number>>;
    mergedSizeRef: Ref<'small' | 'medium' | 'large'>;
    toggleCheckbox: (checked: boolean, checkboxValue: string | number) => void;
}
export declare const checkboxGroupInjectionKey: import("vue").InjectionKey<CheckboxGroupInjection>;
declare const checkboxGroupProps: {
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: PropType<"small" | "medium" | "large">;
    readonly value: PropType<(string | number)[] | null>;
    readonly defaultValue: {
        readonly type: PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<(value: Array<string | number>) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: Array<string | number>) => void>>;
    readonly onChange: {
        readonly type: PropType<MaybeArray<(value: Array<string | number>) => void> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
};
export declare type CheckboxGroupProps = ExtractPublicPropTypes<typeof checkboxGroupProps>;
declare const _default: import("vue").DefineComponent<{
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: PropType<"small" | "medium" | "large">;
    readonly value: PropType<(string | number)[] | null>;
    readonly defaultValue: {
        readonly type: PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<(value: (string | number)[]) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: (string | number)[]) => void>>;
    readonly onChange: {
        readonly type: PropType<MaybeArray<(value: (string | number)[]) => void> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
}, {
    mergedClsPrefix: ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: PropType<"small" | "medium" | "large">;
    readonly value: PropType<(string | number)[] | null>;
    readonly defaultValue: {
        readonly type: PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<(value: (string | number)[]) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<(value: (string | number)[]) => void>>;
    readonly onChange: {
        readonly type: PropType<MaybeArray<(value: (string | number)[]) => void> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
}>>, {
    disabled: boolean | undefined;
    onChange: MaybeArray<(value: (string | number)[]) => void> | undefined;
    defaultValue: (string | number)[] | null;
}>;
export default _default;
