// src/theme/dark.ts
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Roxo suave e elegante
    },
    secondary: {
      main: '#03dac6', // Verde-água brilhante
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
