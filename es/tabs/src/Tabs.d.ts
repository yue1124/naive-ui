/// <reference types="lodash" />
import {
  PropType,
  CSSProperties,
  ComponentPublicInstance,
  nextTick,
  ExtractPropTypes
} from 'vue'
import { VXScrollInst } from 'vueuc'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type {
  Addable,
  OnClose,
  OnBeforeLeave,
  TabsType,
  OnUpdateValue
} from './interface'
declare const tabsProps: {
  readonly value: PropType<string | number>
  readonly defaultValue: PropType<string | number>
  readonly trigger: {
    readonly type: PropType<'click' | 'hover'>
    readonly default: 'click'
  }
  readonly type: {
    readonly type: PropType<TabsType>
    readonly default: 'bar'
  }
  readonly closable: BooleanConstructor
  readonly justifyContent: PropType<
    | 'start'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'center'
  >
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly tabStyle: PropType<string | CSSProperties>
  readonly barWidth: NumberConstructor
  readonly paneClass: StringConstructor
  readonly paneStyle: PropType<string | CSSProperties>
  readonly addable: PropType<Addable>
  readonly tabsPadding: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly animated: BooleanConstructor
  readonly onBeforeLeave: PropType<OnBeforeLeave>
  readonly onAdd: PropType<() => void>
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly onClose: PropType<MaybeArray<OnClose>>
  readonly labelSize: PropType<'small' | 'medium' | 'large'>
  readonly activeName: PropType<string | number>
  readonly onActiveNameChange: PropType<
    MaybeArray<(value: string & number) => void>
  >
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Tabs',
      {
        colorSegment: string
        tabFontSizeCard: string
        tabTextColorLine: string
        tabTextColorActiveLine: string
        tabTextColorHoverLine: string
        tabTextColorDisabledLine: string
        tabTextColorSegment: string
        tabTextColorActiveSegment: string
        tabTextColorHoverSegment: string
        tabTextColorDisabledSegment: string
        tabTextColorBar: string
        tabTextColorActiveBar: string
        tabTextColorHoverBar: string
        tabTextColorDisabledBar: string
        tabTextColorCard: string
        tabTextColorHoverCard: string
        tabTextColorActiveCard: string
        tabTextColorDisabledCard: string
        barColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        tabColor: string
        tabColorSegment: string
        tabBorderColor: string
        tabFontWeightActive: string
        tabFontWeight: string
        tabBorderRadius: string
        paneTextColor: string
        fontWeightStrong: string
        tabFontSizeSmall: string
        tabFontSizeMedium: string
        tabFontSizeLarge: string
        tabGapSmallLine: string
        tabGapMediumLine: string
        tabGapLargeLine: string
        tabPaddingSmallLine: string
        tabPaddingMediumLine: string
        tabPaddingLargeLine: string
        tabGapSmallBar: string
        tabGapMediumBar: string
        tabGapLargeBar: string
        tabPaddingSmallBar: string
        tabPaddingMediumBar: string
        tabPaddingLargeBar: string
        tabGapSmallCard: string
        tabGapMediumCard: string
        tabGapLargeCard: string
        tabPaddingSmallCard: string
        tabPaddingMediumCard: string
        tabPaddingLargeCard: string
        tabPaddingSmallSegment: string
        tabPaddingMediumSegment: string
        tabPaddingLargeSegment: string
        tabGapSmallSegment: string
        tabGapMediumSegment: string
        tabGapLargeSegment: string
        panePaddingSmall: string
        panePaddingMedium: string
        panePaddingLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tabs',
        {
          colorSegment: string
          tabFontSizeCard: string
          tabTextColorLine: string
          tabTextColorActiveLine: string
          tabTextColorHoverLine: string
          tabTextColorDisabledLine: string
          tabTextColorSegment: string
          tabTextColorActiveSegment: string
          tabTextColorHoverSegment: string
          tabTextColorDisabledSegment: string
          tabTextColorBar: string
          tabTextColorActiveBar: string
          tabTextColorHoverBar: string
          tabTextColorDisabledBar: string
          tabTextColorCard: string
          tabTextColorHoverCard: string
          tabTextColorActiveCard: string
          tabTextColorDisabledCard: string
          barColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          tabColor: string
          tabColorSegment: string
          tabBorderColor: string
          tabFontWeightActive: string
          tabFontWeight: string
          tabBorderRadius: string
          paneTextColor: string
          fontWeightStrong: string
          tabFontSizeSmall: string
          tabFontSizeMedium: string
          tabFontSizeLarge: string
          tabGapSmallLine: string
          tabGapMediumLine: string
          tabGapLargeLine: string
          tabPaddingSmallLine: string
          tabPaddingMediumLine: string
          tabPaddingLargeLine: string
          tabGapSmallBar: string
          tabGapMediumBar: string
          tabGapLargeBar: string
          tabPaddingSmallBar: string
          tabPaddingMediumBar: string
          tabPaddingLargeBar: string
          tabGapSmallCard: string
          tabGapMediumCard: string
          tabGapLargeCard: string
          tabPaddingSmallCard: string
          tabPaddingMediumCard: string
          tabPaddingLargeCard: string
          tabPaddingSmallSegment: string
          tabPaddingMediumSegment: string
          tabPaddingLargeSegment: string
          tabGapSmallSegment: string
          tabGapMediumSegment: string
          tabGapLargeSegment: string
          panePaddingSmall: string
          panePaddingMedium: string
          panePaddingLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tabs',
        {
          colorSegment: string
          tabFontSizeCard: string
          tabTextColorLine: string
          tabTextColorActiveLine: string
          tabTextColorHoverLine: string
          tabTextColorDisabledLine: string
          tabTextColorSegment: string
          tabTextColorActiveSegment: string
          tabTextColorHoverSegment: string
          tabTextColorDisabledSegment: string
          tabTextColorBar: string
          tabTextColorActiveBar: string
          tabTextColorHoverBar: string
          tabTextColorDisabledBar: string
          tabTextColorCard: string
          tabTextColorHoverCard: string
          tabTextColorActiveCard: string
          tabTextColorDisabledCard: string
          barColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          tabColor: string
          tabColorSegment: string
          tabBorderColor: string
          tabFontWeightActive: string
          tabFontWeight: string
          tabBorderRadius: string
          paneTextColor: string
          fontWeightStrong: string
          tabFontSizeSmall: string
          tabFontSizeMedium: string
          tabFontSizeLarge: string
          tabGapSmallLine: string
          tabGapMediumLine: string
          tabGapLargeLine: string
          tabPaddingSmallLine: string
          tabPaddingMediumLine: string
          tabPaddingLargeLine: string
          tabGapSmallBar: string
          tabGapMediumBar: string
          tabGapLargeBar: string
          tabPaddingSmallBar: string
          tabPaddingMediumBar: string
          tabPaddingLargeBar: string
          tabGapSmallCard: string
          tabGapMediumCard: string
          tabGapLargeCard: string
          tabPaddingSmallCard: string
          tabPaddingMediumCard: string
          tabPaddingLargeCard: string
          tabPaddingSmallSegment: string
          tabPaddingMediumSegment: string
          tabPaddingLargeSegment: string
          tabGapSmallSegment: string
          tabGapMediumSegment: string
          tabGapLargeSegment: string
          panePaddingSmall: string
          panePaddingMedium: string
          panePaddingLarge: string
        },
        any
      >
    >
  >
}
export declare type TabsProps = ExtractPublicPropTypes<typeof tabsProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly value: PropType<string | number>
    readonly defaultValue: PropType<string | number>
    readonly trigger: {
      readonly type: PropType<'click' | 'hover'>
      readonly default: 'click'
    }
    readonly type: {
      readonly type: PropType<TabsType>
      readonly default: 'bar'
    }
    readonly closable: BooleanConstructor
    readonly justifyContent: PropType<
      | 'start'
      | 'end'
      | 'space-around'
      | 'space-between'
      | 'space-evenly'
      | 'center'
    >
    readonly size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly tabStyle: PropType<string | CSSProperties>
    readonly barWidth: NumberConstructor
    readonly paneClass: StringConstructor
    readonly paneStyle: PropType<string | CSSProperties>
    readonly addable: PropType<Addable>
    readonly tabsPadding: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly animated: BooleanConstructor
    readonly onBeforeLeave: PropType<OnBeforeLeave>
    readonly onAdd: PropType<() => void>
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly onClose: PropType<MaybeArray<OnClose>>
    readonly labelSize: PropType<'small' | 'medium' | 'large'>
    readonly activeName: PropType<string | number>
    readonly onActiveNameChange: PropType<MaybeArray<(value: never) => void>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Tabs',
        {
          colorSegment: string
          tabFontSizeCard: string
          tabTextColorLine: string
          tabTextColorActiveLine: string
          tabTextColorHoverLine: string
          tabTextColorDisabledLine: string
          tabTextColorSegment: string
          tabTextColorActiveSegment: string
          tabTextColorHoverSegment: string
          tabTextColorDisabledSegment: string
          tabTextColorBar: string
          tabTextColorActiveBar: string
          tabTextColorHoverBar: string
          tabTextColorDisabledBar: string
          tabTextColorCard: string
          tabTextColorHoverCard: string
          tabTextColorActiveCard: string
          tabTextColorDisabledCard: string
          barColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          tabColor: string
          tabColorSegment: string
          tabBorderColor: string
          tabFontWeightActive: string
          tabFontWeight: string
          tabBorderRadius: string
          paneTextColor: string
          fontWeightStrong: string
          tabFontSizeSmall: string
          tabFontSizeMedium: string
          tabFontSizeLarge: string
          tabGapSmallLine: string
          tabGapMediumLine: string
          tabGapLargeLine: string
          tabPaddingSmallLine: string
          tabPaddingMediumLine: string
          tabPaddingLargeLine: string
          tabGapSmallBar: string
          tabGapMediumBar: string
          tabGapLargeBar: string
          tabPaddingSmallBar: string
          tabPaddingMediumBar: string
          tabPaddingLargeBar: string
          tabGapSmallCard: string
          tabGapMediumCard: string
          tabGapLargeCard: string
          tabPaddingSmallCard: string
          tabPaddingMediumCard: string
          tabPaddingLargeCard: string
          tabPaddingSmallSegment: string
          tabPaddingMediumSegment: string
          tabPaddingLargeSegment: string
          tabGapSmallSegment: string
          tabGapMediumSegment: string
          tabGapLargeSegment: string
          panePaddingSmall: string
          panePaddingMedium: string
          panePaddingLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tabs',
          {
            colorSegment: string
            tabFontSizeCard: string
            tabTextColorLine: string
            tabTextColorActiveLine: string
            tabTextColorHoverLine: string
            tabTextColorDisabledLine: string
            tabTextColorSegment: string
            tabTextColorActiveSegment: string
            tabTextColorHoverSegment: string
            tabTextColorDisabledSegment: string
            tabTextColorBar: string
            tabTextColorActiveBar: string
            tabTextColorHoverBar: string
            tabTextColorDisabledBar: string
            tabTextColorCard: string
            tabTextColorHoverCard: string
            tabTextColorActiveCard: string
            tabTextColorDisabledCard: string
            barColor: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            tabColor: string
            tabColorSegment: string
            tabBorderColor: string
            tabFontWeightActive: string
            tabFontWeight: string
            tabBorderRadius: string
            paneTextColor: string
            fontWeightStrong: string
            tabFontSizeSmall: string
            tabFontSizeMedium: string
            tabFontSizeLarge: string
            tabGapSmallLine: string
            tabGapMediumLine: string
            tabGapLargeLine: string
            tabPaddingSmallLine: string
            tabPaddingMediumLine: string
            tabPaddingLargeLine: string
            tabGapSmallBar: string
            tabGapMediumBar: string
            tabGapLargeBar: string
            tabPaddingSmallBar: string
            tabPaddingMediumBar: string
            tabPaddingLargeBar: string
            tabGapSmallCard: string
            tabGapMediumCard: string
            tabGapLargeCard: string
            tabPaddingSmallCard: string
            tabPaddingMediumCard: string
            tabPaddingLargeCard: string
            tabPaddingSmallSegment: string
            tabPaddingMediumSegment: string
            tabPaddingLargeSegment: string
            tabGapSmallSegment: string
            tabGapMediumSegment: string
            tabGapLargeSegment: string
            panePaddingSmall: string
            panePaddingMedium: string
            panePaddingLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tabs',
          {
            colorSegment: string
            tabFontSizeCard: string
            tabTextColorLine: string
            tabTextColorActiveLine: string
            tabTextColorHoverLine: string
            tabTextColorDisabledLine: string
            tabTextColorSegment: string
            tabTextColorActiveSegment: string
            tabTextColorHoverSegment: string
            tabTextColorDisabledSegment: string
            tabTextColorBar: string
            tabTextColorActiveBar: string
            tabTextColorHoverBar: string
            tabTextColorDisabledBar: string
            tabTextColorCard: string
            tabTextColorHoverCard: string
            tabTextColorActiveCard: string
            tabTextColorDisabledCard: string
            barColor: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            tabColor: string
            tabColorSegment: string
            tabBorderColor: string
            tabFontWeightActive: string
            tabFontWeight: string
            tabBorderRadius: string
            paneTextColor: string
            fontWeightStrong: string
            tabFontSizeSmall: string
            tabFontSizeMedium: string
            tabFontSizeLarge: string
            tabGapSmallLine: string
            tabGapMediumLine: string
            tabGapLargeLine: string
            tabPaddingSmallLine: string
            tabPaddingMediumLine: string
            tabPaddingLargeLine: string
            tabGapSmallBar: string
            tabGapMediumBar: string
            tabGapLargeBar: string
            tabPaddingSmallBar: string
            tabPaddingMediumBar: string
            tabPaddingLargeBar: string
            tabGapSmallCard: string
            tabGapMediumCard: string
            tabGapLargeCard: string
            tabPaddingSmallCard: string
            tabPaddingMediumCard: string
            tabPaddingLargeCard: string
            tabPaddingSmallSegment: string
            tabPaddingMediumSegment: string
            tabPaddingLargeSegment: string
            tabGapSmallSegment: string
            tabGapMediumSegment: string
            tabGapLargeSegment: string
            panePaddingSmall: string
            panePaddingMedium: string
            panePaddingLarge: string
          },
          any
        >
      >
    >
  },
  {
    syncBarPosition: () => void
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedValue: import('vue').ComputedRef<string | number | null>
    renderedNames: Set<string | number>
    tabsPaneWrapperRef: import('vue').Ref<HTMLElement | null>
    tabsElRef: import('vue').Ref<HTMLElement | null>
    barElRef: import('vue').Ref<HTMLElement | null>
    addTabInstRef: import('vue').Ref<ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      import('vue').ComponentOptionsBase<
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        {}
      >
    > | null>
    xScrollInstRef: import('vue').Ref<
      | (VXScrollInst & {
          $: import('vue').ComponentInternalInstance
          $data: {}
          $props: {}
          $attrs: {
            [x: string]: unknown
          }
          $refs: {
            [x: string]: unknown
          }
          $slots: Readonly<{
            [name: string]: import('vue').Slot | undefined
          }>
          $root: ComponentPublicInstance<
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            false,
            import('vue').ComponentOptionsBase<
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              {}
            >
          > | null
          $parent: ComponentPublicInstance<
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            false,
            import('vue').ComponentOptionsBase<
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              {}
            >
          > | null
          $emit: (event: string, ...args: any[]) => void
          $el: any
          $options: import('vue').ComponentOptionsBase<
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            {}
          > & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined
            created?: ((() => void) | (() => void)[]) | undefined
            beforeMount?: ((() => void) | (() => void)[]) | undefined
            mounted?: ((() => void) | (() => void)[]) | undefined
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined
            updated?: ((() => void) | (() => void)[]) | undefined
            activated?: ((() => void) | (() => void)[]) | undefined
            deactivated?: ((() => void) | (() => void)[]) | undefined
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined
            destroyed?: ((() => void) | (() => void)[]) | undefined
            unmounted?: ((() => void) | (() => void)[]) | undefined
            renderTracked?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            renderTriggered?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            errorCaptured?:
              | (
                  | ((
                      err: unknown,
                      instance: ComponentPublicInstance<
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        false,
                        import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {}
                        >
                      > | null,
                      info: string
                    ) => boolean | void)
                  | ((
                      err: unknown,
                      instance: ComponentPublicInstance<
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        false,
                        import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {}
                        >
                      > | null,
                      info: string
                    ) => boolean | void)[]
                )
              | undefined
          }
          $forceUpdate: () => void
          $nextTick: typeof nextTick
          $watch(
            source: string | Function,
            cb: Function,
            options?: import('vue').WatchOptions<boolean> | undefined
          ): import('vue').WatchStopHandle
        } & import('vue').ShallowUnwrapRef<{}> & {} & {} & import('vue').ComponentCustomProperties)
      | null
    >
    scrollWrapperElRef: import('vue').Ref<HTMLElement | null>
    addTabFixed: import('vue').Ref<boolean>
    tabWrapperStyle: import('vue').ComputedRef<
      | {
          display: string
          justifyContent:
            | 'start'
            | 'end'
            | 'space-around'
            | 'space-between'
            | 'space-evenly'
            | 'center'
        }
      | undefined
    >
    handleNavResize: import('lodash').DebouncedFunc<
      (entry: ResizeObserverEntry) => void
    >
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large'>
    handleScroll: import('lodash').DebouncedFunc<(e: Event) => void>
    handleTabsResize: import('lodash').DebouncedFunc<
      (entry: ResizeObserverEntry) => void
    >
    cssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-color-segment': string
          '--n-bar-color': string
          '--n-tab-font-size': string
          '--n-tab-text-color': string
          '--n-tab-text-color-active': string
          '--n-tab-text-color-disabled': string
          '--n-tab-text-color-hover': string
          '--n-pane-text-color': string
          '--n-tab-border-color': string
          '--n-tab-border-radius': string
          '--n-close-color': string
          '--n-close-color-hover': string
          '--n-close-color-pressed': string
          '--n-tab-color': string
          '--n-tab-font-weight': string
          '--n-tab-font-weight-active': string
          '--n-tab-padding': string
          '--n-tab-gap': string
          '--n-pane-padding': string
          '--n-font-weight-strong': string
          '--n-tab-color-segment': string
        }>
      | undefined
    themeClass: import('vue').Ref<string> | undefined
    animationDirection: import('vue').Ref<'prev' | 'next'>
    renderNameListRef: {
      value: Array<string | number>
    }
    onAnimationBeforeLeave: () => void
    onAnimationEnter: (el: HTMLElement) => void
    onAnimationAfterEnter: () => void
    onRender: (() => void) | undefined
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      readonly value: PropType<string | number>
      readonly defaultValue: PropType<string | number>
      readonly trigger: {
        readonly type: PropType<'click' | 'hover'>
        readonly default: 'click'
      }
      readonly type: {
        readonly type: PropType<TabsType>
        readonly default: 'bar'
      }
      readonly closable: BooleanConstructor
      readonly justifyContent: PropType<
        | 'start'
        | 'end'
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
        | 'center'
      >
      readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large'>
        readonly default: 'medium'
      }
      readonly tabStyle: PropType<string | CSSProperties>
      readonly barWidth: NumberConstructor
      readonly paneClass: StringConstructor
      readonly paneStyle: PropType<string | CSSProperties>
      readonly addable: PropType<Addable>
      readonly tabsPadding: {
        readonly type: NumberConstructor
        readonly default: 0
      }
      readonly animated: BooleanConstructor
      readonly onBeforeLeave: PropType<OnBeforeLeave>
      readonly onAdd: PropType<() => void>
      readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
      readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
      readonly onClose: PropType<MaybeArray<OnClose>>
      readonly labelSize: PropType<'small' | 'medium' | 'large'>
      readonly activeName: PropType<string | number>
      readonly onActiveNameChange: PropType<MaybeArray<(value: never) => void>>
      readonly theme: PropType<
        import('../../_mixins').Theme<
          'Tabs',
          {
            colorSegment: string
            tabFontSizeCard: string
            tabTextColorLine: string
            tabTextColorActiveLine: string
            tabTextColorHoverLine: string
            tabTextColorDisabledLine: string
            tabTextColorSegment: string
            tabTextColorActiveSegment: string
            tabTextColorHoverSegment: string
            tabTextColorDisabledSegment: string
            tabTextColorBar: string
            tabTextColorActiveBar: string
            tabTextColorHoverBar: string
            tabTextColorDisabledBar: string
            tabTextColorCard: string
            tabTextColorHoverCard: string
            tabTextColorActiveCard: string
            tabTextColorDisabledCard: string
            barColor: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            tabColor: string
            tabColorSegment: string
            tabBorderColor: string
            tabFontWeightActive: string
            tabFontWeight: string
            tabBorderRadius: string
            paneTextColor: string
            fontWeightStrong: string
            tabFontSizeSmall: string
            tabFontSizeMedium: string
            tabFontSizeLarge: string
            tabGapSmallLine: string
            tabGapMediumLine: string
            tabGapLargeLine: string
            tabPaddingSmallLine: string
            tabPaddingMediumLine: string
            tabPaddingLargeLine: string
            tabGapSmallBar: string
            tabGapMediumBar: string
            tabGapLargeBar: string
            tabPaddingSmallBar: string
            tabPaddingMediumBar: string
            tabPaddingLargeBar: string
            tabGapSmallCard: string
            tabGapMediumCard: string
            tabGapLargeCard: string
            tabPaddingSmallCard: string
            tabPaddingMediumCard: string
            tabPaddingLargeCard: string
            tabPaddingSmallSegment: string
            tabPaddingMediumSegment: string
            tabPaddingLargeSegment: string
            tabGapSmallSegment: string
            tabGapMediumSegment: string
            tabGapLargeSegment: string
            panePaddingSmall: string
            panePaddingMedium: string
            panePaddingLarge: string
          },
          any
        >
      >
      readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Tabs',
            {
              colorSegment: string
              tabFontSizeCard: string
              tabTextColorLine: string
              tabTextColorActiveLine: string
              tabTextColorHoverLine: string
              tabTextColorDisabledLine: string
              tabTextColorSegment: string
              tabTextColorActiveSegment: string
              tabTextColorHoverSegment: string
              tabTextColorDisabledSegment: string
              tabTextColorBar: string
              tabTextColorActiveBar: string
              tabTextColorHoverBar: string
              tabTextColorDisabledBar: string
              tabTextColorCard: string
              tabTextColorHoverCard: string
              tabTextColorActiveCard: string
              tabTextColorDisabledCard: string
              barColor: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              tabColor: string
              tabColorSegment: string
              tabBorderColor: string
              tabFontWeightActive: string
              tabFontWeight: string
              tabBorderRadius: string
              paneTextColor: string
              fontWeightStrong: string
              tabFontSizeSmall: string
              tabFontSizeMedium: string
              tabFontSizeLarge: string
              tabGapSmallLine: string
              tabGapMediumLine: string
              tabGapLargeLine: string
              tabPaddingSmallLine: string
              tabPaddingMediumLine: string
              tabPaddingLargeLine: string
              tabGapSmallBar: string
              tabGapMediumBar: string
              tabGapLargeBar: string
              tabPaddingSmallBar: string
              tabPaddingMediumBar: string
              tabPaddingLargeBar: string
              tabGapSmallCard: string
              tabGapMediumCard: string
              tabGapLargeCard: string
              tabPaddingSmallCard: string
              tabPaddingMediumCard: string
              tabPaddingLargeCard: string
              tabPaddingSmallSegment: string
              tabPaddingMediumSegment: string
              tabPaddingLargeSegment: string
              tabGapSmallSegment: string
              tabGapMediumSegment: string
              tabGapLargeSegment: string
              panePaddingSmall: string
              panePaddingMedium: string
              panePaddingLarge: string
            },
            any
          >
        >
      >
      readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Tabs',
            {
              colorSegment: string
              tabFontSizeCard: string
              tabTextColorLine: string
              tabTextColorActiveLine: string
              tabTextColorHoverLine: string
              tabTextColorDisabledLine: string
              tabTextColorSegment: string
              tabTextColorActiveSegment: string
              tabTextColorHoverSegment: string
              tabTextColorDisabledSegment: string
              tabTextColorBar: string
              tabTextColorActiveBar: string
              tabTextColorHoverBar: string
              tabTextColorDisabledBar: string
              tabTextColorCard: string
              tabTextColorHoverCard: string
              tabTextColorActiveCard: string
              tabTextColorDisabledCard: string
              barColor: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              tabColor: string
              tabColorSegment: string
              tabBorderColor: string
              tabFontWeightActive: string
              tabFontWeight: string
              tabBorderRadius: string
              paneTextColor: string
              fontWeightStrong: string
              tabFontSizeSmall: string
              tabFontSizeMedium: string
              tabFontSizeLarge: string
              tabGapSmallLine: string
              tabGapMediumLine: string
              tabGapLargeLine: string
              tabPaddingSmallLine: string
              tabPaddingMediumLine: string
              tabPaddingLargeLine: string
              tabGapSmallBar: string
              tabGapMediumBar: string
              tabGapLargeBar: string
              tabPaddingSmallBar: string
              tabPaddingMediumBar: string
              tabPaddingLargeBar: string
              tabGapSmallCard: string
              tabGapMediumCard: string
              tabGapLargeCard: string
              tabPaddingSmallCard: string
              tabPaddingMediumCard: string
              tabPaddingLargeCard: string
              tabPaddingSmallSegment: string
              tabPaddingMediumSegment: string
              tabPaddingLargeSegment: string
              tabGapSmallSegment: string
              tabGapMediumSegment: string
              tabGapLargeSegment: string
              panePaddingSmall: string
              panePaddingMedium: string
              panePaddingLarge: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    type: TabsType
    size: 'small' | 'medium' | 'large'
    closable: boolean
    trigger: 'click' | 'hover'
    animated: boolean
    tabsPadding: number
  }
>
export default _default
