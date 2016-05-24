var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<section id="section5" className="section home-section">
	            <div className="overlay-shade"></div>
	            <div className="container">
	                <div className="row btm-mrgn-0">
	                    <div className="col s12 m7 l7 hero-text">
	                        <h1 className="white-text">Showcase Your App</h1>
	                        <h2 className="white-text">In <span className="type"></span> Way</h2>
	                        <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit quas harum. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta. Cras mattis consectetur purus sit amet fermentum.</p>
	                        <div className="download-button scroll-to">
	                            <a href="#" className="btn-download waves-effect btn"></a>
	                            <a href="#overview" className="btn-link white-text btn-floating waves-effect waves-light red"><i className="ion-android-arrow-down"></i></a>
	                        </div>
	                    </div>
	                    <div className="col s12 m5 l4 offset-l1 wow zoomIn" data-wow-delay="0.2s">
	                        <div className="android-wrapper trans-effect">
	                            <div className="android-inner trans-effect">
	                                <div className="hero-slider">
	                                    <ul className="slides">
	                                        <li><img src="public/images/1.png" alt="" /></li>
	                                        <li><img src="public/images/2.png" alt="" /></li>
	                                        <li><img src="public/images/3.png" alt="" /></li>
	                                        <li><img src="public/images/4.png" alt="" /></li>
	                                        <li><img src="public/images/5.png" alt="" /></li>
	                                        <li><img src="public/images/6.png" alt="" /></li>
	                                        <li><img src="public/images/7.png" alt="" /></li>
	                                        <li><img src="public/images/8.png" alt="" /></li>
	                                        <li><img src="public/images/9.png" alt="" /></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
		);
	}
});