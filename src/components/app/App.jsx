import React from 'react';
import 'normalize.css';

/* ------------------------------- COMPONENTS ------------------------------- */
import { Home } from '../home/Home';

/* ------------------------------- CONTEXT Provider ------------------------------ */
import { Provider as UiProvider } from '../../store/context/provider';

/* ---------------------------------- HOOKS --------------------------------- */
import { useTheme } from '../../hooks/useTheme';

/* ---------------------------------- STYLE --------------------------------- */
import { GlobalStyle } from '../../GlobalStyle';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const App = () => {
  const [theme] = useTheme();

  const themeConfig = createMuiTheme(theme);
  return (
    <UiProvider>
      <GlobalStyle theme={themeConfig} />
      <ThemeProvider theme={themeConfig}>
        <Home />
      </ThemeProvider>
    </UiProvider>
  );
};
