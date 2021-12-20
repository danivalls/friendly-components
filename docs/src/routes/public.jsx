import ButtonDocs from 'features/ButtonDocs';
import Docs from 'features/DocsPage';
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
    label: 'Button',
    path: 'button',
    element: <ButtonDocs />,
    category: 'Components'
  }
];

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> }
];
