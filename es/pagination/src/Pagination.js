/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { h, nextTick, computed, ref, toRef, defineComponent, watchEffect } from 'vue';
import { useMergedState } from 'vooks';
import { NSelect } from '../../select';
import { NInput } from '../../input';
import { NBaseIcon } from '../../_internal';
import { FastForwardIcon, FastBackwardIcon, BackwardIcon, ForwardIcon, MoreIcon } from '../../_internal/icons';
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { paginationLight } from '../styles';
import { pageItems } from './utils';
import style from './styles/index.cssr';
import { call, resolveSlot, warn, warnOnce } from '../../_utils';
import useRtl from '../../_mixins/use-rtl';
const paginationProps = Object.assign(Object.assign({}, useTheme.props), { page: Number, defaultPage: {
        type: Number,
        default: 1
    }, itemCount: Number, pageCount: Number, defaultPageCount: {
        type: Number,
        default: 1
    }, showSizePicker: Boolean, pageSize: Number, defaultPageSize: {
        type: Number,
        default: 10
    }, pageSizes: {
        type: Array,
        default() {
            return [10];
        }
    }, showQuickJumper: Boolean, disabled: Boolean, pageSlot: {
        type: Number,
        default: 9
    }, prev: Function, next: Function, prefix: Function, suffix: Function, label: Function, 'onUpdate:page': [Function, Array], onUpdatePage: [Function, Array], 'onUpdate:pageSize': [Function, Array], onUpdatePageSize: [Function, Array], 
    /** @deprecated */
    onPageSizeChange: [Function, Array], 
    /** @deprecated */
    onChange: [Function, Array] });
