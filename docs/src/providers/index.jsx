import { generateTheme, ThemeProvider as FCProvider } from 'friendly-components'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const theme = generateTheme()

const AppProvider = ({ children }) => {
  return (
    <FCProvider>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </FCProvider>
  )
}

export default AppProvider
