import * as React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Main() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
            
            height: "100vh",
            width: "100%",
          }}
        >
          Dashboard 1
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
           
            height: "100vh",
            width: "100%",
          }}
        >
          Dashboard 2
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
            
            height: "100vh",
            width: "100%",
          }}
        >
          Dashboard 3
        </Typography>
      </Grid>
    </Grid>
  );
}
