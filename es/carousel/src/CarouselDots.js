import { h, defineComponent, inject, ref, onBeforeUpdate } from 'vue';
import { indexMap } from 'seemly';
import { useConfig } from '../../_mixins';
import { carouselMethodsInjectionKey } from './interface';
const carouselDotsProps = {
    total: {
        type: Number,
        default: 0
    },
    currentIndex: {
        type: Number,
        default: 0
    },
    dotType: {
        type: String,
        default: 'dot'
    },
    trigger: {
        type: String,
        default: 'click'
    },
    keyboard: Boolean
};
export default defineComponent({
    name: 'CarouselDots',
    props: carouselDotsProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const dotElsRef = ref([]);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const NCarousel = inject(carouselMethodsInjectionKey, null);
        function handleKeydown(e, current) {
            switch (e.code) {
                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    NCarousel.to(current);
                    return;
            }
            if (props.keyboard) {
                handleKeyboard(e);
            }
        }
        function handleMouseenter(current) {
            if (props.trigger === 'hover') {
                NCarousel.to(current);
            }
        }
        function handleClick(current) {
            if (props.trigger === 'click') {
                NCarousel.to(current);
            }
        }
        function handleKeyboard(e) {
            var _a;
            const { code: keycode } = e;
            const vertical = NCarousel.isVertical();
            const isVerticalNext = keycode === 'PageUp' || keycode === 'ArrowUp';
            const isVerticalPrev = keycode === 'PageDown' || keycode === 'ArrowDown';
            const isHorizontalNext = keycode === 'PageUp' || keycode === 'ArrowRight';
            const isHorizontalPrev = keycode === 'PageDown' || keycode === 'ArrowLeft';
            if (vertical &&
                ((isVerticalNext && NCarousel.isNextDisabled()) ||
                    (isVerticalPrev && NCarousel.isPrevDisabled()))) {
                return;
            }
            if (!vertical &&
                ((isHorizontalNext && NCarousel.isNextDisabled()) ||
                    (isHorizontalPrev && NCarousel.isPrevDisabled()))) {
                return;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            const nodeName = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.nodeName.toLowerCase();
            if (nodeName === 'input' || nodeName === 'textarea') {
                return;
            }
            if (vertical ? isVerticalNext : isHorizontalNext) {
                e.preventDefault();
                NCarousel.next();
                focusDot(NCarousel.getCurrentIndex());
            }
            else if (vertical ? isVerticalPrev : isHorizontalPrev) {
                e.preventDefault();
                NCarousel.prev();
                focusDot(NCarousel.getCurrentIndex());
            }
        }
        function focusDot(index = props.currentIndex) {
            const { value: dotEls } = dotElsRef;
            if (index >= 0 && index < dotEls.length) {
                dotEls[index].focus();
            }
        }
        onBeforeUpdate(() => (dotElsRef.value.length = 0));
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            dotEls: dotElsRef,
            handleKeydown,
            handleMouseenter,
            handleClick
        };
    },
    render() {
        const { mergedClsPrefix, dotEls } = this;
        return (h("div", { class: [
                `${mergedClsPrefix}-carousel__dots`,
                `${mergedClsPrefix}-carousel__dots--${this.dotType}`
            ], role: "tablist" }, indexMap(this.total, (i) => {
            const selected = i === this.currentIndex;
            return (h("div", { "aria-selected": selected, ref: (el) => dotEls.push(el), role: "button", tabindex: "0", class: [
                    `${mergedClsPrefix}-carousel__dot`,
                    selected && `${mergedClsPrefix}-carousel__dot--active`
                ], key: i, onClick: () => this.handleClick(i), onMouseenter: () => this.handleMouseenter(i), onKeydown: (e) => this.handleKeydown(e, i) }));
        })));
    }
});
