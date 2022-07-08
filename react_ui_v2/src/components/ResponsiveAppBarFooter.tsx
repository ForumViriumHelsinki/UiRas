import * as React from "react";

import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

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