import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 10.947511,
  lng: 106.830639
};

const App = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyBC4g8newFQx0xzoH-4hOEsCIO_SmtJlGU'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }
});

module.exports = App;