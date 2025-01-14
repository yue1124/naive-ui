"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vueuc_1 = require("vueuc");
const evtd_1 = require("evtd");
const _mixins_1 = require("../../_mixins");
const _utils_1 = require("../../_utils");
const styles_1 = require("../styles");
const utils_1 = require("./utils");
const CarouselDots_1 = __importDefault(require("./CarouselDots"));
const CarouselArrow_1 = __importDefault(require("./CarouselArrow"));
const CarouselItem_1 = __importDefault(require("./CarouselItem"));
const interface_1 = require("./interface");
const index_cssr_1 = __importDefault(require("./styles/index.cssr"));
const transitionProperties = (0, interface_1.tuple)('transitionDuration', 'transitionTimingFunction');
const carouselProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), { defaultIndex: {
        type: Number,
        default: 0
    }, currentIndex: Number, showArrow: Boolean, dotType: {
        type: String,
        default: 'dot'
    }, dotPlacement: {
        type: String,
        default: 'bottom'
    }, slidesPerView: {
        type: [Number, String],
        default: 1
    }, spaceBetween: {
        type: Number,
        default: 0
    }, centeredSlides: Boolean, direction: {
        type: String,
        default: 'horizontal'
    }, autoplay: Boolean, interval: {
        type: Number,
        default: 5000
    }, loop: {
        type: Boolean,
        default: true
    }, effect: {
        type: String,
        default: 'slide'
    }, showDots: {
        type: Boolean,
        default: true
    }, trigger: {
        type: String,
        default: 'click'
    }, transitionStyle: {
        type: Object,
        default: () => ({
            transitionDuration: '300ms'
        })
    }, transitionProps: Object, draggable: Boolean, prevSlideStyle: [Object, String], nextSlideStyle: [Object, String], touchable: {
        type: Boolean,
        default: true
    }, mousewheel: Boolean, keyboard: Boolean, 'onUpdate:currentIndex': Function, onUpdateCurrentIndex: Function });
