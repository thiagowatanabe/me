import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, darkMode }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const menuItems = [
    { text: t('menu.home'), path: '/' },
    { text: t('menu.experience'), path: '/experience' },
    { text: t('menu.projects'), path: '/projects' },
    { text: t('menu.articles'), path: '/articles' },
    { text: t('menu.courses'), path: '/courses' },
    { text: t('menu.about'), path: '/about' },
    { text: t('menu.contact'), path: '/contact' }
  ];

  const renderMenuButtons = () =>
    menuItems.map((item) => (
      <Button key={item.path} color="inherit" component={Link} to={item.path}>
        {item.text}
      </Button>
    ));

  const renderDrawerItems = () =>
    menuItems.map((item) => (
      <ListItemButton
        key={item.path}
        component={Link}
        to={item.path}
        onClick={() => setDrawerOpen(false)}
      >
        <ListItemText primary={item.text} />
      </ListItemButton>
    ));

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {!isMobile && (
            <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              {t('menu.title')}
            </Typography>
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 1 : 2, // Menos espaçamento no mobile e mais no desktop
              justifyContent: 'flex-end', // Alinha os itens à direita
              width: '100%'
            }}
          >
            {isMobile && (
              <>
                <Select
                  value={i18n.language}
                  onChange={handleChangeLanguage}
                  size="small"
                  variant="outlined"
                  sx={{
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    height: '2.2rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <MenuItem value="pt">PT</MenuItem>
                  <MenuItem value="en">EN</MenuItem>
                </Select>

                <IconButton onClick={toggleTheme} color="inherit">
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </>
            )}

            {!isMobile && renderMenuButtons()}

            {!isMobile && (
              <>
                <Select
                  value={i18n.language}
                  onChange={handleChangeLanguage}
                  size="small"
                  variant="outlined"
                  sx={{
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    height: '2.2rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <MenuItem value="pt">PT</MenuItem>
                  <MenuItem value="en">EN</MenuItem>
                </Select>

                <IconButton onClick={toggleTheme} color="inherit">
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>{renderDrawerItems()}</List>
        </Box>
      </Drawer>
    </>
  );
};
