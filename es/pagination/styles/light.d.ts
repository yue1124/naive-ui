import { ThemeCommonVars } from '../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  buttonColor: string
  buttonColorHover: string
  buttonColorPressed: string
  buttonBorder: string
  buttonBorderHover: string
  buttonBorderPressed: string
  buttonIconColor: string
  buttonIconColorHover: string
  buttonIconColorPressed: string
  itemTextColor: string
  itemTextColorHover: string
  itemTextColorPressed: string
  itemTextColorActive: string
  itemTextColorDisabled: string
  itemColor: string
  itemColorHover: string
  itemColorPressed: string
  itemColorActive: string
  itemColorActiveHover: string
  itemColorDisabled: string
  itemBorder: string
  itemBorderHover: string
  itemBorderPressed: string
  itemBorderActive: string
  itemBorderDisabled: string
  itemBorderRadius: string
  itemFontSize: string
  jumperTextColor: string
  jumperTextColorDisabled: string
  itemSize: string
  itemPadding: string
  itemMargin: string
  itemMarginRtl: string
  buttonIconSize: string
  inputWidth: string
  selectWidth: string
  inputMargin: string
  inputMarginRtl: string
  selectMargin: string
  prefixMargin: string
  suffixMargin: string
  jumperFontSize: string
}
export declare type PaginationThemeVars = ReturnType<typeof self>
declare const paginationLight: import('../../_mixins').Theme<
  'Pagination',
  {
    buttonColor: string
    buttonColorHover: string
    buttonColorPressed: string
    buttonBorder: string
    buttonBorderHover: string
    buttonBorderPressed: string
    buttonIconColor: string
    buttonIconColorHover: string
    buttonIconColorPressed: string
    itemTextColor: string
    itemTextColorHover: string
    itemTextColorPressed: string
    itemTextColorActive: string
    itemTextColorDisabled: string
    itemColor: string
    itemColorHover: string
    itemColorPressed: string
    itemColorActive: string
    itemColorActiveHover: string
    itemColorDisabled: string
    itemBorder: string
    itemBorderHover: string
    itemBorderPressed: string
    itemBorderActive: string
    itemBorderDisabled: string
    itemBorderRadius: string
    itemFontSize: string
    jumperTextColor: string
    jumperTextColorDisabled: string
    itemSize: string
    itemPadding: string
    itemMargin: string
    itemMarginRtl: string
    buttonIconSize: string
    inputWidth: string
    selectWidth: string
    inputMargin: string
    inputMarginRtl: string
    selectMargin: string
    prefixMargin: string
    suffixMargin: string
    jumperFontSize: string
  },
  {
    Select: import('../../_mixins').Theme<
      'Select',
      {
        menuBoxShadow: string
      },
      {
        InternalSelection: import('../../_mixins').Theme<
          'InternalSelection',
          {
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            textColor: string
            textColorDisabled: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            border: string
            borderHover: string
            borderActive: string
            borderFocus: string
            boxShadowHover: string
            boxShadowActive: string
            boxShadowFocus: string
            caretColor: string
            arrowColor: string
            arrowColorDisabled: string
            loadingColor: string
            borderWarning: string
            borderHoverWarning: string
            borderActiveWarning: string
            borderFocusWarning: string
            boxShadowHoverWarning: string
            boxShadowActiveWarning: string
            boxShadowFocusWarning: string
            colorActiveWarning: string
            caretColorWarning: string
            borderError: string
            borderHoverError: string
            borderActiveError: string
            borderFocusError: string
            boxShadowHoverError: string
            boxShadowActiveError: string
            boxShadowFocusError: string
            colorActiveError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            paddingSingle: string
            paddingMultiple: string
            clearSize: string
            arrowSize: string
          },
          {
            Popover: import('../../_mixins').Theme<
              'Popover',
              {
                fontSize: string
                borderRadius: string
                color: string
                dividerColor: string
                textColor: string
                boxShadow: string
                space: string
                spaceArrow: string
                arrowOffset: string
                arrowOffsetVertical: string
                arrowHeight: string
                padding: string
              },
              any
            >
          }
        >
        InternalSelectMenu: import('../../_mixins').Theme<
          'InternalSelectMenu',
          {
            optionFontSizeSmall: string
            optionFontSizeMedium: string
            optionFontSizeLarge: string
            optionFontSizeHuge: string
            optionHeightSmall: string
            optionHeightMedium: string
            optionHeightLarge: string
            optionHeightHuge: string
            borderRadius: string
            color: string
            groupHeaderTextColor: string
            actionDividerColor: string
            optionTextColor: string
            optionTextColorPressed: string
            optionTextColorDisabled: string
            optionTextColorActive: string
            optionOpacityDisabled: string
            optionCheckColor: string
            optionColorPending: string
            optionColorActive: string
            actionTextColor: string
            loadingColor: string
            height: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingHuge: string
            optionPaddingSmall: string
            optionPaddingMedium: string
            optionPaddingLarge: string
            optionPaddingHuge: string
            loadingSize: string
          },
          {
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
          }
        >
      }
    >
    Input: import('../../_mixins').Theme<
      'Input',
      {
        countTextColor: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        lineHeightTextarea: string
        borderRadius: string
        iconSize: string
        groupLabelColor: string
        groupLabelTextColor: string
        textColor: string
        textColorDisabled: string
        textDecorationColor: string
        caretColor: string
        placeholderColor: string
        placeholderColorDisabled: string
        color: string
        colorDisabled: string
        colorFocus: string
        groupLabelBorder: string
        border: string
        borderHover: string
        borderDisabled: string
        borderFocus: string
        boxShadowFocus: string
        loadingColor: string
        loadingColorWarning: string
        borderWarning: string
        borderHoverWarning: string
        colorFocusWarning: string
        borderFocusWarning: string
        boxShadowFocusWarning: string
        caretColorWarning: string
        loadingColorError: string
        borderError: string
        borderHoverError: string
        colorFocusError: string
        borderFocusError: string
        boxShadowFocusError: string
        caretColorError: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        iconColor: string
        iconColorDisabled: string
        iconColorHover: string
        iconColorPressed: string
        suffixTextColor: string
        paddingTiny: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        clearSize: string
      },
      any
    >
  }
>
export default paginationLight
export declare type PaginationTheme = typeof paginationLight
