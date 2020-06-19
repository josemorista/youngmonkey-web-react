import React, { FC } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import AppPages from './pages/AppPages';

const App: FC = () => {
  return (
    <ThemeProvider>
      <AppPages />
    </ThemeProvider>
  );
};

export default App;
