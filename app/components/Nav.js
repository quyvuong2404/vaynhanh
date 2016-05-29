var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$(".button-collapse").sideNav();
	},

	render: function(){
		return (
			<div id="navigation">
	            <nav>
	                <div className="container">
	                    <div className="nav-wrapper">
	                        <a href="#" className="brand-logo"><img src="public/images/logo.jpg" alt="" /></a>
	                        <div className="social-icons">
	                            <ul> 
	                                <li><a className="icon icon-facebook btn-floating waves-effect" href="https://www.facebook.com/vohao2006" target="_blank"><i className="ion-social-facebook"></i></a></li>
	                            </ul>
	                        </div>
	                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="ion-android-menu"></i></a>
	                        
	                        <ul id="menu" className="right main-nav">
	                        	<li><a className="waves-effect waves-light" href="#home"><i className="ion-ios-home"></i></a></li>
	                            <li><a className="waves-effect waves-light" href="#faq">Vay Thế Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#describe">Vay Tín Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#testimonials">Bảo Hiểm Nhân Thọ</a></li>
	                            <li><a className="waves-effect waves-light" href="#location">Liên Hệ</a></li>
	                            <li><a href="#" className="nav-btn-download waves-effect waves-light btn red white-text md-trigger" data-modal="m-contact"><i className="ion-edit left"></i>Đăng Ký!</a></li>
	                        </ul>

	                        
	                        <ul className="side-nav" id="mobile-demo">
	                        	<li><a className="waves-effect waves-light" href="#home"><i className="ion-ios-home"></i></a></li>
	                            <li><a className="waves-effect waves-light" href="#faq">Vay Thế Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#describe">Vay Tín Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#testimonials">Bảo Hiểm Nhân Thọ</a></li>
	                            <li><a className="waves-effect waves-light" href="#location">Liên Hệ</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </nav>
	        </div>
		);
	}
});