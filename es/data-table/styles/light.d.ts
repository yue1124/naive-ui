import type { ThemeCommonVars } from '../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  actionDividerColor: string
  lineHeight: string
  borderRadius: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  borderColor: string
  tdColorHover: string
  tdColorStriped: string
  thColor: string
  thColorHover: string
  tdColor: string
  tdTextColor: string
  thTextColor: string
  thFontWeight: string
  thButtonColorHover: string
  thIconColor: string
  thIconColorActive: string
  borderColorModal: string
  tdColorHoverModal: string
  tdColorStripedModal: string
  thColorModal: string
  thColorHoverModal: string
  tdColorModal: string
  borderColorPopover: string
  tdColorHoverPopover: string
  tdColorStripedPopover: string
  thColorPopover: string
  thColorHoverPopover: string
  tdColorPopover: string
  boxShadowBefore: string
  boxShadowAfter: string
  loadingColor: string
  loadingSize: string
  opacityLoading: string
  thPaddingSmall: string
  thPaddingMedium: string
  thPaddingLarge: string
  tdPaddingSmall: string
  tdPaddingMedium: string
  tdPaddingLarge: string
  sorterSize: string
  filterSize: string
  paginationMargin: string
  emptyPadding: string
  actionPadding: string
  actionButtonMargin: string
}
export declare type DataTableThemeVars = ReturnType<typeof self>
declare const dataTableLight: import('../../_mixins').Theme<
  'DataTable',
  {
    actionDividerColor: string
    lineHeight: string
    borderRadius: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
    borderColor: string
    tdColorHover: string
    tdColorStriped: string
    thColor: string
    thColorHover: string
    tdColor: string
    tdTextColor: string
    thTextColor: string
    thFontWeight: string
    thButtonColorHover: string
    thIconColor: string
    thIconColorActive: string
    borderColorModal: string
    tdColorHoverModal: string
    tdColorStripedModal: string
    thColorModal: string
    thColorHoverModal: string
    tdColorModal: string
    borderColorPopover: string
    tdColorHoverPopover: string
    tdColorStripedPopover: string
    thColorPopover: string
    thColorHoverPopover: string
    tdColorPopover: string
    boxShadowBefore: string
    boxShadowAfter: string
    loadingColor: string
    loadingSize: string
    opacityLoading: string
    thPaddingSmall: string
    thPaddingMedium: string
    thPaddingLarge: string
    tdPaddingSmall: string
    tdPaddingMedium: string
    tdPaddingLarge: string
    sorterSize: string
    filterSize: string
    paginationMargin: string
    emptyPadding: string
    actionPadding: string
    actionButtonMargin: string
  },
  {
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
    Radio: import('../../_mixins').Theme<
      'Radio',
      {
        labelLineHeight: string
        buttonHeightSmall: string
        buttonHeightMedium: string
        buttonHeightLarge: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        boxShadow: string
        boxShadowActive: string
        boxShadowFocus: string
        boxShadowHover: string
        boxShadowDisabled: string
        color: string
        colorDisabled: string
        textColor: string
        textColorDisabled: string
        dotColorActive: string
        dotColorDisabled: string
        buttonBorderColor: string
        buttonBorderColorActive: string
        buttonBorderColorHover: string
        buttonColor: string
        buttonColorActive: string
        buttonTextColor: string
        buttonTextColorActive: string
        buttonTextColorHover: string
        opacityDisabled: string
        buttonBoxShadowFocus: string
        buttonBoxShadowHover: string
        buttonBoxShadow: string
        buttonBorderRadius: string
        radioSizeSmall: string
        radioSizeMedium: string
        radioSizeLarge: string
        labelPadding: string
      },
      any
    >
    Pagination: import('../../_mixins').Theme<
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
    Ellipsis: import('../../_mixins').Theme<
      'Ellipsis',
      unknown,
      {
        Tooltip: import('../../_mixins').Theme<
          'Tooltip',
          {
            borderRadius: string
            boxShadow: string
            color: string
            textColor: string
            padding: string
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
      }
    >
  }
>
export default dataTableLight
export declare type DataTableTheme = typeof dataTableLight
