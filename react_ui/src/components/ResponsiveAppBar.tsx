import styled from "@emotion/styled";
import Pool from "@mui/icons-material/Pool";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import ForumViriumLogo from "../images/FORUM_VIRIUM_logo_white.png";
import HelsinkiLogo from "../images/Helsinki_logo-w.svg";
import InfoDialog from "./InfoDialog";

const FvhLogo = styled.img(() => ({
  maxHeight: "20px",
}));

const HkiLogo = styled.img(() => ({
  maxHeight: "20px",
}));

const navLinkStyle = { my: 2, color: "white", py: 0 };

function ResponsiveAppBar() {
  const navigate = useNavigate();
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
              display: { xl: "flex", xs: "none" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UiRaS
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button onClick={() => navigate("/")} sx={navLinkStyle}>
              Lista
            </Button>
            <Button onClick={() => navigate("/kartta")} sx={navLinkStyle}>
              Kartta
            </Button>
            <Button onClick={handleOpenInfo} sx={navLinkStyle}>
              Info
            </Button>
          </Box>
          <IconButton href="https://forumvirium.fi">
            <FvhLogo src={ForumViriumLogo} />
          </IconButton>
          <IconButton href="https://hel.fi">
            <HkiLogo src={HelsinkiLogo} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
