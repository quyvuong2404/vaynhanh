var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$('ul.tabs').tabs();
	},

	render: function(){
		return(
			<section id="section3" className="section moveDown describe-section z-depth-1">
	            <div className="overlay-blue-shade"></div>
		            <div className="sec-padded-1x">
		                <div className="container">
		                    <div className="row" style={{marginBottom:0}}>
		                        <div className="col s12 l8 offset-l2">
		                            <div className="center-heading">
		                                <h3 className="white-text">How We Build it</h3>
		                                <span className="center-line red"></span>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="row">
		                        <div className="col s12">
		                            <ul className="tabs z-depth-2">
		                                <li className="tab col s3"><a href="#tab-video" className="active">Video Preview</a></li>
		                                <li className="tab col s3"><a href="#tab-heart">The Heart</a></li>
		                                <li className="tab col s3"><a href="#tab-compare">Compare</a></li>
		                            </ul>
		                        </div>
		                        <div id="tab-video" className="col s12 tab-content wow fadeIn">
		                            <div className="col s12 m10 offset-m1">
		                                <div className="video-box">
		                                    <img src="public/images/bg-screen-4.png" alt="" className="responsive-img center-block" />
		                                    <button className="video-trigger btn-floating btn-large waves-effect waves-light red md-trigger" data-modal="m-video"><i className="ion-ios-play"></i></button>
		                                </div>
		                            </div>
		                        </div>
		                        <div id="tab-heart" className="col s12 tab-content wow fadeIn">
		                            <div className="col s12 m6 l6 center">
		                                <img src="public/images/bg-screen-1.png" alt="" className="responsive-img" />
		                            </div>
		                            <div className="col s12 m6 l6">
		                                <h3>The Heart</h3>
		                                <p>Duis posuere auctor erat nec lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum. Pellentesque vestibulum, sem vitae sollicitudin scelerisque, tortor urna luctus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, sem vitae sollicitudin scelerisque.</p>
		                                <ul>
		                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed in voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
		                                    <li>Pellentesque vestibulum. Pellentesque vestibulum, sem vitae sollicitudin scelerisque, tortor urna luctus metus. Lorem ipsum dolor sit ame</li>
		                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed in voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
		                                    <li>Dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum. Pellentesque vestibulum, sem vitae sollicitudin scelerisque</li>
		                                </ul>
		                            </div>
		                        </div>
		                        <div id="tab-compare" className="col s12 tab-content wow fadeIn">
		                            <div className="col s12 m6 l6">
		                                <h3>Your Benefits</h3>
		                                <p>Duis posuere auctor erat nec lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum. Pellentesque vestibulum, sem vitae sollicitudin scelerisque, tortor urna luctus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, sem vitae sollicitudin scelerisque.</p>
		                                <p>Eros luctus eu id eu metus potenti eros litora, a congue convallis iaculis sollicitudin nisi nam elementum, volutpat himenaeos egestas etiam ac eu molestie.</p>
		                                <div className="progress-box">
		                                    <span>Feature 1</span>
		                                    <div className="progress z-depth-1">
		                                        <div className="determinate wow slideInLeft feature-1"></div>
		                                    </div>
		                                </div>
		                                <div className="progress-box">
		                                    <span>Feature 2</span>
		                                    <div className="progress z-depth-1">
		                                        <div className="determinate wow slideInLeft feature-2"></div>
		                                    </div>
		                                </div>
		                                <div className="progress-box">
		                                    <span>Feature 3</span>
		                                    <div className="progress z-depth-1">
		                                        <div className="determinate wow slideInLeft feature-3"></div>
		                                    </div>
		                                </div>
		                                <div className="progress-box">
		                                    <span>Feature 4</span>
		                                    <div className="progress z-depth-1">
		                                        <div className="determinate wow slideInLeft feature-4"></div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col s12 m6 l6 center">
		                                <img src="public/images/bg-screen-3.png" alt="" className="responsive-img" />
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
	        </section>
		);
	}
});