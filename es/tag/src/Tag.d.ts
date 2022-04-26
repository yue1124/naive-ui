import { PropType, Ref } from 'vue'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
export interface TagPublicMethods {
  setTextContent: (textContent: string) => void
}
export interface TagRef extends TagPublicMethods {
  $el: HTMLElement
}
declare const tagProps: {
  bordered: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  checked: BooleanConstructor
  checkable: BooleanConstructor
  onClose: PropType<MaybeArray<(e: MouseEvent) => void>>
  onMouseenter: PropType<(e: MouseEvent) => void>
  onMouseleave: PropType<(e: MouseEvent) => void>
  'onUpdate:checked': PropType<(checked: boolean) => void>
  onUpdateChecked: PropType<(checked: boolean) => void>
  internalStopClickPropagation: BooleanConstructor
  onCheckedChange: {
    type: PropType<(checked: boolean) => void>
    validator: () => boolean
    default: undefined
  }
  color: PropType<import('./common-props').TagColor>
  type: {
    readonly type: PropType<
      'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
    >
    readonly default: 'default'
  }
  round: BooleanConstructor
  size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  closable: BooleanConstructor
  disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Tag',
      {
        heightSmall: string
        heightMedium: string
        heightLarge: string
        borderRadius: string
        opacityDisabled: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        textColorCheckable: string
        textColorHoverCheckable: string
        textColorPressedCheckable: string
        textColorChecked: string
        colorCheckable: string
        colorHoverCheckable: string
        colorPressedCheckable: string
        colorChecked: string
        colorCheckedHover: string
        colorCheckedPressed: string
        border: string
        textColor: string
        color: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        borderPrimary: string
        textColorPrimary: string
        colorPrimary: string
        closeColorPrimary: string
        closeColorHoverPrimary: string
        closeColorPressedPrimary: string
        borderInfo: string
        textColorInfo: string
        colorInfo: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        borderSuccess: string
        textColorSuccess: string
        colorSuccess: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        borderWarning: string
        textColorWarning: string
        colorWarning: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        borderError: string
        textColorError: string
        colorError: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        closeSizeSmall: string
        closeSizeMedium: string
        closeSizeLarge: string
        padding: string
        closeMargin: string
        closeMarginRtl: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
  >
}
interface TagInjection {
  roundRef: Ref<boolean>
}
export declare const tagInjectionKey: import('vue').InjectionKey<TagInjection>
export declare type TagProps = ExtractPublicPropTypes<typeof tagProps>
declare const _default: import('vue').DefineComponent<
  {
    bordered: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    checked: BooleanConstructor
    checkable: BooleanConstructor
    onClose: PropType<MaybeArray<(e: MouseEvent) => void>>
    onMouseenter: PropType<(e: MouseEvent) => void>
    onMouseleave: PropType<(e: MouseEvent) => void>
    'onUpdate:checked': PropType<(checked: boolean) => void>
    onUpdateChecked: PropType<(checked: boolean) => void>
    internalStopClickPropagation: BooleanConstructor
    onCheckedChange: {
      type: PropType<(checked: boolean) => void>
      validator: () => boolean
      default: undefined
    }
    color: PropType<import('./common-props').TagColor>
    type: {
      readonly type: PropType<
        'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
      >
      readonly default: 'default'
    }
    round: BooleanConstructor
    size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    closable: BooleanConstructor
    disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tag',
          {
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            closeColorPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tag',
          {
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            closeColorPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
      >
    >
  },
  {
    rtlEnabled:
      | Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    mergedClsPrefix: import('vue').ComputedRef<string>
    contentRef: Ref<HTMLElement | null>
    mergedBordered: import('vue').ComputedRef<boolean>
    handleClick: (e: MouseEvent) => void
    handleCloseClick: (e: MouseEvent) => void
    cssVars:
      | import('vue').ComputedRef<{
          '--n-avatar-size-override': string
          '--n-bezier': string
          '--n-border-radius': string
          '--n-border': string
          '--n-close-color': string
          '--n-close-color-hover': string
          '--n-close-color-pressed': string
          '--n-close-color-disabled': string
          '--n-close-margin': string
          '--n-close-margin-rtl': string
          '--n-close-size': string
          '--n-color': string
          '--n-color-checkable': string
          '--n-color-checked': string
          '--n-color-checked-hover': string
          '--n-color-checked-pressed': string
          '--n-color-hover-checkable': string
          '--n-color-pressed-checkable': string
          '--n-font-size': string
          '--n-height': string
          '--n-opacity-disabled': string
          '--n-padding': string
          '--n-text-color': string
          '--n-text-color-checkable': string
          '--n-text-color-checked': string
          '--n-text-color-hover-checkable': string
          '--n-text-color-pressed-checkable': string
        }>
      | undefined
    themeClass: Ref<string> | undefined
    onRender: (() => void) | undefined
    setTextContent: (textContent: string) => void
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
    import('vue').ExtractPropTypes<{
      bordered: {
        type: PropType<boolean | undefined>
        default: undefined
      }
      checked: BooleanConstructor
      checkable: BooleanConstructor
      onClose: PropType<MaybeArray<(e: MouseEvent) => void>>
      onMouseenter: PropType<(e: MouseEvent) => void>
      onMouseleave: PropType<(e: MouseEvent) => void>
      'onUpdate:checked': PropType<(checked: boolean) => void>
      onUpdateChecked: PropType<(checked: boolean) => void>
      internalStopClickPropagation: BooleanConstructor
      onCheckedChange: {
        type: PropType<(checked: boolean) => void>
        validator: () => boolean
        default: undefined
      }
      color: PropType<import('./common-props').TagColor>
      type: {
        readonly type: PropType<
          'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
        >
        readonly default: 'default'
      }
      round: BooleanConstructor
      size: {
        readonly type: PropType<'small' | 'medium' | 'large'>
        readonly default: 'medium'
      }
      closable: BooleanConstructor
      disabled: {
        readonly type: PropType<boolean | undefined>
        readonly default: undefined
      }
      theme: PropType<
        import('../../_mixins').Theme<
          'Tag',
          {
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            closeColorPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
      >
      themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Tag',
            {
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              closeColorPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
        >
      >
      builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Tag',
            {
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              closeColorPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    type: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
    round: boolean
    size: 'small' | 'medium' | 'large'
    disabled: boolean | undefined
    checked: boolean
    bordered: boolean | undefined
    checkable: boolean
    internalStopClickPropagation: boolean
    onCheckedChange: (checked: boolean) => void
    closable: boolean
  }
>
export default _default
