"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const _utils_1 = require("../../_utils");
const use_radio_1 = __importDefault(require("./use-radio"));
exports.default = (0, vue_1.defineComponent)({
    name: 'RadioButton',
    props: use_radio_1.default.props,
    setup(props) {
        return (0, use_radio_1.default)(props);
    },
    render() {
        const { mergedClsPrefix } = this;
        return ((0, vue_1.h)("label", { class: [
                `${mergedClsPrefix}-radio-button`,
                {
                    [`${mergedClsPrefix}-radio-button--disabled`]: this.mergedDisabled,
                    [`${mergedClsPrefix}-radio-button--checked`]: this.renderSafeChecked,
                    [`${mergedClsPrefix}-radio-button--focus`]: this.focus
                }
            ] },
            (0, vue_1.h)("input", { ref: "inputRef", type: "radio", class: `${mergedClsPrefix}-radio-input`, value: this.value, name: this.mergedName, checked: this.renderSafeChecked, disabled: this.mergedDisabled, onChange: this.handleRadioInputChange, onFocus: this.handleRadioInputFocus, onBlur: this.handleRadioInputBlur }),
            (0, vue_1.h)("div", { class: `${mergedClsPrefix}-radio-button__state-border` }),
            (0, _utils_1.resolveWrappedSlot)(this.$slots.default, (children) => {
                if (!children && !this.label)
                    return null;
                return ((0, vue_1.h)("div", { ref: "labelRef", class: `${mergedClsPrefix}-radio__label` }, children || this.label));
            })));
    }
});
