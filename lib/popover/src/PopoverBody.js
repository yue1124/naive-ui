"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderArrow = exports.popoverBodyProps = void 0;
const vue_1 = require("vue");
const vueuc_1 = require("vueuc");
const vdirs_1 = require("vdirs");
const scrollbar_1 = require("../../_internal/scrollbar");
const _mixins_1 = require("../../_mixins");
const _utils_1 = require("../../_utils");
const styles_1 = require("../styles");
const interface_1 = require("./interface");
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
const interface_2 = require("../../drawer/src/interface");
const interface_3 = require("../../modal/src/interface");
exports.popoverBodyProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), { to: _utils_1.useAdjustedTo.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentStyle: [Object, String], headerStyle: [Object, String], 
    // private
    animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, 
    // deprecated
    minWidth: Number, maxWidth: Number });
const renderArrow = ({ arrowStyle, clsPrefix }) => {
    return ((0, vue_1.h)("div", { key: "__popover-arrow__", class: `${clsPrefix}-popover-arrow-wrapper` },
        (0, vue_1.h)("div", { class: `${clsPrefix}-popover-arrow`, style: arrowStyle })));
};
exports.renderArrow = renderArrow;
exports.default = (0, vue_1.defineComponent)({
    name: 'PopoverBody',
    inheritAttrs: false,
    props: exports.popoverBodyProps,
    setup(props, { slots, attrs }) {
        const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)('Popover', '-popover', index_cssr_1.default, styles_1.popoverLight, props, mergedClsPrefixRef);
        const followerRef = (0, vue_1.ref)(null);
        const NPopover = (0, vue_1.inject)('NPopover');
        const bodyRef = (0, vue_1.ref)(null);
        const followerEnabledRef = (0, vue_1.ref)(props.show);
        const directivesRef = (0, vue_1.computed)(() => {
            const { trigger, onClickoutside } = props;
            const directives = [];
            const { positionManuallyRef: { value: positionManually } } = NPopover;
            if (!positionManually) {
                if (trigger === 'click' && !onClickoutside) {
                    directives.push([
                        vdirs_1.clickoutside,
                        handleClickOutside,
                        undefined,
                        { capture: true }
                    ]);
                }
                if (trigger === 'hover') {
                    directives.push([vdirs_1.mousemoveoutside, handleMouseMoveOutside]);
                }
            }
            if (onClickoutside) {
                directives.push([
                    vdirs_1.clickoutside,
                    handleClickOutside,
                    undefined,
                    { capture: true }
                ]);
            }
            if (props.displayDirective === 'show') {
                directives.push([vue_1.vShow, props.show]);
            }
            return directives;
        });
        const styleRef = (0, vue_1.computed)(() => {
            return [
                {
                    width: props.width === 'trigger' ? '' : (0, _utils_1.formatLength)(props.width)
                },
                props.maxWidth ? { maxWidth: (0, _utils_1.formatLength)(props.maxWidth) } : {},
                props.minWidth ? { minWidth: (0, _utils_1.formatLength)(props.minWidth) } : {},
                inlineThemeDisabled ? undefined : cssVarsRef.value
            ];
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { space, spaceArrow, padding, fontSize, textColor, dividerColor, color, boxShadow, borderRadius, arrowHeight, arrowOffset, arrowOffsetVertical } } = themeRef.value;
            return {
                '--n-box-shadow': boxShadow,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-bezier-ease-in': cubicBezierEaseIn,
                '--n-bezier-ease-out': cubicBezierEaseOut,
                '--n-font-size': fontSize,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-divider-color': dividerColor,
                '--n-border-radius': borderRadius,
                '--n-arrow-height': arrowHeight,
                '--n-arrow-offset': arrowOffset,
                '--n-arrow-offset-vertical': arrowOffsetVertical,
                '--n-padding': padding,
                '--n-space': space,
                '--n-space-arrow': spaceArrow
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('popover', undefined, cssVarsRef, props)
            : undefined;
        NPopover.setBodyInstance({
            syncPosition
        });
        (0, vue_1.onBeforeUnmount)(() => {
            NPopover.setBodyInstance(null);
        });
        (0, vue_1.watch)((0, vue_1.toRef)(props, 'show'), (value) => {
            // If no animation, no transition component will be applied to the
            // component. So we need to trigger follower manaully.
            if (props.animated)
                return;
            if (value) {
                followerEnabledRef.value = true;
            }
            else {
                followerEnabledRef.value = false;
            }
        });
        function syncPosition() {
            var _a;
            (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
        }
        function handleMouseEnter(e) {
            if (props.trigger === 'hover' && props.keepAliveOnHover) {
                NPopover.handleMouseEnter(e);
            }
        }
        function handleMouseLeave(e) {
            if (props.trigger === 'hover' && props.keepAliveOnHover) {
                NPopover.handleMouseLeave(e);
            }
        }
        function handleMouseMoveOutside(e) {
            if (props.trigger === 'hover' &&
                !getTriggerElement().contains(e.target)) {
                NPopover.handleMouseMoveOutside(e);
            }
        }
        function handleClickOutside(e) {
            if ((props.trigger === 'click' &&
                !getTriggerElement().contains(e.target)) ||
                props.onClickoutside) {
                NPopover.handleClickOutside(e);
            }
        }
        function getTriggerElement() {
            return NPopover.getTriggerElement();
        }
        (0, vue_1.provide)(interface_1.popoverBodyInjectionKey, bodyRef);
        (0, vue_1.provide)(interface_2.drawerBodyInjectionKey, null);
        (0, vue_1.provide)(interface_3.modalBodyInjectionKey, null);
        function renderContentNode() {
            themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
            let contentNode;
            const { internalRenderBodyRef: { value: renderBody } } = NPopover;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            if (!renderBody) {
                const { value: extraClass } = NPopover.extraClassRef;
                const { internalTrapFocus } = props;
                const renderContentInnerNode = () => {
                    const content = (0, _utils_1.resolveWrappedSlot)(slots.header, (children) => {
                        var _a;
                        const body = children ? ([
                            (0, vue_1.h)("div", { class: `${mergedClsPrefix}-popover__header`, style: props.headerStyle }, children),
                            (0, vue_1.h)("div", { class: `${mergedClsPrefix}-popover__content`, style: props.contentStyle }, slots)
                        ]) : props.scrollable ? ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) : ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-popover__content`, style: props.contentStyle }, slots));
                        const maybeScrollableBody = props.scrollable ? ((0, vue_1.h)(scrollbar_1.NxScrollbar, { contentClass: children ? undefined : `${mergedClsPrefix}-popover__content`, contentStyle: children ? undefined : props.contentStyle }, {
                            default: () => body
                        })) : (body);
                        return maybeScrollableBody;
                    });
                    const arrow = props.showArrow
                        ? (0, exports.renderArrow)({
                            arrowStyle: props.arrowStyle,
                            clsPrefix: mergedClsPrefix
                        })
                        : null;
                    return [content, arrow];
                };
                contentNode = (0, vue_1.h)('div', (0, vue_1.mergeProps)({
                    class: [
                        `${mergedClsPrefix}-popover`,
                        themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
                        extraClass.map((v) => `${mergedClsPrefix}-${v}`),
                        {
                            [`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
                            [`${mergedClsPrefix}-popover--overlap`]: props.overlap,
                            [`${mergedClsPrefix}-popover--show-arrow`]: props.showArrow,
                            [`${mergedClsPrefix}-popover--show-header`]: !(0, _utils_1.isSlotEmpty)(slots.header),
                            [`${mergedClsPrefix}-popover--raw`]: props.raw,
                            [`${mergedClsPrefix}-popover--manual-trigger`]: props.trigger === 'manual',
                            [`${mergedClsPrefix}-popover--center-arrow`]: props.arrowPointToCenter
                        }
                    ],
                    ref: bodyRef,
                    style: styleRef.value,
                    onKeydown: NPopover.handleKeydown,
                    onMouseenter: handleMouseEnter,
                    onMouseleave: handleMouseLeave
                }, attrs), internalTrapFocus ? ((0, vue_1.h)(vueuc_1.VFocusTrap, { active: props.show, autoFocus: true }, { default: renderContentInnerNode })) : (renderContentInnerNode()));
            }
            else {
                contentNode = renderBody(
                // The popover class and overlap class must exists, they will be used
                // to place the body & transition animation.
                // Shadow class exists for reuse box-shadow.
                [
                    `${mergedClsPrefix}-popover`,
                    themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
                    props.overlap && `${mergedClsPrefix}-popover--overlap`
                ], bodyRef, styleRef.value, handleMouseEnter, handleMouseLeave);
            }
            return props.displayDirective === 'show' || props.show
                ? (0, vue_1.withDirectives)(contentNode, directivesRef.value)
                : null;
        }
        return {
            namespace: namespaceRef,
            isMounted: NPopover.isMountedRef,
            zIndex: NPopover.zIndexRef,
            followerRef,
            adjustedTo: (0, _utils_1.useAdjustedTo)(props),
            followerEnabled: followerEnabledRef,
            renderContentNode
        };
    },
    render() {
        return ((0, vue_1.h)(vueuc_1.VFollower, { zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, ref: "followerRef", overlap: this.overlap, width: this.width === 'trigger' ? 'target' : undefined, teleportDisabled: this.adjustedTo === _utils_1.useAdjustedTo.tdkey }, {
            default: () => {
                return this.animated ? ((0, vue_1.h)(vue_1.Transition, { name: "popover-transition", appear: this.isMounted, 
                    // Don't use watch to enable follower, since the transition may
                    // make position sync timing very subtle and buggy.
                    onEnter: () => {
                        this.followerEnabled = true;
                    }, onAfterLeave: () => {
                        this.followerEnabled = false;
                    } }, {
                    default: this.renderContentNode
                })) : (this.renderContentNode());
            }
        }));
    }
});
