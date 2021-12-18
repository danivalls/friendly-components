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
        [`${colorName}Lightest`]: whitenColor(colorCode, 90),
        [`${colorName}Lighter`]: whitenColor(colorCode, 50),
        [`${colorName}Light`]: whitenColor(colorCode, 30),
        [colorName]: colorCode,
        [`${colorName}Dark`]: blackenColor(colorCode, 10),
        [`${colorName}Darker`]: blackenColor(colorCode, 30),
        [`${colorName}Darkest`]: blackenColor(colorCode, 50)
      };

      return { ...colors, ...colorWithVariants };
    },
    {} as ColorsType
  );

  return generatedColors;
};

export default generateColors;

export type ColorsType = {
  error: string;
  errorDark: string;
  errorDarker: string;
  errorDarkest: string;
  errorLight: string;
  errorLighter: string;
  errorLightest: string;
  neutral: string;
  neutralDark: string;
  neutralDarker: string;
  neutralDarkest: string;
  neutralLight: string;
  neutralLighter: string;
  neutralLightest: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  primaryDarkest: string;
  primaryLight: string;
  primaryLighter: string;
  primaryLightest: string;
  secondary: string;
  secondaryDark: string;
  secondaryDarker: string;
  secondaryDarkest: string;
  secondaryLight: string;
  secondaryLighter: string;
  secondaryLightest: string;
  success: string;
  successDark: string;
  successDarker: string;
  successDarkest: string;
  successLight: string;
  successLighter: string;
  successLightest: string;
  text: string;
  textDark: string;
  textDarker: string;
  textDarkest: string;
  textLight: string;
  textLighter: string;
  textLightest: string;
  warning: string;
  warningDark: string;
  warningDarker: string;
  warningDarkest: string;
  warningLight: string;
  warningLighter: string;
  warningLightest: string;
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
