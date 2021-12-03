import tinycolor from 'tinycolor2'

const DEFAULT_COLORS = {
  primary: '#4d6e8e',
  secondary: '#69c1ab',
  error: '#fc666b',
  warning: '#fce966',
  success: '#69c1ab',
  neutral: '#F4F7F8',
  text: '#202124'
}

const blackenColor = (color, amount) =>
  tinycolor.mix(color, 'black', amount).toHexString()
const whitenColor = (color, amount) =>
  tinycolor.mix(color, 'white', amount).toHexString()

const generateColors = (
  primary = DEFAULT_COLORS.primary,
  secondary = DEFAULT_COLORS.secondary,
  error = DEFAULT_COLORS.error,
  warning = DEFAULT_COLORS.warning,
  success = DEFAULT_COLORS.success,
  neutral = DEFAULT_COLORS.neutral,
  text = DEFAULT_COLORS.text
) => {
  const baseColors = {
    primary,
    secondary,
    error,
    warning,
    success,
    neutral,
    text
  }

  return Object.entries(baseColors).reduce((colors, [colorName, colorCode]) => {
    const colorWithVariants = {
      [`${colorName}Lighter`]: whitenColor(colorCode, 90),
      [`${colorName}Light`]: whitenColor(colorCode, 50),
      [colorName]: colorCode,
      [`${colorName}Dark`]: blackenColor(colorCode, 20),
      [`${colorName}Darker`]: blackenColor(colorCode, 50)
    }

    return { ...colors, ...colorWithVariants }
  }, {})
}

export default generateColors
