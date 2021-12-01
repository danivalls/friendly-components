import { ExampleComponent, ThemeProvider } from 'friendly-components'
import 'friendly-components/dist/index.css'
import React from 'react'

const App = () => {
  return (
    <ThemeProvider>
      <ExampleComponent />
    </ThemeProvider>
  )
}

export default App
