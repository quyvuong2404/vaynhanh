var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="md-modal md-effect-1 valign-wrapper" id="m-contact">
	            <div className="md-content z-depth-2">
	                <h3>Đăng Ký Vay Vốn</h3>
	                <a className="md-close"><i className="ion-android-close"></i></a>
	                <div className="row">
	                    <form id="contactForm" className="col s12" action="" method="POST">
	                        <div className="row">
	                            <div className="input-field col s12">
	                                <input id="fullname" name="fullname" type="text" />
	                                <label for="fullname">Họ Tên</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <input id="email" name="email" type="email" />
	                                <label for="email">Email</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <input id="phone" name="phone" type="text" />
	                                <label for="phone">Số Điện Thoại</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <textarea id="message" name="message" className="materialize-textarea"></textarea>
	                                <label for="message">Nội Dung</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <input className="waves-effect waves-light btn red center" type="submit" value="Gửi" />
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>
	        </div>
        );
	}
});