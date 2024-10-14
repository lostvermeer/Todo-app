import React, { useState } from 'react';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import TodoPage from './pages/TodoPage';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { FormControlLabel, Box } from '@mui/material';
import {
  MaterialUISwitch,
  darkTheme,
  lightTheme,
} from '../styles/Navbar-styles';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Tabs
            value={location.pathname}
            sx={{
              '&& .Mui-selected': {
                color: '#ECEFF1',
              },
            }}
          >
            <Tab label="Home" component={Link} to="/" value="/" />
            <Tab label="About" component={Link} to="/about" value="/about" />
            <Tab label="Todos" component={Link} to="/todos" value="/todos" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <FormControlLabel
            control={
              <MaterialUISwitch
                checked={isDarkMode}
                onChange={handleThemeToggle}
              />
            }
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
