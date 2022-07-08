import * as React from "react";

import styled from "@emotion/styled";
import Pool from "@mui/icons-material/Pool";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import InfoDialog from "./InfoDialog";

const FvhLogo = styled.img(() => ({
  maxHeight: "50px",
}));

function ResponsiveAppBar() {
  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);

  const handleOpenInfo = () => {
    setInfoDialogOpen(true);
  };
  const handleCloseInfo = () => {
    setInfoDialogOpen(false);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "rgb(236,94,36)" }}>
      {infoDialogOpen && <InfoDialog handleClose={handleCloseInfo}/>}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Pool sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UiRaS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <a onClick={handleOpenInfo}>Info</a>
          </Box>
          <Pool sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UiRaS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <a onClick={handleOpenInfo}>Info</a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <a href="https://forumvirium.fi">
              <FvhLogo
                src="images/FORUM_VIRIUM_logo_white.png"
              />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
