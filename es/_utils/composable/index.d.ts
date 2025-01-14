import { Ref, InjectionKey } from 'vue';
export declare function useInjectionInstanceCollection(injectionName: string | InjectionKey<unknown>, collectionKey: string, registerKeyRef: Ref<any>): void;
export declare function useInjectionCollection(injectionName: string | InjectionKey<unknown>, collectionKey: string, valueRef: Ref<any>): void;
export declare function useInjectionElementCollection(injectionName: string | InjectionKey<unknown>, collectionKey: string, getElement: () => HTMLElement | null): void;
export declare function useDeferredTrue(valueRef: Ref<any>, delay: number, shouldDelayRef: Ref<boolean>): Ref<boolean>;
export { useAdjustedTo } from './use-adjusted-to';
export { useHoudini } from './use-houdini';
export { useOnResize } from './use-resize';
export { useLockHtmlScroll, lockHtmlScrollRightCompensationRef } from './use-lock-html-scroll';
