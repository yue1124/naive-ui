import { h, defineComponent, computed, inject } from 'vue';
import { getPadding } from 'seemly';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from '../../_internal/icons';
import { createKey, keysOf, render } from '../../_utils';
import { NBaseIcon, NBaseClose } from '../../_internal';
import { notificationProviderInjectionKey } from './context';
import { useConfig, useThemeClass } from '../../_mixins';
const iconRenderMap = {
    info: () => h(InfoIcon, null),
    success: () => h(SuccessIcon, null),
    warning: () => h(WarningIcon, null),
    error: () => h(ErrorIcon, null),
    default: () => null
};
export const notificationProps = {
    closable: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: 'default'
    },
    avatar: Function,
    title: [String, Function],
    description: [String, Function],
    content: [String, Function],
    meta: [String, Function],
    action: [String, Function],
    onClose: {
        type: Function,
        required: true
    }
};
export const notificationPropKeys = keysOf(notificationProps);
export const Notification = defineComponent({
    name: 'Notification',
    props: notificationProps,
    setup(props) {
        const { mergedClsPrefixRef, mergedThemeRef, props: providerProps
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = inject(notificationProviderInjectionKey);
        const { inlineThemeDisabled } = useConfig();
        const cssVarsRef = computed(() => {
            const { type } = props;
            const { self: { color, textColor, closeColor, closeColorHover, closeColorPressed, headerTextColor, descriptionTextColor, actionTextColor, borderRadius, headerFontWeight, boxShadow, lineHeight, fontSize, closeMargin, closeSize, width, padding, [createKey('iconColor', type)]: iconColor }, common: { cubicBezierEaseOut, cubicBezierEaseIn, cubicBezierEaseInOut } } = mergedThemeRef.value;
            const { left, right, top, bottom } = getPadding(padding);
            return {
                '--n-color': color,
                '--n-font-size': fontSize,
                '--n-text-color': textColor,
                '--n-description-text-color': descriptionTextColor,
                '--n-action-text-color': actionTextColor,
                '--n-title-text-color': headerTextColor,
                '--n-title-font-weight': headerFontWeight,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-bezier-ease-out': cubicBezierEaseOut,
                '--n-bezier-ease-in': cubicBezierEaseIn,
                '--n-border-radius': borderRadius,
                '--n-box-shadow': boxShadow,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-line-height': lineHeight,
                '--n-icon-color': iconColor,
                '--n-close-margin': closeMargin,
                '--n-close-size': closeSize,
                '--n-width': width,
                '--n-padding-left': left,
                '--n-padding-right': right,
                '--n-padding-top': top,
                '--n-padding-bottom': bottom
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('notification', computed(() => props.type[0]), cssVarsRef, providerProps)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            showAvatar: computed(() => {
                return props.avatar || props.type !== 'default';
            }),
            handleCloseClick() {
                props.onClose();
            },
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        var _a;
        const { mergedClsPrefix } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return (h("div", { class: [
                `${mergedClsPrefix}-notification`,
                this.themeClass,
                {
                    [`${mergedClsPrefix}-notification--closable`]: this.closable,
                    [`${mergedClsPrefix}-notification--show-avatar`]: this.showAvatar
                }
            ], style: this.cssVars },
            this.showAvatar ? (h("div", { class: `${mergedClsPrefix}-notification__avatar` }, this.avatar ? (render(this.avatar)) : this.type !== 'default' ? (h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => iconRenderMap[this.type]() })) : null)) : null,
            this.closable ? (h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-notification__close`, onClick: this.handleCloseClick })) : null,
            h("div", { ref: "bodyRef", class: `${mergedClsPrefix}-notification-main` },
                this.title ? (h("div", { class: `${mergedClsPrefix}-notification-main__header` }, render(this.title))) : null,
                this.description ? (h("div", { class: `${mergedClsPrefix}-notification-main__description` }, render(this.description))) : null,
                this.content ? (h("pre", { class: `${mergedClsPrefix}-notification-main__content` }, render(this.content))) : null,
                this.meta || this.action ? (h("div", { class: `${mergedClsPrefix}-notification-main-footer` },
                    this.meta ? (h("div", { class: `${mergedClsPrefix}-notification-main-footer__meta` }, render(this.meta))) : null,
                    this.action ? (h("div", { class: `${mergedClsPrefix}-notification-main-footer__action` }, render(this.action))) : null)) : null)));
    }
});
