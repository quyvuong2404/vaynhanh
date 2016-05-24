var React = require('react');
var Gmap = require('./Gmap');

module.exports = React.createClass({
	componentDidMount: function(){
		$('#map').css('height', $('.address-block').outerHeight() + 'px');
	},

	render: function(){
		return (
			<section id="section5" className="section moveDown">
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
		                        <a className="modal-trigger waves-effect waves-light btn red center md-trigger" data-modal="m-contact">Đăng Ký</a>
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