import * as React from "react";

import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Pool from "@mui/icons-material/Pool";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ForumViriumLogo from "../images/FORUM_VIRIUM_logo_white.png";

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
      {infoDialogOpen && <InfoDialog handleClose={handleCloseInfo} />}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Pool sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UiRaS
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              onClick={handleOpenInfo}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Info
            </Button>
          </Box>
          <IconButton href="https://forumvirium.fi">
            <FvhLogo src={ForumViriumLogo} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
