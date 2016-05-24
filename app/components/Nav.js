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
	                        <a href="#" className="brand-logo"><img src="public/images/android.png" alt="" /></a>
	                        <div className="social-icons">
	                            <ul> 
	                                <li><a className="icon icon-facebook btn-floating waves-effect" href="#"><i className="ion-social-facebook"></i></a></li>
	                            </ul>
	                        </div>
	                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="ion-android-menu"></i></a>
	                        
	                        <ul id="menu" className="right main-nav">
	                        	<li data-menuanchor="page0"><a className="waves-effect waves-light" href="#page0"><i className="ion-ios-home"></i></a></li>
	                            <li data-menuanchor="page1"><a className="waves-effect waves-light" href="#page1">Vay Thế Chấp</a></li>
	                            <li data-menuanchor="page2"><a className="waves-effect waves-light" href="#page2">Vay Tín Chấp</a></li>
	                            <li data-menuanchor="page5"><a className="waves-effect waves-light" href="#page5">Liên Hệ</a></li>
	                            <li data-menuanchor="page6"><a className="waves-effect waves-light" href="#page6">Contact</a></li>
	                            <li><a href="#" className="nav-btn-download waves-effect waves-light btn red white-text"><i className="ion-android-cart left"></i>Đăng Ký!</a></li>
	                        </ul>

	                        
	                        <ul className="side-nav" id="mobile-demo">
	                            <li><a className="waves-effect waves-light" href="#page0">Vay Thế Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#page1">Vay Tín Chấp</a></li>
	                            <li><a className="waves-effect waves-light" href="#page4">Địa Điểm</a></li>
	                            <li><a href="#" className="nav-btn-download waves-effect waves-light btn red white-text"><i className="ion-android-cart left"></i>Đăng Ký!</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </nav>
	        </div>
		);
	}
});