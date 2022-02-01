import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

const AnyReactComponent = () => <div><RoomIcon style={{ color: "#941111" }}/></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.916155,
      lng: 10.732828
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "100%", width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBkoIOkAZ2OHoPyihioCvlNfHb0Z1aXMOc"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.916155}
            lng={10.732828}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

