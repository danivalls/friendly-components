import merge from 'lodash.merge';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultTheme, ThemeProvider as SCProvider } from 'styled-components';
import generateTheme from '../../theme';
import GlobalStyles from './GlobalStyles';
import { ProviderProps } from './ThemeProvider.types';

const ThemeProvider: React.FC<ProviderProps> = ({
  primaryColor: primary,
  secondaryColor: secondary,
  errorColor: error,
  warningColor: warning,
  successColor: success,
  neutralColor: neutral,
  textColor: text,
  fontFamily = 'Poppins',
  customTheme = {},
  children
}) => {
  const colors = { primary, secondary, error, warning, success, neutral, text };
  const baseTheme = generateTheme(colors, fontFamily);

  const theme: DefaultTheme = merge(baseTheme, customTheme);

  return (
    <SCProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      {children}
    </SCProvider>
  );
};

export default ThemeProvider;
