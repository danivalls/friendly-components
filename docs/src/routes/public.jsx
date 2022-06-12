import ButtonDocs from 'features/ButtonDocs';
import DrawerDocs from 'features/DrawerDocs';
import InputDocs from 'features/InputDocs';
import GettingStarted from 'features/Installation';
import Docs from 'features/PageDocs';
import Home from 'features/PageHome';
import PageNotFound from 'features/PageNotFound';
import TableDocs from 'features/TableDocs';
import React from 'react';
import IconDocs from '../features/IconDocs';
import ToggleDocs from '../features/ToggleDocs';

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
    label: 'Toggle',
    path: 'toggle',
    element: <ToggleDocs />,
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
  },
  {
    label: 'Table',
    path: 'table',
    element: <TableDocs />,
    category: 'Components'
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export const publicRoutes = [
  { path: '/docs/*', element: <Docs />, children: docsRoutes },
  { path: '/', element: <Home /> },
  { path: '*', element: <PageNotFound /> }
];