export default defineComponent({
    name: 'Pagination',
    props: paginationProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.pageCount !== undefined && props.itemCount !== undefined) {
                    warn('pagination', "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect.");
                }
                if (props.onPageSizeChange) {
                    warnOnce('pagination', '`on-page-size-change` is deprecated, please use `on-update:page-size` instead.');
                }
                if (props.onChange) {
                    warnOnce('pagination', '`on-change` is deprecated, please use `on-update:page` instead.');
                }
            });
        }
        const { mergedComponentPropsRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
        const themeRef = useTheme('Pagination', '-pagination', style, paginationLight, props, mergedClsPrefixRef);
        const { localeRef } = useLocale('Pagination');
        const selfRef = ref(null);
        const jumperRef = ref(null);
        const jumperValueRef = ref('');
        const uncontrolledPageRef = ref(props.defaultPage);
        const uncontrolledPageSizeRef = ref(props.defaultPageSize);
        const mergedPageRef = useMergedState(toRef(props, 'page'), uncontrolledPageRef);
        const mergedPageSizeRef = useMergedState(toRef(props, 'pageSize'), uncontrolledPageSizeRef);
        const mergedPageCountRef = computed(() => {
            // item count has high priority, for it can affect prefix slot rendering
            const { itemCount } = props;
            if (itemCount !== undefined) {
                return Math.max(1, Math.ceil(itemCount / mergedPageSizeRef.value));
            }
            const { pageCount } = props;
            if (pageCount !== undefined)
                return pageCount;
            return 1;
        });
        const showFastForwardRef = ref(false);
        const showFastBackwardRef = ref(false);
        const pageSizeOptionsRef = computed(() => {
            const suffix = localeRef.value.selectionSuffix;
            return props.pageSizes.map((size) => {
                if (typeof size === 'number') {
                    return {
                        label: `${size} / ${suffix}`,
                        value: size
                    };
                }
                else {
                    return size;
                }
            });
        });
        const inputSizeRef = computed(() => {
            var _a, _b;
            return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.inputSize) || 'small';
        });
        const selectSizeRef = computed(() => {
            var _a, _b;
            return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.selectSize) || 'small';
        });
        const startIndexRef = computed(() => {
            return (mergedPageRef.value - 1) * mergedPageSizeRef.value;
        });
        const endIndexRef = computed(() => {
            const endIndex = mergedPageRef.value * mergedPageSizeRef.value - 1;
            const { itemCount } = props;
            if (itemCount !== undefined) {
                return endIndex > itemCount ? itemCount : endIndex;
            }
            return endIndex;
        });
        const mergedItemCountRef = computed(() => {
            const { itemCount } = props;
            if (itemCount !== undefined)
                return itemCount;
            return (props.pageCount || 1) * mergedPageSizeRef.value;
        });
        const rtlEnabledRef = useRtl('Pagination', mergedRtlRef, mergedClsPrefixRef);
        const disableTransitionOneTick = () => {
            void nextTick(() => {
                var _a;
                const { value: selfEl } = selfRef;
                if (!selfEl)
                    return;
                selfEl.classList.add('transition-disabled');
                void ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
                selfEl.classList.remove('transition-disabled');
            });
        };
        function doUpdatePage(page) {
            if (page === mergedPageRef.value)
                return;
            const { 'onUpdate:page': _onUpdatePage, onUpdatePage, onChange } = props;
            if (_onUpdatePage)
                call(_onUpdatePage, page);
            if (onUpdatePage)
                call(onUpdatePage, page);
            // deprecated
            if (onChange)
                call(onChange, page);
            uncontrolledPageRef.value = page;
        }
        function doUpdatePageSize(pageSize) {
            if (pageSize === mergedPageSizeRef.value)
                return;
            const { 'onUpdate:pageSize': _onUpdatePageSize, onUpdatePageSize, onPageSizeChange } = props;
            if (_onUpdatePageSize)
                call(_onUpdatePageSize, pageSize);
            if (onUpdatePageSize)
                call(onUpdatePageSize, pageSize);
            // deprecated
            if (onPageSizeChange)
                call(onPageSizeChange, pageSize);
            uncontrolledPageSizeRef.value = pageSize;
            // update new page when overflows.
            // we may have different update strategy, but i've no time to impl it
            if (mergedPageCountRef.value < mergedPageRef.value) {
                doUpdatePage(mergedPageCountRef.value);
            }
        }
        function forward() {
            if (props.disabled)
                return;
            const page = Math.min(mergedPageRef.value + 1, mergedPageCountRef.value);
            doUpdatePage(page);
        }
        function backward() {
            if (props.disabled)
                return;
            const page = Math.max(mergedPageRef.value - 1, 1);
            doUpdatePage(page);
        }
        function fastForward() {
            if (props.disabled)
                return;
            const page = Math.min(mergedPageRef.value + (props.pageSlot - 4), mergedPageCountRef.value);
            doUpdatePage(page);
        }
        function fastBackward() {
            if (props.disabled)
                return;
            const page = Math.max(mergedPageRef.value - (props.pageSlot - 4), 1);
            doUpdatePage(page);
        }
        function handleSizePickerChange(value) {
            doUpdatePageSize(value);
        }
        function handleQuickJumperKeyUp(e) {
            var _a;
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                const page = parseInt(jumperValueRef.value);
                if (!Number.isNaN(page) &&
                    page >= 1 &&
                    page <= mergedPageCountRef.value) {
                    doUpdatePage(page);
                    jumperValueRef.value = '';
                    (_a = jumperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
                }
            }
        }
        function handlePageItemClick(pageItem) {
            if (props.disabled)
                return;
            switch (pageItem.type) {
                case 'page':
                    doUpdatePage(pageItem.label);
                    break;
                case 'fast-backward':
                    fastBackward();
                    break;
                case 'fast-forward':
                    fastForward();
                    break;
            }
        }
        function handlePageItemMouseEnter(pageItem) {
            if (props.disabled)
                return;
            switch (pageItem.type) {
                case 'fast-backward':
                    showFastBackwardRef.value = true;
                    break;
                case 'fast-forward':
                    showFastForwardRef.value = true;
                    break;
                default:
                    return;
            }
            disableTransitionOneTick();
        }
        function handlePageItemMouseLeave(pageItem) {
            if (props.disabled)
                return;
            switch (pageItem.type) {
                case 'fast-backward':
                    showFastBackwardRef.value = false;
                    break;
                case 'fast-forward':
                    showFastForwardRef.value = false;
                    break;
                default:
                    return;
            }
            disableTransitionOneTick();
        }
        function handleJumperInput(value) {
            jumperValueRef.value = value;
        }
        watchEffect(() => {
            void mergedPageRef.value;
            void mergedPageSizeRef.value;
            disableTransitionOneTick();
        });
        const cssVarsRef = computed(() => {
            const { self: { itemSize, itemPadding, itemMargin, itemMarginRtl, inputWidth, selectWidth, inputMargin, inputMarginRtl, selectMargin, buttonBorder, buttonBorderHover, buttonBorderPressed, buttonIconColor, buttonIconColorHover, buttonIconColorPressed, buttonIconSize, itemTextColor, itemTextColorHover, itemTextColorPressed, itemTextColorActive, itemTextColorDisabled, itemColor, itemColorHover, itemColorPressed, itemColorActive, itemColorActiveHover, itemColorDisabled, itemBorder, itemBorderHover, itemBorderPressed, itemBorderActive, itemBorderDisabled, itemBorderRadius, itemFontSize, jumperFontSize, jumperTextColor, jumperTextColorDisabled, prefixMargin, suffixMargin, buttonColor, buttonColorHover, buttonColorPressed }, common: { cubicBezierEaseInOut } } = themeRef.value;
            return {
                '--n-prefix-margin': prefixMargin,
                '--n-suffix-margin': suffixMargin,
                '--n-item-font-size': itemFontSize,
                '--n-select-width': selectWidth,
                '--n-select-margin': selectMargin,
                '--n-input-width': inputWidth,
                '--n-input-margin': inputMargin,
                '--n-input-margin-rtl': inputMarginRtl,
                '--n-item-size': itemSize,
                '--n-item-text-color': itemTextColor,
                '--n-item-text-color-disabled': itemTextColorDisabled,
                '--n-item-text-color-hover': itemTextColorHover,
                '--n-item-text-color-active': itemTextColorActive,
                '--n-item-text-color-pressed': itemTextColorPressed,
                '--n-item-color': itemColor,
                '--n-item-color-hover': itemColorHover,
                '--n-item-color-disabled': itemColorDisabled,
                '--n-item-color-active': itemColorActive,
                '--n-item-color-active-hover': itemColorActiveHover,
                '--n-item-color-pressed': itemColorPressed,
                '--n-item-border': itemBorder,
                '--n-item-border-hover': itemBorderHover,
                '--n-item-border-disabled': itemBorderDisabled,
                '--n-item-border-active': itemBorderActive,
                '--n-item-border-pressed': itemBorderPressed,
                '--n-item-padding': itemPadding,
                '--n-item-border-radius': itemBorderRadius,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-jumper-font-size': jumperFontSize,
                '--n-jumper-text-color': jumperTextColor,
                '--n-jumper-text-color-disabled': jumperTextColorDisabled,
                '--n-item-margin': itemMargin,
                '--n-item-margin-rtl': itemMarginRtl,
                '--n-button-icon-size': buttonIconSize,
                '--n-button-icon-color': buttonIconColor,
                '--n-button-icon-color-hover': buttonIconColorHover,
                '--n-button-icon-color-pressed': buttonIconColorPressed,
                '--n-button-color-hover': buttonColorHover,
                '--n-button-color': buttonColor,
                '--n-button-color-pressed': buttonColorPressed,
                '--n-button-border': buttonBorder,
                '--n-button-border-hover': buttonBorderHover,
                '--n-button-border-pressed': buttonBorderPressed
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('pagination', undefined, cssVarsRef, props)
            : undefined;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            locale: localeRef,
            selfRef,
            jumperRef,
            mergedPage: mergedPageRef,
            showFastBackward: showFastBackwardRef,
            showFastForward: showFastForwardRef,
            pageItems: computed(() => pageItems(mergedPageRef.value, mergedPageCountRef.value, props.pageSlot)),
            mergedItemCount: mergedItemCountRef,
            jumperValue: jumperValueRef,
            pageSizeOptions: pageSizeOptionsRef,
            mergedPageSize: mergedPageSizeRef,
            inputSize: inputSizeRef,
            selectSize: selectSizeRef,
            mergedTheme: themeRef,
            mergedPageCount: mergedPageCountRef,
            startIndex: startIndexRef,
            endIndex: endIndexRef,
            handleJumperInput,
            handleBackwardClick: backward,
            handleForwardClick: forward,
            handlePageItemClick,
            handleSizePickerChange,
            handleQuickJumperKeyUp,
            handlePageItemMouseEnter,
            handlePageItemMouseLeave,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        // it's ok to expand all prop here since no slots' deps
        const { $slots, mergedClsPrefix, disabled, cssVars, mergedPage, mergedPageCount, pageItems, showFastBackward, showFastForward, showSizePicker, showQuickJumper, mergedTheme, locale, inputSize, selectSize, mergedPageSize, pageSizeOptions, jumperValue, prev, next, prefix, suffix, label, handleJumperInput, handleSizePickerChange, handleBackwardClick, handlePageItemClick, handlePageItemMouseEnter, handlePageItemMouseLeave, handleForwardClick, handleQuickJumperKeyUp, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const renderPrefix = $slots.prefix || prefix;
        const renderSuffix = $slots.suffix || suffix;
        const renderPrev = prev || $slots.prev;
        const renderNext = next || $slots.next;
        const renderLabel = label || $slots.label;
        return (h("div", { ref: "selfRef", class: [
                `${mergedClsPrefix}-pagination`,
                this.themeClass,
                this.rtlEnabled && `${mergedClsPrefix}-pagination--rtl`,
                disabled && `${mergedClsPrefix}-pagination--disabled`
            ], style: cssVars },
            renderPrefix ? (h("div", { class: `${mergedClsPrefix}-pagination-prefix` }, renderPrefix({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex,
                itemCount: this.mergedItemCount
            }))) : null,
            h("div", { class: [
                    `${mergedClsPrefix}-pagination-item`,
                    !renderPrev && `${mergedClsPrefix}-pagination-item--button`,
                    (mergedPage <= 1 || mergedPage > mergedPageCount || disabled) &&
                        `${mergedClsPrefix}-pagination-item--disabled`
                ], onClick: handleBackwardClick }, renderPrev ? (renderPrev({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex,
                itemCount: this.mergedItemCount
            })) : (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                default: () => this.rtlEnabled ? h(ForwardIcon, null) : h(BackwardIcon, null)
            }))),
            pageItems.map((pageItem, index) => {
                let contentNode;
                switch (pageItem.type) {
                    case 'page':
                        // eslint-disable-next-line no-case-declarations
                        const pageNode = pageItem.label;
                        if (renderLabel) {
                            contentNode = renderLabel({
                                type: 'page',
                                node: pageNode,
                                active: pageItem.active
                            });
                        }
                        else {
                            contentNode = pageNode;
                        }
                        break;
                    case 'fast-forward':
                        // eslint-disable-next-line no-case-declarations
                        const fastForwardNode = showFastForward ? (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                            default: () => this.rtlEnabled ? (h(FastBackwardIcon, null)) : (h(FastForwardIcon, null))
                        })) : (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(MoreIcon, null) }));
                        if (renderLabel) {
                            contentNode = renderLabel({
                                type: 'fast-forward',
                                node: fastForwardNode,
                                active: showFastForward
                            });
                        }
                        else {
                            contentNode = fastForwardNode;
                        }
                        break;
                    case 'fast-backward':
                        // eslint-disable-next-line no-case-declarations
                        const fastBackwardNode = showFastBackward ? (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                            default: () => this.rtlEnabled ? (h(FastForwardIcon, null)) : (h(FastBackwardIcon, null))
                        })) : (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(MoreIcon, null) }));
                        if (renderLabel) {
                            contentNode = renderLabel({
                                type: 'fast-backward',
                                node: fastBackwardNode,
                                active: showFastBackward
                            });
                        }
                        else {
                            contentNode = fastBackwardNode;
                        }
                        break;
                }
                return (h("div", { key: index, class: [
                        `${mergedClsPrefix}-pagination-item`,
                        {
                            [`${mergedClsPrefix}-pagination-item--active`]: pageItem.active,
                            [`${mergedClsPrefix}-pagination-item--disabled`]: disabled
                        }
                    ], onClick: () => handlePageItemClick(pageItem), onMouseenter: () => handlePageItemMouseEnter(pageItem), onMouseleave: () => handlePageItemMouseLeave(pageItem) }, contentNode));
            }),
            h("div", { class: [
                    `${mergedClsPrefix}-pagination-item`,
                    !renderNext && `${mergedClsPrefix}-pagination-item--button`,
                    {
                        [`${mergedClsPrefix}-pagination-item--disabled`]: mergedPage < 1 || mergedPage >= mergedPageCount || disabled
                    }
                ], onClick: handleForwardClick }, renderNext ? (renderNext({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                itemCount: this.mergedItemCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex
            })) : (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                default: () => this.rtlEnabled ? h(BackwardIcon, null) : h(ForwardIcon, null)
            }))),
            showSizePicker ? (h(NSelect, { size: selectSize, placeholder: "", options: pageSizeOptions, value: mergedPageSize, disabled: disabled, theme: mergedTheme.peers.Select, themeOverrides: mergedTheme.peerOverrides.Select, onUpdateValue: handleSizePickerChange })) : null,
            showQuickJumper ? (h("div", { class: `${mergedClsPrefix}-pagination-quick-jumper` },
                resolveSlot(this.$slots.goto, () => [locale.goto]),
                h(NInput, { ref: "jumperRef", value: jumperValue, onUpdateValue: handleJumperInput, size: inputSize, placeholder: "", disabled: disabled, theme: mergedTheme.peers.Input, themeOverrides: mergedTheme.peerOverrides.Input, onKeyup: handleQuickJumperKeyUp }))) : null,
            renderSuffix ? (h("div", { class: `${mergedClsPrefix}-pagination-suffix` }, renderSuffix({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex,
                itemCount: this.mergedItemCount
            }))) : null));
    }
});
