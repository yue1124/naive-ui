"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NDialogEnvironment = exports.exposedDialogEnvProps = void 0;
// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
const vue_1 = require("vue");
const Modal_1 = __importDefault(require("../../modal/src/Modal"));
const _utils_1 = require("../../_utils");
const Dialog_1 = require("./Dialog");
const dialogProps_1 = require("./dialogProps");
exports.exposedDialogEnvProps = Object.assign(Object.assign({}, dialogProps_1.dialogProps), { blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, autoFocus: {
        type: Boolean,
        default: true
    }, internalStyle: [String, Object], maskClosable: {
        type: Boolean,
        default: true
    }, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function });
exports.NDialogEnvironment = (0, vue_1.defineComponent)({
    name: 'DialogEnvironment',
    props: Object.assign(Object.assign({}, exports.exposedDialogEnvProps), { internalKey: {
            type: String,
            required: true
        }, to: [String, Object], 
        // private
        onInternalAfterLeave: {
            type: Function,
            required: true
        } }),
    setup(props) {
        const showRef = (0, vue_1.ref)(true);
        function handleAfterLeave() {
            props.onInternalAfterLeave(props.internalKey);
        }
        function handlePositiveClick(e) {
            const { onPositiveClick } = props;
            if (onPositiveClick) {
                void Promise.resolve(onPositiveClick(e)).then((result) => {
                    if (result === false)
                        return;
                    hide();
                });
            }
            else {
                hide();
            }
        }
        function handleNegativeClick(e) {
            const { onNegativeClick } = props;
            if (onNegativeClick) {
                void Promise.resolve(onNegativeClick(e)).then((result) => {
                    if (result === false)
                        return;
                    hide();
                });
            }
            else {
                hide();
            }
        }
        function handleCloseClick() {
            const { onClose } = props;
            if (onClose) {
                void Promise.resolve(onClose()).then((result) => {
                    if (result === false)
                        return;
                    hide();
                });
            }
            else {
                hide();
            }
        }
        function handleMaskClick(e) {
            const { onMaskClick, maskClosable } = props;
            if (onMaskClick) {
                onMaskClick(e);
                maskClosable && hide();
            }
        }
        function hide() {
            showRef.value = false;
        }
        function handleUpdateShow(value) {
            showRef.value = value;
        }
        return {
            show: showRef,
            hide,
            handleUpdateShow,
            handleAfterLeave,
            handleCloseClick,
            handleNegativeClick,
            handlePositiveClick,
            handleMaskClick
        };
    },
    render() {
        const { handlePositiveClick, handleUpdateShow, handleNegativeClick, handleCloseClick, handleAfterLeave, handleMaskClick, to, maskClosable, show } = this;
        return ((0, vue_1.h)(Modal_1.default, { show: show, onUpdateShow: handleUpdateShow, onMaskClick: handleMaskClick, to: to, maskClosable: maskClosable, onAfterLeave: handleAfterLeave, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, internalAppear: true, internalDialog: true }, {
            default: () => ((0, vue_1.h)(Dialog_1.NDialog, Object.assign({}, (0, _utils_1.keep)(this.$props, dialogProps_1.dialogPropKeys), { style: this.internalStyle, onClose: handleCloseClick, onNegativeClick: handleNegativeClick, onPositiveClick: handlePositiveClick })))
        }));
    }
});
