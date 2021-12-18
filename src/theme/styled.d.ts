import 'styled-components';
import borderRadius from './borderRadius';
import { ColorsType } from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import lineHeight from './lineHeight';
import spacing from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
  }
}
