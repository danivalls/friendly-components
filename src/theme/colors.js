import tinycolor from 'tinycolor2'

const defaultColors = {
  primary: '#4d6e8e',
  secondary: '#69c1ab',
  error: '#fc666b',
  warning: '#fce966',
  success: '#69c1ab',
  neutral: '#F4F7F8'
}

const getDarkVariant = (color) => tinycolor(color).darken(10).toHexString()

const generateColors = (
  primary = defaultColors.primary,
  secondary = defaultColors.secondary,
  error = defaultColors.error,
  warning = defaultColors.warning,
  success = defaultColors.success,
  neutral = defaultColors.neutral
) => {
  return {
    primary,
    secondary,
    error,
    warning,
    success,
    primaryDark: getDarkVariant(primary),
    secondaryDark: getDarkVariant(secondary),
    errorDark: getDarkVariant(error),
    warningDark: getDarkVariant(warning),
    successDark: getDarkVariant(success),
    neutral
  }
}

export default generateColors
