import { h } from 'vue';
import { keep, keysOf } from '../../_utils';
// eslint-disable-next-line import/no-cycle
import { NMenuOptionGroup, menuItemGroupProps } from './MenuOptionGroup';
// eslint-disable-next-line import/no-cycle
import { NSubmenu, submenuProps } from './Submenu';
import { NMenuOption, menuItemProps } from './MenuOption';
import NMenuDivider from './MenuDivider';
const groupPropKeys = keysOf(menuItemGroupProps);
const itemPropKeys = keysOf(menuItemProps);
const submenuPropKeys = keysOf(submenuProps);
export function isIgnoredNode(rawNode) {
    return rawNode.type === 'divider' || rawNode.type === 'render';
}
export function isDividerNode(rawNode) {
    return rawNode.type === 'divider';
}
export function itemRenderer(tmNode, menuProps) {
    const { rawNode } = tmNode;
    if (isIgnoredNode(rawNode)) {
        if (isDividerNode(rawNode)) {
            return h(NMenuDivider, Object.assign({ key: tmNode.key }, rawNode.props));
        }
        return undefined;
    }
    const { labelField } = menuProps;
    const { key, level, isGroup } = tmNode;
    const props = Object.assign(Object.assign({}, rawNode), { title: (rawNode.title || rawNode[labelField]), extra: rawNode.titleExtra || rawNode.extra, key, internalKey: key, // since key can't be used as a prop
        level, root: level === 0, isGroup });
    if (tmNode.children) {
        if (tmNode.isGroup) {
            return h(NMenuOptionGroup, keep(props, groupPropKeys, { tmNodes: tmNode.children, key }));
        }
        return h(NSubmenu, keep(props, submenuPropKeys, {
            key,
            rawNodes: rawNode[menuProps.childrenField],
            tmNodes: tmNode.children,
            tmNode
        }));
    }
    else {
        return h(NMenuOption, keep(props, itemPropKeys, {
            key,
            tmNode
        }));
    }
}
