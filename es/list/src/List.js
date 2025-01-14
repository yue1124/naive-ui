import { computed, defineComponent, h, provide } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { createInjectionKey } from '../../_utils';
import { listLight } from '../styles';
import style from './styles/index.cssr';
const listProps = Object.assign(Object.assign({}, useTheme.props), { size: {
        type: String,
        default: 'medium'
    }, bordered: {
        type: Boolean,
        default: false
    } });
export const listInjectionKey = createInjectionKey('n-list');
export default defineComponent({
    name: 'List',
    props: listProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme('List', '-list', style, listLight, props, mergedClsPrefixRef);
        provide(listInjectionKey, {
            mergedClsPrefixRef
        });
        const cssVarsRef = computed(() => {
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
            ? useThemeClass('list', undefined, cssVarsRef, props)
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
        return (h("ul", { class: [
                `${mergedClsPrefix}-list`,
                this.bordered && `${mergedClsPrefix}-list--bordered`,
                this.themeClass
            ], style: this.cssVars },
            $slots.header ? (h("div", { class: `${mergedClsPrefix}-list__header` }, $slots.header())) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 :
            _a.call($slots),
            $slots.footer ? (h("div", { class: `${mergedClsPrefix}-list__footer` }, $slots.footer())) : null));
    }
});
