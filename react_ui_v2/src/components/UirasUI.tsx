import "moment/locale/fi";

import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import { Col, Container, Row } from "reactstrap";

import styled from "@emotion/styled";

import { Result, unwrapResult, withResult } from "../result";
import ResponsiveAppBar from "./ResponsiveAppBar";

/**
 * Types for UiRaS GeoJSON features
 */
type FeatureProperties = {
  battery: number;
  name: string;
  location: string;
  district: string;
  temp_internal: number;
  temp_water: number;
  time: string;
};

type GeometryCoordinates = {
  coordinates: [number, number];
};

type FeatureGeometry = {
  type: "Point";
  coordinates: GeometryCoordinates;
};

type UirasFeature = {
  geometry: FeatureGeometry;
  properties: FeatureProperties;
};

type GetUirasResponse = {
  features: UirasFeature[];
};

/**
 * Get uiras2_v2.geojson
 */
export async function getUiras(): Promise<Result<GetUirasResponse>> {
  return withResult(async () => {
    const { data, status } = await axios.get<GetUirasResponse>(
      // `${config.API_URL}`
      "https://iot.fvh.fi/opendata/uiras/uiras2_v2.geojson"
    );
    console.log(`getUiras() --> ${status}`);
    return data;
  });
}

/**
 * Wrap getUiras() in useQuery
 */
function useQueryGetUiras() {
  return useQuery(["uiras"], async () => unwrapResult(await getUiras()));
}

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

function Slot({ properties }: UirasFeature): JSX.Element {
  const datea = moment(properties.time);
  // const timediff = -moment(datea).diff(new Date()) / 1000;
  return (
    <Row className="border">
      <Col className="col-7 bg-light text-black">
        <UirasName className="text-truncate">{properties.name}</UirasName>
        <UirasLocation className="text-truncate">
          {properties.location}
          {properties.location ? ", " : ""}
          {properties.district}
        </UirasLocation>
      </Col>
      <Col className="col-5 bg-light text-black">
        <Temperature>
          {properties.temp_water.toFixed(1)}
          °C
        </Temperature>
        <Moment className="text-truncate">{moment(datea).fromNow()}</Moment>
      </Col>
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
        <Slot
          key={data.properties.time}
          properties={data.properties}
          geometry={data.geometry}
        />
      ))}
    </>
  );
}

export function UirasList(): JSX.Element {
  const uirasQuery = useQueryGetUiras();

  if (uirasQuery.isSuccess) {
    // console.log(uirasQuery.data)  // contains the data
  }
  return (
    <div>
      {uirasQuery.isLoading && <div>Ladataan!</div>}
      {uirasQuery.isSuccess && <SlotList features={uirasQuery.data.features} />}
    </div>
  );
}

export function UirasUI(): JSX.Element {
  return (
    <>
      <ResponsiveAppBar />
      <Container fluid>
        <UirasList />
      </Container>
    </>
  );
}
