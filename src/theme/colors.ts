import tinycolor from 'tinycolor2';
import { BaseColors, ColorsType } from './theme.types';

export const DEFAULT_COLORS = {
  primary: '#3DB2FF',
  secondary: '#345995',
  error: '#FF2442',
  warning: '#FFB830',
  success: '#44C93A',
  neutral: '#eaebeb',
  text: '#202124'
};

const blackenColor = (color: string, amount: number): string =>
  tinycolor.mix(color, 'black', amount).toHexString();

const whitenColor = (color: string, amount: number): string =>
  tinycolor.mix(color, 'white', amount).toHexString();

const generateColors = (baseColors: BaseColors = {}): ColorsType => {
  const providedEntries = Object.entries(baseColors).filter(
    (color) => color[1]
  );
  const providedColors = Object.fromEntries(providedEntries);
  const initialColors = { ...DEFAULT_COLORS, ...providedColors };
  const generatedColors = Object.entries(initialColors).reduce(
    (colors, [colorName, colorCode]) => {
      const firstLevel = {
        [`${colorName}Light`]: whitenColor(colorCode, 30),
        [`${colorName}Dark`]: blackenColor(colorCode, 10)
      };
      const secondLevel = {
        [`${colorName}Lighter`]: whitenColor(colorCode, 50),
        [`${colorName}Darker`]: blackenColor(colorCode, 30)
      };
      const thirdLevel = {
        [`${colorName}Lightest`]: whitenColor(
          secondLevel[`${colorName}Lighter`],
          50
        ),
        [`${colorName}Darkest`]: blackenColor(colorCode, 50)
      };

      return {
        ...colors,
        [colorName]: colorCode,
        ...firstLevel,
        ...secondLevel,
        ...thirdLevel
      };
    },
    {}
  ) as ColorsType;

  return generatedColors;
};

export default generateColors;