// only one carousel is allowed to trigger touch globally
let globalDragging = false;
exports.default = (0, vue_1.defineComponent)({
    name: 'Carousel',
    props: carouselProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0, _mixins_1.useConfig)(props);
        // Dom
        const selfElRef = (0, vue_1.ref)(null);
        const slidesElsRef = (0, vue_1.ref)([]);
        const slideVNodesRef = { value: [] };
        // user wants to control the transition animation
        const userWantsControlRef = (0, vue_1.computed)(() => props.effect === 'custom');
        const translateableRef = (0, vue_1.computed)(() => !userWantsControlRef.value && props.effect === 'slide');
        // TODO
        const allowLoopRef = (0, vue_1.computed)(() => props.loop && props.slidesPerView === 1);
        // Because of the nature of the loop slide work,
        // we need to add duplicates to the left and right of the carousel
        // slot    [ 0 1 2 ]
        // display 2 0 1 2 0
        // index   0 1 2 3 4
        const duplicatedableRef = (0, vue_1.computed)(
        // only duplicate the copy operation in `slide` mode,
        // because other effects have special process
        () => translateableRef.value && allowLoopRef.value);
        // used to calculate total views
        const displaySlidesPerViewRef = (0, vue_1.computed)(() => userWantsControlRef.value ||
            props.centeredSlides ||
            props.effect !== 'slide'
            ? 1
            : props.slidesPerView);
        // used to calculate the size of each slide
        const realSlidesPerViewRef = (0, vue_1.computed)(() => userWantsControlRef.value ? 1 : props.slidesPerView);
        // we automatically calculate total view for special slides per view
        const autoSlideSizeRef = (0, vue_1.computed)(() => displaySlidesPerViewRef.value === 'auto' ||
            (props.slidesPerView === 'auto' && props.centeredSlides));
        const transitionStyleRef = (0, vue_1.computed)(() => props.transitionStyle
            ? (0, _utils_1.keep)(props.transitionStyle, transitionProperties)
            : {});
        const speedRef = (0, vue_1.computed)(() => userWantsControlRef.value
            ? 0
            : (0, utils_1.resolveSpeed)(transitionStyleRef.value.transitionDuration));
        const verticalRef = (0, vue_1.computed)(() => props.direction === 'vertical');
        const sizeAxisRef = (0, vue_1.computed)(() => (verticalRef.value ? 'height' : 'width'));
        const perViewSizeRef = (0, vue_1.ref)({ width: 0, height: 0 });
        const slideSizesRef = (0, vue_1.computed)(() => {
            const { value: slidesEls } = slidesElsRef;
            const { length } = slidesEls;
            if (!length)
                return [];
            if (autoSlideSizeRef.value) {
                return slidesEls.map((slide) => (0, utils_1.calculateSize)(slide));
            }
            const { value: slidesPerView } = realSlidesPerViewRef;
            const { value: perViewSize } = perViewSizeRef;
            const { value: axis } = sizeAxisRef;
            let slideSize = perViewSize[axis];
            if (slidesPerView !== 'auto') {
                const { spaceBetween } = props;
                const remaining = slideSize - (slidesPerView - 1) * spaceBetween;
                const percentage = 1 / Math.max(1, slidesPerView);
                slideSize = remaining * percentage;
            }
            return slidesEls.map(() => (Object.assign(Object.assign({}, perViewSize), { [axis]: slideSize })));
        });
        // The translate required to reach each slide
        const slideTranlatesRef = (0, vue_1.computed)(() => {
            const { value: slideSizes } = slideSizesRef;
            const { length } = slideSizes;
            if (!length)
                return [];
            const { centeredSlides, spaceBetween } = props;
            const { value: axis } = sizeAxisRef;
            const { [axis]: perViewSize } = perViewSizeRef.value;
            let previousTranslate = 0;
            return slideSizes.map(({ [axis]: slideSize }) => {
                let translate = previousTranslate;
                if (centeredSlides) {
                    translate += (slideSize - perViewSize) / 2;
                }
                previousTranslate += slideSize + spaceBetween;
                return translate;
            });
        });
        let isMounted = false;
        const slideStylesRef = (0, vue_1.computed)(() => {
            const { value: slideSizes } = slideSizesRef;
            const { length } = slideSizes;
            if (!length)
                return [];
            const { value: axis } = sizeAxisRef;
            // when user wants to control the transition animation, we center each slide
            if (userWantsControlRef.value) {
                return slideSizes.map((size) => ({
                    [axis]: `${size[axis]}px`
                }));
            }
            const { effect, spaceBetween } = props;
            const { value: vertical } = verticalRef;
            const spaceAxis = vertical ? 'bottom' : 'right';
            const slideStyles = [];
            for (let i = 0; i < length; i++) {
                const size = slideSizes[i][axis];
                const style = {
                    [axis]: `${size}px`,
                    [`margin-${spaceAxis}`]: `${spaceBetween}px`
                };
                if (isMounted && (effect === 'fade' || effect === 'card')) {
                    Object.assign(style, transitionStyleRef.value);
                }
                slideStyles.push(style);
            }
            return slideStyles;
        });
        // Total
        const totalViewRef = (0, vue_1.computed)(() => {
            const { value: slidesPerView } = displaySlidesPerViewRef;
            const { length: originLength } = slidesElsRef.value;
            if (slidesPerView !== 'auto') {
                return originLength - slidesPerView + 1;
            }
            else {
                const { value: slideSizes } = slideSizesRef;
                const { length } = slideSizes;
                if (!length)
                    return originLength;
                const { value: translates } = slideTranlatesRef;
                const { value: axis } = sizeAxisRef;
                const perViewSize = perViewSizeRef.value[axis];
                let lastViewSize = slideSizes[slideSizes.length - 1][axis];
                let i = length;
                while (i > 1 && lastViewSize < perViewSize) {
                    i--;
                    lastViewSize += translates[i] - translates[i - 1];
                }
                if (i !== length)
                    i++;
                if (i < 1)
                    i = 1;
                return i;
            }
        });
        const displayTotalViewRef = (0, vue_1.computed)(() => {
            const { value: totalView } = totalViewRef;
            return duplicatedableRef.value && totalView > 3
                ? totalView - 2
                : totalView;
        });
        // Index
        const initializeIndex = props.defaultIndex + (duplicatedableRef.value ? 1 : 0);
        const displayIndexRef = (0, vue_1.ref)((0, utils_1.getDisplayIndex)(initializeIndex, totalViewRef.value, duplicatedableRef.value));
        const virtualIndexRef = (0, vue_1.ref)(initializeIndex);
        const realIndexRef = (0, vue_1.ref)(initializeIndex);
        // record the translate of each slide, so that it can be restored at touch
        let previousTranslate = 0;
        // Reality methods
        function toRealIndex(index, speed = speedRef.value) {
            var _a, _b;
            const { value: length } = totalViewRef;
            if ((index = (0, utils_1.clampValue)(index, 0, length - 1)) !== realIndexRef.value) {
                const { value: lastDisplayIndex } = displayIndexRef;
                // When it is loop from the first silde to the last one,
                // we control its animation effect
                if (duplicatedableRef.value && displayTotalViewRef.value > 2) {
                    if (lastDisplayIndex === 0 && index === displayTotalViewRef.value) {
                        index = 0;
                    }
                    else if (lastDisplayIndex === displayTotalViewRef.value - 1 &&
                        index === 1) {
                        index = length - 1;
                    }
                }
                const displayIndex = (displayIndexRef.value = (0, utils_1.getDisplayIndex)(index, totalViewRef.value, duplicatedableRef.value));
                virtualIndexRef.value = index;
                realIndexRef.value = (0, utils_1.getRealIndex)(displayIndex, duplicatedableRef.value);
                if (translateableRef.value) {
                    translateTo(index, speed);
                }
                else {
                    if (!userWantsControlRef.value && speed > 0) {
                        inTransition = true;
                    }
                    fixTranslate();
                }
                if (displayIndex !== lastDisplayIndex) {
                    (_a = props['onUpdate:currentIndex']) === null || _a === void 0 ? void 0 : _a.call(props, displayIndex, lastDisplayIndex);
                    (_b = props.onUpdateCurrentIndex) === null || _b === void 0 ? void 0 : _b.call(props, displayIndex, lastDisplayIndex);
                }
            }
        }
        function getRealPrevIndex(index = realIndexRef.value) {
            return (0, utils_1.getPrevIndex)(index, totalViewRef.value, props.loop);
        }
        function getRealNextIndex(index = realIndexRef.value) {
            return (0, utils_1.getNextIndex)(index, totalViewRef.value, props.loop);
        }
        function isRealPrev(slideOrIndex) {
            const index = getSlideIndex(slideOrIndex);
            return index !== null && getRealPrevIndex() === index;
        }
        function isRealNext(slideOrIndex) {
            const index = getSlideIndex(slideOrIndex);
            return index !== null && getRealNextIndex() === index;
        }
        function isRealActive(slideOrIndex) {
            return realIndexRef.value === getSlideIndex(slideOrIndex);
        }
        // Display methods
        // They are used to deal with the actual values displayed on the UI
        function isDisplayActive(index) {
            return displayIndexRef.value === index;
        }
        function isPrevDisabled() {
            return getRealPrevIndex() === null;
        }
        function isNextDisabled() {
            return getRealNextIndex() === null;
        }
        // Slide to
        function to(index) {
            const realIndex = (0, utils_1.getRealIndex)(index, duplicatedableRef.value);
            if (index !== displayIndexRef.value || realIndex !== realIndexRef.value) {
                toRealIndex(realIndex);
            }
        }
        function prev() {
            const prevIndex = getRealPrevIndex();
            if (prevIndex !== null) {
                toRealIndex(prevIndex);
            }
        }
        function next() {
            const nextIndex = getRealNextIndex();
            if (nextIndex !== null) {
                toRealIndex(nextIndex);
            }
        }
        // Translate to
        const translateStyleRef = (0, vue_1.ref)({});
        let inTransition = false;
        function updateTranslate(translate, speed = 0) {
            const isVersical = props.direction === 'vertical';
            translateStyleRef.value = Object.assign({}, transitionStyleRef.value, {
                transform: isVersical
                    ? `translateY(${-translate}px)`
                    : `translateX(${-translate}px)`,
                transitionDuration: `${speed}ms`
            });
        }
        function fixTranslate(speed = 0) {
            if (translateableRef.value) {
                translateTo(realIndexRef.value, speed);
            }
            else if (previousTranslate !== 0) {
                updateTranslate((previousTranslate = 0), speed);
            }
        }
        function translateTo(index, speed = speedRef.value) {
            const translate = getTranslate(index);
            if (translate !== previousTranslate && speed > 0) {
                inTransition = true;
            }
            updateTranslate(translate, speed);
            previousTranslate = getTranslate(realIndexRef.value);
        }
        function getTranslate(index) {
            let translate;
            // Deal with auto slides pre view
            if (index >= totalViewRef.value - 1) {
                translate = getLastViewTranslate();
            }
            else {
                translate = slideTranlatesRef.value[index] || 0;
            }
            return translate;
        }
        function getLastViewTranslate() {
            if (displaySlidesPerViewRef.value === 'auto') {
                const { value: axis } = sizeAxisRef;
                const { [axis]: perViewSize } = perViewSizeRef.value;
                const { value: translates } = slideTranlatesRef;
                const lastTranslate = translates[translates.length - 1];
                let overallSize;
                if (lastTranslate === undefined) {
                    overallSize = perViewSize;
                }
                else {
                    const { value: slideSizes } = slideSizesRef;
                    overallSize = lastTranslate + slideSizes[slideSizes.length - 1][axis];
                }
                // Bring the last slide to the edge
                return overallSize - perViewSize;
            }
            else {
                const { value: translates } = slideTranlatesRef;
                return translates[totalViewRef.value - 1] || 0;
            }
        }
        // Provide
        function addSlide(slide) {
            if (!slide)
                return;
            slidesElsRef.value.push(slide);
        }
        function removeSlide(slide) {
            if (!slide)
                return;
            const index = getSlideIndex(slide);
            if (index !== -1) {
                slidesElsRef.value.splice(index, 1);
            }
        }
        function getSlideIndex(slideOrIndex) {
            return typeof slideOrIndex === 'number'
                ? slideOrIndex
                : slidesElsRef.value.indexOf(slideOrIndex);
        }
        function getSlideStyle(slide) {
            const index = getSlideIndex(slide);
            if (index !== -1) {
                return slideStylesRef.value[index];
            }
        }
        function onCarouselItemClick(index, event) {
            const isTryDrag = 4 /* PROGRESS */ | 8 /* SUCCESS */ | 16 /* FAIL */;
            let allowClick = !inTransition && !(dragStatus & isTryDrag);
            if (props.effect === 'card' &&
                !userWantsControlRef.value &&
                !(dragStatus & 8 /* SUCCESS */) &&
                !isRealActive(index)) {
                to(index);
                allowClick = false;
            }
            if (!allowClick) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        const carouselMethods = {
            to,
            prev: () => {
                // wait transition end
                if (!inTransition || !duplicatedableRef.value)
                    prev();
            },
            next: () => {
                // wait transition end
                if (!inTransition || !duplicatedableRef.value)
                    next();
            },
            isVertical: () => verticalRef.value,
            isHorizontal: () => !verticalRef.value,
            isPrev: isRealPrev,
            isNext: isRealNext,
            isActive: isRealActive,
            isPrevDisabled,
            isNextDisabled,
            getCurrentIndex: () => displayIndexRef.value,
            getSlideIndex,
            getSlideStyle,
            addSlide,
            removeSlide,
            onCarouselItemClick,
            prevSlideStyleRef: (0, vue_1.toRef)(props, 'prevSlideStyle'),
            nextSlideStyleRef: (0, vue_1.toRef)(props, 'nextSlideStyle')
        };
        (0, vue_1.provide)(interface_1.carouselMethodsInjectionKey, carouselMethods);
        // Autoplay
        let autoplayTimer = null;
        function resetAutoplay(cleanOnly) {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
            const { autoplay, interval } = props;
            if (autoplay && interval && !cleanOnly) {
                autoplayTimer = window.setInterval(next, interval);
            }
        }
        function mesureAutoplay() {
            const { autoplay } = props;
            if (autoplay) {
                resetAutoplay();
            }
            else if (displayTotalViewRef.value < 2) {
                resetAutoplay(true);
            }
        }
        // Drag
        let dragStartX = 0;
        let dragStartY = 0;
        let dragOffset = 0;
        let dragStartTime = 0;
        let dragStatus = 1 /* NORMAL */;
        function handleTouchstart(event) {
            if (globalDragging)
                return;
            dragStartTime = Date.now();
            dragStatus = 2 /* START */;
            globalDragging = true;
            resetAutoplay(true /** cleanOnly */);
            if (event.type !== 'touchstart' &&
                !event.target.isContentEditable) {
                event.preventDefault();
            }
            const touchEvent = (0, utils_1.isTouchEvent)(event) ? event.touches[0] : event;
            if (verticalRef.value) {
                dragStartY = touchEvent.clientY;
            }
            else {
                dragStartX = touchEvent.clientX;
            }
            if (props.touchable) {
                (0, evtd_1.on)('touchmove', document, handleTouchmove);
                (0, evtd_1.on)('touchend', document, handleTouchend);
                (0, evtd_1.on)('touchcancel', document, handleTouchend);
            }
            if (props.draggable) {
                (0, evtd_1.on)('mousemove', document, handleTouchmove);
                (0, evtd_1.on)('mouseup', document, handleTouchend);
            }
        }
        function handleTouchmove(event) {
            const { value: vertical } = verticalRef;
            const axis = vertical ? 'height' : 'width';
            const perViewSize = perViewSizeRef.value[axis];
            const touchEvent = (0, utils_1.isTouchEvent)(event) ? event.touches[0] : event;
            const offset = vertical
                ? touchEvent.clientY - dragStartY
                : touchEvent.clientX - dragStartX;
            dragOffset = (0, utils_1.clampValue)(offset, -perViewSize, perViewSize);
            dragStatus = 4 /* PROGRESS */;
            if (translateableRef.value) {
                updateTranslate(previousTranslate - dragOffset, 0);
            }
        }
        function handleTouchend() {
            const duration = Date.now() - dragStartTime;
            const { value: axis } = sizeAxisRef;
            const { value: realIndex } = realIndexRef;
            const { value: translateable } = translateableRef;
            let currentIndex = realIndex;
            if (!inTransition && translateable && dragOffset !== 0) {
                const currentTranslate = previousTranslate - dragOffset;
                const translates = [
                    ...slideTranlatesRef.value.slice(0, totalViewRef.value - 1),
                    getLastViewTranslate()
                ];
                let prevOffset = null;
                for (let i = 0; i < translates.length; i++) {
                    const offset = Math.abs(translates[i] - currentTranslate);
                    if (prevOffset !== null && prevOffset < offset) {
                        break;
                    }
                    prevOffset = offset;
                    currentIndex = i;
                }
            }
            if (currentIndex === realIndex) {
                const perViewSize = perViewSizeRef.value[axis];
                // more than 50% width or faster than 0.4px per ms
                if (dragOffset > perViewSize / 2 || dragOffset / duration > 0.4) {
                    currentIndex = getRealPrevIndex(realIndex);
                }
                else if (dragOffset < -perViewSize / 2 ||
                    dragOffset / duration < -0.4) {
                    currentIndex = getRealNextIndex(realIndex);
                }
            }
            if (currentIndex !== null && currentIndex !== realIndex) {
                dragStatus = 8 /* SUCCESS */;
                toRealIndex(currentIndex);
            }
            else {
                if (dragStatus & 4 /* PROGRESS */) {
                    dragStatus = 16 /* FAIL */;
                }
                else {
                    dragStatus = 32 /* END */;
                }
                fixTranslate(speedRef.value);
            }
            mesureAutoplay();
            resetDragStatus();
        }
        function resetDragStatus() {
            if (!(dragStatus & 1 /* NORMAL */)) {
                globalDragging = false;
                if (dragStatus & (2 /* START */ | 4 /* PROGRESS */)) {
                    dragStatus = 1 /* NORMAL */;
                }
            }
            dragStartX = 0;
            dragStartY = 0;
            dragOffset = 0;
            dragStartTime = 0;
            (0, evtd_1.off)('touchmove', document, handleTouchmove);
            (0, evtd_1.off)('touchend', document, handleTouchend);
            (0, evtd_1.off)('touchcancel', document, handleTouchend);
            (0, evtd_1.off)('mousemove', document, handleTouchmove);
            (0, evtd_1.off)('mouseup', document, handleTouchend);
        }
        function handleTransitionEnd() {
            const { value: virtualIndex } = virtualIndexRef;
            const { value: realIndex } = realIndexRef;
            if (inTransition && virtualIndex !== realIndex) {
                translateTo(realIndex, 0);
            }
            else {
                resetAutoplay();
            }
            if (translateableRef.value) {
                translateStyleRef.value.transitionDuration = '0ms';
            }
            inTransition = false;
        }
        function handleMousewheel(event) {
            event.preventDefault();
            if (inTransition)
                return;
            const { value: vertical } = verticalRef;
            let { deltaX, deltaY } = event;
            if (event.shiftKey && !deltaX) {
                deltaX = deltaY;
            }
            const P_MULTIPLIER = -1;
            const N_MULTIPLIER = 1;
            const MULTIPLIER = (deltaX || deltaY) > 0 ? N_MULTIPLIER : P_MULTIPLIER;
            let rx = 0;
            let ry = 0;
            if (vertical) {
                ry = MULTIPLIER;
            }
            else {
                rx = MULTIPLIER;
            }
            const RESPONSE_STEP = 10;
            if (ry * deltaY >= RESPONSE_STEP || rx * deltaX >= RESPONSE_STEP) {
                if (MULTIPLIER === N_MULTIPLIER && !isNextDisabled()) {
                    next();
                }
                else if (MULTIPLIER === P_MULTIPLIER && !isPrevDisabled()) {
                    prev();
                }
            }
        }
        function handleResize() {
            perViewSizeRef.value = (0, utils_1.calculateSize)(selfElRef.value, true);
            resetAutoplay();
        }
        function handleSlideResize() {
            var _a, _b;
            if (autoSlideSizeRef.value) {
                (_b = (_a = slideSizesRef.effect).scheduler) === null || _b === void 0 ? void 0 : _b.call(_a);
                slideSizesRef.effect.run();
            }
        }
        (0, vue_1.onMounted)(() => {
            (0, vue_1.watchEffect)(mesureAutoplay);
            void (0, vue_1.nextTick)(() => (isMounted = true));
        });
        (0, vue_1.onBeforeUnmount)(() => {
            resetDragStatus();
            resetAutoplay(true);
        });
        // Fix index when remounting
        (0, vue_1.onUpdated)(() => {
            const { value: slidesEls } = slidesElsRef;
            const { value: slideVNodes } = slideVNodesRef;
            const indexMap = new Map();
            const getDisplayIndex = (el) => 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            indexMap.has(el) ? indexMap.get(el) : -1;
            let isChanged = false;
            for (let i = 0; i < slidesEls.length; i++) {
                const index = slideVNodes.findIndex((v) => v.el === slidesEls[i]);
                if (index !== i) {
                    isChanged = true;
                }
                indexMap.set(slidesEls[i], index);
            }
            if (isChanged) {
                slidesEls.sort((a, b) => getDisplayIndex(a) - getDisplayIndex(b));
            }
        });
        (0, vue_1.watch)((0, vue_1.toRef)(props, 'currentIndex'), (index) => index !== undefined && to(index));
        (0, vue_1.watch)(duplicatedableRef, () => void (0, vue_1.nextTick)(() => to(displayIndexRef.value)));
        (0, vue_1.watch)(slideTranlatesRef, () => translateableRef.value && fixTranslate(), {
            deep: true
        });
        (0, vue_1.watch)(translateableRef, (value) => {
            if (!value) {
                inTransition = false;
                // if the current mode does not support translate, reset the position of the wrapper
                updateTranslate((previousTranslate = 0));
            }
            else {
                fixTranslate();
            }
        });
        const caroulseSlotProps = {
            arrowSlotProps: (0, vue_1.computed)(() => (Object.assign({ total: displayTotalViewRef.value, currentIndex: displayIndexRef.value }, (0, _utils_1.keep)(carouselMethods, [
                'to',
                'prev',
                'next',
                'isPrevDisabled',
                'isNextDisabled'
            ])))),
            dotSlotProps: (0, vue_1.computed)(() => ({
                total: displayTotalViewRef.value,
                currentIndex: displayIndexRef.value,
                to
            }))
        };
        const caroulseExposedMethod = {
            getCurrentIndex: () => displayIndexRef.value,
            to: to,
            prev: prev,
            next: next
        };
        const themeRef = (0, _mixins_1.useTheme)('Carousel', '-carousel', index_cssr_1.default, styles_1.carouselLight, props, mergedClsPrefixRef);
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { common: { cubicBezierEaseInOut }, self: { dotSize, dotColor, dotColorActive, dotColorFocus, dotLineWidth, dotLineWidthActive, arrowColor } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-dot-color': dotColor,
                '--n-dot-color-focus': dotColorFocus,
                '--n-dot-color-active': dotColorActive,
                '--n-dot-size': dotSize,
                '--n-dot-line-width': dotLineWidth,
                '--n-dot-line-width-active': dotLineWidthActive,
                '--n-arrow-color': arrowColor
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('carousel', undefined, cssVarsRef, props)
            : undefined;
        return Object.assign(Object.assign(Object.assign({ mergedClsPrefix: mergedClsPrefixRef, selfElRef, slideVNodes: slideVNodesRef, duplicatedable: duplicatedableRef, userWantsControl: userWantsControlRef, autoSlideSize: autoSlideSizeRef, displayIndex: displayIndexRef, realIndex: realIndexRef, slideStyles: slideStylesRef, translateStyle: translateStyleRef, handleTouchstart,
            handleTransitionEnd,
            handleMousewheel,
            handleResize,
            handleSlideResize, isActive: isDisplayActive }, caroulseSlotProps), caroulseExposedMethod), { cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
    },
    render() {
        var _a;
        const { mergedClsPrefix, showArrow, userWantsControl, draggable, touchable, slideStyles, dotType, dotPlacement, transitionProps = {}, arrowSlotProps, dotSlotProps, $slots: { default: defaultSlot, dots: dotsSlot, arrow: arrowSlot } } = this;
        const children = (defaultSlot && (0, _utils_1.flatten)(defaultSlot())) || [];
        let slides = filterCarouselItem(children);
        if (!slides.length) {
            slides = children.map((ch) => ((0, vue_1.h)(CarouselItem_1.default, null, {
                default: () => (0, vue_1.cloneVNode)(ch)
            })));
        }
        const { length: realLength } = slides;
        if (realLength > 1 && this.duplicatedable) {
            slides.push(duplicateSlide(slides[0], 0, 'append'));
            slides.unshift(duplicateSlide(slides[realLength - 1], realLength - 1, 'prepend'));
        }
        this.slideVNodes.value = slides;
        // When users need to customize the size of the slide,
        // we listen to them to fix the current translate
        if (this.autoSlideSize) {
            slides = slides.map((slide) => ((0, vue_1.h)(vueuc_1.VResizeObserver, { onResize: this.handleSlideResize }, {
                default: () => slide
            })));
        }
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return ((0, vue_1.h)("div", { ref: "selfElRef", class: [
                this.themeClass,
                `${mergedClsPrefix}-carousel`,
                this.direction === 'vertical' &&
                    `${mergedClsPrefix}-carousel--vertical`,
                this.showArrow && `${mergedClsPrefix}-carousel--show-arrow`,
                `${mergedClsPrefix}-carousel--${dotPlacement}`,
                `${mergedClsPrefix}-carousel--${this.direction}`,
                `${mergedClsPrefix}-carousel--${this.effect}`,
                userWantsControl && `${mergedClsPrefix}-carousel--usercontrol`
            ], style: this.cssVars },
            (0, vue_1.h)(vueuc_1.VResizeObserver, { onResize: this.handleResize }, {
                default: () => ((0, vue_1.h)("div", { class: `${mergedClsPrefix}-carousel__slides`, role: "listbox", style: this.translateStyle, onMousedown: draggable ? this.handleTouchstart : undefined, onTouchstart: touchable ? this.handleTouchstart : undefined, onWheel: this.mousewheel ? this.handleMousewheel : undefined, onTransitionend: this.handleTransitionEnd }, userWantsControl
                    ? slides.map((slide, i) => ((0, vue_1.h)("div", { style: slideStyles[i], key: i }, (0, vue_1.withDirectives)((0, vue_1.h)(vue_1.Transition, Object.assign({}, transitionProps), {
                        default: () => slide
                    }), [[vue_1.vShow, this.isActive(i)]]))))
                    : slides))
            }),
            this.showDots &&
                (0, _utils_1.resolveSlotWithProps)(dotsSlot, dotSlotProps, () => [
                    dotSlotProps.total > 1 && ((0, vue_1.h)(CarouselDots_1.default, { key: dotType + dotPlacement, total: dotSlotProps.total, currentIndex: dotSlotProps.currentIndex, dotType: dotType, trigger: this.trigger, keyboard: this.keyboard }))
                ]),
            showArrow &&
                (0, _utils_1.resolveSlotWithProps)(arrowSlot, arrowSlotProps, () => [
                    (0, vue_1.h)(CarouselArrow_1.default, null)
                ])));
    }
});
function filterCarouselItem(vnodes, carouselItems = []) {
    if (Array.isArray(vnodes)) {
        vnodes.forEach((vnode) => {
            if (vnode.type && vnode.type.name === 'CarouselItem') {
                carouselItems.push(vnode);
            }
        });
    }
    return carouselItems;
}
function duplicateSlide(child, index, position) {
    return (0, vue_1.cloneVNode)(child, {
        // for patch
        key: `carousel-item-duplicate-${index}-${position}`
    });
}
