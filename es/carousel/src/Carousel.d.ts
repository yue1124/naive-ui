import type { CSSProperties, PropType, Ref, TransitionProps, VNode } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { ElementOf } from './interface';
declare const transitionProperties: ["transitionDuration", "transitionTimingFunction"];
declare type TransitionStyle = Partial<Pick<CSSProperties, ElementOf<typeof transitionProperties>>>;
declare const carouselProps: {
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: PropType<"dot" | "line">;
        default: string;
    };
    dotPlacement: {
        type: PropType<"left" | "right" | "bottom" | "top">;
        default: string;
    };
    slidesPerView: {
        type: PropType<number | "auto">;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<"card" | "slide" | "fade" | "custom">;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    transitionStyle: {
        type: PropType<Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>>;
        default: () => TransitionStyle;
    };
    transitionProps: PropType<TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: PropType<string | CSSProperties>;
    nextSlideStyle: PropType<string | CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': PropType<(currentIndex: number, lastIndex: number) => void>;
    onUpdateCurrentIndex: PropType<(currentIndex: number, lastIndex: number) => void>;
    theme: PropType<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
};
export declare type CarouselProps = ExtractPublicPropTypes<typeof carouselProps>;
declare const _default: import("vue").DefineComponent<{
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: PropType<"dot" | "line">;
        default: string;
    };
    dotPlacement: {
        type: PropType<"left" | "right" | "bottom" | "top">;
        default: string;
    };
    slidesPerView: {
        type: PropType<number | "auto">;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<"card" | "slide" | "fade" | "custom">;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    transitionStyle: {
        type: PropType<Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>>;
        default: () => Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    };
    transitionProps: PropType<TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: PropType<string | CSSProperties>;
    nextSlideStyle: PropType<string | CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': PropType<(currentIndex: number, lastIndex: number) => void>;
    onUpdateCurrentIndex: PropType<(currentIndex: number, lastIndex: number) => void>;
    theme: PropType<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
}, {
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-dot-color': string;
        '--n-dot-color-focus': string;
        '--n-dot-color-active': string;
        '--n-dot-size': string;
        '--n-dot-line-width': string;
        '--n-dot-line-width-active': string;
        '--n-arrow-color': string;
    }> | undefined;
    themeClass: Ref<string> | undefined;
    onRender: (() => void) | undefined;
    getCurrentIndex: () => number;
    to: (index: number) => void;
    prev: () => void;
    next: () => void;
    arrowSlotProps: import("vue").ComputedRef<{
        to: (index: number) => void;
        prev: () => void;
        next: () => void;
        isVertical: () => boolean;
        isPrevDisabled: () => boolean;
        isNextDisabled: () => boolean;
        isPrev: (slideOrIndex: HTMLElement | number) => boolean;
        isNext: (slideOrIndex: HTMLElement | number) => boolean;
        isActive: (slideOrIndex: HTMLElement | number) => boolean;
        isHorizontal: () => boolean;
        getCurrentIndex: () => number;
        getSlideIndex: (slideOrIndex: HTMLElement | number) => number;
        getSlideStyle: (slide: HTMLElement | number) => any;
        addSlide: (slide?: HTMLElement | undefined) => void;
        removeSlide: (slide?: HTMLElement | undefined) => void;
        onCarouselItemClick: (index: number, event: MouseEvent) => void;
        prevSlideStyleRef: Ref<string | CSSProperties | undefined>;
        nextSlideStyleRef: Ref<string | CSSProperties | undefined>;
        total: number;
        currentIndex: number;
    }>;
    dotSlotProps: import("vue").ComputedRef<{
        total: number;
        currentIndex: number;
        to: (index: number) => void;
    }>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    selfElRef: Ref<HTMLDivElement | null>;
    slideVNodes: {
        value: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    };
    duplicatedable: import("vue").ComputedRef<boolean>;
    userWantsControl: import("vue").ComputedRef<boolean>;
    autoSlideSize: import("vue").ComputedRef<boolean>;
    displayIndex: Ref<number>;
    realIndex: Ref<number>;
    slideStyles: import("vue").ComputedRef<CSSProperties[] | {
        [x: string]: string;
    }[]>;
    translateStyle: Ref<CSSProperties>;
    handleTouchstart: (event: MouseEvent | TouchEvent) => void;
    handleTransitionEnd: () => void;
    handleMousewheel: (event: WheelEvent) => void;
    handleResize: () => void;
    handleSlideResize: () => void;
    isActive: (index: number) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: PropType<"dot" | "line">;
        default: string;
    };
    dotPlacement: {
        type: PropType<"left" | "right" | "bottom" | "top">;
        default: string;
    };
    slidesPerView: {
        type: PropType<number | "auto">;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<"card" | "slide" | "fade" | "custom">;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    transitionStyle: {
        type: PropType<Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>>;
        default: () => Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    };
    transitionProps: PropType<TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: PropType<string | CSSProperties>;
    nextSlideStyle: PropType<string | CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': PropType<(currentIndex: number, lastIndex: number) => void>;
    onUpdateCurrentIndex: PropType<(currentIndex: number, lastIndex: number) => void>;
    theme: PropType<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
}>>, {
    direction: "horizontal" | "vertical";
    draggable: boolean;
    autoplay: boolean;
    loop: boolean;
    trigger: "click" | "hover";
    showArrow: boolean;
    keyboard: boolean;
    dotType: "dot" | "line";
    defaultIndex: number;
    dotPlacement: "left" | "right" | "bottom" | "top";
    slidesPerView: number | "auto";
    spaceBetween: number;
    centeredSlides: boolean;
    interval: number;
    effect: "card" | "slide" | "fade" | "custom";
    showDots: boolean;
    transitionStyle: Partial<Pick<CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    touchable: boolean;
    mousewheel: boolean;
}>;
export default _default;
