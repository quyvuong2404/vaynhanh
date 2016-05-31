var React = require('react');

module.exports = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		$.post('ContactForm.php', {
			'fullname': this.refs.fullname.value.trim(),
			'email': this.refs.email.value.trim(),
			'phone': this.refs.phone.value.trim(),
			'message': this.refs.message.value.trim(),
			'g-recaptcha-response': $('#g-recaptcha-response').val()
		}, function(data){
			console.log(data);
		}, 'json');
		setTimeout(()=>{
			$('.md-close').trigger('click');
			swal("Thành Công", "Chúc Quý Khách Một Ngày Tốt Lành", "success");
		}, 700);
	},

	render: function(){
		return(
			<div className="md-modal md-effect-1 valign-wrapper" id="m-contact">
	            <div className="md-content z-depth-2">
	                <h3>Đăng Ký Vay Vốn</h3>
	                <a className="md-close"><i className="ion-android-close"></i></a>
	                <div className="row">
	                    <form id="contactForm" className="col s12" action="" method="POST" onSubmit={this.handleSubmit}>
	                        <div className="row">
	                            <div className="input-field col s12">
	                                <input id="fullname" name="fullname" type="text" ref="fullname" />
	                                <label for="fullname">Họ Tên</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <input id="email" name="email" type="email" ref="email" />
	                                <label for="email">Email</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <input id="phone" name="phone" type="text" ref="phone" />
	                                <label for="phone">Số Điện Thoại</label>
	                            </div>
	                            <div className="input-field col s12">
	                                <textarea id="message" name="message" className="materialize-textarea" ref="message"></textarea>
	                                <label for="message">Nội Dung</label>
	                            </div>
	                            <div className="input-field col s12">
	                            	<div className="g-recaptcha" data-sitekey="6Ld1QyETAAAAAF6n8b-FgtrRAokBVdLs8dT-suWf"></div>
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