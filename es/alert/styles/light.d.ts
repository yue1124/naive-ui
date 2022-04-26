import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins/use-theme'
declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  lineHeight: string
  titleFontWeight: string
  borderRadius: string
  border: string
  color: string
  titleTextColor: string
  iconColor: string
  contentTextColor: string
  closeColor: string
  closeColorHover: string
  closeColorPressed: string
  borderInfo: string
  colorInfo: string
  titleTextColorInfo: string
  iconColorInfo: string
  contentTextColorInfo: string
  closeColorInfo: string
  closeColorHoverInfo: string
  closeColorPressedInfo: string
  borderSuccess: string
  colorSuccess: string
  titleTextColorSuccess: string
  iconColorSuccess: string
  contentTextColorSuccess: string
  closeColorSuccess: string
  closeColorHoverSuccess: string
  closeColorPressedSuccess: string
  borderWarning: string
  colorWarning: string
  titleTextColorWarning: string
  iconColorWarning: string
  contentTextColorWarning: string
  closeColorWarning: string
  closeColorHoverWarning: string
  closeColorPressedWarning: string
  borderError: string
  colorError: string
  titleTextColorError: string
  iconColorError: string
  contentTextColorError: string
  closeColorError: string
  closeColorHoverError: string
  closeColorPressedError: string
  iconMargin: string
  iconMarginRtl: string
  iconSize: string
  closeSize: string
  closeMargin: string
  closeMarginRtl: string
  padding: string
}
export declare type AlertThemeVars = ReturnType<typeof self>
declare const alertLight: Theme<'Alert', AlertThemeVars>
export default alertLight
export declare type AlertTheme = typeof alertLight
