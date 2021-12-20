import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { generateTheme, ThemeProvider } from '..';

const usedTheme = generateTheme({});
const customRender = (ui: ReactElement): RenderResult =>
  render(ui, { wrapper: ThemeProvider });

export * from '@testing-library/react';
export { customRender as render, usedTheme };
