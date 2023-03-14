import { COLORS } from "../Colors";
import { SPACING } from "../Spacing";
import { TYPOGRAPHY } from "../Typography";
import { ELEVATION } from "../Elevation";
import { commonStyles } from "../commonStyles";
import { colorTokens } from "./colorToken";

const theme = {
    colors: COLORS,
    spacing: SPACING,
    typography: TYPOGRAPHY,
    elevation: ELEVATION,
    commonStyles,
    ...colorTokens,
};
export default theme;
