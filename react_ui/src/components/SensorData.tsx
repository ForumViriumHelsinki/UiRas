import React from 'react';
import moment from 'moment';

// @ts-ignore
import {CardBody} from 'reactstrap';
// @ts-ignore
import Plot from 'react-plotly.js';

type SensorDataProps = {
  sensor: {
    name: string
    data: [{
      time: string,
      temp_water: number,
      temp_air: number
    }]
  }
}

export default class SensorData extends React.Component<SensorDataProps> {
  colors = ['#FF5000', '#009E92', '#d70074', '#28a745', '#6610f2'];

  render() {
    const {name, data} = this.props.sensor;
    const latest = data[data.length - 1];
    const pillCls = "p-1 pr-3 pl-3 rounded-pill bg-light nowrap";

    document.getElementsByTagName('body')[0].className =
      (latest.temp_water < 6) ? 'winter'
      : (latest.temp_water < 12) ? 'fall'
      : 'summer';

    return <>
      <CardBody>
        <h4>{name}</h4>
        <span className={pillCls}>Water: {latest.temp_water.toFixed(1)} °C</span>{' '}
        <span className={pillCls}>Air: {latest.temp_air.toFixed(1)} °C</span>{' '}
        <span className="small nowrap mt-1 d-inline-block">{moment(latest.time).fromNow()}</span>
      </CardBody>
      <Plot data={this.getPlotData()} layout={this.getLayout()} config={{displayModeBar: false}} />
      <div className="mb-2">
      </div>
    </>;
  }

  private getLayout() {
    return {
      height: 240,
      margin: {l: 16, r: 0, t: 0, b: 64},
      title: '',
      legend: {orientation: 'h', bgcolor: 'transparent', y: -0.2},
      paper_bgcolor: 'rgba(255,255,255,0.5)',
      plot_bgcolor: 'rgba(255,255,255,0.0)'
    };
  }

  getPlotData() {
    const {data} = this.props.sensor;
    return [['Air', 'temp_air'], ['Water', 'temp_water']].map(([name, key], i) => {
      // @ts-ignore
      const items = data.filter((item) => item[key]);
      return {
        x: items.map(({time}) => time),
        // @ts-ignore
        y: items.map((item) => item[key]),
        type: 'scatter',
        mode: 'lines',
        name: name,
        line: {color: this.colors[i], width: 1},
        opacity: 0.6
      }
    })
  }
}
