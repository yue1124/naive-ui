import { PropType, Ref, HTMLAttributes } from 'vue';
import { FollowerPlacement } from 'vueuc';
import { TreeNode } from 'treemate';
export interface NDropdownOptionInjection {
    enteringSubmenuRef: Ref<boolean>;
}
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<import("../..").MenuOption, import("../..").MenuGroupOption, import("../../menu/src/interface").MenuIgnoredOption>>;
        required: true;
    };
    parentKey: {
        type: PropType<string | number | null>;
        default: null;
    };
    placement: {
        type: PropType<FollowerPlacement>;
        default: string;
    };
    props: PropType<HTMLAttributes>;
}, {
    labelField: Ref<string>;
    renderLabel: Ref<import("./interface").RenderLabelImpl | undefined>;
    renderIcon: Ref<import("./interface").RenderIconImpl | undefined>;
    siblingHasIcon: Ref<boolean>;
    siblingHasSubmenu: Ref<boolean>;
    animated: Ref<boolean>;
    mergedShowSubmenu: import("vue").ComputedRef<boolean>;
    rawNode: import("vue").ComputedRef<import("../..").MenuOption | import("../..").MenuGroupOption | import("../../menu/src/interface").MenuIgnoredOption>;
    hasSubmenu: import("vue").ComputedRef<boolean>;
    pending: import("vue").ComputedRef<boolean>;
    childActive: import("vue").ComputedRef<boolean>;
    active: import("vue").ComputedRef<boolean>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
    handleMouseMove: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: (e: MouseEvent) => void;
    handleSubmenuBeforeEnter: () => void;
    handleSubmenuAfterEnter: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<import("../..").MenuOption, import("../..").MenuGroupOption, import("../../menu/src/interface").MenuIgnoredOption>>;
        required: true;
    };
    parentKey: {
        type: PropType<string | number | null>;
        default: null;
    };
    placement: {
        type: PropType<FollowerPlacement>;
        default: string;
    };
    props: PropType<HTMLAttributes>;
}>>, {
    placement: FollowerPlacement;
    parentKey: string | number | null;
}>;
export default _default;