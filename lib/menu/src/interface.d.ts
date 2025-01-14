import { TreeNode } from 'treemate';
import { VNodeChild, HTMLAttributes } from 'vue';
export declare type Key = string | number;
export interface MenuOptionSharedPart {
    key?: Key;
    disabled?: boolean;
    icon?: () => VNodeChild;
    children?: Array<MenuOption | MenuGroupOption | MenuDividerOption>;
    extra?: string | (() => VNodeChild);
    props?: HTMLAttributes;
    [key: string]: unknown;
    /** @deprecated */
    titleExtra?: string | (() => VNodeChild);
}
/**
 * @private
 */
export declare type MenuIgnoredOption = MenuDividerOption | MenuRenderOption;
export interface MenuDividerOption {
    type: 'divider';
    key?: Key;
    props?: HTMLAttributes;
    [key: string]: unknown;
}
export interface MenuRenderOption {
    type: 'render';
    key?: Key;
    props?: HTMLAttributes;
    render?: () => VNodeChild;
    [key: string]: unknown;
}
export interface MenuGroupOptionBase extends MenuOptionSharedPart {
    type: 'group';
    children: Array<MenuOption | MenuDividerOption>;
}
export declare type MenuOption = (MenuOptionSharedPart & {
    /** @deprecated */
    title?: string | (() => VNodeChild);
}) | (MenuOptionSharedPart & {
    label?: string | (() => VNodeChild);
});
export declare type MenuGroupOption = (MenuGroupOptionBase & {
    /** @deprecated */
    title?: string | (() => VNodeChild);
}) | (MenuGroupOptionBase & {
    label?: string | (() => VNodeChild);
});
export declare type MenuMixedOption = MenuDividerOption | MenuOption | MenuGroupOption;
export declare type TmNode = TreeNode<MenuOption, MenuGroupOption, MenuIgnoredOption>;
export declare type OnUpdateValue = (value: string & number & (string | number), item: MenuOption) => void;
export declare type OnUpdateKeys = (keys: string[] & number[] & Array<string | number>) => void;
export declare type OnUpdateValueImpl = (value: string | number | (string | number), item: MenuOption) => void;
export declare type OnUpdateKeysImpl = (keys: string[] | number[] | Array<string | number>) => void;
export declare type MenuNodeProps = (option: MenuOption | MenuGroupOption) => HTMLAttributes;
export interface MenuInst {
    showOption: (key?: Key) => void;
}
