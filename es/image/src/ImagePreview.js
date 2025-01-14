import { h, defineComponent, Fragment, ref, withDirectives, Transition, vShow, watch, computed, toRef, onBeforeUnmount } from 'vue';
import { zindexable } from 'vdirs';
import { useIsMounted } from 'vooks';
import { LazyTeleport } from 'vueuc';
import { on, off } from 'evtd';
import { beforeNextFrameOnce } from 'seemly';
import { RotateClockwiseIcon, RotateCounterclockwiseIcon, ZoomInIcon, ZoomOutIcon } from '../../_internal/icons';
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { NBaseIcon } from '../../_internal';
import { NTooltip } from '../../tooltip';
import { imageLight } from '../styles';
import { prevIcon, nextIcon, closeIcon } from './icons';
import { imagePreviewSharedProps } from './interface';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'ImagePreview',
    props: Object.assign(Object.assign({}, imagePreviewSharedProps), { onNext: Function, onPrev: Function, clsPrefix: {
            type: String,
            required: true
        } }),
    setup(props) {
        const themeRef = useTheme('Image', '-image', style, imageLight, props, toRef(props, 'clsPrefix'));
        let thumbnailEl = null;
        const previewRef = ref(null);
        const previewWrapperRef = ref(null);
        const previewSrcRef = ref(undefined);
        const showRef = ref(false);
        const displayedRef = ref(false);
        const { localeRef } = useLocale('Image');
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
        watch(showRef, (value) => {
            if (value)
                on('keydown', document, handleKeydown);
            else
                off('keydown', document, handleKeydown);
        });
        onBeforeUnmount(() => {
            off('keydown', document, handleKeydown);
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
            beforeNextFrameOnce(derivePreviewStyle);
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
            off('mousemove', document, handleMouseMove);
            off('mouseup', document, handleMouseUp);
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
            on('mousemove', document, handleMouseMove);
            on('mouseup', document, handleMouseUp);
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
                return (h(NTooltip, { to: false, theme: theme.peers.Tooltip, themeOverrides: theme.peerOverrides.Tooltip }, {
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
        const cssVarsRef = computed(() => {
            const { common: { cubicBezierEaseInOut }, self: { toolbarIconColor, toolbarBorderRadius, toolbarBoxShadow, toolbarColor } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-toolbar-icon-color': toolbarIconColor,
                '--n-toolbar-color': toolbarColor,
                '--n-toolbar-border-radius': toolbarBorderRadius,
                '--n-toolbar-box-shadow': toolbarBoxShadow
            };
        });
        const { inlineThemeDisabled } = useConfig();
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('image-preview', undefined, cssVarsRef, props)
            : undefined;
        return Object.assign({ previewRef,
            previewWrapperRef, previewSrc: previewSrcRef, show: showRef, appear: useIsMounted(), displayed: displayedRef, handleWheel(e) {
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
        return (h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 :
            _b.call(_a),
            h(LazyTeleport, { show: this.show }, {
                default: () => {
                    var _a;
                    if (!(this.show || this.displayed)) {
                        return null;
                    }
                    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                    return withDirectives(h("div", { class: [
                            `${clsPrefix}-image-preview-container`,
                            this.themeClass
                        ], style: this.cssVars, onWheel: this.handleWheel },
                        h(Transition, { name: "fade-in-transition", appear: this.appear }, {
                            default: () => this.show ? (h("div", { class: `${clsPrefix}-image-preview-overlay`, onClick: this.toggleShow })) : null
                        }),
                        this.showToolbar ? (h(Transition, { name: "fade-in-transition", appear: this.appear }, {
                            default: () => {
                                if (!this.show)
                                    return null;
                                const { withTooltip } = this;
                                return (h("div", { class: `${clsPrefix}-image-preview-toolbar` },
                                    this.onPrev ? (h(Fragment, null,
                                        withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.handleSwitchPrev }, { default: () => prevIcon }), 'tipPrevious'),
                                        withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.handleSwitchNext }, { default: () => nextIcon }), 'tipNext'))) : null,
                                    withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.rotateCounterclockwise }, {
                                        default: () => (h(RotateCounterclockwiseIcon, null))
                                    }), 'tipCounterclockwise'),
                                    withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.rotateClockwise }, {
                                        default: () => h(RotateClockwiseIcon, null)
                                    }), 'tipClockwise'),
                                    withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.zoomOut }, { default: () => h(ZoomOutIcon, null) }), 'tipZoomOut'),
                                    withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.zoomIn }, { default: () => h(ZoomInIcon, null) }), 'tipZoomIn'),
                                    withTooltip(h(NBaseIcon, { clsPrefix: clsPrefix, onClick: this.toggleShow }, { default: () => closeIcon }), 'tipClose')));
                            }
                        })) : null,
                        h(Transition, { name: "fade-in-scale-up-transition", onAfterLeave: this.handleAfterLeave, appear: this.appear, 
                            // BUG:
                            // onEnter will be called twice, I don't know why
                            // Maybe it is a bug of vue
                            onEnter: this.syncTransformOrigin, onBeforeLeave: this.syncTransformOrigin }, {
                            default: () => withDirectives(h("div", { class: `${clsPrefix}-image-preview-wrapper`, ref: "previewWrapperRef" },
                                h("img", { draggable: false, onMousedown: this.handlePreviewMousedown, onDblclick: this.handlePreviewDblclick, class: `${clsPrefix}-image-preview`, key: this.previewSrc, src: this.previewSrc, ref: "previewRef", onDragstart: this.handleDragStart })), [[vShow, this.show]])
                        })), [[zindexable, { enabled: this.show }]]);
                }
            })));
    }
});
