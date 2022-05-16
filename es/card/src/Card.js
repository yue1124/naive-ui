import { h, defineComponent, computed } from 'vue';
import { getPadding } from 'seemly';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { call, createKey, keysOf, resolveWrappedSlot } from '../../_utils';
import { NBaseClose } from '../../_internal';
import { cardLight } from '../styles';
import style from './styles/index.cssr';
import useRtl from '../../_mixins/use-rtl';
export const cardBaseProps = {
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
export const cardBasePropKeys = keysOf(cardBaseProps);
const cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
export default defineComponent({
    name: 'Card',
    props: cardProps,
    setup(props) {
        const handleCloseClick = () => {
            const { onClose } = props;
            if (onClose)
                call(onClose);
        };
        const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
        const themeRef = useTheme('Card', '-card', style, cardLight, props, mergedClsPrefixRef);
        const rtlEnabledRef = useRtl('Card', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = computed(() => {
            const { size } = props;
            const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, closeColor, closeColorHover, closeColorPressed, lineHeight, closeSize, boxShadow, colorPopover, colorEmbedded, [createKey('padding', size)]: padding, [createKey('fontSize', size)]: fontSize, [createKey('titleFontSize', size)]: titleFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
            const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = getPadding(padding);
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
            ? useThemeClass('card', computed(() => {
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
        return (h("div", { class: [
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
            resolveWrappedSlot($slots.cover, (children) => children && (h("div", { class: `${mergedClsPrefix}-card-cover`, role: "none" }, children))),
            resolveWrappedSlot($slots.header, (children) => {
                return children || this.title || this.closable ? (h("div", { class: `${mergedClsPrefix}-card-header`, style: this.headerStyle },
                    h("div", { class: `${mergedClsPrefix}-card-header__main`, role: "heading" }, children || [this.title]),
                    resolveWrappedSlot($slots['header-extra'], (children) => children && (h("div", { class: `${mergedClsPrefix}-card-header__extra`, style: this.headerExtraStyle }, children))),
                    this.closable ? (h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-card-header__close`, onClick: this.handleCloseClick })) : null)) : null;
            }),
            resolveWrappedSlot($slots.default, (children) => children && (h("div", { class: `${mergedClsPrefix}-card__content`, style: this.contentStyle, role: "none" }, children))),
            resolveWrappedSlot($slots.footer, (children) => children && [
                h("div", { class: `${mergedClsPrefix}-card__footer`, style: this.footerStyle, role: "none" }, children)
            ]),
            resolveWrappedSlot($slots.action, (children) => children && (h("div", { class: `${mergedClsPrefix}-card__action`, role: "none" }, children)))));
    }
});