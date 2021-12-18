import tinycolor from 'tinycolor2';

const DEFAULT_COLORS = {
  primary: '#3DB2FF',
  secondary: '#345995',
  error: '#FF2442',
  warning: '#FFB830',
  success: '#CADE71',
  neutral: '#F4F7F8',
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
      const colorWithVariants = {
        [`${colorName}Lighter`]: whitenColor(colorCode, 90),
        [`${colorName}Light`]: whitenColor(colorCode, 50),
        [colorName]: colorCode,
        [`${colorName}Dark`]: blackenColor(colorCode, 20),
        [`${colorName}Darker`]: blackenColor(colorCode, 50)
      };

      return { ...colors, ...colorWithVariants };
    },
    {} as ColorsType
  );

  return generatedColors;
};

export default generateColors;

export type ColorsType = {
  primary: string;
  primaryDarker: string;
  primaryDark: string;
  primaryLighter: string;
  primaryLight: string;
  secondary: string;
  secondaryDarker: string;
  secondaryDark: string;
  secondaryLighter: string;
  secondaryLight: string;
  error: string;
  errorDarker: string;
  errorDark: string;
  errorLighter: string;
  errorLight: string;
  warning: string;
  warningDarker: string;
  warningDark: string;
  warningLighter: string;
  warningLight: string;
  success: string;
  successDarker: string;
  successDark: string;
  successLighter: string;
  successLight: string;
  neutral: string;
  neutralDarker: string;
  neutralDark: string;
  neutralLighter: string;
  neutralLight: string;
  text: string;
  textDarker: string;
  textDark: string;
  textLighter: string;
  textLight: string;
};

export type BaseColors = {
  primary?: string;
  secondary?: string;
  error?: string;
  warning?: string;
  success?: string;
  neutral?: string;
  text?: string;
};
