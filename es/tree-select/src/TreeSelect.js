import { h, defineComponent, ref, toRef, Transition, withDirectives, computed, provide, watchEffect } from 'vue';
import { VBinder, VFollower, VTarget } from 'vueuc';
import { useIsMounted, useMergedState } from 'vooks';
import { clickoutside } from 'vdirs';
import { createTreeMate } from 'treemate';
import { happensIn } from 'seemly';
import { createTreeMateOptions, treeSharedProps } from '../../tree/src/Tree';
import { NInternalSelection, NBaseFocusDetector } from '../../_internal';
import { NTree } from '../../tree';
import { NEmpty } from '../../empty';
import { useConfig, useFormItem, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { call, resolveSlot, resolveWrappedSlot, useAdjustedTo, useOnResize, warnOnce } from '../../_utils';
import { treeSelectLight } from '../styles';
import { treeSelectInjectionKey } from './interface';
import { treeOption2SelectOption, treeOption2SelectOptionWithPath } from './utils';
import style from './styles/index.cssr';
const props = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), { bordered: {
        type: Boolean,
        default: true
    }, cascade: Boolean, checkable: Boolean, clearable: Boolean, clearFilterAfterSelect: {
        type: Boolean,
        default: true
    }, consistentMenuWidth: {
        type: Boolean,
        default: true
    }, defaultShow: Boolean, defaultValue: {
        type: [String, Number, Array],
        default: null
    }, disabled: {
        type: Boolean,
        default: undefined
    }, filterable: Boolean, checkStrategy: {
        type: String,
        default: 'all'
    }, maxTagCount: [String, Number], multiple: Boolean, showPath: Boolean, separator: {
        type: String,
        default: ' / '
    }, options: {
        type: Array,
        default: () => []
    }, placeholder: String, placement: {
        type: String,
        default: 'bottom-start'
    }, show: {
        type: Boolean,
        default: undefined
    }, size: String, value: [String, Number, Array], to: useAdjustedTo.propTo, menuProps: Object, virtualScroll: {
        type: Boolean,
        default: true
    }, status: String }), treeSharedProps), { onBlur: Function, onFocus: Function, onLoad: Function, onUpdateShow: [Function, Array], onUpdateValue: [Function, Array], 'onUpdate:value': [Function, Array], 'onUpdate:show': [Function, Array], 
    /**
     * @deprecated
     */
    leafOnly: Boolean });
