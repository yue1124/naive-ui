"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardBasePropKeys = exports.cardBaseProps = void 0;
const vue_1 = require("vue");
const seemly_1 = require("seemly");
const _mixins_1 = require("../../_mixins");
const _utils_1 = require("../../_utils");
const _internal_1 = require("../../_internal");
const styles_1 = require("../styles");
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
const use_rtl_1 = __importDefault(require("../../_mixins/use-rtl"));
exports.cardBaseProps = {
    title: String,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    headerExtraStyle: [Object, String],
    footerStyle: [Object, String],
    embedded: Boolean,
    segmented: {
        type: [Boolean, Object],
        default: false
    },
    size: {
        type: String,
        default: 'medium'
    },
    bordered: {
        type: Boolean,
        default: true
    },
    closable: {
        type: Boolean,
        default: false
    },
    hoverable: Boolean,
    role: String,
    onClose: [Function, Array]
};
exports.cardBasePropKeys = (0, _utils_1.keysOf)(exports.cardBaseProps);
const cardProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), exports.cardBaseProps);
exports.default = (0, vue_1.defineComponent)({
    name: 'Card',
    props: cardProps,
    setup(props) {
        const handleCloseClick = () => {
            const { onClose } = props;
            if (onClose)
                (0, _utils_1.call)(onClose);
        };
        const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)('Card', '-card', index_cssr_1.default, styles_1.cardLight, props, mergedClsPrefixRef);
        const rtlEnabledRef = (0, use_rtl_1.default)('Card', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { size } = props;
            const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, closeColor, closeColorHover, closeColorPressed, lineHeight, closeSize, boxShadow, colorPopover, colorEmbedded, [(0, _utils_1.createKey)('padding', size)]: padding, [(0, _utils_1.createKey)('fontSize', size)]: fontSize, [(0, _utils_1.createKey)('titleFontSize', size)]: titleFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
            const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = (0, seemly_1.getPadding)(padding);
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-color': props.embedded ? colorEmbedded : color,
                '--n-color-modal': colorModal,
                '--n-color-popover': colorPopover,
                '--n-color-target': colorTarget,
                '--n-text-color': textColor,
                '--n-line-height': lineHeight,
                '--n-action-color': actionColor,
                '--n-title-text-color': titleTextColor,
                '--n-title-font-weight': titleFontWeight,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-border-color': borderColor,
                '--n-box-shadow': boxShadow,
                // size
                '--n-padding-top': paddingTop,
                '--n-padding-bottom': paddingBottom,
                '--n-padding-left': paddingLeft,
                '--n-font-size': fontSize,
                '--n-title-font-size': titleFontSize,
                '--n-close-size': closeSize
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('card', (0, vue_1.computed)(() => {
                return props.size[0];
            }), cssVarsRef, props)
            : undefined;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedTheme: themeRef,
            handleCloseClick,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { segmented, bordered, hoverable, mergedClsPrefix, rtlEnabled, onRender, $slots } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0, vue_1.h)("div", { class: [
                `${mergedClsPrefix}-card`,
                this.themeClass,
                {
                    [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
                    [`${mergedClsPrefix}-card--content${typeof segmented !== 'boolean' && segmented.content === 'soft'
                        ? '-soft'
                        : ''}-segmented`]: segmented === true || (segmented !== false && segmented.content),
                    [`${mergedClsPrefix}-card--footer${typeof segmented !== 'boolean' && segmented.footer === 'soft'
                        ? '-soft'
                        : ''}-segmented`]: segmented === true || (segmented !== false && segmented.footer),
                    [`${mergedClsPrefix}-card--action-segmented`]: segmented === true || (segmented !== false && segmented.action),
                    [`${mergedClsPrefix}-card--bordered`]: bordered,
                    [`${mergedClsPrefix}-card--hoverable`]: hoverable
                }
            ], style: this.cssVars, role: this.role },
            (0, _utils_1.resolveWrappedSlot)($slots.cover, (children) => children && ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-card-cover`, role: "none" }, children))),
            (0, _utils_1.resolveWrappedSlot)($slots.header, (children) => {
                return children || this.title || this.closable ? ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-card-header`, style: this.headerStyle },
                    (0, vue_1.h)("div", { class: `${mergedClsPrefix}-card-header__main`, role: "heading" }, children || [this.title]),
                    (0, _utils_1.resolveWrappedSlot)($slots['header-extra'], (children) => children && ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-card-header__extra`, style: this.headerExtraStyle }, children))),
                    this.closable ? ((0, vue_1.h)(_internal_1.NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-card-header__close`, onClick: this.handleCloseClick })) : null)) : null;
            }),
            (0, _utils_1.resolveWrappedSlot)($slots.default, (children) => children && ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-card__content`, style: this.contentStyle, role: "none" }, children))),
            (0, _utils_1.resolveWrappedSlot)($slots.footer, (children) => children && [
                (0, vue_1.h)("div", { class: `${mergedClsPrefix}-card__footer`, style: this.footerStyle, role: "none" }, children)
            ]),
            (0, _utils_1.resolveWrappedSlot)($slots.action, (children) => children && ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-card__action`, role: "none" }, children)))));
    }
});
