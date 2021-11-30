import borderRadius from './borderRadius'
import generateColors from './colors'
import fontSize from './fontSize'
import lineHeight from './lineHeight'
import spacing from './spacing'

const generateTheme = ({
  primary,
  secondary,
  error,
  warning,
  success,
  neutral
} = {}) => {
  const colors = generateColors(
    primary,
    secondary,
    error,
    warning,
    success,
    neutral
  )

  return {
    colors,
    fontSize,
    lineHeight,
    spacing,
    borderRadius
  }
}

export default generateTheme
