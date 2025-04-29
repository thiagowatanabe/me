import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Experience } from './pages/Experience';
import { Courses } from './pages/Courses';
import { LanguageProvider } from './i18n/LanguageProvider';
import { darkTheme, lightTheme } from './theme';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);
  const theme = createTheme(darkMode ? darkTheme : lightTheme);
  const basename = process.env.PUBLIC_URL;

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={basename}>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header toggleTheme={toggleTheme} darkMode={darkMode} />

            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/courses" element={<Courses />} />
              </Routes>
            </Box>

            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
