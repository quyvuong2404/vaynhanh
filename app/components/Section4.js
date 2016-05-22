var React = require('react');
// var Gmap = require('./Gmap');

import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const Gmap = React.createClass({

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
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
});

module.exports = React.createClass({
	componentDidMount: function(){
		$('#map').css('height', $('.address-block').outerHeight() + 'px');
	},

	render: function(){
		return (
			<section id="section4" className="section moveDown">
	            <div id="location" className="location-section">
	            	<div className="container-fluid">
		                <div className="row btm-mrgn-0">
		                    <div className="col s12 m6 l6 address-block">
		                        <div className="center-heading left-align">
		                            <h3>Thông Tin Liên Hệ</h3>
		                            <span className="center-line red"></span>
		                            <p>Quý khách có thắc mắc xin hãy liên hệ với nhân viên để được tư vấn.</p>
		                        </div>
		                        <ul>
		                            <li><p>1185 Park Ave #8I25 A</p>
		                                <p>Near Church Road, Upper East Side</p>
		                                <p>Syracuse, New York, NY</p>
		                            </li>
		                            <li><p>+123 4567890</p></li>
		                            <li><p>lol@rolf.com</p></li>
		                        </ul>
		                        <a className="modal-trigger waves-effect waves-light btn red center md-trigger" data-modal="m-contact">Contact Us</a>
		                    </div>
		                    <div className="col s12 m6 l6 map-block">
		                        <div id="map"><Gmap /></div>
		                    </div>
		                </div>
		            </div>
	            </div>
	        </section>
		);
	}
});