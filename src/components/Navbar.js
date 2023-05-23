import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Box, Toolbar } from "@mui/material";
import logo from "../components/images/logo.svg";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "#fff",
        backgroundColor: "#2b2c37",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
      }}
    >
          <Toolbar sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            
      }}>
        <Box
          sx={{
            display: "flex",
            // flexGrow:1,
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "2rem",
              height: "2rem",
              marginRight: "1rem",
            }}
          />

          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
            }}
          >
            Kanban Board
          </Typography>
        </Box>

        <Box>
          <SvgIcon
            component={MoreVertIcon}
            sx={{
              width: "2rem",
              height: "2rem",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
