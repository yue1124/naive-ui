import { h, defineComponent, toRef } from 'vue';
import { useStyle } from '../../../_mixins';
import NBaseIcon from '../../icon';
import { CloseIcon } from '../../icons';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'BaseClose',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: undefined
        },
        onClick: Function
    },
    setup(props) {
        useStyle('-base-close', style, toRef(props, 'clsPrefix'));
        return () => {
            const { clsPrefix, disabled } = props;
            return (h(NBaseIcon, { role: "button", ariaDisabled: disabled, ariaLabel: "close", clsPrefix: clsPrefix, class: [
                    `${clsPrefix}-base-close`,
                    disabled && `${clsPrefix}-base-close--disabled`
                ], onClick: disabled ? undefined : props.onClick }, {
                default: () => h(CloseIcon, null)
            }));
        };
    }
});
