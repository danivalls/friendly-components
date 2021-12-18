import { DefaultTheme } from 'styled-components';
import borderRadius from './borderRadius';
import generateColors, { BaseColors } from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import lineHeight from './lineHeight';
import spacing from './spacing';

const generateTheme = (baseColors: BaseColors): DefaultTheme => {
  const colors = generateColors(baseColors);

  return {
    colors,
    fontSize,
    fontWeight,
    lineHeight,
    spacing,
    borderRadius
  };
};

export default generateTheme;
