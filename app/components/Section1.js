var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<section className="section features-section sec-padded-1x" id="section1">
				<div className="container">
	                <div className="row">
	                    <div className="col s12 l8 offset-l2">
	                        <div className="center-heading" style={{marginBottom: 0}}>
	                            <h3>VAY TÍN CHẤP</h3>
	                            <span className="center-line red"></span>
	                        </div>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="col s12 m4 l4 features-section-row left" style={{marginTop: "-50px"}}>
	                        <div className="features-section-box left top one">
	                            <i className="ion-android-document z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">CHO VAY ĐẦU TƯ NHÀ XƯỞNG, NHÀ KHO, VĂN PHÒNG</h4>
	                                <ul>
	                                	<li>Đáp ứng nhu cầu vốn thanh toán tiền mua đất, thuê đất và tiền xây dựng, sửa chữa nhà xưởng, nhà kho, văn phòng (bao gồm cả nhà xưởng, nhà kho, văn phòng trong và ngoài khu công nghiệp, khu kinh tế, khu công nghệ cao).</li>
	                                </ul>
	                            </div>
	                        </div>
	                        <div className="features-section-box left two">
	                            <i className="ion-android-settings z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Latest Bootstrap</h4>
	                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
	                            </div>
	                        </div>
	                        <div className="features-section-box left three">
	                            <i className="ion-android-happy z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Retina Ready</h4>
	                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col s12 m4 l4 features-img-box wow zoomIn" data-wow-delay="0.1s">
	                        <div id="img-wrapper" className="img-wrapper">
	                            <div className="feature-device">
	                                <img src="public/images/android-cover.png" alt="" className="phone-wrapper responsive-img" />
	                                <a href="#"><img className="screen responsive-img" src="public/images/1.png" alt="" /></a>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col s12 m4 l4 features-section-row right" style={{marginTop: "-10px"}}>
	                        <div className="features-section-box right top four">
	                            <i className="ion-android-favorite-outline z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Made with love</h4>
	                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
	                            </div>
	                        </div>
	                        <div className="features-section-box right five">
	                            <i className="ion-android-chat z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Full Support</h4>
	                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
	                            </div>
	                        </div>
	                        <div className="features-section-box right six">
	                            <i className="ion-android-color-palette z-depth-1 trans-effect"></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Creative Design</h4>
	                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
			</section>
		);
	}
});