import tinycolor from 'tinycolor2'

const MIN_DARKENING = 5
const DEFAULT_COLORS = {
  primary: '#4d6e8e',
  secondary: '#69c1ab',
  error: '#fc666b',
  warning: '#fce966',
  success: '#69c1ab',
  neutral: '#F4F7F8'
}

const getDarkVariant = (color) => {
  const darknessLevel = -tinycolor(color).getLuminance() + 1
  const darkeningFactor = MIN_DARKENING + MIN_DARKENING * 2 * darknessLevel

  return tinycolor.mix(color, 'black', darkeningFactor).toHexString()
}

const generateColors = (
  primary = DEFAULT_COLORS.primary,
  secondary = DEFAULT_COLORS.secondary,
  error = DEFAULT_COLORS.error,
  warning = DEFAULT_COLORS.warning,
  success = DEFAULT_COLORS.success,
  neutral = DEFAULT_COLORS.neutral
) => {
  return {
    primary,
    secondary,
    error,
    warning,
    success,
    neutral,
    primaryDark: getDarkVariant(primary),
    secondaryDark: getDarkVariant(secondary),
    errorDark: getDarkVariant(error),
    warningDark: getDarkVariant(warning),
    successDark: getDarkVariant(success),
    neutralDark: getDarkVariant(neutral)
  }
}

export default generateColors
