import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        // backgroundColor: '#f5f5f5',
        padding: '20px',
        minHeight: '78vh',
        maxHeight: '78vh',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is the about page with more information about our app.
      </Typography>
    </Box>
  );
};

export default AboutPage;
