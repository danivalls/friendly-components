import merge from 'lodash.merge';
import React from 'react';
import { Helmet } from 'react-helmet';
import { DefaultTheme, ThemeProvider as SCProvider } from 'styled-components';
import generateTheme from '../../theme';
import GlobalStyles from './GlobalStyles';

interface ProviderProps {
  primaryColor?: string;
  secondaryColor?: string;
  errorColor?: string;
  warningColor?: string;
  successColor?: string;
  neutralColor?: string;
  textColor?: string;
  customTheme?: any;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ProviderProps> = ({
  primaryColor: primary,
  secondaryColor: secondary,
  errorColor: error,
  warningColor: warning,
  successColor: success,
  neutralColor: neutral,
  textColor: text,
  customTheme = {},
  children
}) => {
  const baseTheme = generateTheme({
    primary,
    secondary,
    error,
    warning,
    success,
    neutral,
    text
  });

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
