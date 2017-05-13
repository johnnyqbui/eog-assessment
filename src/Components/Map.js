import React, { Component } from 'react';
import { Map, Marker, Circle, Rectangle, Polyline, TileLayer, LayersControl } from 'react-leaflet';

class Lmap extends Component {
  render() {
    const radius = 1000;
    const {status, locations, zoom} = this.props;
    const bounds = [[locations[1].lat-0.005, locations[1].lng+0.01], [locations[1].lat+0.007, locations[1].lng-0.009]];
    const polyline = [
      [locations[2].lat+0.008, locations[2].lng+0.005],
      [locations[2].lat-0.002, locations[2].lng+0.002],
      [locations[2].lat-0.007, locations[2].lng-0.007],
      [locations[2].lat+0.008, locations[2].lng+0.005]
    ]
    const renderItems = () => {
      if (status === 'markers') {
        return locations.map((location) => {
          return (
            <Marker key={location.id} position={location}></Marker>
          )
        })
      } else {
          return (
            <LayersControl>
              <LayersControl.Overlay name="Circle" checked="true">
                <Circle key={locations[0].id} center={[locations[0].lat, locations[0].lng]} radius={radius}></Circle>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="Rectangle" checked="true">
                <Rectangle key={locations[1].id} bounds={bounds}></Rectangle>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="Triangle" checked="true">
                <Polyline key={locations[2].id} positions={polyline} fill="true"></Polyline>
              </LayersControl.Overlay>
            </LayersControl>
          )
      }
    };

    return (
      <Map className="map" center={locations[0]} zoom={zoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {renderItems()}
      </Map>
    )
  }
}

export default Lmap;