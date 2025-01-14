import { PropType, VNodeChild } from 'vue';
import { TreeMateOptions, CheckStrategy } from 'treemate';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { TreeDragInfo, TreeDropInfo, TreeOptions, Key, TreeOption, AllowDrop, RenderSwitcherIcon, TreeNodeProps } from './interface';
import { defaultAllowDrop } from './dnd';
export declare function createTreeMateOptions<T>(keyField: string, childrenField: string): TreeMateOptions<T, T, T>;
export declare type OnUpdateKeys = (value: Array<string & number>, option: Array<TreeOption | null>) => void;
export declare type OnUpdateKeysImpl = (value: Key[], option: Array<TreeOption | null>) => void;
declare type OnLoad = (node: TreeOption) => Promise<void>;
export declare const treeSharedProps: {
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>;
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedKeys: PropType<Key[]>;
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
};
declare const treeProps: {
    readonly internalTreeSelect: BooleanConstructor;
    readonly internalScrollable: BooleanConstructor;
    readonly internalScrollablePadding: StringConstructor;
    readonly internalRenderEmpty: PropType<() => VNodeChild>;
    readonly internalHighlightKeySet: PropType<Set<Key> | null>;
    readonly internalUnifySelectCheck: BooleanConstructor;
    readonly internalCheckboxFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: "all";
    };
    /**
     * @deprecated
     */
    readonly leafOnly: BooleanConstructor;
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>;
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedKeys: PropType<Key[]>;
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly showIrrelevantNodes: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly data: {
        readonly type: PropType<TreeOptions>;
        readonly default: () => never[];
    };
    readonly expandOnDragenter: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly cancelable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkable: BooleanConstructor;
    readonly draggable: BooleanConstructor;
    readonly blockNode: BooleanConstructor;
    readonly blockLine: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checkedKeys: PropType<Key[]>;
    readonly defaultCheckedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: PropType<Key[]>;
    readonly defaultSelectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly multiple: BooleanConstructor;
    readonly pattern: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onLoad: PropType<OnLoad>;
    readonly cascade: BooleanConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly allowDrop: {
        readonly type: PropType<AllowDrop>;
        readonly default: typeof defaultAllowDrop;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkboxPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly virtualScroll: BooleanConstructor;
    readonly watchProps: PropType<("defaultExpandedKeys" | "defaultCheckedKeys" | "defaultSelectedKeys")[]>;
    readonly renderLabel: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderPrefix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSuffix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
    readonly nodeProps: PropType<TreeNodeProps>;
    readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
    readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:selectedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
};
export declare type TreeProps = ExtractPublicPropTypes<typeof treeProps>;
declare const _default: import("vue").DefineComponent<{
    readonly internalTreeSelect: BooleanConstructor;
    readonly internalScrollable: BooleanConstructor;
    readonly internalScrollablePadding: StringConstructor;
    readonly internalRenderEmpty: PropType<() => VNodeChild>;
    readonly internalHighlightKeySet: PropType<Set<Key> | null>;
    readonly internalUnifySelectCheck: BooleanConstructor;
    readonly internalCheckboxFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: "all";
    };
    /**
     * @deprecated
     */
    readonly leafOnly: BooleanConstructor;
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>;
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedKeys: PropType<Key[]>;
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly showIrrelevantNodes: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly data: {
        readonly type: PropType<TreeOptions>;
        readonly default: () => never[];
    };
    readonly expandOnDragenter: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly cancelable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkable: BooleanConstructor;
    readonly draggable: BooleanConstructor;
    readonly blockNode: BooleanConstructor;
    readonly blockLine: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checkedKeys: PropType<Key[]>;
    readonly defaultCheckedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: PropType<Key[]>;
    readonly defaultSelectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly multiple: BooleanConstructor;
    readonly pattern: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onLoad: PropType<OnLoad>;
    readonly cascade: BooleanConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly allowDrop: {
        readonly type: PropType<AllowDrop>;
        readonly default: typeof defaultAllowDrop;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkboxPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly virtualScroll: BooleanConstructor;
    readonly watchProps: PropType<("defaultExpandedKeys" | "defaultCheckedKeys" | "defaultSelectedKeys")[]>;
    readonly renderLabel: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderPrefix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSuffix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
    readonly nodeProps: PropType<TreeNodeProps>;
    readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
    readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:selectedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedTheme: import("vue").ComputedRef<{
        common: {
            baseColor: string;
            primaryColor: string;
            primaryColorHover: string;
            primaryColorPressed: string;
            primaryColorSuppl: string;
            infoColor: string;
            infoColorHover: string;
            infoColorPressed: string;
            infoColorSuppl: string;
            successColor: string;
            successColorHover: string;
            successColorPressed: string;
            successColorSuppl: string;
            warningColor: string;
            warningColorHover: string;
            warningColorPressed: string;
            warningColorSuppl: string;
            errorColor: string;
            errorColorHover: string;
            errorColorPressed: string;
            errorColorSuppl: string;
            textColorBase: string;
            textColor1: string;
            textColor2: string;
            textColor3: string;
            textColorDisabled: string;
            placeholderColor: string;
            placeholderColorDisabled: string;
            iconColor: string;
            iconColorHover: string;
            iconColorPressed: string;
            iconColorDisabled: string;
            opacity1: string;
            opacity2: string;
            opacity3: string;
            opacity4: string;
            opacity5: string;
            dividerColor: string;
            borderColor: string;
            closeColor: string;
            closeColorHover: string;
            closeColorPressed: string;
            closeColorDisabled: string;
            clearColor: string;
            clearColorHover: string;
            clearColorPressed: string;
            scrollbarColor: string;
            scrollbarColorHover: string;
            scrollbarWidth: string;
            scrollbarHeight: string;
            scrollbarBorderRadius: string;
            progressRailColor: string;
            railColor: string;
            popoverColor: string;
            tableColor: string;
            cardColor: string;
            modalColor: string;
            bodyColor: string;
            tagColor: string;
            avatarColor: string;
            invertedColor: string;
            inputColor: string;
            codeColor: string;
            tabColor: string;
            actionColor: string;
            tableHeaderColor: string;
            hoverColor: string;
            tableColorHover: string;
            tableColorStriped: string;
            pressedColor: string;
            opacityDisabled: string;
            inputColorDisabled: string;
            buttonColor2: string;
            buttonColor2Hover: string;
            buttonColor2Pressed: string;
            boxShadow1: string;
            boxShadow2: string;
            boxShadow3: string;
            fontFamily: string;
            fontFamilyMono: string;
            fontWeight: string;
            fontWeightStrong: string;
            cubicBezierEaseInOut: string;
            cubicBezierEaseOut: string;
            cubicBezierEaseIn: string;
            borderRadius: string;
            borderRadiusSmall: string;
            fontSize: string;
            fontSizeTiny: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            lineHeight: string;
            heightTiny: string;
            heightSmall: string;
            heightMedium: string;
            heightLarge: string;
            heightHuge: string;
            name: "common";
        };
        self: {
            fontSize: string;
            nodeBorderRadius: string;
            nodeColorHover: string;
            nodeColorPressed: string;
            nodeColorActive: string;
            arrowColor: string;
            nodeTextColor: string;
            nodeTextColorDisabled: string;
            loadingColor: string;
            dropMarkColor: string;
        };
        peers: {
            Checkbox: import("../../_mixins").Theme<"Checkbox", {
                labelLineHeight: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderRadius: string;
                color: string;
                colorChecked: string;
                colorDisabled: string;
                colorDisabledChecked: string;
                colorTableHeader: string;
                colorTableHeaderModal: string;
                colorTableHeaderPopover: string;
                checkMarkColor: string;
                checkMarkColorDisabled: string;
                checkMarkColorDisabledChecked: string;
                border: string;
                borderDisabled: string;
                borderDisabledChecked: string;
                borderChecked: string;
                borderFocus: string;
                boxShadowFocus: string;
                textColor: string;
                textColorDisabled: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                labelPadding: string;
            }, any>;
            Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
                color: string;
                colorHover: string;
            }, any>;
            Empty: import("../../_mixins").Theme<"Empty", {
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                textColor: string;
                iconColor: string;
                extraTextColor: string;
                iconSizeSmall: string;
                iconSizeMedium: string;
                iconSizeLarge: string;
                iconSizeHuge: string;
            }, any>;
        };
        peerOverrides: {
            Checkbox?: {
                peers?: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            Scrollbar?: {
                peers?: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            Empty?: {
                peers?: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        };
    }>;
    fNodes: import("vue").ComputedRef<({
        key: import("treemate").Key;
        rawNode: {
            [x: string]: unknown;
            key?: Key | undefined;
            label?: string | undefined;
            checkboxDisabled?: boolean | undefined;
            disabled?: boolean | undefined;
            isLeaf?: boolean | undefined;
            children?: any[] | undefined;
            prefix?: (() => VNodeChild) | undefined;
            suffix?: (() => VNodeChild) | undefined;
        };
        level: number;
        index: number;
        isFirstChild: boolean;
        isLastChild: boolean;
        parent: {
            key: import("treemate").Key;
            rawNode: {
                [x: string]: unknown;
                key?: Key | undefined;
                label?: string | undefined;
                checkboxDisabled?: boolean | undefined;
                disabled?: boolean | undefined;
                isLeaf?: boolean | undefined;
                children?: any[] | undefined;
                prefix?: (() => VNodeChild) | undefined;
                suffix?: (() => VNodeChild) | undefined;
            };
            level: number;
            index: number;
            isFirstChild: boolean;
            isLastChild: boolean;
            parent: any | null;
            isLeaf: boolean;
            isGroup: boolean;
            ignored: boolean;
            shallowLoaded: boolean;
            disabled: boolean;
            siblings: any[];
            children?: any[] | undefined;
            getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
        } | null;
        isLeaf: boolean;
        isGroup: boolean;
        ignored: boolean;
        shallowLoaded: boolean;
        disabled: boolean;
        siblings: {
            key: import("treemate").Key;
            rawNode: {
                [x: string]: unknown;
                key?: Key | undefined;
                label?: string | undefined;
                checkboxDisabled?: boolean | undefined;
                disabled?: boolean | undefined;
                isLeaf?: boolean | undefined;
                children?: any[] | undefined;
                prefix?: (() => VNodeChild) | undefined;
                suffix?: (() => VNodeChild) | undefined;
            };
            level: number;
            index: number;
            isFirstChild: boolean;
            isLastChild: boolean;
            parent: any | null;
            isLeaf: boolean;
            isGroup: boolean;
            ignored: boolean;
            shallowLoaded: boolean;
            disabled: boolean;
            siblings: any[];
            children?: any[] | undefined;
            getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
        }[];
        children?: {
            key: import("treemate").Key;
            rawNode: {
                [x: string]: unknown;
                key?: Key | undefined;
                label?: string | undefined;
                checkboxDisabled?: boolean | undefined;
                disabled?: boolean | undefined;
                isLeaf?: boolean | undefined;
                children?: any[] | undefined;
                prefix?: (() => VNodeChild) | undefined;
                suffix?: (() => VNodeChild) | undefined;
            };
            level: number;
            index: number;
            isFirstChild: boolean;
            isLastChild: boolean;
            parent: any | null;
            isLeaf: boolean;
            isGroup: boolean;
            ignored: boolean;
            shallowLoaded: boolean;
            disabled: boolean;
            siblings: any[];
            children?: any[] | undefined;
            getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
        }[] | undefined;
        getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
        getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
        getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
        getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
        contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
    } | {
        __motion: true;
        height: number | undefined;
        mode: "collapse" | "expand";
        nodes: {
            key: import("treemate").Key;
            rawNode: {
                [x: string]: unknown;
                key?: Key | undefined;
                label?: string | undefined;
                checkboxDisabled?: boolean | undefined;
                disabled?: boolean | undefined;
                isLeaf?: boolean | undefined;
                children?: any[] | undefined;
                prefix?: (() => VNodeChild) | undefined;
                suffix?: (() => VNodeChild) | undefined;
            };
            level: number;
            index: number;
            isFirstChild: boolean;
            isLastChild: boolean;
            parent: {
                key: import("treemate").Key;
                rawNode: {
                    [x: string]: unknown;
                    key?: Key | undefined;
                    label?: string | undefined;
                    checkboxDisabled?: boolean | undefined;
                    disabled?: boolean | undefined;
                    isLeaf?: boolean | undefined;
                    children?: any[] | undefined;
                    prefix?: (() => VNodeChild) | undefined;
                    suffix?: (() => VNodeChild) | undefined;
                };
                level: number;
                index: number;
                isFirstChild: boolean;
                isLastChild: boolean;
                parent: any | null;
                isLeaf: boolean;
                isGroup: boolean;
                ignored: boolean;
                shallowLoaded: boolean;
                disabled: boolean;
                siblings: any[];
                children?: any[] | undefined;
                getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
            } | null;
            isLeaf: boolean;
            isGroup: boolean;
            ignored: boolean;
            shallowLoaded: boolean;
            disabled: boolean;
            siblings: {
                key: import("treemate").Key;
                rawNode: {
                    [x: string]: unknown;
                    key?: Key | undefined;
                    label?: string | undefined;
                    checkboxDisabled?: boolean | undefined;
                    disabled?: boolean | undefined;
                    isLeaf?: boolean | undefined;
                    children?: any[] | undefined;
                    prefix?: (() => VNodeChild) | undefined;
                    suffix?: (() => VNodeChild) | undefined;
                };
                level: number;
                index: number;
                isFirstChild: boolean;
                isLastChild: boolean;
                parent: any | null;
                isLeaf: boolean;
                isGroup: boolean;
                ignored: boolean;
                shallowLoaded: boolean;
                disabled: boolean;
                siblings: any[];
                children?: any[] | undefined;
                getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
            }[];
            children?: {
                key: import("treemate").Key;
                rawNode: {
                    [x: string]: unknown;
                    key?: Key | undefined;
                    label?: string | undefined;
                    checkboxDisabled?: boolean | undefined;
                    disabled?: boolean | undefined;
                    isLeaf?: boolean | undefined;
                    children?: any[] | undefined;
                    prefix?: (() => VNodeChild) | undefined;
                    suffix?: (() => VNodeChild) | undefined;
                };
                level: number;
                index: number;
                isFirstChild: boolean;
                isLastChild: boolean;
                parent: any | null;
                isLeaf: boolean;
                isGroup: boolean;
                ignored: boolean;
                shallowLoaded: boolean;
                disabled: boolean;
                siblings: any[];
                children?: any[] | undefined;
                getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
                contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
            }[] | undefined;
            getPrev: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getNext: (options?: import("treemate/lib/interface").GetPrevNextOptions | undefined) => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getParent: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            getChild: () => import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null;
            contains: (treeNode: import("treemate").TreeNode<TreeOption, TreeOption, TreeOption> | null | undefined) => boolean;
        }[];
    })[]>;
    aip: import("vue").Ref<boolean>;
    selfElRef: import("vue").Ref<HTMLDivElement | null>;
    virtualListInstRef: import("vue").Ref<{
        listElRef: HTMLElement;
        itemsElRef: HTMLElement | null;
        scrollTo: import("vueuc/lib/virtual-list/src/VirtualList").ScrollTo;
    } | null>;
    scrollbarInstRef: import("vue").Ref<{
        $el: HTMLElement;
        containerRef: HTMLElement | null;
        contentRef: HTMLElement | null;
        containerScrollTop: number;
        syncUnifiedContainer: () => void;
        scrollTo: import("../../_internal/scrollbar/src/ScrollBar").ScrollTo;
        scrollBy: import("../../_internal/scrollbar/src/ScrollBar").ScrollBy;
        sync: () => void;
        handleMouseEnterWrapper: () => void;
        handleMouseLeaveWrapper: () => void;
    } | null>;
    handleFocusout: (e: FocusEvent) => void;
    handleDragLeaveTree: (e: DragEvent) => void;
    handleScroll: () => void;
    getScrollContainer: () => HTMLElement | null | undefined;
    getScrollContent: () => HTMLElement | null | undefined;
    handleAfterEnter: () => void;
    handleResize: () => void;
    handleKeydown: (e: KeyboardEvent) => void;
    handleKeyup: (e: KeyboardEvent) => void;
    cssVars: import("vue").ComputedRef<{
        '--n-arrow-color': string;
        '--n-loading-color': string;
        '--n-bezier': string;
        '--n-font-size': string;
        '--n-node-border-radius': string;
        '--n-node-color-active': string;
        '--n-node-color-hover': string;
        '--n-node-color-pressed': string;
        '--n-node-text-color': string;
        '--n-node-text-color-disabled': string;
        '--n-drop-mark-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly internalTreeSelect: BooleanConstructor;
    readonly internalScrollable: BooleanConstructor;
    readonly internalScrollablePadding: StringConstructor;
    readonly internalRenderEmpty: PropType<() => VNodeChild>;
    readonly internalHighlightKeySet: PropType<Set<Key> | null>;
    readonly internalUnifySelectCheck: BooleanConstructor;
    readonly internalCheckboxFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: "all";
    };
    /**
     * @deprecated
     */
    readonly leafOnly: BooleanConstructor;
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>;
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedKeys: PropType<Key[]>;
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: "key";
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly showIrrelevantNodes: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly data: {
        readonly type: PropType<TreeOptions>;
        readonly default: () => never[];
    };
    readonly expandOnDragenter: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly cancelable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkable: BooleanConstructor;
    readonly draggable: BooleanConstructor;
    readonly blockNode: BooleanConstructor;
    readonly blockLine: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checkedKeys: PropType<Key[]>;
    readonly defaultCheckedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: PropType<Key[]>;
    readonly defaultSelectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly multiple: BooleanConstructor;
    readonly pattern: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onLoad: PropType<OnLoad>;
    readonly cascade: BooleanConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly allowDrop: {
        readonly type: PropType<AllowDrop>;
        readonly default: typeof defaultAllowDrop;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkboxPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly virtualScroll: BooleanConstructor;
    readonly watchProps: PropType<("defaultExpandedKeys" | "defaultCheckedKeys" | "defaultSelectedKeys")[]>;
    readonly renderLabel: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderPrefix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSuffix: PropType<({ option, checked, selected }: import("./interface").TreeRenderProps) => VNodeChild>;
    readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
    readonly nodeProps: PropType<TreeNodeProps>;
    readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
    readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly 'onUpdate:selectedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly theme: PropType<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Tree", {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    }, {
        Checkbox: import("../../_mixins").Theme<"Checkbox", {
            labelLineHeight: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            borderRadius: string;
            color: string;
            colorChecked: string;
            colorDisabled: string;
            colorDisabledChecked: string;
            colorTableHeader: string;
            colorTableHeaderModal: string;
            colorTableHeaderPopover: string;
            checkMarkColor: string;
            checkMarkColorDisabled: string;
            checkMarkColorDisabledChecked: string;
            border: string;
            borderDisabled: string;
            borderDisabledChecked: string;
            borderChecked: string;
            borderFocus: string;
            boxShadowFocus: string;
            textColor: string;
            textColorDisabled: string;
            sizeSmall: string;
            sizeMedium: string;
            sizeLarge: string;
            labelPadding: string;
        }, any>;
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
        Empty: import("../../_mixins").Theme<"Empty", {
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            textColor: string;
            iconColor: string;
            extraTextColor: string;
            iconSizeSmall: string;
            iconSizeMedium: string;
            iconSizeLarge: string;
            iconSizeHuge: string;
        }, any>;
    }>>>;
}>>, {
    pattern: string;
    data: TreeOptions;
    multiple: boolean;
    disabled: boolean;
    draggable: boolean;
    keyField: string;
    virtualScroll: boolean;
    checkable: boolean;
    animated: boolean;
    allowCheckingNotLoaded: boolean;
    cascade: boolean;
    indent: number;
    labelField: string;
    childrenField: string;
    internalScrollable: boolean;
    checkStrategy: CheckStrategy;
    leafOnly: boolean;
    defaultExpandedKeys: Key[];
    defaultExpandAll: boolean;
    cancelable: boolean;
    selectable: boolean;
    blockLine: boolean;
    checkboxPlacement: "left" | "right";
    defaultCheckedKeys: Key[];
    defaultSelectedKeys: Key[];
    internalTreeSelect: boolean;
    internalUnifySelectCheck: boolean;
    internalCheckboxFocusable: boolean;
    internalFocusable: boolean;
    showIrrelevantNodes: boolean;
    expandOnDragenter: boolean;
    blockNode: boolean;
    allowDrop: AllowDrop;
}>;
export default _default;
