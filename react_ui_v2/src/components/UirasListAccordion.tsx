import "moment/locale/fi";

import moment from "moment";
import { useState } from "react";
import { Row } from "reactstrap";
import useSWR from "swr";

import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CircularProgress } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useQueryGetUiras } from "./api";
import { PlotyGraph2 } from "./PlotyGraph2";
import { GetUirasResponse, UiRasDataResponseV1, UirasFeature } from "./types";

/**
 * Styled strings in grid rows
 */
const UirasName = styled.div(() => ({
  fontSize: "100%",
  fontWeight: "bold",
  textAlign: "left",
}));

const UirasLocation = styled.div(() => ({
  fontSize: "60%",
  textAlign: "left",
}));

const Temperature = styled.div(() => ({
  fontWeight: "bold",
}));

const Moment = styled.div(() => ({
  fontSize: "60%",
}));

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function DetailView({ item }: { item: string }) {
  const dataSWR = useSWR(item, () =>
    // delay(item.length * 150).then(() => `"${item}" on ${item.length} merkkiä pitkä merkkijono`)
    delay(item.length * 150).then(() => `"${item}" on ${item.length} merkkiä pitkä merkkijono`)
  );
  if (!dataSWR.data) {
    return <CircularProgress />;
  }
  return <Typography>{dataSWR.data}</Typography>;
}

function Slot({ id, properties, geometry }: UirasFeature): JSX.Element {
  const datea = moment(properties.time);
  // const [graphData, setGraphData] = useState("");

  // const timediff = -moment(datea).diff(new Date()) / 1000;
  // TODO: get rid of Row from reactstrap
  return (
    <Row className="border">
      <Accordion TransitionProps={{ unmountOnExit: true }} key={id}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={8} p={0}>
              <UirasName className="text-truncate">{properties.name}</UirasName>
              <UirasLocation className="text-truncate">
                {properties.location}
                {properties.location ? ", " : ""}
                {properties.district}
              </UirasLocation>
            </Grid>
            <Grid item xs={4}>
              <Temperature>
                {properties.temp_water.toFixed(1)}
                °C
              </Temperature>
              <Moment className="text-truncate">{moment(datea).fromNow()}</Moment>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <PlotyGraph2 item={id} />
        </AccordionDetails>
      </Accordion>
      {/* {timediff} secs old */}
    </Row>
  );
}

function SlotList({ features }: GetUirasResponse): JSX.Element {
  moment.locale("fi");
  features.sort((a, b) => a.properties.name.localeCompare(b.properties.name));
  return (
    <>
      {features.map((data) => (
        <Slot key={data.id} id={data.id} properties={data.properties} geometry={data.geometry} />
      ))}
    </>
  );
}

export default function UirasListAccordion(): JSX.Element {
  const uirasQuery = useQueryGetUiras();
  if (uirasQuery.isSuccess) {
    // console.log(uirasQuery.data); // contains the data
  }
  return (
    <div>
      {uirasQuery.isLoading && <CircularProgress />}
      {uirasQuery.isError && <div>Virhe ladattaessa dataa :(</div>}
      {uirasQuery.isSuccess && <SlotList features={uirasQuery.data.features} />}
    </div>
  );
}
