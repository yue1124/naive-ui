import { h, ref, provide, defineComponent, mergeProps } from 'vue';
import { popoverBaseProps } from '../../popover/src/Popover';
import { NPopover } from '../../popover';
import NPopselectPanel, { panelPropKeys, panelProps } from './PopselectPanel';
import { omit, keep, createRefSetter } from '../../_utils';
import { useTheme } from '../../_mixins';
import { popselectLight } from '../styles';
import { popselectInjectionKey } from './interface';
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ['showArrow', 'arrow'])), { placement: Object.assign(Object.assign({}, popoverBaseProps.placement), { default: 'bottom' }), trigger: {
        type: String,
        default: 'hover'
    } }), panelProps);
export default defineComponent({
    name: 'Popselect',
    props: popselectProps,
    __popover__: true,
    setup(props) {
        const themeRef = useTheme('Popselect', '-popselect', undefined, popselectLight, props);
        const popoverInstRef = ref(null);
        function syncPosition() {
            var _a;
            (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
        }
        function setShow(value) {
            var _a;
            (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
        }
        provide(popselectInjectionKey, {
            mergedThemeRef: themeRef,
            syncPosition,
            setShow
        });
        const exposedMethods = {
            syncPosition,
            setShow
        };
        return Object.assign(Object.assign({}, exposedMethods), { popoverInstRef, mergedTheme: themeRef });
    },
    render() {
        const { mergedTheme } = this;
        const popoverProps = {
            theme: mergedTheme.peers.Popover,
            themeOverrides: mergedTheme.peerOverrides.Popover,
            builtinThemeOverrides: {
                padding: '0'
            },
            ref: 'popoverInstRef',
            internalRenderBody: (className, ref, style, onMouseenter, onMouseleave) => {
                return (h(NPopselectPanel, Object.assign({}, mergeProps(this.$attrs, {
                    class: className,
                    style
                }), keep(this.$props, panelPropKeys), { ref: createRefSetter(ref), onMouseenter: onMouseenter, onMouseleave: onMouseleave }), {
                    action: () => { var _a, _b; return (_b = (_a = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a); },
                    empty: () => { var _a, _b; return (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a); }
                }));
            }
        };
        return (h(NPopover, Object.assign({}, omit(this.$props, panelPropKeys), popoverProps), {
            trigger: () => { var _a, _b; return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a); }
        }));
    }
});