export default defineComponent({
    name: 'TreeSelect',
    props,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.leafOnly) {
                    warnOnce('tree-select', '`leaf-only` is deprecated, please use `check-strategy="child"` instead.');
                }
            });
        }
        const followerInstRef = ref(null);
        const triggerInstRef = ref(null);
        const treeInstRef = ref(null);
        const menuElRef = ref(null);
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
        const { localeRef } = useLocale('Select');
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef, nTriggerFormBlur, nTriggerFormChange, nTriggerFormFocus, nTriggerFormInput } = useFormItem(props);
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
        const uncontrolledShowRef = ref(props.defaultShow);
        const controlledShowRef = toRef(props, 'show');
        const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
        const patternRef = ref('');
        const mergedFilterRef = computed(() => {
            const { filter } = props;
            if (filter)
                return filter;
            const { labelField } = props;
            return (pattern, node) => {
                if (!pattern.length)
                    return true;
                return node[labelField]
                    .toLowerCase()
                    .includes(pattern.toLowerCase());
            };
        });
        // used to resolve selected options
        const dataTreeMateRef = computed(() => createTreeMate(props.options, createTreeMateOptions(props.keyField, props.childrenField)));
        const { value: initMergedValue } = mergedValueRef;
        const pendingNodeKeyRef = ref(props.checkable
            ? null
            : Array.isArray(initMergedValue) && initMergedValue.length
                ? initMergedValue[initMergedValue.length - 1]
                : null);
        const mergedCascadeRef = computed(() => {
            return props.multiple && props.cascade && props.checkable;
        });
        // The same logic as tree, now it's not that complex so I don't extract a
        // function to reuse it.
        const uncontrolledExpandedKeysRef = ref(props.defaultExpandAll
            ? [] // leave it, n-tree will handle it
            : props.defaultExpandedKeys || props.expandedKeys);
        const controlledExpandedKeysRef = toRef(props, 'expandedKeys');
        const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
        const focusedRef = ref(false);
        const mergedPlaceholderRef = computed(() => {
            const { placeholder } = props;
            if (placeholder !== undefined)
                return placeholder;
            return localeRef.value.placeholder;
        });
        const treeSelectedKeysRef = computed(() => {
            if (props.checkable)
                return [];
            return treeCheckedKeysRef.value;
        });
        const treeCheckedKeysRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (props.multiple) {
                if (Array.isArray(mergedValue))
                    return mergedValue;
                else
                    return [];
            }
            else {
                if (mergedValue === null || Array.isArray(mergedValue))
                    return [];
                else
                    return [mergedValue];
            }
        });
        const selectedOptionRef = computed(() => {
            const { multiple, showPath, separator, labelField } = props;
            if (multiple)
                return null;
            const { value: mergedValue } = mergedValueRef;
            if (!Array.isArray(mergedValue) && mergedValue !== null) {
                const { value: treeMate } = dataTreeMateRef;
                const tmNode = treeMate.getNode(mergedValue);
                if (tmNode !== null) {
                    return showPath
                        ? treeOption2SelectOptionWithPath(tmNode, treeMate.getPath(mergedValue).treeNodePath, separator, labelField)
                        : treeOption2SelectOption(tmNode, labelField);
                }
            }
            return null;
        });
        const selectedOptionsRef = computed(() => {
            const { multiple, showPath, separator } = props;
            if (!multiple)
                return null;
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const res = [];
                const { value: treeMate } = dataTreeMateRef;
                const { checkedKeys } = treeMate.getCheckedKeys(mergedValue, {
                    checkStrategy: props.checkStrategy,
                    cascade: mergedCascadeRef.value,
                    allowNotLoaded: props.allowCheckingNotLoaded
                });
                const { labelField } = props;
                checkedKeys.forEach((value) => {
                    const tmNode = treeMate.getNode(value);
                    if (tmNode !== null) {
                        res.push(showPath
                            ? treeOption2SelectOptionWithPath(tmNode, treeMate.getPath(value).treeNodePath, separator, labelField)
                            : treeOption2SelectOption(tmNode, labelField));
                    }
                });
                return res;
            }
            return [];
        });
        const menuPaddingRef = computed(() => {
            const { self: { menuPadding } } = themeRef.value;
            return menuPadding;
        });
        function focusSelection() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
        function focusSelectionInput() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
        }
        function doUpdateShow(value) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow)
                call(onUpdateShow, value);
            if (_onUpdateShow)
                call(_onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        function doUpdateValue(value, option) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue)
                call(onUpdateValue, value, option);
            if (_onUpdateValue) {
                call(_onUpdateValue, value, option);
            }
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function doUpdateIndeterminateKeys(value, option) {
            const { onUpdateIndeterminateKeys, 'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys } = props;
            if (onUpdateIndeterminateKeys) {
                call(onUpdateIndeterminateKeys, value, option);
            }
            if (_onUpdateIndeterminateKeys) {
                call(_onUpdateIndeterminateKeys, value, option);
            }
        }
        function doUpdateExpandedKeys(keys, option) {
            const { onUpdateExpandedKeys, 'onUpdate:expandedKeys': _onUpdateExpandedKeys } = props;
            if (onUpdateExpandedKeys) {
                call(onUpdateExpandedKeys, keys, option);
            }
            if (_onUpdateExpandedKeys) {
                call(_onUpdateExpandedKeys, keys, option);
            }
            uncontrolledExpandedKeysRef.value = keys;
        }
        function doFocus(e) {
            const { onFocus } = props;
            if (onFocus)
                onFocus(e);
            nTriggerFormFocus();
        }
        function doBlur(e) {
            closeMenu();
            const { onBlur } = props;
            if (onBlur)
                onBlur(e);
            nTriggerFormBlur();
        }
        function closeMenu() {
            doUpdateShow(false);
        }
        function openMenu() {
            if (!mergedDisabledRef.value) {
                patternRef.value = '';
                doUpdateShow(true);
                if (props.filterable) {
                    focusSelectionInput();
                }
            }
        }
        function handleMenuLeave() {
            patternRef.value = '';
        }
        function handleMenuClickoutside(e) {
            var _a;
            if (mergedShowRef.value) {
                if (!((_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.target))) {
                    // outside select, don't need to return focus
                    closeMenu();
                }
            }
        }
        function handleTriggerClick() {
            if (mergedDisabledRef.value)
                return;
            if (!mergedShowRef.value) {
                openMenu();
            }
            else {
                if (!props.filterable) {
                    // already focused, don't need to return focus
                    closeMenu();
                }
            }
        }
        function getOptionsByKeys(keys) {
            const { value: { getNode } } = dataTreeMateRef;
            return keys.map((key) => { var _a; return ((_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode) || null; });
        }
        function handleUpdateCheckedKeys(keys) {
            const options = getOptionsByKeys(keys);
            if (props.multiple) {
                doUpdateValue(keys, options);
            }
            else {
                keys.length
                    ? doUpdateValue(keys[0], options[0] || null)
                    : doUpdateValue(null, null);
                closeMenu();
                if (!props.filterable) {
                    // Currently it is not necessary. However if there is an action slot,
                    // it will be useful. So just leave it here.
                    focusSelection();
                }
            }
            if (props.filterable) {
                focusSelectionInput();
                if (props.clearFilterAfterSelect)
                    patternRef.value = '';
            }
        }
        function handleUpdateIndeterminateKeys(keys) {
            if (props.checkable) {
                doUpdateIndeterminateKeys(keys, getOptionsByKeys(keys));
            }
        }
        function handleTriggerFocus(e) {
            var _a;
            if ((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
                return;
            focusedRef.value = true;
            doFocus(e);
        }
        function handleTriggerBlur(e) {
            var _a;
            if ((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
                return;
            focusedRef.value = false;
            doBlur(e);
        }
        function handleMenuFocusin(e) {
            var _a, _b, _c;
            if (((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) ||
                ((_c = (_b = triggerInstRef.value) === null || _b === void 0 ? void 0 : _b.$el) === null || _c === void 0 ? void 0 : _c.contains(e.relatedTarget))) {
                return;
            }
            focusedRef.value = true;
            doFocus(e);
        }
        function handleMenuFocusout(e) {
            var _a, _b, _c;
            if (((_a = menuElRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) ||
                ((_c = (_b = triggerInstRef.value) === null || _b === void 0 ? void 0 : _b.$el) === null || _c === void 0 ? void 0 : _c.contains(e.relatedTarget))) {
                return;
            }
            focusedRef.value = false;
            doBlur(e);
        }
        function handleClear(e) {
            e.stopPropagation();
            const { multiple } = props;
            if (!multiple && props.filterable) {
                closeMenu();
            }
            if (multiple) {
                doUpdateValue([], []);
            }
            else {
                doUpdateValue(null, null);
            }
        }
        function handleDeleteOption(option) {
            // only work for multiple mode
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const { value: treeMate } = dataTreeMateRef;
                // all visible checked keys
                const { checkedKeys: checkedKeysValue } = treeMate.getCheckedKeys(mergedValue, {
                    cascade: mergedCascadeRef.value,
                    allowNotLoaded: props.allowCheckingNotLoaded
                });
                const index = checkedKeysValue.findIndex((key) => key === option.value);
                if (~index) {
                    if (props.checkable) {
                        const { checkedKeys } = treeMate.uncheck(option.value, checkedKeysValue, {
                            checkStrategy: props.checkStrategy,
                            cascade: mergedCascadeRef.value,
                            allowNotLoaded: props.allowCheckingNotLoaded
                        });
                        doUpdateValue(checkedKeys, getOptionsByKeys(checkedKeys));
                    }
                    else {
                        const nextValue = Array.from(checkedKeysValue);
                        nextValue.splice(index, 1);
                        doUpdateValue(nextValue, getOptionsByKeys(nextValue));
                    }
                }
            }
        }
        function handlePatternInput(e) {
            const { value } = e.target;
            patternRef.value = value;
        }
        function handleKeydown(e) {
            const { value: treeInst } = treeInstRef;
            if (treeInst) {
                treeInst.handleKeydown(e);
            }
        }
        function handleKeyup(e) {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                if (mergedShowRef.value) {
                    treeHandleKeyup(e);
                    if (!props.multiple) {
                        closeMenu();
                        focusSelection();
                    }
                }
                else {
                    openMenu();
                }
                e.preventDefault();
            }
            else if (e.code === 'Escape') {
                closeMenu();
                focusSelection();
            }
            else {
                if (mergedShowRef.value) {
                    treeHandleKeyup(e);
                }
                else if (e.code === 'ArrowDown') {
                    openMenu();
                }
            }
        }
        function treeHandleKeyup(e) {
            const { value: treeInst } = treeInstRef;
            if (treeInst) {
                treeInst.handleKeyup(e);
            }
        }
        function handleTabOut() {
            closeMenu();
            focusSelection();
        }
        function handleMenuMousedown(e) {
            // If there's an action slot later, we need to check if mousedown happens
            // in action panel
            if (!happensIn(e, 'action'))
                e.preventDefault();
        }
        provide(treeSelectInjectionKey, {
            pendingNodeKeyRef,
            dataTreeMate: dataTreeMateRef
        });
        function handleTriggerOrMenuResize() {
            var _a;
            if (!mergedShowRef.value)
                return;
            (_a = followerInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
        }
        useOnResize(menuElRef, handleTriggerOrMenuResize);
        const themeRef = useTheme('TreeSelect', '-tree-select', style, treeSelectLight, props, mergedClsPrefixRef);
        const cssVarsRef = computed(() => {
            const { common: { cubicBezierEaseInOut }, self: { menuBoxShadow, menuBorderRadius, menuColor, menuHeight, actionPadding, actionDividerColor, actionTextColor } } = themeRef.value;
            return {
                '--n-menu-box-shadow': menuBoxShadow,
                '--n-menu-border-radius': menuBorderRadius,
                '--n-menu-color': menuColor,
                '--n-menu-height': menuHeight,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-action-padding': actionPadding,
                '--n-action-text-color': actionTextColor,
                '--n-action-divider-color': actionDividerColor
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('tree-select', undefined, cssVarsRef, props)
            : undefined;
        return {
            menuElRef,
            mergedStatus: mergedStatusRef,
            triggerInstRef,
            followerInstRef,
            treeInstRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedValue: mergedValueRef,
            mergedShow: mergedShowRef,
            namespace: namespaceRef,
            adjustedTo: useAdjustedTo(props),
            isMounted: useIsMounted(),
            focused: focusedRef,
            menuPadding: menuPaddingRef,
            mergedPlaceholder: mergedPlaceholderRef,
            mergedExpandedKeys: mergedExpandedKeysRef,
            treeSelectedKeys: treeSelectedKeysRef,
            treeCheckedKeys: treeCheckedKeysRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            selectedOption: selectedOptionRef,
            selectedOptions: selectedOptionsRef,
            pattern: patternRef,
            pendingNodeKey: pendingNodeKeyRef,
            mergedCascade: mergedCascadeRef,
            mergedFilter: mergedFilterRef,
            handleTriggerOrMenuResize,
            doUpdateExpandedKeys,
            handleMenuLeave,
            handleTriggerClick,
            handleMenuClickoutside,
            handleUpdateCheckedKeys,
            handleUpdateIndeterminateKeys,
            handleTriggerFocus,
            handleTriggerBlur,
            handleMenuFocusin,
            handleMenuFocusout,
            handleClear,
            handleDeleteOption,
            handlePatternInput,
            handleKeydown,
            handleKeyup,
            handleTabOut,
            handleMenuMousedown,
            mergedTheme: themeRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { mergedTheme, mergedClsPrefix, $slots } = this;
        return (h("div", { class: `${mergedClsPrefix}-tree-select` },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () => (h(NInternalSelection, { ref: "triggerInstRef", onResize: this.handleTriggerOrMenuResize, status: this.mergedStatus, focused: this.focused, clsPrefix: mergedClsPrefix, theme: mergedTheme.peers.InternalSelection, themeOverrides: mergedTheme.peerOverrides.InternalSelection, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, size: this.mergedSize, bordered: this.bordered, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, active: this.mergedShow, multiple: this.multiple, maxTagCount: this.maxTagCount, showArrow: true, filterable: this.filterable, clearable: this.clearable, pattern: this.pattern, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onClick: this.handleTriggerClick, onFocus: this.handleTriggerFocus, onBlur: this.handleTriggerBlur, onDeleteOption: this.handleDeleteOption, onKeydown: this.handleKeydown, onKeyup: this.handleKeyup }))
                    }),
                    h(VFollower, { ref: "followerInstRef", show: this.mergedShow, placement: this.placement, to: this.adjustedTo, teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? 'target' : undefined, minWidth: "target" }, {
                        default: () => (h(Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onLeave: this.handleMenuLeave }, {
                            default: () => {
                                var _a;
                                if (!this.mergedShow)
                                    return null;
                                const { mergedClsPrefix, checkable, multiple, menuProps, options } = this;
                                (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                                return withDirectives(h("div", Object.assign({}, menuProps, { class: [
                                        `${mergedClsPrefix}-tree-select-menu`,
                                        menuProps === null || menuProps === void 0 ? void 0 : menuProps.class,
                                        this.themeClass
                                    ], ref: "menuElRef", style: [
                                        (menuProps === null || menuProps === void 0 ? void 0 : menuProps.style) || '',
                                        this.cssVars
                                    ], tabindex: 0, onMousedown: this.handleMenuMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown, onFocusin: this.handleMenuFocusin, onFocusout: this.handleMenuFocusout }),
                                    h(NTree, { ref: "treeInstRef", blockLine: true, allowCheckingNotLoaded: this.allowCheckingNotLoaded, showIrrelevantNodes: false, animated: false, pattern: this.pattern, filter: this.mergedFilter, data: options, cancelable: multiple, labelField: this.labelField, keyField: this.keyField, childrenField: this.childrenField, theme: mergedTheme.peers.Tree, themeOverrides: mergedTheme.peerOverrides.Tree, defaultExpandAll: this.defaultExpandAll, defaultExpandedKeys: this.defaultExpandedKeys, expandedKeys: this.mergedExpandedKeys, checkedKeys: this.treeCheckedKeys, selectedKeys: this.treeSelectedKeys, checkable: checkable, checkStrategy: this.checkStrategy, cascade: this.mergedCascade, leafOnly: this.leafOnly, multiple: this.multiple, virtualScroll: this.consistentMenuWidth && this.virtualScroll, internalTreeSelect: true, internalUnifySelectCheck: true, internalScrollable: true, internalScrollablePadding: this.menuPadding, internalFocusable: false, internalCheckboxFocusable: false, internalRenderEmpty: () => (h("div", { class: `${mergedClsPrefix}-tree-select-menu__empty` }, resolveSlot($slots.empty, () => [
                                            h(NEmpty, { theme: mergedTheme.peers.Empty, themeOverrides: mergedTheme.peerOverrides.Empty })
                                        ]))), onLoad: this.onLoad, onUpdateCheckedKeys: this.handleUpdateCheckedKeys, onUpdateIndeterminateKeys: this.handleUpdateIndeterminateKeys, onUpdateExpandedKeys: this.doUpdateExpandedKeys }),
                                    resolveWrappedSlot($slots.action, (children) => {
                                        return children ? (h("div", { class: `${mergedClsPrefix}-tree-select-menu__action`, "data-action": true }, children)) : null;
                                    }),
                                    h(NBaseFocusDetector, { onFocus: this.handleTabOut })), [
                                    [
                                        clickoutside,
                                        this.handleMenuClickoutside,
                                        undefined,
                                        { capture: true }
                                    ]
                                ]);
                            }
                        }))
                    })
                ]
            })));
    }
});
