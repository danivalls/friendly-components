import borderRadius from './borderRadius'
import generateColors from './colors'
import fontSize from './fontSize'
import fontWeight from './fontWeight'
import lineHeight from './lineHeight'
import spacing from './spacing'

const generateTheme = ({
  primary,
  secondary,
  error,
  warning,
  success,
  neutral,
  text
} = {}) => {
  const colors = generateColors(
    primary,
    secondary,
    error,
    warning,
    success,
    neutral,
    text
  )

  return {
    colors,
    fontSize,
    fontWeight,
    lineHeight,
    spacing,
    borderRadius
  }
}

export default generateTheme
