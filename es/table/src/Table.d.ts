import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const tableProps: {
  bordered: {
    type: BooleanConstructor
    default: boolean
  }
  bottomBordered: {
    type: BooleanConstructor
    default: boolean
  }
  singleLine: {
    type: BooleanConstructor
    default: boolean
  }
  striped: BooleanConstructor
  singleColumn: BooleanConstructor
  size: {
    type: PropType<'small' | 'medium' | 'large'>
    default: string
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Table',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        borderRadius: string
        borderColor: string
        borderColorModal: string
        borderColorPopover: string
        tdColor: string
        tdColorModal: string
        tdColorPopover: string
        tdColorStriped: string
        tdColorStripedModal: string
        tdColorStripedPopover: string
        thColor: string
        thColorModal: string
        thColorPopover: string
        thTextColor: string
        tdTextColor: string
        thFontWeight: string
        thPaddingSmall: string
        thPaddingMedium: string
        thPaddingLarge: string
        tdPaddingSmall: string
        tdPaddingMedium: string
        tdPaddingLarge: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
}
export declare type TableProps = ExtractPublicPropTypes<typeof tableProps>
declare const _default: import('vue').DefineComponent<
  {
    bordered: {
      type: BooleanConstructor
      default: boolean
    }
    bottomBordered: {
      type: BooleanConstructor
      default: boolean
    }
    singleLine: {
      type: BooleanConstructor
      default: boolean
    }
    striped: BooleanConstructor
    singleColumn: BooleanConstructor
    size: {
      type: PropType<'small' | 'medium' | 'large'>
      default: string
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Table',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            borderRadius: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            tdColorStriped: string
            tdColorStripedModal: string
            tdColorStripedPopover: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            tdTextColor: string
            thFontWeight: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Table',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            borderRadius: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            tdColorStriped: string
            tdColorStripedModal: string
            tdColorStripedPopover: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            tdTextColor: string
            thFontWeight: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
    >
  },
  {
    rtlEnabled:
      | import('vue').Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars:
      | import('vue').ComputedRef<{
          '--n-bezier': string
          '--n-td-color': string
          '--n-td-color-modal': string
          '--n-td-color-popover': string
          '--n-td-text-color': string
          '--n-border-color': string
          '--n-border-color-modal': string
          '--n-border-color-popover': string
          '--n-border-radius': string
          '--n-font-size': string
          '--n-th-color': string
          '--n-th-color-modal': string
          '--n-th-color-popover': string
          '--n-th-font-weight': string
          '--n-th-text-color': string
          '--n-line-height': string
          '--n-td-padding': string
          '--n-th-padding': string
          '--n-td-color-striped': string
          '--n-td-color-striped-modal': string
          '--n-td-color-striped-popover': string
        }>
      | undefined
    themeClass: import('vue').Ref<string> | undefined
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
    import('vue').ExtractPropTypes<{
      bordered: {
        type: BooleanConstructor
        default: boolean
      }
      bottomBordered: {
        type: BooleanConstructor
        default: boolean
      }
      singleLine: {
        type: BooleanConstructor
        default: boolean
      }
      striped: BooleanConstructor
      singleColumn: BooleanConstructor
      size: {
        type: PropType<'small' | 'medium' | 'large'>
        default: string
      }
      theme: PropType<
        import('../../_mixins').Theme<
          'Table',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            borderRadius: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            tdColorStriped: string
            tdColorStripedModal: string
            tdColorStripedPopover: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            tdTextColor: string
            thFontWeight: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
      themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Table',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              borderRadius: string
              borderColor: string
              borderColorModal: string
              borderColorPopover: string
              tdColor: string
              tdColorModal: string
              tdColorPopover: string
              tdColorStriped: string
              tdColorStripedModal: string
              tdColorStripedPopover: string
              thColor: string
              thColorModal: string
              thColorPopover: string
              thTextColor: string
              tdTextColor: string
              thFontWeight: string
              thPaddingSmall: string
              thPaddingMedium: string
              thPaddingLarge: string
              tdPaddingSmall: string
              tdPaddingMedium: string
              tdPaddingLarge: string
            },
            any
          >
        >
      >
      builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Table',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              borderRadius: string
              borderColor: string
              borderColorModal: string
              borderColorPopover: string
              tdColor: string
              tdColorModal: string
              tdColorPopover: string
              tdColorStriped: string
              tdColorStripedModal: string
              tdColorStripedPopover: string
              thColor: string
              thColorModal: string
              thColorPopover: string
              thTextColor: string
              tdTextColor: string
              thFontWeight: string
              thPaddingSmall: string
              thPaddingMedium: string
              thPaddingLarge: string
              tdPaddingSmall: string
              tdPaddingMedium: string
              tdPaddingLarge: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    size: 'small' | 'medium' | 'large'
    bordered: boolean
    bottomBordered: boolean
    striped: boolean
    singleLine: boolean
    singleColumn: boolean
  }
>
export default _default
