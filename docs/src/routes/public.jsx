import ButtonDocs from 'features/ButtonDocs';
import Docs from 'features/DocsPage';
import DrawerDocs from 'features/DrawerDocs';
import Home from 'features/HomePage';
import GettingStarted from 'features/Installation';
import React from 'react';
import SwitchDocs from '../features/SwitchDocs';

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
  },
  {
    label: 'Switch',
    path: 'switch',
    element: <SwitchDocs />,
    category: 'Components'
  },
  {
    label: 'Drawer',
    path: 'drawer',
    element: <DrawerDocs />,
    category: 'Components'
  }
];

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> }
];
