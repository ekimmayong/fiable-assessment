import React from 'react';
import { Homepage } from './pages/homepage';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from './hooks/useTheme';

function App() {
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App;
