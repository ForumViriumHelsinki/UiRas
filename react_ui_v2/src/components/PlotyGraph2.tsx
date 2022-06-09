/* 
import { Col, Container, Row } from "reactstrap";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarFooter from "./ResponsiveAppBarFooter";
import UirasListAccordion from "./UirasListAccordion";
 */

/*
yarn add @types/plotly.js @types/react-plotly.js plotly.js react-plotly.js react-plotlyjs-ts
*/

import Plot from "react-plotly.js";

import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

import { useQueryGetUirasDataV2 } from "./api";
import { SensorDataProps, UirasV2 } from "./types";

const GraphContainer = styled.div(() => ({
  width: "100%",
}));

function getLayout() {
  return {
    margin: { l: 36, r: 10, t: 10, b: 64 },
    title: "",
    // autosize: true,
    legend: { orientation: "h", bgcolor: "transparent", y: -0.2 },
    paper_bgcolor: "rgba(255,255,255,1.0)",
    plot_bgcolor: "rgba(255,255,255,0.0)",
    xaxis: {
      // autotick: false,
      ticks: "outside",
      tickangle: "auto",
      tickcolor: "#000",
      // tickformat: "%d.%m.\n %Y",
      // https://plotly.com/javascript/tick-formatting/#tickformatstops-to-customize-for-different-zoom-levels
      tickformatstops: [
        {
          dtickrange: [null, 3600000],
          value: "%H:%M m\n%d.%m.",
        },
        {
          dtickrange: [3600000, 86400000],
          value: "%H:%M\n%d.%m.",
        },
        {
          dtickrange: [86400000, null],
          value: "%d.%m.\n%Y",
        },
      ],
      hoverformat: "%d.%m.%Y %H:%M",
      gridcolor: "#ccc",
    },
    yaxis: {
      // autotick: false,
      tickangle: "auto",
      tickcolor: "#000",
      gridcolor: "#ccc",
      range: [0, 30],
    },
  };
}

function convertData(sensordata: UirasV2) {
  // Why this is empty in Eiranranta and Hanikka?
  if (sensordata.properties === undefined) {
    return [];
  }
  const data_d1 = sensordata.properties.data.d1;
  const data_h3 = sensordata.properties.data.h3;
  return [
    {
      x: data_d1.map(({ time }) => time),
      y: data_d1.map(({ temp_water }) => temp_water),
      name: "24h",
      mode: "lines+markers",
      type: "scatter",
      // https://plotly.com/javascript/hover-text-and-formatting/#hovertemplate
      hovertemplate: "%{y:.1f}°C (%{x}) <extra></extra>",
    },
    {
      x: data_h3.map(({ time }) => time),
      y: data_h3.map(({ temp_water }) => temp_water),
      name: "3h",
      mode: "lines",
      type: "scatter",
      // https://plotly.com/javascript/hover-text-and-formatting/#hovertemplate
      hovertemplate: "%{y:.1f}°C (%{x}) <extra></extra>",
    },
  ];
}

export function PlotyGraph2({ item }: { item: string }): JSX.Element {
  const uirasDataV2Query = useQueryGetUirasDataV2(item);
  if (uirasDataV2Query.isSuccess) {
    // console.log(uirasDataV2Query.data); // contains the data
    const data = convertData(uirasDataV2Query.data);
    if (data.length == 0) {
      return <div>Virhe ladattaessa kuvaajaa</div>;
    }
    const layout = getLayout();
    return (
      <GraphContainer>
        <Plot data={data} layout={layout} style={{ width: "100%", height: "100%" }} />
      </GraphContainer>
    );
  }

  return (
    <div>
      {uirasDataV2Query.isLoading && <CircularProgress />}
      {uirasDataV2Query.isError && <div>ERROR! :(</div>}
    </div>
  );
}
