import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import React from "react";
import type { PlotParams } from "react-plotly.js";

import { dataRefreshInterval } from "../consts";
import { UirasV2 } from "../types/UiRaSSingleV2";
import Plot from "./MinPlotly";
import { usePerDeviceData } from "./api";

type PlotlyData = PlotParams["data"];
type PlotlyLayout = PlotParams["layout"];

const GraphContainer = styled.div(() => ({
  width: "100%",
}));

function getLayout(): Partial<PlotlyLayout> {
  return {
    margin: { l: 36, r: 10, t: 10, b: 64 },
    title: "",
    legend: { orientation: "h", bgcolor: "transparent", y: -0.2 },
    paper_bgcolor: "rgba(255,255,255,1.0)",
    plot_bgcolor: "rgba(255,255,255,0.0)",
    xaxis: {
      ticks: "outside",
      tickangle: "auto",
      tickcolor: "#000",
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
      range: ["2022-06-01", new Date()],
    },
    yaxis: {
      tickangle: "auto",
      tickcolor: "#000",
      gridcolor: "#ccc",
      range: [0, 30],
    },
  };
}

function convertData(sensordata: UirasV2): PlotlyData {
  // TODO: Why this is empty in Eiranranta and Hanikka?
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

function UirasGraph({ response }: { response: UirasV2 }) {
  const graphData = React.useMemo(() => convertData(response), [response]);
  if (graphData.length == 0) {
    return <div>Virhe ladattaessa kuvaajaa</div>;
  }
  return (
    <GraphContainer>
      <Plot
        data={graphData}
        layout={getLayout()}
        style={{ width: "100%", height: "100%" }}
      />
    </GraphContainer>
  );
}

export function PlotyGraph2({ item }: { item: string }): JSX.Element {
  const query = usePerDeviceData(item, {
    refreshInterval: dataRefreshInterval,
  });
  if (!query.data) {
    return (
      <div>{query.error ? <div>ERROR! :(</div> : <CircularProgress />}</div>
    );
  }
  return <UirasGraph response={query.data} />;
}
