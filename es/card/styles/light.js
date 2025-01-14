import { commonLight } from '../../_styles/common';
import commonVariables from './_common';
export const self = (vars) => {
    const { primaryColor, borderRadius, lineHeight, fontSize, cardColor, textColor2, textColor1, dividerColor, fontWeightStrong, closeColor, closeColorHover, closeColorPressed, modalColor, boxShadow1, popoverColor, actionColor } = vars;
    return Object.assign(Object.assign({}, commonVariables), { lineHeight, color: cardColor, colorModal: modalColor, colorPopover: popoverColor, colorTarget: primaryColor, colorEmbedded: actionColor, textColor: textColor2, titleTextColor: textColor1, borderColor: dividerColor, actionColor: actionColor, titleFontWeight: fontWeightStrong, closeColor: closeColor, closeColorHover: closeColorHover, closeColorPressed: closeColorPressed, fontSizeSmall: fontSize, fontSizeMedium: fontSize, fontSizeLarge: fontSize, fontSizeHuge: fontSize, boxShadow: boxShadow1, borderRadius });
};
const cardLight = {
    name: 'Card',
    common: commonLight,
    self
};
export default cardLight;
