import {
  colorTokens,
  commonStyles,
  ELEVATION,
  typography,
  SPACING,
  COLORS,
} from '@template/foundation';

const theme = {
  colors: COLORS,
  spacing: SPACING,
  elevation: ELEVATION,
  typography,
  commonStyles,
  ...colorTokens,
};

export default theme;
