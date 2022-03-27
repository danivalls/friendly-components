import ButtonDocs from 'features/ButtonDocs';
import Docs from 'features/DocsPage';
import DrawerDocs from 'features/DrawerDocs';
import Home from 'features/HomePage';
import InputDocs from 'features/InputDocs';
import GettingStarted from 'features/Installation';
import React from 'react';
import IconDocs from '../features/IconDocs';
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
  },
  {
    label: 'Icon',
    path: 'icon',
    element: <IconDocs />,
    category: 'Components'
  },
  {
    label: 'Input',
    path: 'input',
    element: <InputDocs />,
    category: 'Components'
  }
];

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> }
];
