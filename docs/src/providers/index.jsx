import { generateTheme, ThemeProvider as FCProvider } from 'friendly-components'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const theme = generateTheme()

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FCProvider>
        <Router basename={process.env.PUBLIC_URL}>{children}</Router>
      </FCProvider>
    </ThemeProvider>
  )
}

export default AppProvider
