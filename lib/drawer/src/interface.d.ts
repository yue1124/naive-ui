import { Ref } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { DrawerTheme } from '../styles';
export declare type DrawerBodyInjection = Ref<HTMLElement | null> | null;
export declare const drawerBodyInjectionKey: import("vue").InjectionKey<DrawerBodyInjection>;
export interface DrawerInjection {
    isMountedRef: Ref<boolean>;
    mergedThemeRef: Ref<MergedTheme<DrawerTheme>>;
    mergedClsPrefixRef: Ref<string>;
    doUpdateShow: (show: boolean) => void;
}
export declare const drawerInjectionKey: import("vue").InjectionKey<DrawerInjection>;
