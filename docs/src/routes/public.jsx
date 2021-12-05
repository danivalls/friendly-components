import React from 'react'
import Docs from '../features/DocsPage'
import ExampleComponentsDocs from '../features/ExampleComponentDocs'
import Home from '../features/HomePage'

export const docsRoutes = [
  {
    label: 'ExampleComponent',
    path: 'example-component',
    element: <ExampleComponentsDocs />,
    category: 'CategoryExample'
  }
]

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> }
]
