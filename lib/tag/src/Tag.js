"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagInjectionKey = void 0;
const vue_1 = require("vue");
const _mixins_1 = require("../../_mixins");
const _internal_1 = require("../../_internal");
const _utils_1 = require("../../_utils");
const styles_1 = require("../styles");
const common_props_1 = __importDefault(require("./common-props"));
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
const use_rtl_1 = __importDefault(require("../../_mixins/use-rtl"));
const tagProps = Object.assign(Object.assign(Object.assign({}, _mixins_1.useTheme.props), common_props_1.default), { bordered: {
        type: Boolean,
        default: undefined
    }, checked: Boolean, checkable: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, 'onUpdate:checked': Function, onUpdateChecked: Function, 
    // private
    internalStopClickPropagation: Boolean, 
    // deprecated
    onCheckedChange: {
        type: Function,
        validator: () => {
            if (process.env.NODE_ENV !== 'production') {
                (0, _utils_1.warn)('tag', '`on-checked-change` is deprecated, please use `on-update:checked` instead');
            }
            return true;
        },
        default: undefined
    } });
exports.tagInjectionKey = (0, _utils_1.createInjectionKey)('n-tag');
exports.default = (0, vue_1.defineComponent)({
    name: 'Tag',
    props: tagProps,
    setup(props) {
        const contentRef = (0, vue_1.ref)(null);
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)('Tag', '-tag', index_cssr_1.default, styles_1.tagLight, props, mergedClsPrefixRef);
        (0, vue_1.provide)(exports.tagInjectionKey, {
            roundRef: (0, vue_1.toRef)(props, 'round')
        });
        function handleClick(e) {
            if (!props.disabled) {
                if (props.checkable) {
                    const { checked, onCheckedChange, onUpdateChecked, 'onUpdate:checked': _onUpdateChecked } = props;
                    if (onUpdateChecked)
                        onUpdateChecked(!checked);
                    if (_onUpdateChecked)
                        _onUpdateChecked(!checked);
                    // deprecated
                    if (onCheckedChange)
                        onCheckedChange(!checked);
                }
            }
        }
        function handleCloseClick(e) {
            if (props.internalStopClickPropagation) {
                e.stopPropagation();
            }
            if (!props.disabled) {
                const { onClose } = props;
                if (onClose)
                    (0, _utils_1.call)(onClose, e);
            }
        }
        const tagPublicMethods = {
            setTextContent(textContent) {
                const { value } = contentRef;
                if (value)
                    value.textContent = textContent;
            }
        };
        const rtlEnabledRef = (0, use_rtl_1.default)('Tag', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { type, size, color: { color, textColor } = {} } = props;
            const { common: { cubicBezierEaseInOut }, self: { padding, closeMargin, closeMarginRtl, borderRadius, opacityDisabled, textColorCheckable, textColorHoverCheckable, textColorPressedCheckable, textColorChecked, colorCheckable, colorHoverCheckable, colorPressedCheckable, colorChecked, colorCheckedHover, colorCheckedPressed, [(0, _utils_1.createKey)('closeSize', size)]: closeSize, [(0, _utils_1.createKey)('fontSize', size)]: fontSize, [(0, _utils_1.createKey)('height', size)]: height, [(0, _utils_1.createKey)('color', type)]: typedColor, [(0, _utils_1.createKey)('textColor', type)]: typeTextColor, [(0, _utils_1.createKey)('border', type)]: border, [(0, _utils_1.createKey)('closeColor', type)]: closeColor, [(0, _utils_1.createKey)('closeColorHover', type)]: closeColorHover, [(0, _utils_1.createKey)('closeColorPressed', type)]: closeColorPressed } } = themeRef.value;
            return {
                '--n-avatar-size-override': `calc(${height} - 8px)`,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-border': border,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-color-disabled': closeColor,
                '--n-close-margin': closeMargin,
                '--n-close-margin-rtl': closeMarginRtl,
                '--n-close-size': closeSize,
                '--n-color': color || typedColor,
                '--n-color-checkable': colorCheckable,
                '--n-color-checked': colorChecked,
                '--n-color-checked-hover': colorCheckedHover,
                '--n-color-checked-pressed': colorCheckedPressed,
                '--n-color-hover-checkable': colorHoverCheckable,
                '--n-color-pressed-checkable': colorPressedCheckable,
                '--n-font-size': fontSize,
                '--n-height': height,
                '--n-opacity-disabled': opacityDisabled,
                '--n-padding': padding,
                '--n-text-color': textColor || typeTextColor,
                '--n-text-color-checkable': textColorCheckable,
                '--n-text-color-checked': textColorChecked,
                '--n-text-color-hover-checkable': textColorHoverCheckable,
                '--n-text-color-pressed-checkable': textColorPressedCheckable
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('tag', (0, vue_1.computed)(() => {
                let hash = '';
                const { type, size, color: { color, textColor } = {} } = props;
                hash += type[0];
                hash += size[0];
                if (color) {
                    hash += `a${(0, _utils_1.color2Class)(color)}`;
                }
                if (textColor) {
                    hash += `b${(0, _utils_1.color2Class)(textColor)}`;
                }
                return hash;
            }), cssVarsRef, props)
            : undefined;
        return Object.assign(Object.assign({}, tagPublicMethods), { rtlEnabled: rtlEnabledRef, mergedClsPrefix: mergedClsPrefixRef, contentRef, mergedBordered: mergedBorderedRef, handleClick,
            handleCloseClick, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
    },
    render() {
        var _a, _b;
        const { mergedClsPrefix, rtlEnabled, color: { borderColor } = {}, onRender, $slots } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0, vue_1.h)("div", { class: [
                `${mergedClsPrefix}-tag`,
                this.themeClass,
                {
                    [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
                    [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
                    [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
                    [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
                    [`${mergedClsPrefix}-tag--round`]: this.round
                }
            ], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
            (0, _utils_1.resolveWrappedSlot)($slots.avatar, (children) => children && ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-tag__avatar` }, children))),
            (0, vue_1.h)("span", { class: `${mergedClsPrefix}-tag__content`, ref: "contentRef" }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)),
            !this.checkable && this.closable ? ((0, vue_1.h)(_internal_1.NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick })) : null,
            !this.checkable && this.mergedBordered ? ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-tag__border`, style: { borderColor } })) : null));
    }
});
