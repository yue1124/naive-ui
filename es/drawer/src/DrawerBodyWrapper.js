import { h, Transition, defineComponent, ref, computed, watchEffect, provide, inject, withDirectives, vShow, mergeProps } from 'vue';
import { VFocusTrap } from 'vueuc';
import { NScrollbar } from '../../_internal';
import { popoverBodyInjectionKey } from '../../popover/src/interface';
import { modalBodyInjectionKey } from '../../modal/src/interface';
import { drawerBodyInjectionKey, drawerInjectionKey } from './interface';
import { useLockHtmlScroll } from '../../_utils';
export default defineComponent({
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
        const displayedRef = ref(!!props.show);
        const bodyRef = ref(null); // used for detached content
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NDrawer = inject(drawerInjectionKey);
        watchEffect(() => {
            if (props.show)
                displayedRef.value = true;
        });
        function handleAfterLeave() {
            var _a;
            displayedRef.value = false;
            (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        useLockHtmlScroll(computed(() => props.blockScroll && displayedRef.value));
        provide(drawerBodyInjectionKey, bodyRef);
        provide(popoverBodyInjectionKey, null);
        provide(modalBodyInjectionKey, null);
        return {
            bodyRef,
            mergedClsPrefix: NDrawer.mergedClsPrefixRef,
            isMounted: NDrawer.isMountedRef,
            mergedTheme: NDrawer.mergedThemeRef,
            displayed: displayedRef,
            transitionName: computed(() => {
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
            ? withDirectives(
            /* Keep the wrapper dom. Make sure the drawer has a host.
              Nor the detached content will disappear without transition */
            h("div", { role: "none" },
                h(VFocusTrap, { disabled: !this.trapFocus, active: this.show, autoFocus: this.autoFocus, onEsc: this.onEsc }, {
                    default: () => (h(Transition, { name: this.transitionName, appear: this.isMounted, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave }, {
                        default: () => withDirectives(h('div', mergeProps(this.$attrs, {
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
                            this.nativeScrollbar ? (h("div", { class: `${mergedClsPrefix}-drawer-content-wrapper`, style: this.contentStyle, role: "none" }, $slots)) : (h(NScrollbar, Object.assign({}, this.scrollbarProps, { contentStyle: this.contentStyle, contentClass: `${mergedClsPrefix}-drawer-content-wrapper`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar }), $slots))
                        ]), [[vShow, this.show]])
                    }))
                })), [
                [
                    vShow,
                    this.displayDirective === 'if' || this.displayed || this.show
                ]
            ])
            : null;
    }
});
