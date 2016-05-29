var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$(".hero-slider").flexslider({
	        directionNav: true,
	        controlNav: false,
	        prevText: "<i class='ion-ios-arrow-left'></i>",
	        nextText: "<i class='ion-ios-arrow-right'></i>"
	    });

	    $(".type").typed({
	        strings: ["Lãi Suất Ưu Đãi", "Không Cần Thế Chấp", "Uy Tín", "Nhanh Chóng"],
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        loopCount: false
	    });
	},

	render: function(){
		return(
			<section id="home" className="home-section">
				<div className="overlay-green-shade"></div>
	            <div className="container sec-padded-3x">
	                <div className="row btm-mrgn-0" style={{marginBottom:0}}>
	                    <div className="col s12 m7 l7 hero-text">
	                        <h1 className="white-text">Nhanh Tay Vay Nhanh</h1>
	                        <h2 className="white-text"><span className="type"></span></h2>
	                        <p className="white-text">Quý khách đang có nhu cầu vốn để kinh doanh, tiêu dùng như mua sắm, thanh toán tiền điện, nước hay mua xe trả góp. Chúng tôi hỗ trợ cho vay tiêu dùng không có tài sản, bảo đảm là sản phẩm tín dụng không yêu cầu tài sản, bảo đảm dành cho các khách hàng cá nhân có thu nhập thường xuyên, ổn định… nhằm đáp ứng nhu cầu tiêu dùng đa dạng của bản thân và gia đình.</p>
	                    </div>
	                    <div className="col s12 m5 l4 offset-l1 wow zoomIn" data-wow-delay="0.2s">
	                    	<div className="android-wrapper trans-effect">
		                        <div className="android-inner trans-effect">
	                                <div className="hero-slider">
	                                    <ul className="slides">
	                                        <li><img src="public/images/slide1.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide2.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide3.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide4.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide5.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide6.jpg" alt="" /></li>
	                                        <li><img src="public/images/slide7.jpg" alt="" /></li>
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