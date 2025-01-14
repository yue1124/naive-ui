"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const _mixins_1 = require("../../_mixins");
const _utils_1 = require("../../_utils");
const interface_1 = require("./interface");
exports.default = (0, vue_1.defineComponent)({
    name: 'CarouselItem',
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const NCarousel = (0, vue_1.inject)(interface_1.carouselMethodsInjectionKey, null);
        if (!NCarousel) {
            (0, _utils_1.throwError)('carousel-item', '`n-carousel-item` must be placed inside `n-carousel`.');
        }
        const selfElRef = (0, vue_1.ref)();
        const isPrevRef = (0, vue_1.computed)(() => {
            const { value: selfEl } = selfElRef;
            return Boolean(selfEl && NCarousel.isPrev(selfEl));
        });
        const isNextRef = (0, vue_1.computed)(() => {
            const { value: selfEl } = selfElRef;
            return Boolean(selfEl && NCarousel.isNext(selfEl));
        });
        const isActiveRef = (0, vue_1.computed)(() => {
            const { value: selfEl } = selfElRef;
            return Boolean(selfEl && NCarousel.isActive(selfEl));
        });
        const styleRef = (0, vue_1.computed)(() => {
            const { value: selfEl } = selfElRef;
            return selfEl && NCarousel.getSlideStyle(selfEl);
        });
        const indexRef = (0, vue_1.computed)(() => {
            const { value: selfEl } = selfElRef;
            return selfEl && NCarousel.getSlideIndex(selfEl);
        });
        function handleClick(event) {
            const { value: index } = indexRef;
            if (index !== undefined) {
                NCarousel === null || NCarousel === void 0 ? void 0 : NCarousel.onCarouselItemClick(index, event);
            }
        }
        (0, vue_1.onMounted)(() => NCarousel.addSlide(selfElRef.value));
        (0, vue_1.onBeforeUnmount)(() => {
            NCarousel.removeSlide(selfElRef.value);
        });
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            selfElRef,
            isPrev: isPrevRef,
            isNext: isNextRef,
            isActive: isActiveRef,
            index: indexRef,
            style: styleRef,
            prevSlideStyle: NCarousel.prevSlideStyleRef,
            nextSlideStyle: NCarousel.nextSlideStyleRef,
            handleClick
        };
    },
    render() {
        var _a;
        const { $slots: slots, mergedClsPrefix, isPrev, isNext, isActive, index, style } = this;
        const className = [
            `${mergedClsPrefix}-carousel__slide`,
            {
                [`${mergedClsPrefix}-carousel__slide--current`]: isActive,
                [`${mergedClsPrefix}-carousel__slide--prev`]: isPrev,
                [`${mergedClsPrefix}-carousel__slide--next`]: isNext
            }
        ];
        return ((0, vue_1.h)("div", { ref: "selfElRef", class: className, role: "option", tabindex: "-1", "data-index": index, "aria-hidden": !isActive, style: [
                style,
                isPrev ? this.prevSlideStyle : '',
                isNext ? this.nextSlideStyle : ''
            ], 
            // We use ts-ignore for vue-tsc, since it seems to patch native event
            // for vue components
            // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
            // @ts-ignore
            onClickCapture: this.handleClick }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
            isPrev,
            isNext,
            isActive,
            index
        })));
    }
});
