import type { ThemeCommonVars } from '../../_styles/common'
declare const self: (vars: ThemeCommonVars) => {
  itemHeightSmall: string
  itemHeightMedium: string
  itemHeightLarge: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  borderRadius: string
  borderColor: string
  listColor: string
  headerColor: string
  titleTextColor: string
  titleTextColorDisabled: string
  extraTextColor: string
  filterDividerColor: string
  itemTextColor: string
  itemTextColorDisabled: string
  itemColorPending: string
  titleFontWeight: string
  iconColor: string
  iconColorDisabled: string
  extraFontSize: string
  width: string
}
export declare type TransferThemeVars = ReturnType<typeof self>
declare const transferLight: import('../../_mixins').Theme<
  'Transfer',
  {
    itemHeightSmall: string
    itemHeightMedium: string
    itemHeightLarge: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
    borderRadius: string
    borderColor: string
    listColor: string
    headerColor: string
    titleTextColor: string
    titleTextColorDisabled: string
    extraTextColor: string
    filterDividerColor: string
    itemTextColor: string
    itemTextColorDisabled: string
    itemColorPending: string
    titleFontWeight: string
    iconColor: string
    iconColorDisabled: string
    extraFontSize: string
    width: string
  },
  {
    Checkbox: import('../../_mixins').Theme<
      'Checkbox',
      {
        labelLineHeight: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderRadius: string
        color: string
        colorChecked: string
        colorDisabled: string
        colorDisabledChecked: string
        colorTableHeader: string
        colorTableHeaderModal: string
        colorTableHeaderPopover: string
        checkMarkColor: string
        checkMarkColorDisabled: string
        checkMarkColorDisabledChecked: string
        border: string
        borderDisabled: string
        borderDisabledChecked: string
        borderChecked: string
        borderFocus: string
        boxShadowFocus: string
        textColor: string
        textColorDisabled: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
        labelPadding: string
      },
      any
    >
    Scrollbar: import('../../_mixins').Theme<
      'Scrollbar',
      {
        color: string
        colorHover: string
      },
      any
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
    Button: import('../../_mixins').Theme<
      'Button',
      {
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        borderRadiusTiny: string
        borderRadiusSmall: string
        borderRadiusMedium: string
        borderRadiusLarge: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        opacityDisabled: string
        colorOpacitySecondary: string
        colorOpacitySecondaryHover: string
        colorOpacitySecondaryPressed: string
        colorSecondary: string
        colorSecondaryHover: string
        colorSecondaryPressed: string
        colorTertiary: string
        colorTertiaryHover: string
        colorTertiaryPressed: string
        colorQuaternary: string
        colorQuaternaryHover: string
        colorQuaternaryPressed: string
        color: string
        colorHover: string
        colorPressed: string
        colorFocus: string
        colorDisabled: string
        textColor: string
        textColorTertiary: string
        textColorHover: string
        textColorPressed: string
        textColorFocus: string
        textColorDisabled: string
        textColorText: string
        textColorTextHover: string
        textColorTextPressed: string
        textColorTextFocus: string
        textColorTextDisabled: string
        textColorGhost: string
        textColorGhostHover: string
        textColorGhostPressed: string
        textColorGhostFocus: string
        textColorGhostDisabled: string
        border: string
        borderHover: string
        borderPressed: string
        borderFocus: string
        borderDisabled: string
        rippleColor: string
        colorPrimary: string
        colorHoverPrimary: string
        colorPressedPrimary: string
        colorFocusPrimary: string
        colorDisabledPrimary: string
        textColorPrimary: string
        textColorHoverPrimary: string
        textColorPressedPrimary: string
        textColorFocusPrimary: string
        textColorDisabledPrimary: string
        textColorTextPrimary: string
        textColorTextHoverPrimary: string
        textColorTextPressedPrimary: string
        textColorTextFocusPrimary: string
        textColorTextDisabledPrimary: string
        textColorGhostPrimary: string
        textColorGhostHoverPrimary: string
        textColorGhostPressedPrimary: string
        textColorGhostFocusPrimary: string
        textColorGhostDisabledPrimary: string
        borderPrimary: string
        borderHoverPrimary: string
        borderPressedPrimary: string
        borderFocusPrimary: string
        borderDisabledPrimary: string
        rippleColorPrimary: string
        colorInfo: string
        colorHoverInfo: string
        colorPressedInfo: string
        colorFocusInfo: string
        colorDisabledInfo: string
        textColorInfo: string
        textColorHoverInfo: string
        textColorPressedInfo: string
        textColorFocusInfo: string
        textColorDisabledInfo: string
        textColorTextInfo: string
        textColorTextHoverInfo: string
        textColorTextPressedInfo: string
        textColorTextFocusInfo: string
        textColorTextDisabledInfo: string
        textColorGhostInfo: string
        textColorGhostHoverInfo: string
        textColorGhostPressedInfo: string
        textColorGhostFocusInfo: string
        textColorGhostDisabledInfo: string
        borderInfo: string
        borderHoverInfo: string
        borderPressedInfo: string
        borderFocusInfo: string
        borderDisabledInfo: string
        rippleColorInfo: string
        colorSuccess: string
        colorHoverSuccess: string
        colorPressedSuccess: string
        colorFocusSuccess: string
        colorDisabledSuccess: string
        textColorSuccess: string
        textColorHoverSuccess: string
        textColorPressedSuccess: string
        textColorFocusSuccess: string
        textColorDisabledSuccess: string
        textColorTextSuccess: string
        textColorTextHoverSuccess: string
        textColorTextPressedSuccess: string
        textColorTextFocusSuccess: string
        textColorTextDisabledSuccess: string
        textColorGhostSuccess: string
        textColorGhostHoverSuccess: string
        textColorGhostPressedSuccess: string
        textColorGhostFocusSuccess: string
        textColorGhostDisabledSuccess: string
        borderSuccess: string
        borderHoverSuccess: string
        borderPressedSuccess: string
        borderFocusSuccess: string
        borderDisabledSuccess: string
        rippleColorSuccess: string
        colorWarning: string
        colorHoverWarning: string
        colorPressedWarning: string
        colorFocusWarning: string
        colorDisabledWarning: string
        textColorWarning: string
        textColorHoverWarning: string
        textColorPressedWarning: string
        textColorFocusWarning: string
        textColorDisabledWarning: string
        textColorTextWarning: string
        textColorTextHoverWarning: string
        textColorTextPressedWarning: string
        textColorTextFocusWarning: string
        textColorTextDisabledWarning: string
        textColorGhostWarning: string
        textColorGhostHoverWarning: string
        textColorGhostPressedWarning: string
        textColorGhostFocusWarning: string
        textColorGhostDisabledWarning: string
        borderWarning: string
        borderHoverWarning: string
        borderPressedWarning: string
        borderFocusWarning: string
        borderDisabledWarning: string
        rippleColorWarning: string
        colorError: string
        colorHoverError: string
        colorPressedError: string
        colorFocusError: string
        colorDisabledError: string
        textColorError: string
        textColorHoverError: string
        textColorPressedError: string
        textColorFocusError: string
        textColorDisabledError: string
        textColorTextError: string
        textColorTextHoverError: string
        textColorTextPressedError: string
        textColorTextFocusError: string
        textColorTextDisabledError: string
        textColorGhostError: string
        textColorGhostHoverError: string
        textColorGhostPressedError: string
        textColorGhostFocusError: string
        textColorGhostDisabledError: string
        borderError: string
        borderHoverError: string
        borderPressedError: string
        borderFocusError: string
        borderDisabledError: string
        rippleColorError: string
        waveOpacity: string
        fontWeight: string
        fontWeightStrong: string
        paddingTiny: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        paddingRoundTiny: string
        paddingRoundSmall: string
        paddingRoundMedium: string
        paddingRoundLarge: string
        iconMarginTiny: string
        iconMarginSmall: string
        iconMarginMedium: string
        iconMarginLarge: string
        iconSizeTiny: string
        iconSizeSmall: string
        iconSizeMedium: string
        iconSizeLarge: string
        rippleDuration: string
      },
      any
    >
  }
>
export default transferLight
export declare type TransferTheme = typeof transferLight
