import * as React from "react";

import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import HelsinkiLogo from "../images/Helsinki_logo-w.svg";
import EULogo from "../images/eu_flag.svg";
import MSLLogo from "../images/logo-mysmartlife.png";

// https://forumvirium.fi/wp-content/themes/forumvirium-child/static/images/footer-bg-wavy.svg

const Logo = styled.img(() => ({
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
            <Logo alt="Helsinki logo" src={HelsinkiLogo} />
            <Logo alt="mySmartLife" src={MSLLogo} />
            <Logo alt="EU flag" src={EULogo} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBarFooter;
