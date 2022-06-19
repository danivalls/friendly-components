import { DefaultTheme } from 'styled-components';
import animationTimings from './animationTimings';
import borderRadius from './borderRadius';
import generateColors from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import lineHeight from './lineHeight';
import spacing from './spacing';
import { BaseColors } from './theme.types';

const generateTheme = (
  baseColors: BaseColors,
  fontFamily: string
): DefaultTheme => {
  const colors = generateColors(baseColors);

  return {
    colors,
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    spacing,
    borderRadius,
    animationTimings
  };
};

export default generateTheme;
