import React from 'react';
import { AppBar, Toolbar, Drawer, Typography, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Main from './components/Main';

const drawerWidth = 200;

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{
          backgroundColor: "#20212c",
        }}>
          <Main />
          
          </Grid>

      </Grid>

      
       
        
       
     
      
    </>
  );
}

export default App;


