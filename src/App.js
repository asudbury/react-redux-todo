import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from './themes/defaultTheme';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <MainPage />;
    </ThemeProvider>
  );
}

export default App;
