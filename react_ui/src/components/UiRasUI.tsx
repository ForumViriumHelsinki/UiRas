import React from 'react';
// @ts-ignore
import {Container, Card, Spinner, Alert} from 'reactstrap';
import SensorData from "components/SensorData";
type UiRasUIProps = {}

class NavBar extends React.Component {
  render() {
    return <nav className="navbar navbar-dark bg-primary mb-2">
      <div className="w-25">
        <i className="material-icons bg-light text-primary rounded-circle p-1">pool</i>
      </div>
      <div className="w-50 text-light text-center">
        <h4 className="mb-0">FVH Uiras</h4>
        <span className="small d-none d-md-inline">Uimarantasensorit - </span>
        <span className="small">Bathing conditions in HEL</span>
      </div>
      <div className="w-25 d-flex justify-content-end">
        <img style={{maxHeight: 48, marginRight: -16}} src="images/FORUM_VIRIUM_logo_white.png"/>
      </div>
    </nav>;
  }
}

export default class UiRasUI extends React.Component<UiRasUIProps> {
  state: {status: 'loading' | 'error' | 'ready', data?: object} = {status: 'loading'};

  componentDidMount() {
    fetch('https://iot.fvh.fi/opendata/uiras/uiras2_v1.json').then(response => {
      if(response.status >= 400) this.setState({status: 'error'});
      else response.json().then(data => this.setState({status: 'ready', data}))
    }).catch(e => this.setState({status: 'error'}))
  }

  render() {
    const {status, data} = this.state;
    return <>
      <NavBar/>
      <Container>
        {status == 'error' ? <Alert color="danger">Failed to load temperature data.</Alert> :
          <Card>{
            status == 'loading' ? <div className="m-4 text-center"><Spinner/></div>
            : this.getSensors().map(sensor => <SensorData key={sensor.name} sensor={sensor} />)
          }</Card>
        }
      </Container>
    </>;
  }

  getSensors() {
    const {data} = this.state;
    if (!data) return [];
    // @ts-ignore
    return Object.entries(data.sensors).map(([sensorId, {meta, data}]) => ({name: meta.name, data}))
  }
}
