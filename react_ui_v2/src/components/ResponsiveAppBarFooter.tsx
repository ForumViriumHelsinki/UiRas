import * as React from "react";

import styled from "@emotion/styled";
// import Map from '@mui/icons-material/Map';
import MenuIcon from "@mui/icons-material/Menu";
import Pool from "@mui/icons-material/Pool";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CustomizedDialogs from "./CustomizedDialogs";

// https://forumvirium.fi/wp-content/themes/forumvirium-child/static/images/footer-bg-wavy.svg

const EULogo = styled.img(() => ({
  maxHeight: "40px",
  margin: "5px",
}));

const MslLogo = styled.img(() => ({
  maxHeight: "40px",
  margin: "5px",
}));

function ResponsiveAppBarFooter() {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "rgb(236,94,36)", top: "auto", bottom: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <EULogo alt="Helsinki logo" src="images/Helsinki_logo-w.svg" />
            <MslLogo alt="mySmartLife" src="images/logo-mysmartlife.png" />
            <EULogo alt="EU flag" src="images/eu_flag.svg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBarFooter;
