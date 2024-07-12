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
          UiRaS on <a href="https://forumvirium.fi/">Forum Virium Helsingin</a>{" "}
          ja Helsingin kaupungin vuonna 2020 alkanut kokeilu.
        </Typography>
        <Typography gutterBottom>
          UiRaS-uimarantasensorit mittaavat veden lämpötilaa parissa kymmenessä
          mittauspisteessä pääkaupunkiseudulla. Mittaustiedot julkaistaan tällä
          sivulla ja lisäksi{" "}
          <a href="https://bri3.fvh.io/opendata/uiras/">avoimena datana</a>{" "}
          tahansa kiinnostuneen käyttöön.
        </Typography>
        <Typography gutterBottom>
          Forum Viriumin osalta kokeilu alkaa olla loppusuoralla eikä uusia
          mittareita enää asenneta. Nämä mittarit ovat rikki, kadonneet tai
          toimivat epäluotettavasti eikä niistä tarvitse lähettää palautetta:
          <ul>
            <li>Aurinkolahti (kadonnut talviuintilaiturin yhteydessä)</li>
            <li>Eiranranta (useita mittareita hajonnut haastavissa oloissa)</li>
            <li>
              Munkkiniemen uimaranta (kadonnut uimaportaiden uusimisen
              yhteydessä
            </li>
            <li>Vetokannas (toimii katkonaisesti)</li>
          </ul>
        </Typography>
        <Typography gutterBottom>
          Seuraaville Helsigin rannoille on toivottu mittaria, mutta niillä ei
          ole tällä hetkellä sopivaa asennuspaikkaa: Mustikkamaa, Kivinokka,
          Kallahdenniemi, Kallahden uimaranta.
        </Typography>

        <Typography gutterBottom>
          Voit lähettää palautetta yleisesti uimarantasensoreista{" "}
          <strong>
            <a href="https://forumvirium.fi/uiraspalaute/">
              palautelomakkeella
            </a>
          </strong>
          . Helsingin kaupungille voit lähettää palautetta{" "}
          <a href="https://palautteet.hel.fi/tunnistautuminen-uusi-palaute">
            kaupungin palautelomakkeella.
          </a>
        </Typography>

        <Typography gutterBottom>
          Espooseen tai Vantaalle ei ole tällä hetkellä suunnitteilla uusia
          mittauspisteitä UiRaS-kokeilun puitteissa eikä nykyisiä mittareita
          uusita niiden lopulta hajotessa. Voit kuitenkin lähettää toiveen
          uusista mittauspisteistä{" "}
          <a href="https://easiointi.espoo.fi/eFeedback/fi/Feedback/16-Liikunta">
            Espoon kaupungille
          </a>{" "}
          (valitse lomakkeelta Palautteen aihe "Uimarannat ja avannot" ja
          Palautteen luonne "Toimenpide-ehdotus") tai{" "}
          <a href="https://asiointi.vantaa.fi/palaute#/form/90000">
            Vantaan kaupungille
          </a>{" "}
          .
        </Typography>

        {/*
            explicit component is needed here, because otherwise Typography
            is rendered as <p> (and h4 is not allowed in there)
            TODO: try to use List and ListItem or something
        <Typography gutterBottom component={"div"}>
          <h4>Suunniteltuja toimintoja</h4>
          <ul>
            <li>mittaushistoriakuvaajan parantelua</li>
            <li>
              <DoneItem>mittauspisteet kartalla</DoneItem> (Kiitos{" "}
              <a href="https://github.com/akx">akx</a>)
            </li>
            <li>linkit listauksesta kartalle ja päin vastoin</li>
            <li>mittauspisteeseen liittyvät lisätiedot</li>
            <li>rannan sinilevätilanne</li>
            <li>lokikirja</li>
            <li>suosikkirantojen tallennus</li>
            <li>kielituki eli svenska- ja English-versiot</li>
            <li>ehdottamasi toiminto?</li>
          </ul>
        </Typography>
        */}

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
