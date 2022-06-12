import 'styled-components';
import animationTimings from './animationTimings';
import borderRadius from './borderRadius';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import lineHeight from './lineHeight';
import spacing from './spacing';
import { ColorsType } from './theme.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
    animationTimings: typeof animationTimings;
  }
}
