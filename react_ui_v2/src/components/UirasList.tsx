import "moment/locale/fi";

import moment from "moment";
import { Col, Row } from "reactstrap";

import styled from "@emotion/styled";

import { useQueryGetUiras } from "./api";
import { GetUirasResponse, UirasFeature } from "./types";

/**
 * NOTE: This is not in use, see UirasListAccordion.tsx
 */

/**
 * Styled strings in grid rows
 */
const UirasName = styled.div(() => ({
  fontSize: "100%",
  fontWeight: "bold",
  textAlign: "left",
  letterSpacing: "-0.035em",
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
  letterSpacing: "-0.035em",
}));

const listClickHandler = (id: string) => {
  alert(id);
};

function UirasRow({ id, properties, geometry }: UirasFeature): JSX.Element {
  const datea = moment(properties.time);
  // const timediff = -moment(datea).diff(new Date()) / 1000;
  return (
    <Row className="border" onClick={() => listClickHandler(properties.time)}>
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
// TODO: check this props passing
function UirasDetails({ properties, geometry }: UirasFeature): JSX.Element {
  // const datea = moment(data.properties.time);
  // const timediff = -moment(datea).diff(new Date()) / 1000;
  // let x: number = geometry.coordinates[0];
  return (
    <Row className="border">
      <Col className="col-7 bg-light text-black"> {geometry.type}</Col>
      <Col className="col-5 bg-light text-black">
        {properties.name}
        {/* <Moment className="text-truncate">{moment(datea).fromNow()}</Moment> */}
      </Col>
      {/* {timediff} secs old */}
    </Row>
  );
}

function DetailsList({ features }: GetUirasResponse): JSX.Element {
  moment.locale("fi");
  features.sort((a, b) => a.properties.name.localeCompare(b.properties.name));
  return (
    <>
      {features.map((data) => (
        <div key={data.properties.time}>
          <UirasRow key={data.properties.time} id={data.id} properties={data.properties} geometry={data.geometry} />

          <UirasDetails
            key={data.geometry.coordinates.toString()}
            id={data.id}
            properties={data.properties}
            geometry={data.geometry}
          />
        </div>
      ))}
    </>
  );
}

export default function UirasList(): JSX.Element {
  const uirasQuery = useQueryGetUiras();

  if (uirasQuery.isSuccess) {
    // console.log(uirasQuery.data)  // contains the data
  }
  return (
    <div>
      {uirasQuery.isLoading && <div>Ladataan!</div>}
      {uirasQuery.isSuccess && <DetailsList features={uirasQuery.data.features} />}
    </div>
  );
}
