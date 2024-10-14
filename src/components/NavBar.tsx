import React from 'react';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import TodoPage from './pages/TodoPage';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Tabs value={location.pathname}>
          <Tab label="Home" component={Link} to="/" value="/" />
          <Tab label="About" component={Link} to="/about" value="/about" />
          <Tab label="Todos" component={Link} to="/todos" value="/todos" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
