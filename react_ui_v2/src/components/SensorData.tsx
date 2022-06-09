import { UiRasDataResponseV1 } from "./types";

import Plot from "react-plotly.js";

//export function SensorData(data: UiRasDataResponseV1): JSX.Element {
export function SensorData(): JSX.Element {
  const data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 3, 4, 5.5, 6, 7, 8, 9, 6.5],
      mode: "lines",
    },
  ];
  const layout = { title: "Chart Title", width: "100%" };

  return <Plot data={data} layout={layout} />;
}
