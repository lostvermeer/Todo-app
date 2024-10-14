import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        minHeight: '78vh',
        maxHeight: '78vh',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is the main landing page of your app.
      </Typography>
    </Box>
  );
};

export default HomePage;
