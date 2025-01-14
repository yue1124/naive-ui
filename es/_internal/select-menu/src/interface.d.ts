import { VNodeChild, Ref, UnwrapRef, VNode } from 'vue';
import { TreeNode } from 'treemate';
import type { SelectBaseOption, SelectGroupOption, SelectIgnoredOption } from '../../../select/src/interface';
export declare type Size = 'small' | 'medium' | 'large' | 'huge';
export declare type RenderLabel = (option: SelectBaseOption & SelectGroupOption & SelectIgnoredOption, selected: boolean) => VNodeChild;
export declare type RenderLabelImpl = (option: SelectBaseOption | SelectGroupOption | SelectIgnoredOption, selected: boolean) => VNodeChild;
export declare type RenderOption = (info: {
    node: VNode;
    option: SelectBaseOption & SelectGroupOption & SelectIgnoredOption;
    selected: boolean;
}) => VNodeChild;
export declare type RenderOptionImpl = (info: {
    node: VNode;
    option: SelectBaseOption | SelectGroupOption | SelectIgnoredOption;
    selected: boolean;
}) => VNodeChild;
export interface InternalSelectMenuInjection {
    handleOptionMouseEnter: (e: MouseEvent, tmNode: TreeNode<SelectBaseOption>) => void;
    handleOptionClick: (e: MouseEvent, tmNode: TreeNode<SelectBaseOption>) => void;
    valueSetRef: Ref<Set<number | string>>;
    pendingTmNodeRef: Ref<TreeNode<SelectBaseOption> | null>;
    multipleRef: Ref<boolean>;
    valueRef: Ref<string | number | Array<string | number> | null>;
    renderLabelRef: Ref<RenderLabel | undefined>;
    renderOptionRef: Ref<RenderOption | undefined>;
}
export interface InternalExposedProps {
    selfRef: Ref<HTMLElement | null>;
    getPendingTmNode: () => TreeNode<SelectBaseOption> | null;
    prev: () => void;
    next: () => void;
}
export declare const internalSelectionMenuInjectionKey: import("vue").InjectionKey<InternalSelectMenuInjection>;
export declare const internalSelectionMenuBodyInjectionKey: import("vue").InjectionKey<Ref<HTMLElement | null>>;
export declare type InternalSelectMenuRef = UnwrapRef<InternalExposedProps>;
