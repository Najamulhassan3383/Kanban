import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h1" color="error" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Something went wrong. Please try again later.
      </Typography>
      <Button variant="contained" color="primary">
        Go to Homepage
      </Button>
    </Box>
  );
};

export default ErrorPage;
