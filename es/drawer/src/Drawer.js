import { h, defineComponent, computed, provide, withDirectives, Transition, watchEffect } from 'vue';
import { VLazyTeleport } from 'vueuc';
import { zindexable } from 'vdirs';
import { useIsMounted } from 'vooks';
import { useTheme, useConfig, useThemeClass } from '../../_mixins';
import { formatLength, call, warnOnce } from '../../_utils';
import { drawerLight } from '../styles';
import NDrawerBodyWrapper from './DrawerBodyWrapper';
import { drawerInjectionKey } from './interface';
import style from './styles/index.cssr';
const drawerProps = Object.assign(Object.assign({}, useTheme.props), { show: Boolean, width: {
        type: [Number, String],
        default: 251
    }, height: {
        type: [Number, String],
        default: 251
    }, placement: {
        type: String,
        default: 'right'
    }, maskClosable: {
        type: Boolean,
        default: true
    }, to: [String, Object], displayDirective: {
        type: String,
        default: 'if'
    }, nativeScrollbar: {
        type: Boolean,
        default: true
    }, zIndex: Number, onMaskClick: Function, scrollbarProps: Object, contentStyle: [Object, String], trapFocus: {
        type: Boolean,
        default: true
    }, onEsc: Function, autoFocus: {
        type: Boolean,
        default: true
    }, closeOnEsc: {
        type: Boolean,
        default: true
    }, 'onUpdate:show': [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onAfterLeave: Function, 
    /** @deprecated */
    drawerStyle: [String, Object], drawerClass: String, target: null, onShow: Function, onHide: Function });
export default defineComponent({
    name: 'Drawer',
    inheritAttrs: false,
    props: drawerProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.drawerStyle !== undefined) {
                    warnOnce('drawer', '`drawer-style` is deprecated, please use `style` instead.');
                }
                if (props.drawerClass !== undefined) {
                    warnOnce('drawer', '`drawer-class` is deprecated, please use `class` instead.');
                }
                if (props.target !== undefined) {
                    warnOnce('drawer', '`target` is deprecated, please use `to` instead.');
                }
                if (props.onShow !== undefined) {
                    warnOnce('drawer', '`on-show` is deprecated, please use `on-update:show` instead.');
                }
                if (props.onHide !== undefined) {
                    warnOnce('drawer', '`on-hide` is deprecated, please use `on-update:show` instead.');
                }
            });
        }
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
        const isMountedRef = useIsMounted();
        const themeRef = useTheme('Drawer', '-drawer', style, drawerLight, props, mergedClsPrefixRef);
        const styleWidthRef = computed(() => {
            const { placement } = props;
            if (placement === 'top' || placement === 'bottom')
                return '';
            const { width } = props;
            return formatLength(width);
        });
        const styleHeightRef = computed(() => {
            const { placement } = props;
            if (placement === 'left' || placement === 'right')
                return '';
            const { height } = props;
            return formatLength(height);
        });
        const mergedBodyStyleRef = computed(() => {
            return [
                {
                    width: styleWidthRef.value,
                    height: styleHeightRef.value
                },
                props.drawerStyle
            ];
        });
        function handleMaskClick(e) {
            const { onMaskClick, maskClosable } = props;
            if (maskClosable) {
                doUpdateShow(false);
            }
            if (onMaskClick)
                onMaskClick(e);
        }
        function handleEsc() {
            var _a;
            (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props);
            if (props.closeOnEsc) {
                doUpdateShow(false);
            }
        }
        function doUpdateShow(show) {
            const { onHide, onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow)
                call(onUpdateShow, show);
            if (_onUpdateShow)
                call(_onUpdateShow, show);
            // deprecated
            if (onHide && !show)
                call(onHide, show);
        }
        provide(drawerInjectionKey, {
            isMountedRef: isMountedRef,
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
            doUpdateShow
        });
        const cssVarsRef = computed(() => {
            const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { color, textColor, boxShadow, lineHeight, headerPadding, footerPadding, bodyPadding, titleFontSize, titleTextColor, titleFontWeight, headerBorderBottom, footerBorderTop, closeColor, closeColorHover, closeColorPressed, closeSize } } = themeRef.value;
            return {
                '--n-line-height': lineHeight,
                '--n-color': color,
                '--n-text-color': textColor,
                '--n-box-shadow': boxShadow,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-bezier-out': cubicBezierEaseOut,
                '--n-bezier-in': cubicBezierEaseIn,
                '--n-header-padding': headerPadding,
                '--n-body-padding': bodyPadding,
                '--n-footer-padding': footerPadding,
                '--n-title-text-color': titleTextColor,
                '--n-title-font-size': titleFontSize,
                '--n-title-font-weight': titleFontWeight,
                '--n-header-border-bottom': headerBorderBottom,
                '--n-footer-border-top': footerBorderTop,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-size': closeSize
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('drawer', undefined, cssVarsRef, props)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            namespace: namespaceRef,
            mergedBodyStyle: mergedBodyStyleRef,
            handleMaskClick,
            handleEsc,
            mergedTheme: themeRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
            isMounted: isMountedRef
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return (h(VLazyTeleport, { to: this.to, show: this.show }, {
            default: () => {
                var _a;
                (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                return withDirectives(h("div", { class: [
                        `${mergedClsPrefix}-drawer-container`,
                        this.namespace,
                        this.themeClass
                    ], style: this.cssVars, role: "none" },
                    h(Transition, { name: "fade-in-transition", appear: this.isMounted }, {
                        default: () => this.show ? (h("div", { "aria-hidden": true, class: `${mergedClsPrefix}-drawer-mask`, onClick: this.handleMaskClick })) : null
                    }),
                    h(NDrawerBodyWrapper, Object.assign({}, this.$attrs, { class: [this.drawerClass, this.$attrs.class], style: [this.mergedBodyStyle, this.$attrs.style], contentStyle: this.contentStyle, placement: this.placement, scrollbarProps: this.scrollbarProps, show: this.show, displayDirective: this.displayDirective, nativeScrollbar: this.nativeScrollbar, onAfterEnter: this.onAfterEnter, onAfterLeave: this.onAfterLeave, trapFocus: this.trapFocus, autoFocus: this.autoFocus, onEsc: this.handleEsc }), this.$slots)), [[zindexable, { zIndex: this.zIndex, enabled: this.show }]]);
            }
        }));
    }
});
