import { TreeMate } from 'treemate';
import { CSSProperties, VNodeChild, VNode } from 'vue';
export declare type SelectMixedOption = SelectBaseOption | SelectGroupOption | SelectIgnoredOption;
export interface SelectBaseOption<V = string | number, L = string | ((option: SelectBaseOption<V>, selected: boolean) => VNodeChild)> {
    value: V;
    label: L;
    class?: string;
    style?: string | CSSProperties;
    disabled?: boolean;
    render?: (info: {
        node: VNode;
        option: SelectBaseOption<V>;
        selected: boolean;
    }) => VNodeChild;
    [k: string]: unknown;
}
export interface SelectGroupOptionBase {
    label: string | ((option: SelectGroupOption) => VNodeChild);
    type: 'group';
    children: SelectBaseOption[];
    render?: (info: {
        node: VNode;
        option: SelectGroupOption;
    }) => VNodeChild;
    [k: string]: unknown;
}
export interface SelectIgnoredOption {
    type: 'ignored';
    value: string | number;
    [k: string]: unknown;
}
export declare type ValueAtom = string | number;
export declare type Value = ValueAtom | string[] | number[] | ValueAtom[];
export declare type OnUpdateValue = (value: string & number & ValueAtom & string[] & number[] & ValueAtom[] & (ValueAtom | null) & (string[] | null) & (number[] | null) & (ValueAtom[] | null), option: SelectBaseOption & null & SelectBaseOption[]) => void;
export declare type OnUpdateValueImpl = (value: ValueAtom | string[] | number[] | ValueAtom[] | (ValueAtom | null) | (string[] | null) | (number[] | null) | (ValueAtom[] | null), option: SelectBaseOption | null | SelectBaseOption[]) => void;
export declare type SelectTreeMate = TreeMate<SelectBaseOption, SelectGroupOption, SelectIgnoredOption>;
export declare type Size = 'small' | 'medium' | 'large';
export declare type SelectOption = SelectBaseOption<string | number>;
export declare type SelectGroupOption = (SelectGroupOptionBase & {
    /** @deprecated should use key and label instead */
    name?: string;
}) | (SelectGroupOptionBase & {
    key: string | number;
});
export interface SelectInst {
    focus: () => void;
    blur: () => void;
}
export declare type SelectFallbackOption = (value: string & number) => SelectOption;
export declare type SelectFallbackOptionImpl = (value: string | number) => SelectOption;
