"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInjectionKey = void 0;
const vue_1 = require("vue");
const _mixins_1 = require("../../_mixins");
const _utils_1 = require("../../_utils");
const styles_1 = require("../styles");
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
const listProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), { size: {
        type: String,
        default: 'medium'
    }, bordered: {
        type: Boolean,
        default: false
    } });
exports.listInjectionKey = (0, _utils_1.createInjectionKey)('n-list');
exports.default = (0, vue_1.defineComponent)({
    name: 'List',
    props: listProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)('List', '-list', index_cssr_1.default, styles_1.listLight, props, mergedClsPrefixRef);
        (0, vue_1.provide)(exports.listInjectionKey, {
            mergedClsPrefixRef
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { common: { cubicBezierEaseInOut }, self: { fontSize, textColor, color, colorModal, colorPopover, borderColor, borderColorModal, borderColorPopover, borderRadius } } = themeRef.value;
            return {
                '--n-font-size': fontSize,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-border-radius': borderRadius,
                '--n-border-color': borderColor,
                '--n-border-color-modal': borderColorModal,
                '--n-border-color-popover': borderColorPopover,
                '--n-color-modal': colorModal,
                '--n-color-popover': colorPopover
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('list', undefined, cssVarsRef, props)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        var _a;
        const { $slots, mergedClsPrefix, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0, vue_1.h)("ul", { class: [
                `${mergedClsPrefix}-list`,
                this.bordered && `${mergedClsPrefix}-list--bordered`,
                this.themeClass
            ], style: this.cssVars },
            $slots.header ? ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-list__header` }, $slots.header())) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 :
            _a.call($slots),
            $slots.footer ? ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-list__footer` }, $slots.footer())) : null));
    }
});
