import { h, defineComponent, provide } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import { stepsLight } from '../styles';
import style from './styles/index.cssr';
import { createInjectionKey, flatten, getSlot } from '../../_utils';
function stepWithIndex(step, i) {
    if (typeof step !== 'object' || step === null || Array.isArray(step)) {
        return null;
    }
    if (!step.props)
        step.props = {};
    step.props.internalIndex = i + 1;
    return step;
}
function stepsWithIndex(steps) {
    return steps.map((step, i) => stepWithIndex(step, i));
}
const stepsProps = Object.assign(Object.assign({}, useTheme.props), { current: Number, status: {
        type: String,
        default: 'process'
    }, size: {
        type: String,
        default: 'medium'
    }, vertical: Boolean });
export const stepsInjectionKey = createInjectionKey('n-steps');
export default defineComponent({
    name: 'Steps',
    props: stepsProps,
    setup(props, { slots }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme('Steps', '-steps', style, stepsLight, props, mergedClsPrefixRef);
        provide(stepsInjectionKey, {
            props,
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
            stepsSlots: slots
        });
        return {
            mergedClsPrefix: mergedClsPrefixRef
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return (h("div", { class: [
                `${mergedClsPrefix}-steps`,
                this.vertical && `${mergedClsPrefix}-steps--vertical`
            ] }, stepsWithIndex(flatten(getSlot(this)))));
    }
});
