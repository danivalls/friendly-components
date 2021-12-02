import React from 'react'
import Docs from '../features/DocsPage'
import Home from '../features/HomePage'

export const publicRoutes = [
  { path: '/docs', element: <Docs /> },
  { path: '/', element: <Home /> }
]
