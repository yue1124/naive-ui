import { h, computed, onMounted, ref, defineComponent, Transition } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { NBaseSlotMachine, NBaseWave } from '../../_internal';
import { color2Class, createKey, getTitleAttribute, isSlotEmpty, resolveSlot } from '../../_utils';
import { badgeLight } from '../styles';
import style from './styles/index.cssr';
import useRtl from '../../_mixins/use-rtl';
const badgeProps = Object.assign(Object.assign({}, useTheme.props), { value: [String, Number], max: Number, dot: Boolean, type: {
        type: String,
        default: 'default'
    }, show: {
        type: Boolean,
        default: true
    }, showZero: Boolean, processing: Boolean, color: String });
export default defineComponent({
    name: 'Badge',
    props: badgeProps,
    setup(props, { slots }) {
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
        const themeRef = useTheme('Badge', '-badge', style, badgeLight, props, mergedClsPrefixRef);
        const appearedRef = ref(false);
        const handleAfterEnter = () => {
            appearedRef.value = true;
        };
        const handleAfterLeave = () => {
            appearedRef.value = false;
        };
        const showBadgeRef = computed(() => {
            return (props.show &&
                (props.dot ||
                    (props.value !== undefined &&
                        !(!props.showZero && props.value <= 0)) ||
                    !isSlotEmpty(slots.value)));
        });
        onMounted(() => {
            if (showBadgeRef.value)
                appearedRef.value = true;
        });
        const rtlEnabledRef = useRtl('Badge', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = computed(() => {
            const { type, color: propColor } = props;
            const { common: { cubicBezierEaseInOut, cubicBezierEaseOut }, self: { [createKey('color', type)]: color, fontFamily, fontSize } } = themeRef.value;
            return {
                '--n-font-size': fontSize,
                '--n-font-family': fontFamily,
                '--n-color': propColor || color,
                '--n-ripple-color': propColor || color,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-ripple-bezier': cubicBezierEaseOut
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('badge', computed(() => {
                let hash = '';
                const { type, color } = props;
                if (type) {
                    hash += type[0];
                }
                if (color) {
                    hash += color2Class(color);
                }
                return hash;
            }), cssVarsRef, props)
            : undefined;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            appeared: appearedRef,
            showBadge: showBadgeRef,
            handleAfterEnter,
            handleAfterLeave,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        var _a;
        const { mergedClsPrefix, onRender, themeClass, $slots } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const children = (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
        return (h("div", { class: [
                `${mergedClsPrefix}-badge`,
                this.rtlEnabled && `${mergedClsPrefix}-badge--rtl`,
                themeClass,
                {
                    [`${mergedClsPrefix}-badge--dot`]: this.dot,
                    [`${mergedClsPrefix}-badge--as-is`]: !children
                }
            ], style: this.cssVars },
            children,
            h(Transition, { name: "fade-in-scale-up-transition", onAfterEnter: this.handleAfterEnter, onAfterLeave: this.handleAfterLeave }, {
                default: () => this.showBadge ? (h("sup", { class: `${mergedClsPrefix}-badge-sup`, title: getTitleAttribute(this.value) },
                    resolveSlot($slots.value, () => [
                        !this.dot ? (h(NBaseSlotMachine, { clsPrefix: mergedClsPrefix, appeared: this.appeared, max: this.max, value: this.value })) : null
                    ]),
                    this.processing ? (h(NBaseWave, { clsPrefix: mergedClsPrefix })) : null)) : null
            })));
    }
});
