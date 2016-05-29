var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<section className="overview-section sec-padded-1x" id="overview">
				<div className="container">
	                <div className="row">
	                    <div className="col s12 l8 offset-l2">
	                        <div className="center-heading">
	                            <h3>THẾ CHẤP</h3>
	                            <span className="center-line red"></span>
	                        </div>
	                    </div>
	                </div>
	                <div className="row center">
	                    <div className="col s12 m6 l3">
	                        <div className="card-panel overview-section-box wow fadeIn" data-wow-delay="0.1s">
	                            <i className="ion-android-color-palette trans-effect"></i>
	                            <h3>CHO VAY BỔ SUNG VỐN LƯU ĐỘNG</h3>
	                            <p>
	                                Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta.
	                            </p>
	                        </div>
	                    </div>
	                    <div className="col s12 m6 l3">
	                        <div className="card-panel overview-section-box wow fadeIn" data-wow-delay="0.2s">
	                            <i className="ion-android-desktop trans-effect"></i>
	                            <h3>CHO VAY ĐẦU TƯ MÁY MÓC THIẾT BỊ</h3>
	                            <p>
	                                Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta.
	                            </p>
	                        </div>
	                    </div>
	                    <div className="col s12 m6 l3">
	                        <div className="card-panel overview-section-box wow fadeIn" data-wow-delay="0.3s">
	                            <i className="ion-android-list trans-effect"></i>
	                            <h3>CHO VAY ĐẦU TƯ NHÀ XƯỞNG, NHÀ KHO, VĂN

PHÒNG</h3>
	                            <p>
	                                Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta.
	                            </p>
	                        </div>
	                    </div>
	                    <div className="col s12 m6 l3">
	                        <div className="card-panel overview-section-box wow fadeIn" data-wow-delay="0.4s">
	                            <i className="ion-android-star-outline trans-effect"></i>
	                            <h3>Pixel Perfect</h3>
	                            <p>
	                                Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta.
	                            </p>
	                        </div>
	                    </div>
	                </div>
	            </div>
			</section>
		);
	}
});