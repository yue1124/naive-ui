import { scrollbarLight } from '../../_internal/scrollbar/styles';
import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins';
import commonVars from './_common';
export const self = (vars) => {
    const { textColor2, successColor, infoColor, warningColor, errorColor, popoverColor, closeColor, closeColorHover, textColor1, textColor3, borderRadius, fontWeightStrong, boxShadow2, lineHeight, fontSize } = vars;
    return Object.assign(Object.assign({}, commonVars), { borderRadius,
        lineHeight,
        fontSize, headerFontWeight: fontWeightStrong, iconColor: textColor2, iconColorSuccess: successColor, iconColorInfo: infoColor, iconColorWarning: warningColor, iconColorError: errorColor, color: popoverColor, textColor: textColor2, closeColor: closeColor, closeColorHover: closeColorHover, closeColorPressed: closeColor, headerTextColor: textColor1, descriptionTextColor: textColor3, actionTextColor: textColor2, boxShadow: boxShadow2 });
};
const notificationLight = createTheme({
    name: 'Notification',
    common: commonLight,
    peers: {
        Scrollbar: scrollbarLight
    },
    self
});
export default notificationLight;
