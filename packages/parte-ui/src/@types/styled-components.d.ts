import 'styled-components';
import {
  Colors,
  Elevation,
  Spacing,
  Typography,
  CommonStyles,
  ColorTokenType,
} from '@parte/foundation';

declare module 'styled-components' {
  interface DefaultTheme extends ColorTokenType {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    elevation: Elevation;
    commonStyles: CommonStyles;
  }
}
