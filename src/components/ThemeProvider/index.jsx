import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider as SCProvider } from 'styled-components'
import generateTheme from '../../theme'
import GlobalStyles from './GlobalStyles'

const ThemeProvider = ({
  primaryColor,
  secondaryColor,
  errorColor,
  warningColor,
  successColor,
  neutralColor,
  customTheme,
  children
}) => {
  const baseTheme = generateTheme(
    primaryColor,
    secondaryColor,
    errorColor,
    warningColor,
    successColor,
    neutralColor
  )

  const theme = { ...baseTheme, ...customTheme }

  return (
    <SCProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCProvider>
  )
}

export default ThemeProvider

ThemeProvider.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  errorColor: PropTypes.string,
  warningColor: PropTypes.string,
  successColor: PropTypes.string,
  neutralColor: PropTypes.string,
  customTheme: PropTypes.shape({
    colors: PropTypes.object,
    fontSize: PropTypes.object,
    lineHeight: PropTypes.object,
    spacing: PropTypes.object,
    borderRadius: PropTypes.object
  })
}

ThemeProvider.defaultProps = {
  customTheme: {}
}
