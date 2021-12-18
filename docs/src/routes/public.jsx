import Docs from 'features/DocsPage';
import ExampleComponentsDocs from 'features/ExampleComponentDocs';
import Home from 'features/HomePage';
import GettingStarted from 'features/Installation';
import React from 'react';

export const docsRoutes = [
  {
    label: 'Installation',
    path: '',
    element: <GettingStarted />,
    category: 'Getting Started'
  },
  {
    label: 'Example Component',
    path: 'example-component',
    element: <ExampleComponentsDocs />,
    category: 'Components'
  }
];

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> }
];
