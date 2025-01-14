import { PropType, Ref } from 'vue';
import { TreeNode } from 'treemate';
import type { SelectBaseOption } from '../../../select/src/interface';
import { RenderLabelImpl, RenderOptionImpl } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>, SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>, SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>>>;
        required: true;
    };
}, {
    multiple: Ref<boolean>;
    isGrouped: import("vue").ComputedRef<boolean | null>;
    isPending: import("vue").ComputedRef<boolean>;
    isSelected: import("vue").ComputedRef<boolean>;
    renderLabel: Ref<RenderLabelImpl | undefined>;
    renderOption: Ref<RenderOptionImpl | undefined>;
    handleMouseMove: (e: MouseEvent) => void;
    handleMouseEnter: (e: MouseEvent) => void;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>, SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>, SelectBaseOption<string | number, string | ((option: SelectBaseOption<string | number, string | any>, selected: boolean) => import("vue").VNodeChild)>>>;
        required: true;
    };
}>>, {}>;
export default _default;
