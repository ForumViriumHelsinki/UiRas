import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a onClick={handleClickOpen}>Info</a>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Tietoa uimarantasensoreista
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            UiRaS-uimarantasensorit mittaavat veden lämpötilaa parissa
            kymmenessä mittauspisteessä pääkaupunkiseudulla. Mittaustiedot
            julkaistaan tällä sivulla ja lisäksi avoimena datana kenen tahansa
            kiinnostuneen käyttöön.
          </Typography>
          <Typography gutterBottom>
            <strong>Huom!</strong> Tämä on uusi <strong>uiras.fvh.io</strong>
            -sivu, jota kehitetään aktiivisesti lähiviikkoina. Voit ehdottaa
            uusia toiminnallisuuksia ja lähettää palautetta uimarantasensoreista{" "}
            <strong>
              <a href="https://forumvirium.fi/uiraspalaute/">
                palautelomakkeella
              </a>
            </strong>
            .
          </Typography>
          {/* 
            explicit component is needed here, because otherwise Typography is rendered as <p> (and h4 is not allowd in there)
            TODO: try to use List and ListItem or something 
          */}
          <Typography gutterBottom component={"div"}>
            <h4>Suunniteltuja toimintoja</h4>
            <ul>
              <li>mittauspisteet kartalla</li>
              <li>mittaushistoria kuvaajana</li>
              <li>mittauspisteeseen liittyvät lisätiedot</li>
              <li>lokikirja</li>
              <li>suosikkirantojen tallennus</li>
              <li>ehdottamasi toiminto?</li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            UiRaS on Forum Virium Helsingin ja Helsingin kaupungin vuonna 2020
            alkanut kokeilu. Vanha nettisivu löytyy vielä hetken aikaa
            osoitteessa{" "}
            <a href="https://uiras-v1.fvh.io/">https://uiras-v1.fvh.io/</a>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Sulje
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
