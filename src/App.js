import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Panel from './Components/Panel';
import Map from './Components/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'markers',
      numberOfPositions: 3,
      startingPosition: {
          id: 1,
          lat: 29.7604,
          lng: -95.3698,
      },
      positions: [],
      zoom: 13,
    }
  }

  componentWillMount() {
    this.randomizePositions();
  }

  randomizePositions() {
    const { numberOfPositions, positions } = this.state;
    for (let i = 0; i < numberOfPositions; i++) {
      let randomLat = (Math.random() * 0.05) + this.state.startingPosition.lat;
      let randomLng = (Math.random() * 0.05) + this.state.startingPosition.lng;
      let randomLatLng = {
        id: i,
        lat: randomLat,
        lng: randomLng
      }
      positions.push(randomLatLng)
    }
  }

  handleStatusChange(newStatus) {
    this.setState({
      status: newStatus
    })
  }

  render() {
    const {status, positions, zoom} = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <Panel onStatusChange={this.handleStatusChange.bind(this)}/>
        </MuiThemeProvider>
        <Map locations={positions} status={status} zoom={zoom}/>
      </div>
    );
  }
}

export default App;
