"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vueuc_1 = require("vueuc");
const _internal_1 = require("../../_internal");
const interface_1 = require("../../popover/src/interface");
const interface_2 = require("../../modal/src/interface");
const interface_3 = require("./interface");
const _utils_1 = require("../../_utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'NDrawerContent',
    inheritAttrs: false,
    props: {
        blockScroll: Boolean,
        show: {
            type: Boolean,
            default: undefined
        },
        displayDirective: {
            type: String,
            required: true
        },
        placement: {
            type: String,
            required: true
        },
        contentStyle: [Object, String],
        nativeScrollbar: {
            type: Boolean,
            required: true
        },
        scrollbarProps: Object,
        trapFocus: {
            type: Boolean,
            default: true
        },
        autoFocus: {
            type: Boolean,
            default: true
        },
        onAfterLeave: Function,
        onAfterEnter: Function,
        onEsc: Function
    },
    setup(props) {
        const displayedRef = (0, vue_1.ref)(!!props.show);
        const bodyRef = (0, vue_1.ref)(null); // used for detached content
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NDrawer = (0, vue_1.inject)(interface_3.drawerInjectionKey);
        (0, vue_1.watchEffect)(() => {
            if (props.show)
                displayedRef.value = true;
        });
        function handleAfterLeave() {
            var _a;
            displayedRef.value = false;
            (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        (0, _utils_1.useLockHtmlScroll)((0, vue_1.computed)(() => props.blockScroll && displayedRef.value));
        (0, vue_1.provide)(interface_3.drawerBodyInjectionKey, bodyRef);
        (0, vue_1.provide)(interface_1.popoverBodyInjectionKey, null);
        (0, vue_1.provide)(interface_2.modalBodyInjectionKey, null);
        return {
            bodyRef,
            mergedClsPrefix: NDrawer.mergedClsPrefixRef,
            isMounted: NDrawer.isMountedRef,
            mergedTheme: NDrawer.mergedThemeRef,
            displayed: displayedRef,
            transitionName: (0, vue_1.computed)(() => {
                return {
                    right: 'slide-in-from-right-transition',
                    left: 'slide-in-from-left-transition',
                    top: 'slide-in-from-top-transition',
                    bottom: 'slide-in-from-bottom-transition'
                }[props.placement];
            }),
            handleAfterLeave
        };
    },
    render() {
        const { $slots, mergedClsPrefix } = this;
        return this.displayDirective === 'show' || this.displayed || this.show
            ? (0, vue_1.withDirectives)(
            /* Keep the wrapper dom. Make sure the drawer has a host.
              Nor the detached content will disappear without transition */
            (0, vue_1.h)("div", { role: "none" },
                (0, vue_1.h)(vueuc_1.VFocusTrap, { disabled: !this.trapFocus, active: this.show, autoFocus: this.autoFocus, onEsc: this.onEsc }, {
                    default: () => ((0, vue_1.h)(vue_1.Transition, { name: this.transitionName, appear: this.isMounted, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave }, {
                        default: () => (0, vue_1.withDirectives)((0, vue_1.h)('div', (0, vue_1.mergeProps)(this.$attrs, {
                            role: 'dialog',
                            ref: 'bodyRef',
                            'aria-modal': 'true',
                            class: [
                                `${mergedClsPrefix}-drawer`,
                                `${mergedClsPrefix}-drawer--${this.placement}-placement`,
                                this.nativeScrollbar &&
                                    `${mergedClsPrefix}-drawer--native-scrollbar`
                            ]
                        }), [
                            this.nativeScrollbar ? ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-drawer-content-wrapper`, style: this.contentStyle, role: "none" }, $slots)) : ((0, vue_1.h)(_internal_1.NScrollbar, Object.assign({}, this.scrollbarProps, { contentStyle: this.contentStyle, contentClass: `${mergedClsPrefix}-drawer-content-wrapper`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar }), $slots))
                        ]), [[vue_1.vShow, this.show]])
                    }))
                })), [
                [
                    vue_1.vShow,
                    this.displayDirective === 'if' || this.displayed || this.show
                ]
            ])
            : null;
    }
});
