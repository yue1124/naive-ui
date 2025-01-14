import { h, defineComponent, provide, computed, toRef, ref } from 'vue';
import { useMergedState } from 'vooks';
import { useConfig, useFormItem } from '../../_mixins';
import { warn, call, createInjectionKey } from '../../_utils';
export const checkboxGroupInjectionKey = createInjectionKey('n-checkbox-group');
const checkboxGroupProps = {
    min: Number,
    max: Number,
    size: String,
    value: Array,
    defaultValue: {
        type: Array,
        default: null
    },
    disabled: {
        type: Boolean,
        default: undefined
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onChange: {
        type: [Function, Array],
        validator: () => {
            if (process.env.NODE_ENV !== 'production') {
                warn('checkbox-group', '`on-change` is deprecated, please use `on-update:value` instead.');
            }
            return true;
        },
        default: undefined
    }
};
export default defineComponent({
    name: 'CheckboxGroup',
    props: checkboxGroupProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const formItem = useFormItem(props);
        const { mergedSizeRef, mergedDisabledRef } = formItem;
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = computed(() => props.value);
        const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
        const checkedCount = computed(() => {
            var _a;
            return ((_a = mergedValueRef.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
        });
        const valueSetRef = computed(() => {
            if (Array.isArray(mergedValueRef.value)) {
                return new Set(mergedValueRef.value);
            }
            return new Set();
        });
        function toggleCheckbox(checked, checkboxValue) {
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            const { onChange, 'onUpdate:value': _onUpdateValue, onUpdateValue } = props;
            if (Array.isArray(mergedValueRef.value)) {
                const groupValue = Array.from(mergedValueRef.value);
                const index = groupValue.findIndex((value) => value === checkboxValue);
                if (checked) {
                    if (!~index) {
                        groupValue.push(checkboxValue);
                        if (onUpdateValue)
                            call(onUpdateValue, groupValue);
                        if (_onUpdateValue)
                            call(_onUpdateValue, groupValue);
                        nTriggerFormInput();
                        nTriggerFormChange();
                        uncontrolledValueRef.value = groupValue;
                        // deprecated
                        if (onChange)
                            call(onChange, groupValue);
                    }
                }
                else {
                    if (~index) {
                        groupValue.splice(index, 1);
                        if (onUpdateValue)
                            call(onUpdateValue, groupValue);
                        if (_onUpdateValue)
                            call(_onUpdateValue, groupValue);
                        if (onChange)
                            call(onChange, groupValue); // deprecated
                        uncontrolledValueRef.value = groupValue;
                        nTriggerFormInput();
                        nTriggerFormChange();
                    }
                }
            }
            else {
                if (checked) {
                    if (onUpdateValue)
                        call(onUpdateValue, [checkboxValue]);
                    if (_onUpdateValue)
                        call(_onUpdateValue, [checkboxValue]);
                    if (onChange)
                        call(onChange, [checkboxValue]); // deprecated
                    uncontrolledValueRef.value = [checkboxValue];
                    nTriggerFormInput();
                    nTriggerFormChange();
                }
                else {
                    if (onUpdateValue)
                        call(onUpdateValue, []);
                    if (_onUpdateValue)
                        call(_onUpdateValue, []);
                    if (onChange)
                        call(onChange, []); // deprecated
                    uncontrolledValueRef.value = [];
                    nTriggerFormInput();
                    nTriggerFormChange();
                }
            }
        }
        provide(checkboxGroupInjectionKey, {
            checkedCountRef: checkedCount,
            maxRef: toRef(props, 'max'),
            minRef: toRef(props, 'min'),
            valueSetRef: valueSetRef,
            disabledRef: mergedDisabledRef,
            mergedSizeRef: mergedSizeRef,
            toggleCheckbox
        });
        return {
            mergedClsPrefix: mergedClsPrefixRef
        };
    },
    render() {
        return (h("div", { class: `${this.mergedClsPrefix}-checkbox-group`, role: "group" }, this.$slots));
    }
});
