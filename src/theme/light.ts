// src/theme/light.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8e24aa', // Roxo vivo
    },
    secondary: {
      main: '#26c6da', // Azul piscina vibrante
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
