import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DoneItem = styled("span")(({ theme }) => ({
  textDecoration: "line-through",
}));

interface DialogTitleProps {
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

interface InfoDialogProps {
  handleClose: () => void;
}

export default function InfoDialog({ handleClose }: InfoDialogProps) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Tietoa uimarantasensoreista
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          UiRaS-uimarantasensorit mittaavat veden lämpötilaa parissa kymmenessä
          mittauspisteessä pääkaupunkiseudulla. Mittaustiedot julkaistaan tällä
          sivulla ja lisäksi{" "}
          <a href="https://iot.fvh.fi/opendata/uiras/">avoimena datana</a> kenen
          tahansa kiinnostuneen käyttöön.
        </Typography>
        <Typography gutterBottom>
          <strong>Huom!</strong> Tämä on uusi <strong>uiras.fvh.io</strong>
          -sivu, jota kehitetään aktiivisesti lähiviikkoina. Voit ehdottaa uusia
          toiminnallisuuksia ja lähettää palautetta uimarantasensoreista{" "}
          <strong>
            <a href="https://forumvirium.fi/uiraspalaute/">
              palautelomakkeella
            </a>
          </strong>
          .
        </Typography>
        <Typography gutterBottom>
          Palautetta ei tarvitse lähettää rikkinäisistä sensoreista. Lisäksi
          seuraaville rannoille on toivottu mittaria, mutta niillä ei ole tällä
          hetkellä sopivaa asennuspaikkaa: Mustikkamaa, Kivinokka,
          Kallahdenniemi, Kallahden uimaranta.
        </Typography>
        {/*
            explicit component is needed here, because otherwise Typography
            is rendered as <p> (and h4 is not allowed in there)
            TODO: try to use List and ListItem or something
          */}
        <Typography gutterBottom component={"div"}>
          <h4>Suunniteltuja toimintoja</h4>
          <ul>
            <li>mittaushistoriakuvaajan parantelua</li>
            <li>
              <DoneItem>mittauspisteet kartalla</DoneItem> (Kiitos{" "}
              <a href="https://github.com/akx">akx</a>)
            </li>
            <li>mittauspisteeseen liittyvät lisätiedot</li>
            <li>lokikirja</li>
            <li>suosikkirantojen tallennus</li>
            <li>kielituki eli svenska- ja English-versiot</li>
            <li>ehdottamasi toiminto?</li>
          </ul>
        </Typography>
        <Typography gutterBottom>
          UiRaS on Forum Virium Helsingin ja Helsingin kaupungin vuonna 2020
          alkanut kokeilu. Vanha nettisivu löytyy vielä hetken aikaa osoitteessa{" "}
          <a href="https://uiras-v1.fvh.io/">uiras-v1.fvh.io</a>.
        </Typography>
        <Typography gutterBottom>
          Tämä UiRaS-käyttöliittymä on{" "}
          <a
            href="https://github.com/ForumViriumHelsinki/UiRas"
            target="_blank"
            rel="noreferrer"
          >
            avointa lähdekoodia
          </a>
          .
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Sulje</Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
