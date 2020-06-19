import React, { FC } from 'react';
import { ThemeProvider as CustomThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: '#345CA4',
      hoverButton: '#345CA4',
      hoverListItem: '#e8f0fe',
      hoverButtonText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      hover: '#ffffff',
      hoverText: '#345CA4',
    },
    default: {
      main: '#3b444b',
      paper: '#fdfdfd',
    },
  },
  fonts: ['Roboto', 'sans-serif', 'Exo'],
  fontSizes: {
    small: '12pt',
    medium: '14pt',
    large: '20pt',
  },
  buttonSizes: {
    small: '8pt',
    medium: '11pt',
    large: '12pt',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-family: 'Uni Sans';
    text-decoration: none;
  }
`;

export const ThemeProvider: FC = ({ children }) => {
  return (
    <CustomThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </CustomThemeProvider>
  );
};
