"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vdirs_1 = require("vdirs");
const vooks_1 = require("vooks");
const vueuc_1 = require("vueuc");
const evtd_1 = require("evtd");
const seemly_1 = require("seemly");
const icons_1 = require("../../_internal/icons");
const _mixins_1 = require("../../_mixins");
const _internal_1 = require("../../_internal");
const tooltip_1 = require("../../tooltip");
const styles_1 = require("../styles");
const icons_2 = require("./icons");
const interface_1 = require("./interface");
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
exports.default = (0, vue_1.defineComponent)({
    name: 'ImagePreview',
    props: Object.assign(Object.assign({}, interface_1.imagePreviewSharedProps), { onNext: Function, onPrev: Function, clsPrefix: {
            type: String,
            required: true
        } }),
    setup(props) {
        const themeRef = (0, _mixins_1.useTheme)('Image', '-image', index_cssr_1.default, styles_1.imageLight, props, (0, vue_1.toRef)(props, 'clsPrefix'));
        let thumbnailEl = null;
        const previewRef = (0, vue_1.ref)(null);
        const previewWrapperRef = (0, vue_1.ref)(null);
        const previewSrcRef = (0, vue_1.ref)(undefined);
        const showRef = (0, vue_1.ref)(false);
        const displayedRef = (0, vue_1.ref)(false);
        const { localeRef } = (0, _mixins_1.useLocale)('Image');
        function syncTransformOrigin() {
            const { value: previewWrapper } = previewWrapperRef;
            if (!thumbnailEl || !previewWrapper)
                return;
            const { style } = previewWrapper;
            const tbox = thumbnailEl.getBoundingClientRect();
            const tx = tbox.left + tbox.width / 2;
            const ty = tbox.top + tbox.height / 2;
            style.transformOrigin = `${tx}px ${ty}px`;
        }
        function handleKeydown(e) {
            var _a, _b;
            switch (e.code) {
                case 'ArrowLeft':
                    (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
                    break;
                case 'ArrowRight':
                    (_b = props.onNext) === null || _b === void 0 ? void 0 : _b.call(props);
                    break;
                case 'Escape':
                    toggleShow();
                    break;
            }
        }
        (0, vue_1.watch)(showRef, (value) => {
            if (value)
                (0, evtd_1.on)('keydown', document, handleKeydown);
            else
                (0, evtd_1.off)('keydown', document, handleKeydown);
        });
        (0, vue_1.onBeforeUnmount)(() => {
            (0, evtd_1.off)('keydown', document, handleKeydown);
        });
        let startX = 0;
        let startY = 0;
        let offsetX = 0;
        let offsetY = 0;
        let startOffsetX = 0;
        let startOffsetY = 0;
        let mouseDownClientX = 0;
        let mouseDownClientY = 0;
        let dragging = false;
        function handleMouseMove(e) {
            const { clientX, clientY } = e;
            offsetX = clientX - startX;
            offsetY = clientY - startY;
            (0, seemly_1.beforeNextFrameOnce)(derivePreviewStyle);
        }
        function getMoveStrategy(opts) {
            const { mouseUpClientX, mouseUpClientY, mouseDownClientX, mouseDownClientY } = opts;
            const deltaHorizontal = mouseDownClientX - mouseUpClientX;
            const deltaVertical = mouseDownClientY - mouseUpClientY;
            const moveVerticalDirection = `vertical${deltaVertical > 0 ? 'Top' : 'Bottom'}`;
            const moveHorizontalDirection = `horizontal${deltaHorizontal > 0 ? 'Left' : 'Right'}`;
            return {
                moveVerticalDirection,
                moveHorizontalDirection,
                deltaHorizontal,
                deltaVertical
            };
        }
        // avoid image move outside viewport
        function getDerivedOffset(moveStrategy) {
            const { value: preview } = previewRef;
            if (!preview)
                return { offsetX: 0, offsetY: 0 };
            const pbox = preview.getBoundingClientRect();
            const { moveVerticalDirection, moveHorizontalDirection, deltaHorizontal, deltaVertical } = moveStrategy || {};
            let nextOffsetX = 0;
            let nextOffsetY = 0;
            if (pbox.width <= window.innerWidth) {
                nextOffsetX = 0;
            }
            else if (pbox.left > 0) {
                nextOffsetX = (pbox.width - window.innerWidth) / 2;
            }
            else if (pbox.right < window.innerWidth) {
                nextOffsetX = -(pbox.width - window.innerWidth) / 2;
            }
            else if (moveHorizontalDirection === 'horizontalRight') {
                nextOffsetX = Math.min((pbox.width - window.innerWidth) / 2, startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
            }
            else {
                nextOffsetX = Math.max(-((pbox.width - window.innerWidth) / 2), startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
            }
            if (pbox.height <= window.innerHeight) {
                nextOffsetY = 0;
            }
            else if (pbox.top > 0) {
                nextOffsetY = (pbox.height - window.innerHeight) / 2;
            }
            else if (pbox.bottom < window.innerHeight) {
                nextOffsetY = -(pbox.height - window.innerHeight) / 2;
            }
            else if (moveVerticalDirection === 'verticalBottom') {
                nextOffsetY = Math.min((pbox.height - window.innerHeight) / 2, startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
            }
            else {
                nextOffsetY = Math.max(-((pbox.height - window.innerHeight) / 2), startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
            }
            return {
                offsetX: nextOffsetX,
                offsetY: nextOffsetY
            };
        }
        function handleMouseUp(e) {
            (0, evtd_1.off)('mousemove', document, handleMouseMove);
            (0, evtd_1.off)('mouseup', document, handleMouseUp);
            const { clientX: mouseUpClientX, clientY: mouseUpClientY } = e;
            dragging = false;
            const moveStrategy = getMoveStrategy({
                mouseUpClientX,
                mouseUpClientY,
                mouseDownClientX,
                mouseDownClientY
            });
            const offset = getDerivedOffset(moveStrategy);
            offsetX = offset.offsetX;
            offsetY = offset.offsetY;
            derivePreviewStyle();
        }
        function handlePreviewMousedown(e) {
            const { clientX, clientY } = e;
            dragging = true;
            startX = clientX - offsetX;
            startY = clientY - offsetY;
            startOffsetX = offsetX;
            startOffsetY = offsetY;
            mouseDownClientX = clientX;
            mouseDownClientY = clientY;
            derivePreviewStyle();
            (0, evtd_1.on)('mousemove', document, handleMouseMove);
            (0, evtd_1.on)('mouseup', document, handleMouseUp);
        }
        function handlePreviewDblclick() {
            scale = scale === 1 ? 2 : 1;
            derivePreviewStyle();
        }
        let scale = 1;
        let rotate = 0;
        function handleSwitchPrev() {
            var _a;
            scale = 1;
            rotate = 0;
            (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        function handleSwitchNext() {
            var _a;
            scale = 1;
            rotate = 0;
            (_a = props.onNext) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        function rotateCounterclockwise() {
            rotate -= 90;
            derivePreviewStyle();
        }
        function rotateClockwise() {
            rotate += 90;
            derivePreviewStyle();
        }
        function zoomIn() {
            if (scale < 3) {
                scale += 0.5;
                derivePreviewStyle();
            }
        }
        function zoomOut() {
            if (scale > 0.5) {
                scale -= 0.5;
                derivePreviewStyle(false);
                const offset = getDerivedOffset();
                scale += 0.5;
                derivePreviewStyle(false);
                scale -= 0.5;
                offsetX = offset.offsetX;
                offsetY = offset.offsetY;
                derivePreviewStyle();
            }
        }
        function derivePreviewStyle(transition = true) {
            const { value: preview } = previewRef;
            if (!preview)
                return;
            const { style } = preview;
            const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
            if (dragging) {
                style.cssText = 'cursor: grabbing; transition: none;' + transformStyle;
            }
            else {
                style.cssText =
                    'cursor: grab;' +
                        transformStyle +
                        (transition ? '' : 'transition: none;');
            }
            if (!transition) {
                void preview.offsetHeight;
            }
        }
        function toggleShow() {
            showRef.value = !showRef.value;
            displayedRef.value = true;
        }
        const exposedMethods = {
            setPreviewSrc: (src) => {
                previewSrcRef.value = src;
            },
            setThumbnailEl: (el) => {
                thumbnailEl = el;
            },
            toggleShow
        };
        function withTooltip(node, tooltipKey) {
            if (props.showToolbarTooltip) {
                const { value: theme } = themeRef;
                return ((0, vue_1.h)(tooltip_1.NTooltip, { to: false, theme: theme.peers.Tooltip, themeOverrides: theme.peerOverrides.Tooltip }, {
                    default: () => {
                        return localeRef.value[tooltipKey];
                    },
                    trigger: () => node
                }));
            }
            else {
                return node;
            }
        }
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { common: { cubicBezierEaseInOut }, self: { toolbarIconColor, toolbarBorderRadius, toolbarBoxShadow, toolbarColor } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-toolbar-icon-color': toolbarIconColor,
                '--n-toolbar-color': toolbarColor,
                '--n-toolbar-border-radius': toolbarBorderRadius,
                '--n-toolbar-box-shadow': toolbarBoxShadow
            };
        });
        const { inlineThemeDisabled } = (0, _mixins_1.useConfig)();
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('image-preview', undefined, cssVarsRef, props)
            : undefined;
        return Object.assign({ previewRef,
            previewWrapperRef, previewSrc: previewSrcRef, show: showRef, appear: (0, vooks_1.useIsMounted)(), displayed: displayedRef, handleWheel(e) {
                e.preventDefault();
            },
            handlePreviewMousedown,
            handlePreviewDblclick,
            syncTransformOrigin, handleAfterLeave: () => {
                rotate = 0;
                scale = 1;
                displayedRef.value = false;
            }, handleDragStart: (e) => {
                e.preventDefault();
            }, zoomIn,
            zoomOut,
            rotateCounterclockwise,
            rotateClockwise,
            handleSwitchPrev,
            handleSwitchNext,
            withTooltip, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender }, exposedMethods);
    },
    render() {
        var _a, _b;
        const { clsPrefix } = this;
        return ((0, vue_1.h)(vue_1.Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 :
            _b.call(_a),
            (0, vue_1.h)(vueuc_1.LazyTeleport, { show: this.show }, {
                default: () => {
                    var _a;
                    if (!(this.show || this.displayed)) {
                        return null;
                    }
                    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                    return (0, vue_1.withDirectives)((0, vue_1.h)("div", { class: [
                            `${clsPrefix}-image-preview-container`,
                            this.themeClass
                        ], style: this.cssVars, onWheel: this.handleWheel },
                        (0, vue_1.h)(vue_1.Transition, { name: "fade-in-transition", appear: this.appear }, {
                            default: () => this.show ? ((0, vue_1.h)("div", { class: `${clsPrefix}-image-preview-overlay`, onClick: this.toggleShow })) : null
                        }),
                        this.showToolbar ? ((0, vue_1.h)(vue_1.Transition, { name: "fade-in-transition", appear: this.appear }, {
                            default: () => {
                                if (!this.show)
                                    return null;
                                const { withTooltip } = this;
                                return ((0, vue_1.h)("div", { class: `${clsPrefix}-image-preview-toolbar` },
                                    this.onPrev ? ((0, vue_1.h)(vue_1.Fragment, null,
                                        withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.handleSwitchPrev }, { default: () => icons_2.prevIcon }), 'tipPrevious'),
                                        withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.handleSwitchNext }, { default: () => icons_2.nextIcon }), 'tipNext'))) : null,
                                    withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.rotateCounterclockwise }, {
                                        default: () => ((0, vue_1.h)(icons_1.RotateCounterclockwiseIcon, null))
                                    }), 'tipCounterclockwise'),
                                    withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.rotateClockwise }, {
                                        default: () => (0, vue_1.h)(icons_1.RotateClockwiseIcon, null)
                                    }), 'tipClockwise'),
                                    withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.zoomOut }, { default: () => (0, vue_1.h)(icons_1.ZoomOutIcon, null) }), 'tipZoomOut'),
                                    withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.zoomIn }, { default: () => (0, vue_1.h)(icons_1.ZoomInIcon, null) }), 'tipZoomIn'),
                                    withTooltip((0, vue_1.h)(_internal_1.NBaseIcon, { clsPrefix: clsPrefix, onClick: this.toggleShow }, { default: () => icons_2.closeIcon }), 'tipClose')));
                            }
                        })) : null,
                        (0, vue_1.h)(vue_1.Transition, { name: "fade-in-scale-up-transition", onAfterLeave: this.handleAfterLeave, appear: this.appear, 
                            // BUG:
                            // onEnter will be called twice, I don't know why
                            // Maybe it is a bug of vue
                            onEnter: this.syncTransformOrigin, onBeforeLeave: this.syncTransformOrigin }, {
                            default: () => (0, vue_1.withDirectives)((0, vue_1.h)("div", { class: `${clsPrefix}-image-preview-wrapper`, ref: "previewWrapperRef" },
                                (0, vue_1.h)("img", { draggable: false, onMousedown: this.handlePreviewMousedown, onDblclick: this.handlePreviewDblclick, class: `${clsPrefix}-image-preview`, key: this.previewSrc, src: this.previewSrc, ref: "previewRef", onDragstart: this.handleDragStart })), [[vue_1.vShow, this.show]])
                        })), [[vdirs_1.zindexable, { enabled: this.show }]]);
                }
            })));
    }
});
