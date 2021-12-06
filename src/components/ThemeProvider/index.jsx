import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider as SCProvider } from 'styled-components'
import generateTheme from '../../theme'
import GlobalStyles from './GlobalStyles'

const ThemeProvider = ({
  primaryColor: primary,
  secondaryColor: secondary,
  errorColor: error,
  warningColor: warning,
  successColor: success,
  neutralColor: neutral,
  textColor: text,
  customTheme,
  children
}) => {
  const colors = { primary, secondary, error, warning, success, neutral, text }
  const baseTheme = generateTheme(colors)

  const theme = { ...baseTheme, ...customTheme }

  return (
    <SCProvider theme={theme}>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
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
  textColor: PropTypes.string,
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
