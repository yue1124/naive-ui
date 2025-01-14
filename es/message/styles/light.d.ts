import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins/use-theme';
export declare const self: (vars: ThemeCommonVars) => {
    textColor: string;
    textColorInfo: string;
    textColorSuccess: string;
    textColorError: string;
    textColorWarning: string;
    textColorLoading: string;
    color: string;
    colorInfo: string;
    colorSuccess: string;
    colorError: string;
    colorWarning: string;
    colorLoading: string;
    boxShadow: string;
    boxShadowInfo: string;
    boxShadowSuccess: string;
    boxShadowError: string;
    boxShadowWarning: string;
    boxShadowLoading: string;
    iconColor: string;
    iconColorInfo: string;
    iconColorSuccess: string;
    iconColorWarning: string;
    iconColorError: string;
    iconColorLoading: string;
    closeColor: string;
    closeColorHover: string;
    closeColorPressed: string;
    closeColorInfo: string;
    closeColorHoverInfo: string;
    closeColorPressedInfo: string;
    closeColorSuccess: string;
    closeColorHoverSuccess: string;
    closeColorPressedSuccess: string;
    closeColorError: string;
    closeColorHoverError: string;
    closeColorPressedError: string;
    closeColorWarning: string;
    closeColorHoverWarning: string;
    closeColorPressedWarning: string;
    closeColorLoading: string;
    closeColorHoverLoading: string;
    closeColorPressedLoading: string;
    loadingColor: string;
    lineHeight: string;
    borderRadius: string;
    margin: string;
    padding: string;
    maxWidth: string;
    minWidth: string;
    iconMargin: string;
    closeMargin: string;
    closeSize: string;
    iconSize: string;
    fontSize: string;
};
export declare type MessageThemeVars = ReturnType<typeof self>;
declare const messageLight: Theme<'Message', MessageThemeVars>;
export default messageLight;
export declare type MessageTheme = typeof messageLight;
