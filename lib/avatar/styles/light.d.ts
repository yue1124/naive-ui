import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    borderRadius: string;
    fontSize: string;
    border: string;
    heightTiny: string;
    heightSmall: string;
    heightMedium: string;
    heightLarge: string;
    heightHuge: string;
    color: string;
    colorModal: string;
    colorPopover: string;
};
export declare type AvatarThemeVars = ReturnType<typeof self>;
declare const avatarLight: Theme<'Avatar', AvatarThemeVars>;
export default avatarLight;
export declare type AvatarTheme = typeof avatarLight;
export declare type AvatarGroupTheme = typeof avatarLight;
